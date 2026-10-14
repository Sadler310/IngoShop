const { createApp } = Vue;

createApp({
  data() {
    return {
      activeCategory: 'Все',
      searchQuery: '',
      isDrawerOpen: false,
      isCartOpen: false,
      selectedProduct: null,
      orderCompleted: false,
      lastOrderNumber: '',
      
      itemForm: {
        size: '',
        color: '',
        qty: 1
      },

      orderForm: {
        fio: '',
        email: '',
        phone: '',
        address: ''
      },

      categories: [
        'Все',
        'Одежда',
        'Посуда и термосы',
        'Офис и гаджеты',
        'Путешествия и авто',
        'Аксессуары'
      ],

      products: [
        {
          id: 1,
          code: 'ING-101',
          title: 'Толстовка с капюшоном Urban с начесом',
          category: 'Одежда',
          description: 'Теплый брендированный худи с лаконичным логотипом Ингосстрах.',
          details: 'Плотный футер с начесом, мягкий карман-кенгуру. При заказе указывается размерная сетка.',
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['Серый меланж', 'Фирменный синий'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>'
        },
        {
          id: 2,
          code: 'ING-102',
          title: 'Футболка Imperial 190',
          category: 'Одежда',
          description: 'Классическая футболка из 100% гребенного хлопка.',
          details: 'Плотность 190 г/м², воротник с добавлением эластана, усиленный шов на горловине.',
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['Фирменный синий', 'Белый', 'Серый'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>'
        },
        {
          id: 3,
          code: 'ING-103',
          title: 'Ветровка из нейлона Surf 210',
          category: 'Одежда',
          description: 'Легкая влагостойкая ветровка со скрытым капюшоном.',
          details: 'Водоотталкивающее покрытие, манжеты на резинке, боковые карманы на молнии.',
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['Фирменный синий'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>'
        },
        {
          id: 4,
          code: 'ING-104',
          title: 'Дождевик унисекс Rainman',
          category: 'Одежда',
          description: 'Удлиненный защитный дождевик прямого силуэта.',
          details: 'Герметичные швы, глубокий регулируемый капюшон, застежки-кнопки.',
          sizes: ['S', 'M', 'L', 'XL', 'XXL'],
          colors: ['Фирменный синий'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"/></svg>'
        },
        {
          id: 5,
          code: 'ING-105',
          title: 'Бейсболка классическая 11K',
          category: 'Аксессуары',
          description: 'Хлопковая кепка с вышивкой логотипа и регулировкой размера.',
          details: '6 клиньев, металлический фиксатор сзади, контрастный кант козырька.',
          sizes: ['Универсальный'],
          colors: ['Фирменный синий'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"/></svg>'
        },
        {
          id: 6,
          code: 'ING-201',
          title: 'Бутылка для воды «Фитнес» Soft Touch',
          category: 'Посуда и термосы',
          description: 'Эргономичная бутылка объемом 700 мл с силиконовой петлей.',
          details: 'Матовое soft-touch покрытие, надежный карабин для крепления.',
          sizes: ['700 мл'],
          colors: ['Фирменный синий', 'Белый'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3"/></svg>'
        },
        {
          id: 7,
          code: 'ING-202',
          title: 'Термос с LED-индикатором температуры',
          category: 'Посуда и термосы',
          description: 'Вакуумный термос 500 мл из стали с сенсорной крышкой.',
          details: 'Отображает температуру напитка при касании крышки. Двойные стенки.',
          sizes: ['500 мл'],
          colors: ['Белый с синим логотипом', 'Черный'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        },
        {
          id: 8,
          code: 'ING-203',
          title: 'Кружка с пробковым дном и крышкой',
          category: 'Посуда и термосы',
          description: 'Керамическая эко-кружка 350 мл с пробковой подставкой.',
          details: 'Защищает поверхность стола от нагрева и царапин. Крышка с клапаном.',
          sizes: ['350 мл'],
          colors: ['Белый с сердцем', 'Белый с надписью'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        },
        {
          id: 9,
          code: 'ING-301',
          title: 'Беспроводная зарядная станция 3-в-1',
          category: 'Офис и гаджеты',
          description: 'Станция с подогревом кружки и быстрой зарядкой гаджетов.',
          details: 'Беспроводная Qi-зарядка 15W, индикация рабочего состояния, кабель Type-C.',
          sizes: ['Стандарт'],
          colors: ['Белый'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>'
        },
        {
          id: 10,
          code: 'ING-302',
          title: 'Внешний аккумулятор 10 000 mAh Luce',
          category: 'Офис и гаджеты',
          description: 'Пауэрбанк со светящимся логотипом при встряхивании.',
          details: 'Li-Pol аккумулятор, выходы USB и Type-C, индикация уровня заряда.',
          sizes: ['10 000 mAh'],
          colors: ['Белый'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>'
        },
        {
          id: 11,
          code: 'ING-401',
          title: 'Чемодан «Уверенность в поездке»',
          category: 'Путешествия и авто',
          description: 'Ударопрочный чемодан для ручной клади с колесами 360°.',
          details: 'Размер: 49х35х24 см. Замок TSA, телескопическая ручка.',
          sizes: ['Кабинный (S)'],
          colors: ['Белый с принтом'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>'
        },
        {
          id: 12,
          code: 'ING-402',
          title: 'Саквояж-органайзер в багажник',
          category: 'Путешествия и авто',
          description: 'Складной кофр из экокожи с фирменной нашивкой.',
          details: 'Усиленное дно, внутренние перегородки, ручки для переноски.',
          sizes: ['Стандарт'],
          colors: ['Фирменный синий'],
          iconSvg: '<svg class="w-20 h-20 stroke-[1.2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5"/></svg>'
        }
      ],

      cart: []
    };
  },

  computed: {
    filteredProducts() {
      return this.products.filter(item => {
        const matchesCategory = this.activeCategory === 'Все' || item.category === this.activeCategory;
        const matchesSearch = item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                              item.code.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    },

    cartTotalCount() {
      return this.cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
    }
  },

  created() {
    const savedCart = localStorage.getItem('ingo_cart_items');
    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart);
      } catch (e) {
        this.cart = [];
      }
    }
  },

  methods: {
    getCategoryCount(cat) {
      if (cat === 'Все') return this.products.length;
      return this.products.filter(p => p.category === cat).length;
    },

    openQuickView(product) {
      this.selectedProduct = product;
      this.itemForm = {
        size: product.sizes && product.sizes.length ? product.sizes[0] : '',
        color: product.colors && product.colors.length ? product.colors[0] : '',
        qty: 1
      };
    },

    decreaseQty() {
      if (this.itemForm.qty > 1) {
        this.itemForm.qty--;
      }
    },

    addToCart() {
      if (!this.selectedProduct) return;

      const existingIndex = this.cart.findIndex(i => 
        i.id === this.selectedProduct.id && 
        i.size === this.itemForm.size && 
        i.color === this.itemForm.color
      );

      if (existingIndex > -1) {
        this.cart[existingIndex].qty += Number(this.itemForm.qty) || 1;
      } else {
        this.cart.push({
          id: this.selectedProduct.id,
          code: this.selectedProduct.code,
          title: this.selectedProduct.title,
          size: this.itemForm.size,
          color: this.itemForm.color,
          qty: Number(this.itemForm.qty) || 1
        });
      }

      this.saveCart();
      this.selectedProduct = null;
      this.isCartOpen = true;
    },

    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.saveCart();
    },

    saveCart() {
      localStorage.setItem('ingo_cart_items', JSON.stringify(this.cart));
    },

    submitOrder() {
      this.lastOrderNumber = 'ING-2026-' + Math.floor(1000 + Math.random() * 9000);
      this.cart = [];
      this.saveCart();
      this.orderForm = { fio: '', email: '', phone: '', address: '' };
      this.isCartOpen = false;
      this.orderCompleted = true;
    }
  }
}).mount('#app');
