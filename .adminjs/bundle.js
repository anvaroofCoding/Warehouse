(function (designSystem, adminjs, react, reactRouterDom, reactRouter) {
	'use strict';

	const shellStyle = {
	  background: 'linear-gradient(135deg, #f8fbff 0%, #eef6ff 45%, #f8fafc 100%)'
	};
	const cardStyle$5 = {
	  border: '1px solid #e2e8f0',
	  backdropFilter: 'blur(6px)'
	};
	const fieldInputStyle = {
	  width: '100%',
	  minHeight: '42px'
	};
	const passwordWrapStyle = {
	  position: 'relative'
	};
	const passwordToggleStyle = {
	  position: 'absolute',
	  top: '50%',
	  right: '8px',
	  transform: 'translateY(-50%)',
	  display: 'inline-flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  width: '34px',
	  height: '34px',
	  border: 'none',
	  background: 'transparent',
	  color: '#64748b',
	  borderRadius: '999px',
	  cursor: 'pointer',
	  padding: 0
	};
	const EyeIcon = ({
	  open
	}) => /*#__PURE__*/React.createElement("svg", {
	  width: "18",
	  height: "18",
	  viewBox: "0 0 18 18",
	  fill: "none",
	  xmlns: "http://www.w3.org/2000/svg"
	}, /*#__PURE__*/React.createElement("path", {
	  d: "M1.5 9C2.7 6.4 5.3 4.5 9 4.5C12.7 4.5 15.3 6.4 16.5 9C15.3 11.6 12.7 13.5 9 13.5C5.3 13.5 2.7 11.6 1.5 9Z",
	  stroke: "currentColor",
	  strokeWidth: "1.5",
	  strokeLinecap: "round",
	  strokeLinejoin: "round"
	}), /*#__PURE__*/React.createElement("circle", {
	  cx: "9",
	  cy: "9",
	  r: "2.2",
	  stroke: "currentColor",
	  strokeWidth: "1.5"
	}), open ? null : /*#__PURE__*/React.createElement("path", {
	  d: "M3 15L15 3",
	  stroke: "currentColor",
	  strokeWidth: "1.5",
	  strokeLinecap: "round"
	}));
	const resolveMessage = (message, translateMessage) => {
	  if (!message) {
	    return '';
	  }
	  return message.split(' ').length > 1 ? message : translateMessage(message);
	};
	const Login = () => {
	  const props = window.__APP_STATE__ || {};
	  const {
	    action,
	    errorMessage: message
	  } = props;
	  const {
	    translateComponent,
	    translateMessage
	  } = adminjs.useTranslation();
	  const [showPassword, setShowPassword] = react.useState(false);
	  const errorMessage = resolveMessage(message, translateMessage);
	  const emailLabel = translateComponent('Login.properties.email');
	  const passwordLabel = translateComponent('Login.properties.password');
	  const passwordToggleLabel = translateComponent(showPassword ? 'Login.hidePassword' : 'Login.showPassword');
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    variant: "grey",
	    display: "flex",
	    alignItems: "center",
	    justifyContent: "center",
	    minHeight: "100vh",
	    p: "xl",
	    style: shellStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    as: "form",
	    action: action,
	    method: "POST",
	    bg: "white",
	    p: "x3",
	    width: ['100%', '520px'],
	    borderRadius: "xl",
	    boxShadow: "login",
	    style: cardStyle$5
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    mb: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    as: "span",
	    color: "primary100",
	    fontWeight: "bold",
	    p: "sm",
	    style: {
	      display: 'inline-flex',
	      borderRadius: '999px',
	      background: '#eff6ff'
	    }
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, {
	    mt: "lg"
	  }, translateComponent('Login.welcomeHeader')), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "default",
	    color: "grey100"
	  }, translateComponent('Login.welcomeMessage'))), errorMessage ? /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    my: "lg",
	    message: errorMessage,
	    variant: "danger"
	  }) : null, /*#__PURE__*/React.createElement(designSystem.FormGroup, null, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: true
	  }, emailLabel), /*#__PURE__*/React.createElement(designSystem.Input, {
	    name: "email",
	    autoFocus: true,
	    autoComplete: "username",
	    placeholder: emailLabel,
	    required: true,
	    style: fieldInputStyle
	  })), /*#__PURE__*/React.createElement(designSystem.FormGroup, null, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: true
	  }, passwordLabel), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: passwordWrapStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Input, {
	    type: showPassword ? 'text' : 'password',
	    name: "password",
	    placeholder: passwordLabel,
	    autoComplete: "current-password",
	    required: true,
	    style: {
	      ...fieldInputStyle,
	      paddingRight: '46px'
	    }
	  }), /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: () => setShowPassword(currentValue => !currentValue),
	    style: passwordToggleStyle,
	    "aria-label": passwordToggleLabel,
	    title: passwordToggleLabel,
	    "aria-pressed": showPassword
	  }, /*#__PURE__*/React.createElement(EyeIcon, {
	    open: showPassword
	  })))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    variant: "contained",
	    type: "submit",
	    style: {
	      width: '100%',
	      justifyContent: 'center'
	    }
	  }, translateComponent('Login.loginButton')))));
	};

	const SidebarBranding = () => {
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    as: reactRouterDom.Link,
	    to: "/admin",
	    display: "block",
	    px: "lg",
	    pt: "lg",
	    pb: "xl",
	    style: {
	      textDecoration: 'none'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    alignItems: "center",
	    p: "lg",
	    style: {
	      gap: '12px',
	      borderRadius: '16px',
	      background: 'linear-gradient(135deg, #163d7a 0%, #2563eb 100%)',
	      boxShadow: '0 12px 28px rgba(37, 99, 235, 0.22)',
	      textDecoration: 'none'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    width: "44px",
	    height: "44px",
	    display: "flex",
	    alignItems: "center",
	    justifyContent: "center",
	    style: {
	      flexShrink: 0,
	      borderRadius: '12px',
	      background: 'rgba(255, 255, 255, 0.14)',
	      border: '1px solid rgba(255, 255, 255, 0.22)'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "Archive",
	    size: 24,
	    color: "white"
	  })), /*#__PURE__*/React.createElement(designSystem.Box, {
	    flex: "1"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    as: "span",
	    display: "block",
	    fontWeight: "900",
	    fontSize: "xl",
	    color: "white"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    as: "span",
	    display: "block",
	    mt: "xs",
	    fontSize: "sm",
	    color: "white",
	    style: {
	      opacity: 0.82
	    }
	  }, "Omborxona nazorati"))));
	};

	const TopBar = ({
	  toggleSidebar
	}) => {
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const profileLink = currentAdmin?.id ? `/admin/resources/User/records/${currentAdmin.id}/show` : '/admin';
	  const {
	    i18n: {
	      language,
	      options: {
	        supportedLngs
	      },
	      changeLanguage
	    },
	    translateButton,
	    translateComponent
	  } = adminjs.useTranslation();
	  const availableLanguages = react.useMemo(() => supportedLngs ? supportedLngs.filter(lang => lang !== 'cimode') : [], [supportedLngs]);
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    borderBottom: "default",
	    display: "flex",
	    alignItems: "center",
	    justifyContent: "space-between",
	    flexWrap: "wrap",
	    gap: "lg",
	    px: "lg",
	    py: "default",
	    style: {
	      rowGap: '12px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    alignItems: "center",
	    gap: "default"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    py: "sm",
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "Menu",
	    size: 24
	  }))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    alignItems: "center",
	    flexWrap: "wrap",
	    gap: "xl",
	    style: {
	      columnGap: '16px',
	      rowGap: '12px'
	    }
	  }, availableLanguages.length > 1 ? /*#__PURE__*/React.createElement(designSystem.DropDown, null, /*#__PURE__*/React.createElement(designSystem.DropDownTrigger, null, /*#__PURE__*/React.createElement(designSystem.Button, {
	    color: "text"
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "Globe"
	  }), translateComponent(`LanguageSelector.availableLanguages.${language}`, {
	    defaultValue: language
	  }))), /*#__PURE__*/React.createElement(designSystem.DropDownMenu, null, availableLanguages.map(lang => /*#__PURE__*/React.createElement(designSystem.DropDownItem, {
	    key: lang,
	    onClick: () => changeLanguage(lang)
	  }, translateComponent(`LanguageSelector.availableLanguages.${lang}`, {
	    defaultValue: lang
	  }))))) : null, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: profileLink,
	    variant: "outlined",
	    style: {
	      minWidth: '148px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "User",
	    mr: "sm"
	  }), translateComponent('TopBar.myProfile')), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/logout",
	    variant: "outlined",
	    style: {
	      minWidth: '120px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "LogOut",
	    mr: "sm"
	  }), translateButton('logout'))));
	};

	const sidebarPages = [{
	  id: 'mening-profilim',
	  label: 'Mening profilim',
	  icon: 'User',
	  shortUz: 'Shaxsiy ma’lumotlaringizni ko‘rish va tahrirlash sahifasi.',
	  shortRu: 'Страница для просмотра и редактирования личных данных.'
	}, {
	  id: 'xarid-uchun-ariza',
	  label: 'Xarid',
	  icon: 'ShoppingCart',
	  shortUz: 'Bir nechta foydalanuvchini tanlab, izoh va tovarlar bilan ariza yaratish bo‘limi.',
	  shortRu: 'Раздел для создания заявки с выбором нескольких пользователей, комментарием и товарами.',
	  resourceLink: '/admin/resources/PurchaseRequest'
	}, {
	  id: 'arizalarni-tasdiqlash',
	  label: 'Arizalarni tasdiqlash',
	  icon: 'CheckCircle',
	  shortUz: 'Kiritilgan arizalarni ko‘rib chiqish sahifasi.',
	  shortRu: 'Страница для просмотра и подтверждения заявок.'
	}, {
	  id: 'foydalanuvchilar',
	  label: 'Foydalanuvchilar',
	  icon: 'User',
	  shortUz: 'Tizim foydalanuvchilari bilan ishlash bo‘limi.',
	  shortRu: 'Раздел для работы с пользователями системы.',
	  resourceLink: '/admin/resources/User'
	}, {
	  id: 'chiqim-qilish',
	  label: 'Chiqim qilish',
	  icon: 'Send',
	  shortUz: 'Mahsulot chiqimini rasmiylashtirish sahifasi.',
	  shortRu: 'Страница оформления расхода товаров.'
	}, {
	  id: 'transfer',
	  label: 'Transfer',
	  icon: 'Repeat',
	  shortUz: 'Omborlar o‘rtasida ko‘chirish uchun tayyor sahifa.',
	  shortRu: 'Готовая страница для перемещения между складами.'
	}, {
	  id: 'omborlar',
	  label: 'Omborlar',
	  icon: 'Archive',
	  shortUz: 'Barcha omborlar ro‘yxati uchun bo‘lim.',
	  shortRu: 'Раздел для списка всех складов.'
	}, {
	  id: 'mening-omborim',
	  label: 'Mening omborim',
	  icon: 'Package',
	  shortUz: 'Shaxsiy ombor ma’lumotlari uchun tayyor sahifa.',
	  shortRu: 'Готовая страница для данных моего склада.'
	}, {
	  id: 'inventarizatsiya',
	  label: 'Inventarizatsiya',
	  icon: 'Tool',
	  shortUz: 'Inventarizatsiya jarayoni uchun tayyor bo‘lim.',
	  shortRu: 'Готовый раздел для инвентаризации.'
	}, {
	  id: 'boshqa-omborlar',
	  label: 'Boshqa omborlar',
	  icon: 'Layers',
	  shortUz: 'Boshqa omborlar bilan ishlash sahifasi.',
	  shortRu: 'Страница для работы с другими складами.'
	}, {
	  id: 'buyurtma-qilish',
	  label: 'Buyurtma qilish',
	  icon: 'ShoppingBag',
	  shortUz: 'Yangi buyurtma yaratish uchun sahifa.',
	  shortRu: 'Страница для создания нового заказа.',
	  resourceLink: '/admin/resources/PurchaseOrderWorkspace'
	}, {
	  id: 'buyurtmani-jonatish',
	  label: 'Buyurtmani jo‘natish',
	  icon: 'Truck',
	  shortUz: 'Buyurtmalarni jo‘natish uchun tayyor sahifa.',
	  shortRu: 'Готовая страница для отправки заказов.'
	}];
	const pageMap = Object.fromEntries(sidebarPages.map(page => [page.id, page]));
	sidebarPages.filter(page => page.id !== 'foydalanuvchilar' && page.id !== 'mening-profilim' && page.id !== 'xarid-uchun-ariza' && page.id !== 'arizalarni-tasdiqlash' && page.id !== 'buyurtma-qilish' && page.id !== 'buyurtmani-jonatish' && page.id !== 'omborlar');

	const Dashboard = () => {
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const visiblePages = sidebarPages.filter(page => {
	    if (page.id === 'mening-profilim') {
	      return false;
	    }
	    if (page.id === 'foydalanuvchilar' && !['admin', 'monitoring'].includes(currentAdmin?.role)) {
	      return false;
	    }
	    if (page.id === 'buyurtma-qilish' && !['admin', 'monitoring', 'sotib_oluvchi'].includes(currentAdmin?.role)) {
	      return false;
	    }
	    return true;
	  });
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    variant: "grey"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl",
	    boxShadow: "card"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, "Omborxona nazorati uchun asosiy bo\u2018limlar"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "default",
	    mb: "lg"
	  }, "Siz tizimga", ' ', /*#__PURE__*/React.createElement("strong", null, currentAdmin?.title || currentAdmin?.username), ' ', "sifatida kirgansiz. Rolingiz: ", /*#__PURE__*/React.createElement("strong", null, currentAdmin?.role)), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    flexWrap: "wrap",
	    gap: "default",
	    mb: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: `/admin/resources/User/records/${currentAdmin?.id}/edit`
	  }, "Profilni tahrirlash")), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "grid",
	    gridTemplateColumns: ['1fr', '1fr 1fr'],
	    gap: "lg"
	  }, visiblePages.map(page => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: page.id,
	    bg: "filterBg",
	    border: "1px solid #E5E7EB",
	    borderRadius: "xl",
	    p: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, page.label), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey100",
	    mb: "lg"
	  }, page.shortUz), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: page.resourceLink || `/admin/pages/${page.id}`,
	    variant: "outlined"
	  }, "Bo\u2018limni ochish"))))));
	};

	const PlaceholderPage = () => {
	  const {
	    pageName
	  } = reactRouter.useParams();
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const page = pageMap[pageName] || {
	    label: 'Sahifa',
	    shortUz: 'Bu sahifa hozircha tayyor holatda turibdi.',
	    shortRu: 'Эта страница пока подготовлена в черновом виде.'
	  };
	  const profileShowLink = currentAdmin?.id ? `/admin/resources/User/records/${currentAdmin.id}/show` : '/admin';
	  const profileEditLink = currentAdmin?.id ? `/admin/resources/User/records/${currentAdmin.id}/edit` : '/admin';
	  if (pageName === 'mening-profilim') {
	    return /*#__PURE__*/React.createElement(designSystem.Box, {
	      variant: "grey"
	    }, /*#__PURE__*/React.createElement(designSystem.Box, {
	      bg: "white",
	      p: "xxl",
	      borderRadius: "xl",
	      boxShadow: "card"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, {
	      color: "primary100",
	      fontWeight: "bold",
	      mb: "default"
	    }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, "Mening profilim"), /*#__PURE__*/React.createElement(designSystem.Text, {
	      mt: "default",
	      mb: "xl"
	    }, "Siz hozir", ' ', /*#__PURE__*/React.createElement("strong", null, currentAdmin?.title || currentAdmin?.username), ' ', "profilida turibsiz. Bu sahifada ma\u2019lumotlaringizni ko\u2018rishingiz va tahrirlashingiz mumkin."), /*#__PURE__*/React.createElement(designSystem.Box, {
	      display: "grid",
	      gridTemplateColumns: ['1fr', '1fr 1fr'],
	      gap: "lg"
	    }, /*#__PURE__*/React.createElement(designSystem.Box, {
	      p: "xl",
	      bg: "filterBg",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, {
	      fontWeight: "bold",
	      mb: "sm"
	    }, "Foydalanuvchi nomi"), /*#__PURE__*/React.createElement(designSystem.Text, null, currentAdmin?.username)), /*#__PURE__*/React.createElement(designSystem.Box, {
	      p: "xl",
	      bg: "filterBg",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, {
	      fontWeight: "bold",
	      mb: "sm"
	    }, "Ism va familya"), /*#__PURE__*/React.createElement(designSystem.Text, null, currentAdmin?.firstName, " ", currentAdmin?.lastName)), /*#__PURE__*/React.createElement(designSystem.Box, {
	      p: "xl",
	      bg: "filterBg",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, {
	      fontWeight: "bold",
	      mb: "sm"
	    }, "Tuzilma"), /*#__PURE__*/React.createElement(designSystem.Text, null, currentAdmin?.organizationName)), /*#__PURE__*/React.createElement(designSystem.Box, {
	      p: "xl",
	      bg: "filterBg",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, {
	      fontWeight: "bold",
	      mb: "sm"
	    }, "Telefon va rol"), /*#__PURE__*/React.createElement(designSystem.Text, null, currentAdmin?.phoneNumber), /*#__PURE__*/React.createElement(designSystem.Text, {
	      mt: "sm"
	    }, "Rol: ", currentAdmin?.role))), /*#__PURE__*/React.createElement(designSystem.Box, {
	      display: "flex",
	      flexWrap: "wrap",
	      gap: "default",
	      mt: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Button, {
	      as: "a",
	      href: profileEditLink
	    }, "Profilni tahrirlash"), /*#__PURE__*/React.createElement(designSystem.Button, {
	      as: "a",
	      href: "/admin/logout",
	      variant: "outlined"
	    }, "Chiqish")), /*#__PURE__*/React.createElement(designSystem.Text, {
	      mt: "lg",
	      color: "grey100"
	    }, "Eslatma: rol maydoni faqat administrator tomonidan o\u2018zgartiriladi.")));
	  }
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    variant: "grey"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl",
	    boxShadow: "card"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mb: "lg"
	  }, "Kirish qilingan profil:", ' ', /*#__PURE__*/React.createElement("strong", null, currentAdmin?.title || currentAdmin?.username)), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    flexWrap: "wrap",
	    gap: "default",
	    mb: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: profileShowLink,
	    variant: "outlined"
	  }, "Mening profilim"), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: profileEditLink
	  }, "Profilni tahrirlash"), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/logout",
	    variant: "outlined"
	  }, "Chiqish")), /*#__PURE__*/React.createElement(designSystem.H2, null, page.label), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "default"
	  }, "Bu bo\u2018lim hozircha tayyor sahifa sifatida qo\u2018shildi. Keyingi vazifani aytganingizdan so\u2018ng aynan shu yerga kerakli ish jarayoni ulanadi."), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "xl",
	    p: "xl",
	    bg: "filterBg",
	    borderRadius: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, "O\u2018zbekcha"), /*#__PURE__*/React.createElement(designSystem.Text, null, page.shortUz), /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mt: "lg",
	    mb: "sm"
	  }, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439"), /*#__PURE__*/React.createElement(designSystem.Text, null, page.shortRu))));
	};

	const api$5 = new adminjs.ApiClient();
	const parseSelectedUsers = value => {
	  if (Array.isArray(value)) {
	    return value.map(item => String(item));
	  }
	  if (!value) {
	    return [];
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return Array.isArray(parsed) ? parsed.map(item => String(item)) : [];
	  } catch {
	    return [];
	  }
	};
	const resolveStructureLabel = user => user?.params?.organizationName || user?.params?.displayName || user?.title || 'Tuzilma nomi kiritilmagan';
	const resolveApproverLabel = user => {
	  const username = user?.params?.username ? `@${user.params.username}` : '';
	  const fullName = [user?.params?.firstName, user?.params?.lastName].filter(Boolean).join(' ').trim();
	  return [fullName || user?.params?.displayName || user?.title, username].filter(Boolean).join(' — ') || user?.params?.username || 'Monitoring';
	};
	const itemStyle = checked => ({
	  display: 'flex',
	  alignItems: 'center',
	  gap: '10px',
	  padding: '12px 14px',
	  borderRadius: '12px',
	  border: checked ? '1px solid #2563eb' : '1px solid #dbe3f0',
	  background: checked ? '#eff6ff' : '#ffffff',
	  cursor: 'pointer'
	});
	const errorTextStyle = {
	  color: '#dc2626',
	  fontSize: '12px'
	};
	const selectStyle = {
	  width: '100%',
	  padding: '12px 14px',
	  borderRadius: '12px',
	  border: '1px solid #dbe3f0',
	  background: '#ffffff',
	  fontSize: '14px'
	};
	const PurchaseUsersEdit = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const [users, setUsers] = react.useState([]);
	  const [loading, setLoading] = react.useState(true);
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const text = language === 'ru' ? {
	    label: 'Структуры',
	    description: 'Выберите одну или несколько структур.',
	    approverLabel: 'Согласующий руководитель',
	    approverDescription: 'Выберите руководителя из списка.',
	    approverPlaceholder: 'Выберите руководителя',
	    loading: 'Загрузка данных...',
	    empty: 'Пока нет структур для выбора.',
	    approverEmpty: 'Пользователи с ролью monitoring пока не найдены.'
	  } : {
	    label: 'Tuzilmalar',
	    description: 'Tuzilma rolidagi bir yoki bir nechta foydalanuvchini tanlang.',
	    approverLabel: 'Tasdiqlovchi boshliq',
	    approverDescription: 'Monitoring rolidagi boshliqni tanlang.',
	    approverPlaceholder: 'Boshliqni tanlang',
	    loading: 'Ma’lumotlar yuklanmoqda...',
	    empty: 'Hozircha tuzilma rolidagi foydalanuvchi topilmadi.',
	    approverEmpty: 'Hozircha monitoring rolidagi foydalanuvchi topilmadi.'
	  };
	  const selectedUsers = react.useMemo(() => parseSelectedUsers(record.params?.[property.path]), [property.path, record.params]);
	  const selectedApprover = String(record.params?.approver || '');
	  const selectedUsersError = record.errors?.selectedUsers?.message;
	  const approverError = record.errors?.approver?.message;
	  const structureUsers = react.useMemo(() => users.filter(user => user?.params?.role === 'tuzilmalar'), [users]);
	  const monitoringUsers = react.useMemo(() => users.filter(user => user?.params?.role === 'monitoring'), [users]);
	  react.useEffect(() => {
	    let isActive = true;
	    const loadUsers = async () => {
	      try {
	        const response = await api$5.resourceAction({
	          resourceId: 'User',
	          actionName: 'picker',
	          params: {
	            perPage: 500
	          }
	        });
	        if (isActive) {
	          setUsers(response.data.records || []);
	        }
	      } catch {
	        if (isActive) {
	          setUsers([]);
	        }
	      } finally {
	        if (isActive) {
	          setLoading(false);
	        }
	      }
	    };
	    loadUsers();
	    return () => {
	      isActive = false;
	    };
	  }, []);
	  const toggleUser = userId => {
	    const nextUsers = selectedUsers.includes(userId) ? selectedUsers.filter(id => id !== userId) : [...selectedUsers, userId];
	    onChange(property.path, JSON.stringify(nextUsers));
	  };
	  const selectApprover = userId => {
	    onChange('approver', String(userId));
	  };
	  return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: property.isRequired
	  }, property.label && property.label !== property.path ? property.label : text.label), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mb: "default",
	    color: "grey100"
	  }, text.description), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '8px'
	    }
	  }, loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, text.loading) : structureUsers.length ? structureUsers.map(user => {
	    const userId = String(user.id);
	    const checked = selectedUsers.includes(userId);
	    return /*#__PURE__*/React.createElement("label", {
	      key: userId,
	      style: itemStyle(checked)
	    }, /*#__PURE__*/React.createElement("input", {
	      type: "checkbox",
	      checked: checked,
	      onChange: () => toggleUser(userId)
	    }), /*#__PURE__*/React.createElement("span", null, resolveStructureLabel(user)));
	  }) : /*#__PURE__*/React.createElement(designSystem.Text, null, text.empty)), selectedUsersError ? /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    style: errorTextStyle
	  }, selectedUsersError) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: true
	  }, text.approverLabel), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mb: "default",
	    color: "grey100"
	  }, text.approverDescription), loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, text.loading) : monitoringUsers.length ? /*#__PURE__*/React.createElement("select", {
	    value: selectedApprover,
	    onChange: event => selectApprover(event.target.value),
	    style: selectStyle
	  }, /*#__PURE__*/React.createElement("option", {
	    value: ""
	  }, text.approverPlaceholder), monitoringUsers.map(user => /*#__PURE__*/React.createElement("option", {
	    key: user.id,
	    value: String(user.id)
	  }, resolveApproverLabel(user)))) : /*#__PURE__*/React.createElement(designSystem.Text, null, text.approverEmpty), approverError ? /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    style: errorTextStyle
	  }, approverError) : null));
	};

	const UNIT_OPTIONS = ['dona', 'kg', 'litr', 'metr', 'quti', 'komplekt', 'juft', 'paket'];
	const EMPTY_ITEM = {
	  productName: '',
	  features: '',
	  unit: 'dona',
	  quantity: 1
	};
	const parseItems$2 = value => {
	  if (!value) {
	    return [{
	      ...EMPTY_ITEM
	    }];
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return Array.isArray(parsed) && parsed.length ? parsed : [{
	      ...EMPTY_ITEM
	    }];
	  } catch {
	    return [{
	      ...EMPTY_ITEM
	    }];
	  }
	};
	const PurchaseItemsEdit = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const text = language === 'ru' ? {
	    label: 'Товары',
	    description: 'Вы можете добавить неограниченное количество товаров.',
	    item: 'Товар',
	    name: 'Название товара',
	    features: 'Характеристики',
	    quantity: 'Количество',
	    remove: 'Удалить',
	    add: '+ Добавить товар'
	  } : {
	    label: 'Tovarlar',
	    description: 'Tovarlarni xohlagancha qo‘shishingiz mumkin.',
	    item: 'Tovar',
	    name: 'Tovar nomi',
	    features: 'Xususiyatlari',
	    quantity: 'Soni',
	    remove: 'Olib tashlash',
	    add: '+ Tovar qo‘shish'
	  };
	  const items = react.useMemo(() => parseItems$2(record.params?.[property.path]), [property.path, record.params]);
	  react.useEffect(() => {
	    if (!record.params?.[property.path]) {
	      onChange(property.path, JSON.stringify([{
	        ...EMPTY_ITEM
	      }]));
	    }
	  }, [onChange, property.path, record.params]);
	  const updateItems = nextItems => {
	    onChange(property.path, JSON.stringify(nextItems));
	  };
	  const updateField = (index, field, value) => {
	    const nextItems = items.map((item, currentIndex) => currentIndex === index ? {
	      ...item,
	      [field]: field === 'quantity' ? Number(value || 0) : value
	    } : item);
	    updateItems(nextItems);
	  };
	  const addItem = () => {
	    updateItems([...items, {
	      ...EMPTY_ITEM
	    }]);
	  };
	  const removeItem = index => {
	    const nextItems = items.filter((_, currentIndex) => currentIndex !== index);
	    updateItems(nextItems.length ? nextItems : [{
	      ...EMPTY_ITEM
	    }]);
	  };
	  return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: property.isRequired
	  }, property.label && property.label !== property.path ? property.label : text.label), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mb: "default",
	    color: "grey100"
	  }, text.description), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '14px'
	    }
	  }, items.map((item, index) => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: `${property.path}-${index}`,
	    p: "lg",
	    style: {
	      border: '1px solid #dbe3f0',
	      borderRadius: '14px',
	      background: '#f8fbff'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "default"
	  }, text.item, " #", index + 1), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '10px'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    placeholder: text.name,
	    value: item.productName || '',
	    onChange: event => updateField(index, 'productName', event.target.value),
	    style: {
	      padding: '10px 12px',
	      borderRadius: '10px',
	      border: '1px solid #cbd5e1'
	    }
	  }), /*#__PURE__*/React.createElement("textarea", {
	    rows: "4",
	    placeholder: text.features,
	    value: item.features || '',
	    onChange: event => updateField(index, 'features', event.target.value),
	    style: {
	      padding: '10px 12px',
	      borderRadius: '10px',
	      border: '1px solid #cbd5e1',
	      resize: 'vertical'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: '1fr 1fr',
	      gap: '10px'
	    }
	  }, /*#__PURE__*/React.createElement("select", {
	    value: item.unit || 'dona',
	    onChange: event => updateField(index, 'unit', event.target.value),
	    style: {
	      padding: '10px 12px',
	      borderRadius: '10px',
	      border: '1px solid #cbd5e1'
	    }
	  }, UNIT_OPTIONS.map(unit => /*#__PURE__*/React.createElement("option", {
	    key: unit,
	    value: unit
	  }, unit))), /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    min: "1",
	    placeholder: text.quantity,
	    value: item.quantity ?? 1,
	    onChange: event => updateField(index, 'quantity', event.target.value),
	    style: {
	      padding: '10px 12px',
	      borderRadius: '10px',
	      border: '1px solid #cbd5e1'
	    }
	  }))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "default"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    size: "sm",
	    variant: "outlined",
	    type: "button",
	    onClick: () => removeItem(index)
	  }, text.remove))))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    onClick: addItem
	  }, text.add)));
	};

	const PurchaseDownloadAction = props => {
	  const {
	    action,
	    record
	  } = props;
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const format = action?.custom?.format || (action?.name === 'downloadWord' ? 'word' : 'pdf');
	  const extension = format === 'word' ? 'docx' : 'pdf';
	  const recordId = record?.id;
	  const downloadUrl = `/admin/purchase-requests/${recordId}/download/${format}?lang=${language || 'uz'}`;
	  const backUrl = `/admin/resources/PurchaseRequest/records/${recordId}/show`;
	  const text = language === 'ru' ? {
	    title: `${extension.toUpperCase()} файл подготавливается`,
	    description: 'Загрузка должна начаться автоматически. Если этого не произошло, нажмите кнопку ниже.',
	    downloadAgain: `${extension.toUpperCase()} скачать`,
	    goBack: 'Вернуться к заявке'
	  } : {
	    title: `${extension.toUpperCase()} fayl tayyorlanmoqda`,
	    description: 'Yuklab olish avtomatik boshlanishi kerak. Boshlanmasa, quyidagi tugmani bosing.',
	    downloadAgain: `${extension.toUpperCase()} yuklab olish`,
	    goBack: 'Arizaga qaytish'
	  };
	  react.useEffect(() => {
	    if (!recordId) {
	      return undefined;
	    }
	    const iframe = document.createElement('iframe');
	    iframe.style.display = 'none';
	    iframe.src = downloadUrl;
	    document.body.appendChild(iframe);
	    return () => {
	      if (document.body.contains(iframe)) {
	        document.body.removeChild(iframe);
	      }
	    };
	  }, [downloadUrl, recordId]);
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    variant: "grey"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl",
	    boxShadow: "card"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, text.title), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "default",
	    mb: "xl",
	    color: "grey100"
	  }, text.description), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    flexWrap: "wrap",
	    gap: "default"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: downloadUrl
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "Download",
	    mr: "sm"
	  }), text.downloadAgain), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: backUrl,
	    variant: "outlined"
	  }, text.goBack))));
	};

	const api$4 = new adminjs.ApiClient();
	const DECISIONS = ['tasdiqlandi', 'qisman tasdiqlandi', 'rad etildi'];
	const parseHistory = value => {
	  if (Array.isArray(value)) {
	    return value;
	  }
	  if (!value) {
	    return [];
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return Array.isArray(parsed) ? parsed : [];
	  } catch {
	    return [];
	  }
	};
	const optionStyle = selected => ({
	  display: 'flex',
	  alignItems: 'flex-start',
	  gap: '10px',
	  padding: '12px 14px',
	  borderRadius: '12px',
	  border: selected ? '1px solid #2563eb' : '1px solid #dbe3f0',
	  background: selected ? '#eff6ff' : '#ffffff',
	  cursor: 'pointer'
	});
	const textareaStyle = {
	  width: '100%',
	  minHeight: '120px',
	  padding: '12px 14px',
	  borderRadius: '12px',
	  border: '1px solid #cbd5e1',
	  resize: 'vertical',
	  fontSize: '14px',
	  fontFamily: 'inherit'
	};
	const getDecisionOptionMeta = (decision, language) => {
	  const options = language === 'ru' ? {
	    tasdiqlandi: {
	      label: 'Подтвердить',
	      icon: '✓',
	      background: '#dcfce7',
	      color: '#166534'
	    },
	    'qisman tasdiqlandi': {
	      label: 'Частично подтвердить',
	      icon: '◐',
	      background: '#fef3c7',
	      color: '#b45309'
	    },
	    'rad etildi': {
	      label: 'Отклонить',
	      icon: '✕',
	      background: '#fee2e2',
	      color: '#b91c1c'
	    }
	  } : {
	    tasdiqlandi: {
	      label: 'Tasdiqlash',
	      icon: '✓',
	      background: '#dcfce7',
	      color: '#166534'
	    },
	    'qisman tasdiqlandi': {
	      label: 'Qisman tasdiqlash',
	      icon: '◐',
	      background: '#fef3c7',
	      color: '#b45309'
	    },
	    'rad etildi': {
	      label: 'Rad etish',
	      icon: '✕',
	      background: '#fee2e2',
	      color: '#b91c1c'
	    }
	  };
	  return options[decision] || {
	    label: decision,
	    icon: '•',
	    background: '#e2e8f0',
	    color: '#475569'
	  };
	};
	const resolveStageLabel = (stage, text) => {
	  if (stage === 'monitoring') {
	    return text.stageMonitoring;
	  }
	  if (stage === 'yakunlandi') {
	    return text.stageFinished;
	  }
	  return text.stageStructures;
	};
	const resolveHistoryStage = (stage, text) => {
	  if (stage === 'monitoring') {
	    return text.stageMonitoringShort;
	  }
	  if (stage === 'yakunlandi') {
	    return text.stageFinishedShort;
	  }
	  return text.stageStructuresShort;
	};
	const formatDate$4 = value => {
	  if (!value) {
	    return '-';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return value;
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const PurchaseApprovalAction = props => {
	  const {
	    action,
	    record,
	    resource
	  } = props;
	  const addNotice = adminjs.useNotice();
	  const [decision, setDecision] = react.useState('tasdiqlandi');
	  const [comment, setComment] = react.useState('');
	  const [saving, setSaving] = react.useState(false);
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const text = language === 'ru' ? {
	    title: 'Принять решение по заявке',
	    subtitle: 'Ознакомьтесь с материалами заявки и выберите итоговое решение.',
	    status: 'Статус',
	    stage: 'Текущий этап',
	    summary: 'Ход согласования',
	    noSummary: 'История согласования пока пуста.',
	    decisionLabel: 'Выберите решение',
	    commentLabel: 'Комментарий',
	    commentOptional: 'При полном подтверждении комментарий не обязателен.',
	    commentRequired: 'При частичном подтверждении и отказе комментарий обязателен.',
	    commentRequiredError: 'Для частичного подтверждения и отказа нужно указать комментарий.',
	    submit: 'Подтвердить решение',
	    saving: 'Сохраняется...',
	    back: 'Вернуться к заявке',
	    historyTitle: 'История согласования',
	    saveError: 'Не удалось сохранить решение.',
	    stageStructures: 'Согласование структур',
	    stageMonitoring: 'Согласование руководителя',
	    stageFinished: 'Процесс завершён',
	    stageStructuresShort: 'структуры',
	    stageMonitoringShort: 'руководитель',
	    stageFinishedShort: 'завершено'
	  } : {
	    title: 'Qarorni tasdiqlash',
	    subtitle: 'Ariza materiallarini ko‘rib chiqing va yakuniy qarorni tanlang.',
	    status: 'Holati',
	    stage: 'Joriy bosqich',
	    summary: 'Tasdiqlash jarayoni',
	    noSummary: 'Hozircha tasdiqlash tarixi yo‘q.',
	    decisionLabel: 'Qaror turini tanlang',
	    commentLabel: 'Izoh',
	    commentOptional: 'To‘liq tasdiqlashda izoh yozish majburiy emas.',
	    commentRequired: 'Qisman tasdiqlash va rad etishda izoh kiritish shart.',
	    commentRequiredError: 'Qisman tasdiqlash yoki rad etish uchun izoh yozing.',
	    submit: 'Qarorni tasdiqlash',
	    saving: 'Saqlanmoqda...',
	    back: 'Arizaga qaytish',
	    historyTitle: 'Tasdiqlash tarixi',
	    saveError: 'Qarorni saqlab bo‘lmadi.',
	    stageStructures: 'Tuzilmalar tasdig‘i',
	    stageMonitoring: 'Boshliq tasdig‘i',
	    stageFinished: 'Jarayon yakunlangan',
	    stageStructuresShort: 'tuzilmalar',
	    stageMonitoringShort: 'boshliq',
	    stageFinishedShort: 'yakunlandi'
	  };
	  const history = react.useMemo(() => parseHistory(record?.params?.approvalHistory).slice().reverse(), [record?.params?.approvalHistory]);
	  const needsComment = decision !== 'tasdiqlandi';
	  const backUrl = `/admin/resources/${resource?.id}/records/${record?.id}/show`;
	  const submitDecision = async () => {
	    if (needsComment && !comment.trim()) {
	      addNotice({
	        message: text.commentRequiredError,
	        type: 'error'
	      });
	      return;
	    }
	    setSaving(true);
	    try {
	      const response = await api$4.recordAction({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName: action.name,
	        data: {
	          decision,
	          comment
	        }
	      });
	      if (response?.data?.notice) {
	        addNotice(response.data.notice);
	      }
	      window.location.href = response?.data?.redirectUrl || backUrl;
	    } catch (error) {
	      setSaving(false);
	      addNotice({
	        message: error?.response?.data?.notice?.message || text.saveError,
	        type: 'error'
	      });
	    }
	  };
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    variant: "grey"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl",
	    boxShadow: "card"
	  }, /*#__PURE__*/React.createElement(designSystem.H2, null, text.title), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "default",
	    mb: "xl",
	    color: "grey100"
	  }, text.subtitle), /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info",
	    mb: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, /*#__PURE__*/React.createElement("strong", null, text.status, ":"), " ", record?.params?.status || '-'), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, /*#__PURE__*/React.createElement("strong", null, text.stage, ":"), ' ', resolveStageLabel(record?.params?.currentStage, text)), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, /*#__PURE__*/React.createElement("strong", null, text.summary, ":"), ' ', record?.params?.approvalSummary || text.noSummary)), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "default"
	  }, text.decisionLabel), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '10px'
	    }
	  }, DECISIONS.map(option => {
	    const selected = decision === option;
	    const meta = getDecisionOptionMeta(option, language);
	    return /*#__PURE__*/React.createElement("label", {
	      key: option,
	      style: optionStyle(selected)
	    }, /*#__PURE__*/React.createElement("input", {
	      type: "radio",
	      name: "decision",
	      value: option,
	      checked: selected,
	      onChange: () => setDecision(option)
	    }), /*#__PURE__*/React.createElement("span", {
	      style: {
	        display: 'inline-flex',
	        alignItems: 'center',
	        gap: '10px'
	      }
	    }, /*#__PURE__*/React.createElement("span", {
	      style: {
	        display: 'inline-flex',
	        alignItems: 'center',
	        justifyContent: 'center',
	        width: '24px',
	        height: '24px',
	        borderRadius: '999px',
	        background: meta.background,
	        color: meta.color,
	        fontWeight: 700,
	        flexShrink: 0
	      }
	    }, meta.icon), /*#__PURE__*/React.createElement("span", null, meta.label)));
	  }))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, text.commentLabel, needsComment ? ' *' : ''), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mb: "default",
	    color: "grey100"
	  }, needsComment ? text.commentRequired : text.commentOptional), /*#__PURE__*/React.createElement("textarea", {
	    value: comment,
	    onChange: event => setComment(event.target.value),
	    placeholder: text.commentLabel,
	    style: textareaStyle
	  })), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    flexWrap: "wrap",
	    gap: "default",
	    mt: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    onClick: submitDecision,
	    disabled: saving
	  }, saving ? text.saving : text.submit), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: backUrl,
	    variant: "outlined"
	  }, text.back)), history.length ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "xxl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "default"
	  }, text.historyTitle), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '10px'
	    }
	  }, history.map((entry, index) => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: `${entry.decidedAt || 'entry'}-${index}`,
	    p: "lg",
	    style: {
	      border: '1px solid #e2e8f0',
	      borderRadius: '12px',
	      background: '#f8fafc'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold"
	  }, entry.userName || '-', " \u2014 ", entry.decision || '-'), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey100"
	  }, resolveHistoryStage(entry.stage, text), " \xB7", ' ', formatDate$4(entry.decidedAt)), entry.comment ? /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, entry.comment) : null)))) : null));
	};

	const compactStyle = {
	  display: 'block',
	  maxWidth: '220px',
	  overflow: 'hidden',
	  textOverflow: 'ellipsis',
	  whiteSpace: 'nowrap'
	};
	const commentStyle = {
	  display: '-webkit-box',
	  maxWidth: '360px',
	  overflow: 'hidden',
	  textOverflow: 'ellipsis',
	  whiteSpace: 'normal',
	  lineHeight: '1.4',
	  WebkitBoxOrient: 'vertical',
	  WebkitLineClamp: 2
	};
	const detailCardStyle = {
	  display: 'block',
	  width: '100%',
	  maxWidth: 'none',
	  minWidth: '100%',
	  padding: '18px 20px',
	  margin: '6px 0 12px',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff',
	  boxSizing: 'border-box',
	  lineHeight: '1.7',
	  boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)'
	};
	const noteCardStyle = {
	  ...detailCardStyle,
	  background: '#f8fafc',
	  whiteSpace: 'pre-wrap',
	  wordBreak: 'break-word'
	};
	const sectionTitleStyle = {
	  fontSize: '13px',
	  fontWeight: 700,
	  color: '#0f172a',
	  marginBottom: '10px'
	};
	const helperTextStyle = {
	  fontSize: '12px',
	  color: '#64748b'
	};
	const chipWrapStyle = {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	  gap: '10px',
	  width: '100%',
	  marginTop: '8px'
	};
	const chipStyle = {
	  display: 'flex',
	  alignItems: 'flex-start',
	  justifyContent: 'flex-start',
	  width: '100%',
	  padding: '10px 12px',
	  borderRadius: '10px',
	  background: '#eff6ff',
	  border: '1px solid #bfdbfe',
	  color: '#1d4ed8',
	  fontSize: '13px',
	  fontWeight: 600,
	  lineHeight: '1.5',
	  boxSizing: 'border-box',
	  whiteSpace: 'normal',
	  wordBreak: 'break-word'
	};
	const tableWrapStyle$4 = {
	  width: '100%',
	  overflowX: 'auto',
	  marginTop: '8px'
	};
	const tableStyle$4 = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  fontSize: '13px'
	};
	const tableHeadCellStyle$4 = {
	  padding: '10px 12px',
	  textAlign: 'left',
	  background: '#f8fafc',
	  color: '#334155',
	  fontWeight: 700,
	  borderBottom: '1px solid #e5e7eb',
	  whiteSpace: 'nowrap'
	};
	const tableCellStyle$4 = {
	  padding: '10px 12px',
	  borderBottom: '1px solid #eef2f7',
	  verticalAlign: 'top',
	  color: '#111827'
	};
	const statusBadgeBaseStyle = {
	  display: 'inline-block',
	  padding: '4px 10px',
	  borderRadius: '999px',
	  fontSize: '12px',
	  fontWeight: 700,
	  lineHeight: '1.4',
	  maxWidth: 'fit-content'
	};
	const parseItems$1 = value => {
	  if (!value) {
	    return [];
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return Array.isArray(parsed) ? parsed : [];
	  } catch {
	    return [];
	  }
	};
	const parseArray$1 = value => {
	  if (!value) {
	    return [];
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return Array.isArray(parsed) ? parsed : [];
	  } catch {
	    return [];
	  }
	};
	const getItemsCountLabel = (count, language) => {
	  if (language === 'ru') {
	    return `${count} ${count === 1 ? 'вид товара' : count < 5 ? 'вида товара' : 'видов товара'}`;
	  }
	  return `${count} ta turdagi tovar`;
	};
	const getSelectedUsersCountLabel = (count, language) => {
	  if (language === 'ru') {
	    return `${count} ${count === 1 ? 'структура' : count < 5 ? 'структуры' : 'структур'}`;
	  }
	  return `${count} ta tuzilma`;
	};
	const normalizeText$1 = value => String(value || '-').replace(/\s+/g, ' ').trim() || '-';
	const normalizeDetailedText = value => String(value || '').trim() || '—';
	const splitNames$1 = value => String(value || '').split(',').map(item => item.trim()).filter(Boolean);
	const getCurrentCycleHistory$1 = history => {
	  const entries = Array.isArray(history) ? history : [];
	  const lastResubmittedIndex = entries.map(item => String(item?.stage || '').toLowerCase()).lastIndexOf('resubmitted');
	  return lastResubmittedIndex >= 0 ? entries.slice(lastResubmittedIndex + 1) : entries;
	};
	const formatDateTime$1 = value => {
	  if (!value) {
	    return '—';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return normalizeDetailedText(value);
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const getLocalizedValue = (path, value, language) => {
	  const normalizedValue = String(value || '').trim().toLowerCase();
	  if (path === 'status') {
	    const labels = language === 'ru' ? {
	      'ko‘rilmoqda': 'На рассмотрении',
	      'tuzilmalar tasdig‘ida': 'На рассмотрении',
	      tasdiqlanmoqda: 'На утверждении',
	      'boshliq tasdig‘ida': 'На утверждении',
	      tasdiqlangan: 'Подтверждено',
	      tasdiqlandi: 'Подтверждено',
	      'qisman tasdiqlandi': 'Частично подтверждено',
	      'sotib olish kerak': 'Требуется закупка',
	      'sotib olinmoqda': 'В закупке',
	      'rad etildi': 'Отказано'
	    } : {
	      'ko‘rilmoqda': 'Ko‘rilmoqda',
	      'tuzilmalar tasdig‘ida': 'Ko‘rilmoqda',
	      tasdiqlanmoqda: 'Tasdiqlanmoqda',
	      'boshliq tasdig‘ida': 'Tasdiqlanmoqda',
	      tasdiqlangan: 'Tasdiqlangan',
	      tasdiqlandi: 'Tasdiqlangan',
	      'qisman tasdiqlandi': 'Qisman tasdiqlandi',
	      'sotib olish kerak': 'Sotib olish kerak',
	      'sotib olinmoqda': 'Sotib olinmoqda',
	      'rad etildi': 'Rad etildi'
	    };
	    return labels[normalizedValue] || value;
	  }
	  if (path === 'currentStage') {
	    const labels = language === 'ru' ? {
	      tuzilmalar: 'Структуры',
	      monitoring: 'Руководитель',
	      sotib_olish: 'Закупка',
	      yakunlandi: 'Завершено'
	    } : {
	      tuzilmalar: 'Tuzilma',
	      monitoring: 'Boshliq',
	      sotib_olish: 'Sotib olish',
	      yakunlandi: 'Yakunlandi'
	    };
	    return labels[normalizedValue] || value;
	  }
	  return value;
	};
	const getStatusStyle = (path, value) => {
	  const normalizedValue = String(value || '').trim().toLowerCase();
	  if (path === 'currentStage') {
	    if (normalizedValue === 'monitoring') {
	      return {
	        ...statusBadgeBaseStyle,
	        background: '#ede9fe',
	        color: '#6d28d9'
	      };
	    }
	    if (normalizedValue === 'sotib_olish') {
	      return {
	        ...statusBadgeBaseStyle,
	        background: '#dbeafe',
	        color: '#1d4ed8'
	      };
	    }
	    if (normalizedValue === 'yakunlandi') {
	      return {
	        ...statusBadgeBaseStyle,
	        background: '#e5e7eb',
	        color: '#374151'
	      };
	    }
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#dbeafe',
	      color: '#1d4ed8'
	    };
	  }
	  if (['tasdiqlangan', 'tasdiqlandi'].includes(normalizedValue)) {
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#dcfce7',
	      color: '#166534'
	    };
	  }
	  if (normalizedValue === 'qisman tasdiqlandi') {
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#fef3c7',
	      color: '#b45309'
	    };
	  }
	  if (normalizedValue === 'sotib olish kerak') {
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#dbeafe',
	      color: '#1d4ed8'
	    };
	  }
	  if (normalizedValue === 'sotib olinmoqda') {
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#ede9fe',
	      color: '#6d28d9'
	    };
	  }
	  if (normalizedValue === 'rad etildi') {
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#fee2e2',
	      color: '#b91c1c'
	    };
	  }
	  if (['tasdiqlanmoqda', 'boshliq tasdig‘ida'].includes(normalizedValue)) {
	    return {
	      ...statusBadgeBaseStyle,
	      background: '#ede9fe',
	      color: '#6d28d9'
	    };
	  }
	  return {
	    ...statusBadgeBaseStyle,
	    background: '#dbeafe',
	    color: '#1d4ed8'
	  };
	};
	const getApprovalShortLabel = (value, params, language) => {
	  const suffix = language === 'ru' ? 'шт.' : 'ta';
	  const text = String(value || '');
	  const directMatch = text.match(/(\d+)\s*\/\s*(\d+)/);
	  if (directMatch) {
	    return `${directMatch[1]}/${directMatch[2]} ${suffix}`;
	  }
	  const selectedUsersCount = parseArray$1(params.selectedUsers).length;
	  const reviewedCount = parseArray$1(params.structureApprovals).filter(item => item?.decision).length;
	  if (selectedUsersCount) {
	    return `${reviewedCount}/${selectedUsersCount} ${suffix}`;
	  }
	  return value;
	};
	const getRequestNumberLabel = (value, params, record) => {
	  if (value) {
	    return value;
	  }
	  const rawDate = String(params.createdAt || '').replace(/\D/g, '').slice(0, 12);
	  const fallbackDate = rawDate || new Date().toISOString().replace(/\D/g, '').slice(0, 12);
	  const idPart = String(record?.id || '').slice(-4).toUpperCase() || '0000';
	  return `XR-${fallbackDate}-${idPart}`;
	};
	const getDecisionMeta$1 = (decision, language) => {
	  const normalizedDecision = String(decision || '').trim().toLowerCase();
	  const labels = language === 'ru' ? {
	    tasdiqlangan: 'Подтверждено',
	    tasdiqlandi: 'Подтверждено',
	    'qisman tasdiqlandi': 'Частично подтверждено',
	    'rad etildi': 'Отказано',
	    pending: 'Ожидается',
	    waiting: 'Очередь не подошла'
	  } : {
	    tasdiqlangan: 'Tasdiqlangan',
	    tasdiqlandi: 'Tasdiqlandi',
	    'qisman tasdiqlandi': 'Qisman tasdiqlandi',
	    'rad etildi': 'Rad etildi',
	    pending: 'Kutilmoqda',
	    waiting: 'Navbati kelmagan'
	  };
	  if (['tasdiqlangan', 'tasdiqlandi'].includes(normalizedDecision)) {
	    return {
	      label: labels[normalizedDecision],
	      symbol: '✓',
	      background: '#dcfce7',
	      color: '#166534'
	    };
	  }
	  if (normalizedDecision === 'qisman tasdiqlandi') {
	    return {
	      label: labels[normalizedDecision],
	      symbol: '✓',
	      background: '#fef3c7',
	      color: '#b45309'
	    };
	  }
	  if (normalizedDecision === 'rad etildi') {
	    return {
	      label: labels[normalizedDecision],
	      symbol: '✕',
	      background: '#fee2e2',
	      color: '#b91c1c'
	    };
	  }
	  if (normalizedDecision === 'waiting') {
	    return {
	      label: labels.waiting,
	      symbol: '•',
	      background: '#f1f5f9',
	      color: '#475569'
	    };
	  }
	  return {
	    label: labels.pending,
	    symbol: '…',
	    background: '#dbeafe',
	    color: '#1d4ed8'
	  };
	};
	const getApprovalRows$1 = (params, language) => {
	  const selectedUsers = parseArray$1(params.selectedUsers).map(item => String(item));
	  const selectedNames = splitNames$1(params.selectedUserNames);
	  const structureApprovals = parseArray$1(params.structureApprovals);
	  const approvalHistory = parseArray$1(params.approvalHistory);
	  const currentCycleHistory = getCurrentCycleHistory$1(approvalHistory);
	  const approvalMap = new Map();
	  structureApprovals.forEach((item, index) => {
	    const key = String(item?.userId || `idx-${index}`);
	    approvalMap.set(key, item);
	  });
	  const baseRows = (selectedUsers.length ? selectedUsers : selectedNames).map((item, index) => {
	    const userId = selectedUsers[index] || `idx-${index}`;
	    const approval = approvalMap.get(userId) || (selectedUsers.length ? null : structureApprovals[index]);
	    const name = approval?.userName ? normalizeDetailedText(approval.userName) : selectedNames[index] || normalizeDetailedText(item);
	    const meta = getDecisionMeta$1(approval?.decision || 'pending', language);
	    return {
	      index: index + 1,
	      role: language === 'ru' ? 'Структура' : 'Tuzilma',
	      name,
	      meta,
	      comment: normalizeDetailedText(approval?.comment),
	      date: formatDateTime$1(approval?.decidedAt)
	    };
	  });
	  const lastApproverEntry = [...currentCycleHistory].reverse().find(item => String(item?.stage || '').toLowerCase() === 'monitoring' || String(item?.role || '').toLowerCase() === 'monitoring');
	  const normalizedStatus = String(params.status || '').toLowerCase();
	  const hasStructureRejection = structureApprovals.some(item => String(item?.decision || '').toLowerCase() === 'rad etildi');
	  let approverState = 'waiting';
	  if (lastApproverEntry?.decision) {
	    approverState = lastApproverEntry.decision;
	  } else if (['tasdiqlangan', 'tasdiqlandi', 'qisman tasdiqlandi'].includes(normalizedStatus)) {
	    approverState = normalizedStatus;
	  } else if (normalizedStatus === 'rad etildi' && !hasStructureRejection) {
	    approverState = normalizedStatus;
	  } else if (String(params.currentStage || '').toLowerCase() === 'monitoring' || normalizedStatus === 'tasdiqlanmoqda') {
	    approverState = 'pending';
	  }
	  baseRows.push({
	    index: baseRows.length + 1,
	    role: language === 'ru' ? 'Руководитель' : 'Boshliq',
	    name: normalizeDetailedText(params.approverName),
	    meta: getDecisionMeta$1(approverState, language),
	    comment: normalizeDetailedText(lastApproverEntry?.comment),
	    date: formatDateTime$1(lastApproverEntry?.decidedAt)
	  });
	  return baseRows;
	};
	const renderShowValue = ({
	  path,
	  params,
	  populated,
	  record,
	  language
	}) => {
	  if (path === 'requestNumber') {
	    return /*#__PURE__*/React.createElement("div", {
	      style: {
	        ...detailCardStyle,
	        fontWeight: 700,
	        letterSpacing: '0.04em'
	      }
	    }, getRequestNumberLabel(params.requestNumber, params, record));
	  }
	  if (path === 'selectedUserNames') {
	    const names = splitNames$1(params.selectedUserNames);
	    return /*#__PURE__*/React.createElement("div", {
	      style: detailCardStyle
	    }, /*#__PURE__*/React.createElement("div", {
	      style: sectionTitleStyle
	    }, language === 'ru' ? 'Выбранные структуры' : 'Tanlangan tuzilmalar'), /*#__PURE__*/React.createElement("div", {
	      style: {
	        ...helperTextStyle,
	        marginBottom: '10px'
	      }
	    }, getSelectedUsersCountLabel(names.length, language)), /*#__PURE__*/React.createElement("div", {
	      style: chipWrapStyle
	    }, names.length ? names.map(name => /*#__PURE__*/React.createElement("span", {
	      key: name,
	      style: chipStyle
	    }, name)) : '—'));
	  }
	  if (path === 'approverName') {
	    return /*#__PURE__*/React.createElement("div", {
	      style: detailCardStyle
	    }, /*#__PURE__*/React.createElement("div", {
	      style: {
	        fontWeight: 700,
	        color: '#0f172a'
	      }
	    }, normalizeDetailedText(params.approverName)), /*#__PURE__*/React.createElement("div", {
	      style: {
	        ...helperTextStyle,
	        marginTop: '6px'
	      }
	    }, language === 'ru' ? 'Руководитель / мониторинг' : 'Boshliq / monitoring'));
	  }
	  if (path === 'comment' || path === 'lastComment') {
	    return /*#__PURE__*/React.createElement("div", {
	      style: noteCardStyle
	    }, normalizeDetailedText(params[path]));
	  }
	  if (path === 'itemsSummary') {
	    const items = parseItems$1(params.items);
	    return /*#__PURE__*/React.createElement("div", {
	      style: detailCardStyle
	    }, /*#__PURE__*/React.createElement("div", {
	      style: sectionTitleStyle
	    }, language === 'ru' ? 'Детали товаров' : 'Tovar tafsiloti'), /*#__PURE__*/React.createElement("div", {
	      style: tableWrapStyle$4
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$4
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Товар' : 'Tovar'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Характеристика' : 'Xususiyati'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Ед.' : 'Birligi'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Кол-во' : 'Soni'))), /*#__PURE__*/React.createElement("tbody", null, items.length ? items.map((item, index) => /*#__PURE__*/React.createElement("tr", {
	      key: `${item.productName}-${index}`
	    }, /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, index + 1), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, normalizeDetailedText(item.productName)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, normalizeDetailedText(item.features)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, normalizeDetailedText(item.unit)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, normalizeDetailedText(item.quantity)))) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4,
	      colSpan: 5
	    }, language === 'ru' ? 'Товары не указаны' : 'Tovar kiritilmagan'))))));
	  }
	  if (path === 'approvalSummary') {
	    const rows = getApprovalRows$1(params, language);
	    const summary = getApprovalShortLabel(params.approvalSummary, params, language);
	    return /*#__PURE__*/React.createElement("div", {
	      style: detailCardStyle
	    }, /*#__PURE__*/React.createElement("div", {
	      style: sectionTitleStyle
	    }, language === 'ru' ? 'Таблица согласования' : 'Tasdiqlash jadvali'), /*#__PURE__*/React.createElement("div", {
	      style: {
	        ...helperTextStyle,
	        marginBottom: '10px'
	      }
	    }, language === 'ru' ? 'Выполнено' : 'Ko‘rib chiqilgan', ": ", summary), /*#__PURE__*/React.createElement("div", {
	      style: tableWrapStyle$4
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$4
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Роль' : 'Rol'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Название' : 'Nomi'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Знак' : 'Belgi'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Статус' : 'Holat'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Комментарий' : 'Izoh'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$4
	    }, language === 'ru' ? 'Время' : 'Vaqti'))), /*#__PURE__*/React.createElement("tbody", null, rows.map(row => /*#__PURE__*/React.createElement("tr", {
	      key: `${row.role}-${row.index}-${row.name}`
	    }, /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, row.index), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, row.role), /*#__PURE__*/React.createElement("td", {
	      style: {
	        ...tableCellStyle$4,
	        minWidth: '180px'
	      }
	    }, row.name), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, /*#__PURE__*/React.createElement("span", {
	      style: {
	        display: 'inline-flex',
	        alignItems: 'center',
	        justifyContent: 'center',
	        width: '24px',
	        height: '24px',
	        borderRadius: '999px',
	        background: row.meta.background,
	        color: row.meta.color,
	        fontWeight: 800
	      }
	    }, row.meta.symbol)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$4
	    }, /*#__PURE__*/React.createElement("span", {
	      style: {
	        display: 'inline-block',
	        padding: '4px 9px',
	        borderRadius: '999px',
	        background: row.meta.background,
	        color: row.meta.color,
	        fontWeight: 700,
	        whiteSpace: 'nowrap'
	      }
	    }, row.meta.label)), /*#__PURE__*/React.createElement("td", {
	      style: {
	        ...tableCellStyle$4,
	        minWidth: '220px',
	        whiteSpace: 'pre-wrap',
	        wordBreak: 'break-word'
	      }
	    }, row.comment), /*#__PURE__*/React.createElement("td", {
	      style: {
	        ...tableCellStyle$4,
	        whiteSpace: 'nowrap'
	      }
	    }, row.date)))))));
	  }
	  if (path === 'createdBy') {
	    const username = populated.createdBy?.params?.username || normalizeDetailedText(params.createdBy);
	    return /*#__PURE__*/React.createElement("div", {
	      style: detailCardStyle
	    }, username);
	  }
	  if (['createdAt', 'updatedAt'].includes(path)) {
	    return /*#__PURE__*/React.createElement("div", {
	      style: detailCardStyle
	    }, formatDateTime$1(params[path]));
	  }
	  return /*#__PURE__*/React.createElement("div", {
	    style: detailCardStyle
	  }, normalizeDetailedText(params[path]));
	};
	const PurchaseRequestListValue = props => {
	  const {
	    property,
	    record,
	    where
	  } = props;
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const path = property?.path;
	  const params = record?.params || {};
	  const populated = record?.populated || {};
	  const isShow = where === 'show';
	  let value = params[path];
	  let title = value;
	  let style = compactStyle;
	  if (['comment', 'lastComment'].includes(path)) {
	    style = commentStyle;
	  }
	  if (path === 'selectedUserNames') {
	    const selectedUsersCount = parseArray$1(params.selectedUsers).length;
	    value = isShow ? params.selectedUserNames : getSelectedUsersCountLabel(selectedUsersCount, language);
	    title = params.selectedUserNames || value;
	  }
	  if (path === 'itemsSummary') {
	    const items = parseItems$1(params.items);
	    value = isShow ? params.itemsSummary : getItemsCountLabel(items.length, language);
	    title = params.itemsSummary || value;
	  }
	  if (path === 'approvalSummary') {
	    value = getApprovalShortLabel(params.approvalSummary, params, language);
	    title = params.approvalSummary || value;
	  }
	  if (path === 'requestNumber') {
	    value = getRequestNumberLabel(value, params, record);
	    title = value;
	  }
	  if (path === 'createdBy') {
	    value = populated.createdBy?.params?.username || params.createdBy;
	    title = value;
	  }
	  if (['createdAt', 'updatedAt'].includes(path)) {
	    value = formatDateTime$1(value);
	    title = value;
	  }
	  if (['status', 'currentStage'].includes(path)) {
	    const localizedValue = normalizeText$1(getLocalizedValue(path, value, language));
	    return /*#__PURE__*/React.createElement(designSystem.Text, {
	      style: getStatusStyle(path, value),
	      title: localizedValue
	    }, localizedValue);
	  }
	  if (isShow) {
	    return renderShowValue({
	      path,
	      params,
	      populated,
	      record,
	      language
	    });
	  }
	  const text = normalizeText$1(value);
	  const tooltip = normalizeText$1(title || value);
	  return /*#__PURE__*/React.createElement(designSystem.Text, {
	    style: style,
	    title: tooltip
	  }, text);
	};

	const parseArray = value => {
	  if (Array.isArray(value)) {
	    return value;
	  }
	  if (!value) {
	    return [];
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return Array.isArray(parsed) ? parsed : [];
	  } catch {
	    return [];
	  }
	};
	const parseItems = value => parseArray(value).map(item => ({
	  productName: String(item?.productName || '').trim(),
	  features: String(item?.features || '').trim(),
	  unit: String(item?.unit || '').trim(),
	  quantity: String(item?.quantity || '').trim()
	}));
	const parseBuyerOrderData = value => {
	  if (value && typeof value === 'object' && !Array.isArray(value)) {
	    return value;
	  }
	  if (!value) {
	    return {};
	  }
	  try {
	    const parsed = JSON.parse(value);
	    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
	  } catch {
	    return {};
	  }
	};
	const splitNames = value => String(value || '').split(',').map(item => item.trim()).filter(Boolean);
	const getCurrentCycleHistory = history => {
	  const entries = Array.isArray(history) ? history : [];
	  const lastResubmittedIndex = entries.map(item => String(item?.stage || '').toLowerCase()).lastIndexOf('resubmitted');
	  return lastResubmittedIndex >= 0 ? entries.slice(lastResubmittedIndex + 1) : entries;
	};
	const normalizeText = value => String(value || '').trim() || '—';
	const formatDateTime = value => {
	  if (!value) {
	    return '—';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return normalizeText(value);
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const getRequestNumber = (params, record) => {
	  if (params.requestNumber) {
	    return params.requestNumber;
	  }
	  const rawDate = String(params.createdAt || '').replace(/\D/g, '').slice(0, 12);
	  const fallbackDate = rawDate || new Date().toISOString().replace(/\D/g, '').slice(0, 12);
	  const idPart = String(record?.id || '').slice(-4).toUpperCase();
	  return `XR-${fallbackDate}-${idPart || '0000'}`;
	};
	const getLocalizedStatus = (value, language) => {
	  const normalized = String(value || '').trim().toLowerCase();
	  const statusLabels = language === 'ru' ? {
	    'ko‘rilmoqda': 'На рассмотрении',
	    'tuzilmalar tasdig‘ida': 'На рассмотрении',
	    tasdiqlanmoqda: 'На утверждении',
	    'boshliq tasdig‘ida': 'На утверждении',
	    tasdiqlangan: 'Подтверждено',
	    tasdiqlandi: 'Подтверждено',
	    'qisman tasdiqlandi': 'Частично подтверждено',
	    'sotib olish kerak': 'Требуется закупка',
	    'sotib olinmoqda': 'В закупке',
	    'rad etildi': 'Отказано'
	  } : {
	    'ko‘rilmoqda': 'Ko‘rilmoqda',
	    'tuzilmalar tasdig‘ida': 'Ko‘rilmoqda',
	    tasdiqlanmoqda: 'Tasdiqlanmoqda',
	    'boshliq tasdig‘ida': 'Tasdiqlanmoqda',
	    tasdiqlangan: 'Tasdiqlangan',
	    tasdiqlandi: 'Tasdiqlangan',
	    'qisman tasdiqlandi': 'Qisman tasdiqlandi',
	    'sotib olish kerak': 'Sotib olish kerak',
	    'sotib olinmoqda': 'Sotib olinmoqda',
	    'rad etildi': 'Rad etildi'
	  };
	  return statusLabels[normalized] || normalizeText(value);
	};
	const getLocalizedStage = (value, language) => {
	  const normalized = String(value || '').trim().toLowerCase();
	  const stageLabels = language === 'ru' ? {
	    tuzilmalar: 'Структуры',
	    monitoring: 'Руководитель',
	    sotib_olish: 'Закупка',
	    yakunlandi: 'Завершено'
	  } : {
	    tuzilmalar: 'Tuzilmalar',
	    monitoring: 'Boshliq',
	    sotib_olish: 'Sotib olish',
	    yakunlandi: 'Yakunlandi'
	  };
	  return stageLabels[normalized] || normalizeText(value);
	};
	const getStatusBadgeStyle = value => {
	  const status = String(value || '').trim().toLowerCase();
	  if (['tasdiqlangan', 'tasdiqlandi'].includes(status)) {
	    return {
	      background: '#dcfce7',
	      color: '#166534'
	    };
	  }
	  if (status === 'qisman tasdiqlandi') {
	    return {
	      background: '#fef3c7',
	      color: '#b45309'
	    };
	  }
	  if (status === 'sotib olish kerak') {
	    return {
	      background: '#dbeafe',
	      color: '#1d4ed8'
	    };
	  }
	  if (status === 'sotib olinmoqda') {
	    return {
	      background: '#ede9fe',
	      color: '#6d28d9'
	    };
	  }
	  if (status === 'rad etildi') {
	    return {
	      background: '#fee2e2',
	      color: '#b91c1c'
	    };
	  }
	  if (['tasdiqlanmoqda', 'boshliq tasdig‘ida', 'monitoring'].includes(status)) {
	    return {
	      background: '#ede9fe',
	      color: '#6d28d9'
	    };
	  }
	  if (status === 'yakunlandi') {
	    return {
	      background: '#e5e7eb',
	      color: '#374151'
	    };
	  }
	  return {
	    background: '#dbeafe',
	    color: '#1d4ed8'
	  };
	};
	const getDecisionMeta = (decision, language) => {
	  const normalized = String(decision || '').trim().toLowerCase();
	  const labels = language === 'ru' ? {
	    tasdiqlangan: 'Подтверждено',
	    tasdiqlandi: 'Подтверждено',
	    'qisman tasdiqlandi': 'Частично подтверждено',
	    'rad etildi': 'Отказано',
	    pending: 'Ожидается',
	    waiting: 'Очередь не подошла'
	  } : {
	    tasdiqlangan: 'Tasdiqlangan',
	    tasdiqlandi: 'Tasdiqlandi',
	    'qisman tasdiqlandi': 'Qisman tasdiqlandi',
	    'rad etildi': 'Rad etildi',
	    pending: 'Kutilmoqda',
	    waiting: 'Navbati kelmagan'
	  };
	  if (['tasdiqlangan', 'tasdiqlandi'].includes(normalized)) {
	    return {
	      symbol: '✓',
	      label: labels[normalized],
	      background: '#dcfce7',
	      color: '#166534'
	    };
	  }
	  if (normalized === 'qisman tasdiqlandi') {
	    return {
	      symbol: '✓',
	      label: labels[normalized],
	      background: '#fef3c7',
	      color: '#b45309'
	    };
	  }
	  if (normalized === 'rad etildi') {
	    return {
	      symbol: '✕',
	      label: labels[normalized],
	      background: '#fee2e2',
	      color: '#b91c1c'
	    };
	  }
	  if (normalized === 'waiting') {
	    return {
	      symbol: '•',
	      label: labels.waiting,
	      background: '#f1f5f9',
	      color: '#475569'
	    };
	  }
	  return {
	    symbol: '…',
	    label: labels.pending,
	    background: '#dbeafe',
	    color: '#1d4ed8'
	  };
	};
	const getApprovalRows = (params, language) => {
	  const selectedUsers = parseArray(params.selectedUsers).map(item => String(item));
	  const selectedNames = splitNames(params.selectedUserNames);
	  const structureApprovals = parseArray(params.structureApprovals);
	  const approvalHistory = parseArray(params.approvalHistory);
	  const currentCycleHistory = getCurrentCycleHistory(approvalHistory);
	  const approvalMap = new Map();
	  structureApprovals.forEach((item, index) => {
	    approvalMap.set(String(item?.userId || `idx-${index}`), item);
	  });
	  const rows = (selectedUsers.length ? selectedUsers : selectedNames).map((item, index) => {
	    const userId = selectedUsers[index] || `idx-${index}`;
	    const approval = approvalMap.get(userId) || (selectedUsers.length ? null : structureApprovals[index]);
	    return {
	      index: index + 1,
	      role: language === 'ru' ? 'Структура' : 'Tuzilma',
	      name: approval?.userName ? normalizeText(approval.userName) : selectedNames[index] || normalizeText(item),
	      meta: getDecisionMeta(approval?.decision || 'pending', language),
	      comment: normalizeText(approval?.comment),
	      date: formatDateTime(approval?.decidedAt)
	    };
	  });
	  const approverEntry = [...currentCycleHistory].reverse().find(item => String(item?.stage || '').toLowerCase() === 'monitoring' || String(item?.role || '').toLowerCase() === 'monitoring');
	  const normalizedStatus = String(params.status || '').toLowerCase();
	  const hasStructureRejection = structureApprovals.some(item => String(item?.decision || '').toLowerCase() === 'rad etildi');
	  let approverState = 'waiting';
	  if (approverEntry?.decision) {
	    approverState = approverEntry.decision;
	  } else if (['tasdiqlangan', 'tasdiqlandi', 'qisman tasdiqlandi'].includes(normalizedStatus)) {
	    approverState = normalizedStatus;
	  } else if (normalizedStatus === 'rad etildi' && !hasStructureRejection) {
	    approverState = normalizedStatus;
	  } else if (String(params.currentStage || '').toLowerCase() === 'monitoring' || normalizedStatus === 'tasdiqlanmoqda') {
	    approverState = 'pending';
	  }
	  rows.push({
	    index: rows.length + 1,
	    role: language === 'ru' ? 'Руководитель' : 'Boshliq',
	    name: normalizeText(params.approverName),
	    meta: getDecisionMeta(approverState, language),
	    comment: normalizeText(approverEntry?.comment),
	    date: formatDateTime(approverEntry?.decidedAt)
	  });
	  return rows;
	};
	const cardStyle$4 = {
	  padding: '18px 20px',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff',
	  boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)'
	};
	const PurchaseRequestShow = props => {
	  const {
	    record
	  } = props;
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const params = record?.params || {};
	  const createdBy = record?.populated?.createdBy?.params?.username || params.createdBy;
	  const items = parseItems(params.items);
	  const structureNames = splitNames(params.selectedUserNames);
	  const approvalRows = getApprovalRows(params, language);
	  const buyerOrder = parseBuyerOrderData(params.buyerOrderData);
	  const buyerDocuments = parseArray(buyerOrder.documents);
	  const originalItems = parseItems(buyerOrder.originalItems);
	  const statusStyle = getStatusBadgeStyle(params.status);
	  const stageStyle = getStatusBadgeStyle(params.currentStage);
	  const text = language === 'ru' ? {
	    title: 'Подробности заявки',
	    requestNo: 'Номер заявки',
	    status: 'Статус',
	    stage: 'Этап',
	    creator: 'Создал заявку',
	    createdAt: 'Дата создания',
	    updatedAt: 'Дата обновления',
	    structures: 'Выбранные структуры',
	    approver: 'Руководитель / мониторинг',
	    comment: 'Комментарий к заявке',
	    lastComment: 'Последний комментарий',
	    items: 'Детали товаров',
	    tableApproval: 'Таблица согласования',
	    role: 'Роль',
	    name: 'Название',
	    mark: 'Знак',
	    decision: 'Решение',
	    commentCol: 'Комментарий',
	    time: 'Время',
	    product: 'Товар',
	    features: 'Характеристика',
	    unit: 'Ед.',
	    qty: 'Кол-во',
	    procurement: 'Данные закупки',
	    supplier: 'Откуда закупается',
	    documents: 'Документы',
	    savedBy: 'Последнее сохранение',
	    originalItems: 'Первоначальные товары',
	    changeNotice: 'Уведомление об изменении'
	  } : {
	    title: 'Ariza tafsiloti',
	    requestNo: 'Ariza raqami',
	    status: 'Holati',
	    stage: 'Bosqichi',
	    creator: 'Arizani yaratgan',
	    createdAt: 'Yaratilgan sana',
	    updatedAt: 'Yangilangan sana',
	    structures: 'Tanlangan tuzilmalar',
	    approver: 'Boshliq / monitoring',
	    comment: 'Ariza izohi',
	    lastComment: 'Oxirgi izoh',
	    items: 'Tovar tafsiloti',
	    tableApproval: 'Tasdiqlash jadvali',
	    role: 'Rol',
	    name: 'Nomi',
	    mark: 'Belgi',
	    decision: 'Qaror',
	    commentCol: 'Izoh',
	    time: 'Vaqti',
	    product: 'Tovar',
	    features: 'Xususiyati',
	    unit: 'Birligi',
	    qty: 'Soni',
	    procurement: 'Buyurtma ma’lumotlari',
	    supplier: 'Qayerdan olinmoqda',
	    documents: 'Hujjatlar',
	    savedBy: 'Oxirgi saqlovchi',
	    originalItems: 'Eski tovar ma’lumotlari',
	    changeNotice: 'O‘zgarish haqida xabar'
	  };
	  return /*#__PURE__*/React.createElement(designSystem.Box, {
	    variant: "grey"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl",
	    boxShadow: "card",
	    style: {
	      width: '100%'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.H2, {
	    mb: "xl"
	  }, text.title), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	      gap: '12px',
	      marginBottom: '18px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.requestNo), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    fontWeight: "bold"
	  }, getRequestNumber(params, record))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.status), /*#__PURE__*/React.createElement("span", {
	    style: {
	      ...statusStyle,
	      display: 'inline-block',
	      marginTop: '8px',
	      padding: '6px 10px',
	      borderRadius: '999px',
	      fontWeight: 700
	    }
	  }, getLocalizedStatus(params.status, language))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.stage), /*#__PURE__*/React.createElement("span", {
	    style: {
	      ...stageStyle,
	      display: 'inline-block',
	      marginTop: '8px',
	      padding: '6px 10px',
	      borderRadius: '999px',
	      fontWeight: 700
	    }
	  }, getLocalizedStage(params.currentStage, language))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.creator), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, normalizeText(createdBy)))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.structures), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	      gap: '10px'
	    }
	  }, structureNames.length ? structureNames.map(name => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: name,
	    style: {
	      padding: '10px 12px',
	      borderRadius: '10px',
	      background: '#eff6ff',
	      border: '1px solid #bfdbfe'
	    }
	  }, name)) : /*#__PURE__*/React.createElement(designSystem.Text, null, "\u2014"))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.approver), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    fontWeight: "bold"
	  }, normalizeText(params.approverName))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px',
	      whiteSpace: 'pre-wrap',
	      wordBreak: 'break-word'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.comment), /*#__PURE__*/React.createElement(designSystem.Text, null, normalizeText(params.comment))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.items), /*#__PURE__*/React.createElement("div", {
	    style: {
	      width: '100%',
	      overflowX: 'auto'
	    }
	  }, /*#__PURE__*/React.createElement("table", {
	    style: {
	      width: '100%',
	      borderCollapse: 'collapse'
	    }
	  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, "#"), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.product), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.features), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.unit), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.qty))), /*#__PURE__*/React.createElement("tbody", null, items.map((item, index) => /*#__PURE__*/React.createElement("tr", {
	    key: `${item.productName}-${index}`
	  }, /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, index + 1), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.productName)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.features)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.unit)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.quantity)))))))), originalItems.length ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.originalItems), /*#__PURE__*/React.createElement("div", {
	    style: {
	      width: '100%',
	      overflowX: 'auto'
	    }
	  }, /*#__PURE__*/React.createElement("table", {
	    style: {
	      width: '100%',
	      borderCollapse: 'collapse'
	    }
	  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, "#"), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.product), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.features), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.unit), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.qty))), /*#__PURE__*/React.createElement("tbody", null, originalItems.map((item, index) => /*#__PURE__*/React.createElement("tr", {
	    key: `original-${item.productName}-${index}`
	  }, /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, index + 1), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.productName)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.features)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.unit)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, normalizeText(item.quantity)))))))) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.procurement), /*#__PURE__*/React.createElement(designSystem.Text, null, /*#__PURE__*/React.createElement("strong", null, text.supplier, ":"), ' ', normalizeText(buyerOrder.supplierName)), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, /*#__PURE__*/React.createElement("strong", null, text.savedBy, ":"), " ", normalizeText(buyerOrder.savedBy), ' ', buyerOrder.savedAt ? `(${formatDateTime(buyerOrder.savedAt)})` : ''), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, text.documents), buyerDocuments.length ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '8px'
	    }
	  }, buyerDocuments.map((document, index) => /*#__PURE__*/React.createElement("a", {
	    key: `${document?.url || document?.name || 'doc'}-${index}`,
	    href: document?.url || '#',
	    target: "_blank",
	    rel: "noreferrer"
	  }, normalizeText(document?.name || document?.fileName)))) : /*#__PURE__*/React.createElement(designSystem.Text, null, "\u2014"))), buyerOrder.changeNote ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px',
	      background: '#fff7ed',
	      border: '1px solid #fdba74'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, text.changeNotice), /*#__PURE__*/React.createElement(designSystem.Text, null, buyerOrder.changeNote)) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$4,
	      marginBottom: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.tableApproval), /*#__PURE__*/React.createElement("div", {
	    style: {
	      width: '100%',
	      overflowX: 'auto'
	    }
	  }, /*#__PURE__*/React.createElement("table", {
	    style: {
	      width: '100%',
	      borderCollapse: 'collapse'
	    }
	  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, "#"), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.role), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.name), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.mark), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.decision), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.commentCol), /*#__PURE__*/React.createElement("th", {
	    style: {
	      textAlign: 'left',
	      padding: '10px 12px',
	      background: '#f8fafc',
	      borderBottom: '1px solid #e5e7eb'
	    }
	  }, text.time))), /*#__PURE__*/React.createElement("tbody", null, approvalRows.map(row => /*#__PURE__*/React.createElement("tr", {
	    key: `${row.role}-${row.index}-${row.name}`
	  }, /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, row.index), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, row.role), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7',
	      minWidth: '180px'
	    }
	  }, row.name), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, /*#__PURE__*/React.createElement("span", {
	    style: {
	      display: 'inline-flex',
	      width: '24px',
	      height: '24px',
	      alignItems: 'center',
	      justifyContent: 'center',
	      borderRadius: '999px',
	      background: row.meta.background,
	      color: row.meta.color,
	      fontWeight: 800
	    }
	  }, row.meta.symbol)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7'
	    }
	  }, /*#__PURE__*/React.createElement("span", {
	    style: {
	      display: 'inline-block',
	      padding: '4px 9px',
	      borderRadius: '999px',
	      background: row.meta.background,
	      color: row.meta.color,
	      fontWeight: 700
	    }
	  }, row.meta.label)), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7',
	      minWidth: '220px',
	      whiteSpace: 'pre-wrap',
	      wordBreak: 'break-word'
	    }
	  }, row.comment), /*#__PURE__*/React.createElement("td", {
	    style: {
	      padding: '10px 12px',
	      borderBottom: '1px solid #eef2f7',
	      whiteSpace: 'nowrap'
	    }
	  }, row.date))))))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	      gap: '12px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.createdAt), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, formatDateTime(params.createdAt))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.updatedAt), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, formatDateTime(params.updatedAt))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$4
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.lastComment), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, normalizeText(params.lastComment))))));
	};

	const api$3 = new adminjs.ApiClient();
	const inputStyle$2 = {
	  width: '100%',
	  maxWidth: '100%',
	  boxSizing: 'border-box',
	  padding: '10px 12px',
	  borderRadius: '10px',
	  border: '1px solid #cbd5e1',
	  fontSize: '14px',
	  fontFamily: 'inherit',
	  background: '#ffffff'
	};
	const textAreaStyle = {
	  ...inputStyle$2,
	  minHeight: '92px',
	  resize: 'vertical'
	};
	const cardStyle$3 = {
	  padding: '18px',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const newBadgeStyle = {
	  display: 'inline-flex',
	  alignItems: 'center',
	  padding: '2px 10px',
	  borderRadius: '999px',
	  background: '#dcfce7',
	  color: '#166534',
	  fontSize: '12px',
	  fontWeight: 700
	};
	const queueTypeBadgeStyle = {
	  display: 'inline-flex',
	  alignItems: 'center',
	  gap: '6px',
	  padding: '4px 9px',
	  borderRadius: '999px',
	  fontSize: '11px',
	  fontWeight: 700,
	  border: '1px solid transparent',
	  whiteSpace: 'nowrap',
	  lineHeight: 1
	};
	const statusDotStyle = color => ({
	  width: '7px',
	  height: '7px',
	  borderRadius: '999px',
	  background: color,
	  flexShrink: 0
	});
	const PAGE_SIZE$2 = 20;
	const tableWrapStyle$3 = {
	  overflowX: 'auto',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const tableStyle$3 = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  minWidth: '860px'
	};
	const tableHeadCellStyle$3 = {
	  padding: '12px 14px',
	  textAlign: 'left',
	  fontSize: '12px',
	  fontWeight: 700,
	  color: '#475569',
	  background: '#f8fafc',
	  borderBottom: '1px solid #e5e7eb',
	  whiteSpace: 'nowrap'
	};
	const tableCellStyle$3 = {
	  padding: '12px 14px',
	  fontSize: '14px',
	  color: '#0f172a',
	  borderBottom: '1px solid #eef2f7',
	  verticalAlign: 'top'
	};
	const rowInteractiveStyle$2 = {
	  cursor: 'pointer',
	  transition: 'background 0.15s ease'
	};
	const detailGridStyle = {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	  gap: '12px'
	};
	const createDocumentRow = document => ({
	  id: String(document?.id || '').trim() || `doc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	  name: String(document?.name || '').trim(),
	  fileName: String(document?.fileName || '').trim(),
	  url: String(document?.url || '').trim(),
	  mimeType: String(document?.mimeType || '').trim(),
	  content: ''
	});
	const toDataUrl = file => new Promise((resolve, reject) => {
	  const reader = new FileReader();
	  reader.onload = () => resolve(String(reader.result || ''));
	  reader.onerror = () => reject(new Error('Faylni o‘qib bo‘lmadi'));
	  reader.readAsDataURL(file);
	});
	const formatDate$3 = value => {
	  if (!value) {
	    return '—';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return value;
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const GENERIC_VALIDATION_NOTICE = 'thereWereValidationErrors';
	const extractWorkspaceMessage = (data, fallbackMessage = '') => {
	  const fieldMessages = Object.values(data?.record?.errors || {}).map(error => String(error?.message || '').trim()).filter(Boolean);
	  const baseErrorMessage = String(data?.record?.baseError?.message || '').trim();
	  const noticeMessage = String(data?.notice?.message || '').trim();
	  const messages = [...new Set([baseErrorMessage, ...fieldMessages].filter(Boolean))];
	  if (messages.length) {
	    return messages.join('. ');
	  }
	  if (noticeMessage && noticeMessage !== GENERIC_VALIDATION_NOTICE) {
	    return noticeMessage;
	  }
	  return fallbackMessage;
	};
	const normalizeOrderDocuments = documents => documents.map(document => ({
	  name: String(document?.name || '').trim(),
	  fileName: String(document?.fileName || '').trim(),
	  url: String(document?.url || '').trim(),
	  mimeType: String(document?.mimeType || '').trim(),
	  content: String(document?.content || '').trim()
	})).filter(document => document.name || document.fileName || document.url || document.content);
	const getClientValidationMessage = ({
	  requestId,
	  supplierName,
	  items,
	  documents
	}) => {
	  if (!String(requestId || '').trim()) {
	    return 'Avval ariza ID sini tanlang';
	  }
	  if (!String(supplierName || '').trim()) {
	    return 'Qayerdan olinayotganini kiriting';
	  }
	  const validItems = items.filter(item => String(item?.productName || '').trim());
	  if (!validItems.length) {
	    return 'Kamida bitta tovar nomini kiriting';
	  }
	  if (documents.some(document => !String(document?.name || '').trim())) {
	    return 'Har bir hujjatga nom kiriting';
	  }
	  return '';
	};
	const PurchaseOrderWorkspace = () => {
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const addNotice = adminjs.useNotice();
	  const [records, setRecords] = react.useState([]);
	  const [orderedRecords, setOrderedRecords] = react.useState([]);
	  const [availableUnits, setAvailableUnits] = react.useState(['dona']);
	  const [selectedRequestId, setSelectedRequestId] = react.useState('');
	  const [loading, setLoading] = react.useState(true);
	  const [saving, setSaving] = react.useState(false);
	  const [items, setItems] = react.useState([]);
	  const [supplierName, setSupplierName] = react.useState('');
	  const [documents, setDocuments] = react.useState([createDocumentRow()]);
	  const [showCreateForm, setShowCreateForm] = react.useState(false);
	  const [currentPage, setCurrentPage] = react.useState(1);
	  const [searchText, setSearchText] = react.useState('');
	  const canView = ['admin', 'monitoring', 'sotib_oluvchi'].includes(currentAdmin?.role);
	  const canEdit = ['admin', 'sotib_oluvchi'].includes(currentAdmin?.role);
	  const applySeenState = (list, requestId) => list.map(record => record.id === requestId ? {
	    ...record,
	    buyerOrderData: {
	      ...(record?.buyerOrderData || {}),
	      isNew: false,
	      lastViewedAt: new Date().toISOString(),
	      lastViewedBy: currentAdmin?.title || currentAdmin?.organizationName || currentAdmin?.username || '',
	      lastViewedRole: currentAdmin?.role || ''
	    }
	  } : record);
	  const markRecordSeen = async requestId => {
	    if (!canEdit || !requestId) {
	      return;
	    }
	    const targetRecord = [...records, ...orderedRecords].find(record => record.id === requestId);
	    if (targetRecord && !targetRecord?.buyerOrderData?.isNew) {
	      return;
	    }
	    try {
	      await api$3.recordAction({
	        resourceId: 'PurchaseBuyerQueue',
	        recordId: requestId,
	        actionName: 'markBuyerNotificationSeen',
	        data: {}
	      });
	      setRecords(currentRecords => applySeenState(currentRecords, requestId));
	      setOrderedRecords(currentRecords => applySeenState(currentRecords, requestId));
	    } catch {
	      // no-op: badge is informational and should not interrupt the workflow
	    }
	  };
	  const openRequest = async record => {
	    if (!record?.id) {
	      return;
	    }
	    await markRecordSeen(record.id);
	    if (typeof window !== 'undefined') {
	      window.location.assign(`/admin/resources/PurchaseOrderWorkspace?recordId=${record.id}`);
	    }
	  };
	  const applyRecord = record => {
	    if (!record) {
	      setItems([]);
	      setSupplierName('');
	      setDocuments([createDocumentRow()]);
	      return;
	    }
	    const savedItems = Array.isArray(record?.buyerOrderData?.items) ? record.buyerOrderData.items : [];
	    const nextItems = (savedItems.length ? savedItems : record.items || []).map(item => ({
	      productName: String(item?.productName || '').trim(),
	      features: String(item?.features || '').trim(),
	      unit: String(item?.unit || availableUnits[0] || 'dona').trim(),
	      quantity: Math.max(1, Number(item?.quantity || 1))
	    }));
	    const savedDocuments = Array.isArray(record?.buyerOrderData?.documents) ? record.buyerOrderData.documents : [];
	    setItems(nextItems);
	    setSupplierName(String(record?.buyerOrderData?.supplierName || '').trim());
	    setDocuments(savedDocuments.length ? savedDocuments.map(document => createDocumentRow(document)) : [createDocumentRow()]);
	  };
	  const loadWorkspace = async preferredRequestId => {
	    setLoading(true);
	    try {
	      const response = await api$3.resourceAction({
	        resourceId: 'PurchaseBuyerQueue',
	        actionName: 'buyerWorkspace'
	      });
	      const nextRecords = response?.data?.records || [];
	      const nextOrderedRecords = response?.data?.orderedRecords || [];
	      const nextUnits = response?.data?.availableUnits || ['dona'];
	      const queueRecords = [...nextRecords, ...nextOrderedRecords];
	      const resolvedRequestId = preferredRequestId && queueRecords.some(record => record.id === preferredRequestId) ? preferredRequestId : selectedRequestId && queueRecords.some(record => record.id === selectedRequestId) ? selectedRequestId : '';
	      setAvailableUnits(nextUnits);
	      setRecords(nextRecords);
	      setOrderedRecords(nextOrderedRecords);
	      setSelectedRequestId(resolvedRequestId);
	      if (preferredRequestId) {
	        setShowCreateForm(true);
	      }
	      if (resolvedRequestId) {
	        const resolvedRecord = queueRecords.find(record => record.id === resolvedRequestId) || null;
	        applyRecord(resolvedRecord);
	        if (preferredRequestId && resolvedRecord?.buyerOrderData?.isNew) {
	          void markRecordSeen(resolvedRequestId);
	        }
	      } else {
	        applyRecord(null);
	      }
	    } catch (error) {
	      setRecords([]);
	      setOrderedRecords([]);
	      setSelectedRequestId('');
	      applyRecord(null);
	      addNotice({
	        message: extractWorkspaceMessage(error?.response?.data, 'Buyurtma sahifasi ma’lumotlarini yuklab bo‘lmadi'),
	        type: 'error'
	      });
	    } finally {
	      setLoading(false);
	    }
	  };
	  react.useEffect(() => {
	    const initialRequestId = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('recordId') || '' : '';
	    loadWorkspace(initialRequestId);
	  }, []);
	  const combinedRecords = react.useMemo(() => {
	    const recordMap = new Map();
	    [...records, ...orderedRecords].forEach(record => {
	      if (record?.id) {
	        recordMap.set(record.id, record);
	      }
	    });
	    const getTimestamp = record => {
	      const value = record?.buyerOrderData?.notificationUpdatedAt || record?.buyerOrderData?.savedAt || record?.updatedAt || record?.createdAt || 0;
	      const parsed = new Date(value).getTime();
	      return Number.isNaN(parsed) ? 0 : parsed;
	    };
	    return Array.from(recordMap.values()).sort((left, right) => getTimestamp(right) - getTimestamp(left));
	  }, [records, orderedRecords]);
	  const filteredRecords = react.useMemo(() => {
	    const query = String(searchText || '').trim().toLowerCase();
	    if (!query) {
	      return combinedRecords;
	    }
	    return combinedRecords.filter(record => {
	      const itemText = (record?.items || []).map(item => `${item?.productName || ''} ${item?.features || ''}`).join(' ');
	      const searchableText = [record?.requestNumber, record?.status, record?.selectedUserNames, record?.buyerOrderData?.supplierName, itemText].join(' ').toLowerCase();
	      return searchableText.includes(query);
	    });
	  }, [combinedRecords, searchText]);
	  const allQueueRecords = react.useMemo(() => combinedRecords, [combinedRecords]);
	  const selectedRecord = react.useMemo(() => allQueueRecords.find(record => record.id === selectedRequestId) || null, [allQueueRecords, selectedRequestId]);
	  const selectedRecordIsDispatched = Boolean(String(selectedRecord?.warehouseDispatchData?.dispatchedAt || '').trim());
	  const canEditSelectedRecord = canEdit && !selectedRecordIsDispatched;
	  react.useEffect(() => {
	    const totalPages = Math.max(1, Math.ceil(filteredRecords.length / PAGE_SIZE$2));
	    setCurrentPage(current => Math.min(current, totalPages));
	  }, [filteredRecords.length]);
	  const updateItem = (index, field, value) => {
	    setItems(currentItems => currentItems.map((item, currentIndex) => currentIndex === index ? {
	      ...item,
	      [field]: field === 'quantity' ? Math.max(1, Number(value || 1)) : value
	    } : item));
	  };
	  const updateDocument = (index, field, value) => {
	    setDocuments(currentDocuments => currentDocuments.map((document, currentIndex) => currentIndex === index ? {
	      ...document,
	      [field]: value
	    } : document));
	  };
	  const handleCloseNewOrder = () => {
	    setShowCreateForm(false);
	    setSelectedRequestId('');
	    if (typeof window !== 'undefined') {
	      window.location.assign('/admin/resources/PurchaseOrderWorkspace');
	    }
	  };
	  const handleFileChange = async (index, event) => {
	    if (!canEditSelectedRecord) {
	      return;
	    }
	    const file = event.target.files?.[0];
	    if (!file) {
	      return;
	    }
	    try {
	      const content = await toDataUrl(file);
	      setDocuments(currentDocuments => currentDocuments.map((document, currentIndex) => currentIndex === index ? {
	        ...document,
	        fileName: file.name,
	        mimeType: file.type,
	        content
	      } : document));
	    } catch (error) {
	      addNotice({
	        message: error.message || 'Faylni yuklashda xatolik bo‘ldi',
	        type: 'error'
	      });
	    }
	  };
	  const addDocumentRow = () => {
	    if (!canEditSelectedRecord) {
	      return;
	    }
	    setDocuments(currentDocuments => [...currentDocuments, createDocumentRow()]);
	  };
	  const removeDocumentRow = index => {
	    if (!canEditSelectedRecord) {
	      return;
	    }
	    setDocuments(currentDocuments => {
	      const nextDocuments = currentDocuments.filter((_, currentIndex) => currentIndex !== index);
	      return nextDocuments.length ? nextDocuments : [createDocumentRow()];
	    });
	  };
	  const saveOrder = async () => {
	    if (!canEditSelectedRecord) {
	      if (selectedRecordIsDispatched) {
	        addNotice({
	          message: 'Bu buyurtma omborga jo‘natilgan. Endi bu yerda faqat ko‘rish mumkin.',
	          type: 'info'
	        });
	      }
	      return;
	    }
	    const normalizedDocuments = normalizeOrderDocuments(documents);
	    const validationMessage = getClientValidationMessage({
	      requestId: selectedRequestId,
	      supplierName,
	      items,
	      documents: normalizedDocuments
	    });
	    if (validationMessage) {
	      addNotice({
	        message: validationMessage,
	        type: 'error'
	      });
	      return;
	    }
	    setSaving(true);
	    try {
	      const response = await api$3.resourceAction({
	        resourceId: 'PurchaseBuyerQueue',
	        actionName: 'buyerWorkspace',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        data: {
	          requestId: selectedRequestId,
	          supplierName: supplierName.trim(),
	          items,
	          documents: normalizedDocuments
	        }
	      });
	      const responseNotice = response?.data?.notice;
	      const responseMessage = extractWorkspaceMessage(response?.data);
	      if (responseNotice?.type === 'error') {
	        addNotice({
	          ...responseNotice,
	          message: responseMessage || 'Buyurtma ma’lumotlarini tekshirib, qayta saqlang'
	        });
	        return;
	      }
	      if (responseNotice) {
	        addNotice({
	          ...responseNotice,
	          message: responseMessage || responseNotice.message
	        });
	      }
	      setShowCreateForm(false);
	      await loadWorkspace('');
	    } catch (error) {
	      addNotice({
	        message: extractWorkspaceMessage(error?.response?.data, 'Buyurtma ma’lumotlarini saqlab bo‘lmadi'),
	        type: 'error'
	      });
	    } finally {
	      setSaving(false);
	    }
	  };
	  const renderQueueTable = ({
	    rows,
	    emptyText
	  }) => {
	    if (!rows.length) {
	      return /*#__PURE__*/React.createElement(designSystem.Text, {
	        color: "grey60"
	      }, emptyText);
	    }
	    const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE$2));
	    const safePage = Math.min(currentPage, totalPages);
	    const startIndex = (safePage - 1) * PAGE_SIZE$2;
	    const paginatedRows = rows.slice(startIndex, startIndex + PAGE_SIZE$2);
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      style: tableWrapStyle$3
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$3
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$3
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$3
	    }, "Status"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$3
	    }, "Ariza"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$3
	    }, "Tuzilmalar"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$3
	    }, "Tovar / manba"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$3
	    }, "Sana"))), /*#__PURE__*/React.createElement("tbody", null, paginatedRows.map((record, index) => {
	      const rowDate = record?.buyerOrderData?.notificationUpdatedAt || record?.buyerOrderData?.savedAt || record?.updatedAt || record?.createdAt;
	      const hasSavedOrder = Boolean(record?.buyerOrderData?.savedAt || record?.buyerOrderData?.supplierName || Array.isArray(record?.buyerOrderData?.items) && record.buyerOrderData.items.length);
	      const typeMeta = hasSavedOrder ? {
	        label: 'Qilingan',
	        dotColor: '#0057d9',
	        style: {
	          ...queueTypeBadgeStyle,
	          background: '#eff6ff',
	          color: '#0057d9',
	          borderColor: '#b7d3ff'
	        }
	      } : {
	        label: 'Qilinmagan',
	        dotColor: '#dc2626',
	        style: {
	          ...queueTypeBadgeStyle,
	          background: '#fef2f2',
	          color: '#dc2626',
	          borderColor: '#fecaca'
	        }
	      };
	      return /*#__PURE__*/React.createElement("tr", {
	        key: record.id,
	        onClick: () => void openRequest(record),
	        style: selectedRequestId === record.id ? {
	          ...rowInteractiveStyle$2,
	          background: '#f8fbff'
	        } : rowInteractiveStyle$2
	      }, /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$3
	      }, startIndex + index + 1), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$3
	      }, /*#__PURE__*/React.createElement(designSystem.Box, {
	        display: "flex",
	        flexDirection: "column",
	        gap: "xs"
	      }, /*#__PURE__*/React.createElement(designSystem.Box, {
	        as: "span",
	        style: typeMeta.style
	      }, /*#__PURE__*/React.createElement("span", {
	        style: statusDotStyle(typeMeta.dotColor)
	      }), /*#__PURE__*/React.createElement("span", null, typeMeta.label)), record?.buyerOrderData?.isNew ? /*#__PURE__*/React.createElement(designSystem.Box, {
	        as: "span",
	        style: newBadgeStyle
	      }, "Yangi") : null)), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$3
	      }, /*#__PURE__*/React.createElement(designSystem.Text, {
	        fontWeight: "bold"
	      }, record.requestNumber || record.id), /*#__PURE__*/React.createElement(designSystem.Text, {
	        mt: "xs",
	        color: "grey60"
	      }, record.status || '—')), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$3
	      }, record.selectedUserNames || '—'), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$3
	      }, /*#__PURE__*/React.createElement(designSystem.Text, null, record?.buyerOrderData?.supplierName ? `Manba: ${record.buyerOrderData.supplierName}` : `${record?.items?.length || 0} ta tovar`)), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$3
	      }, formatDate$3(rowDate)));
	    })))), totalPages > 1 ? /*#__PURE__*/React.createElement(designSystem.Text, {
	      mt: "xl",
	      textAlign: "center"
	    }, /*#__PURE__*/React.createElement(designSystem.Pagination, {
	      page: safePage,
	      perPage: PAGE_SIZE$2,
	      total: rows.length,
	      onChange: page => setCurrentPage(page)
	    })) : null);
	  };
	  if (!canView) {
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      bg: "white",
	      p: "xxl",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.H2, null, "Buyurtma qilish"), /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	      variant: "danger",
	      mt: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, null, "Bu bo\u2018lim sizning rolingiz uchun yopiq."))));
	  }
	  return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, "Buyurtma qilish"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey60"
	  }, "Jadval qatorini bossangiz, tanlangan ariza uchun buyurtma ish oynasi ochiladi. Buyurtma saqlangandan keyin uni alohida", ' ', /*#__PURE__*/React.createElement("strong", null, "Buyurtmani jo\u2018natish"), " sahifasidan omborga yuborasiz."), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'flex',
	      flexWrap: 'wrap',
	      gap: '16px 18px',
	      marginTop: '16px',
	      marginBottom: '20px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseDispatchWorkspace",
	    variant: "outlined",
	    style: {
	      minWidth: '170px',
	      justifyContent: 'center'
	    }
	  }, "Buyurtmani jo\u2018natish"), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/WarehouseOverview",
	    variant: "outlined",
	    style: {
	      minWidth: '170px',
	      justifyContent: 'center'
	    }
	  }, "Omborlar")), loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, "Ma\u2019lumotlar yuklanmoqda...") : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, showCreateForm ? null : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold"
	  }, "Barcha buyurtmalar"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "xs",
	    color: "grey60"
	  }, searchText.trim() ? `Filter natijasida ${filteredRecords.length} ta buyurtma topildi.` : combinedRecords.length ? `Yangi, navbatdagi va saqlangan buyurtmalar bir jadvalda ${filteredRecords.length} ta holatda ko‘rinmoqda.` : 'Hozircha buyurtma va arizalar yo‘q.')), combinedRecords.length ? /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, "Qizil \u2014 buyurtma qilinmagan, ko\u2018k \u2014 buyurtma qilingan") : null), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: searchText,
	    onChange: event => {
	      setSearchText(event.target.value);
	      setCurrentPage(1);
	    },
	    placeholder: "Ariza, tuzilma, manba yoki tovar nomi bo\u2018yicha filter",
	    style: {
	      ...inputStyle$2,
	      marginTop: '16px'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderQueueTable({
	    rows: filteredRecords,
	    emptyText: searchText.trim() ? 'Filter bo‘yicha buyurtma topilmadi.' : 'Buyurtmalar hali yo‘q.'
	  }))), showCreateForm ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold"
	  }, "Tanlangan ariza detali"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "xs",
	    color: "grey60"
	  }, "Tovarlar, manba va hujjatlar shu blok ichida aniq ko\u2018rinadi.")), /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    gap: "default",
	    flexWrap: "wrap"
	  }, selectedRecord?.buyerOrderData?.isNew ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    as: "span",
	    style: newBadgeStyle
	  }, "Yangi") : null, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    variant: "outlined",
	    size: "sm",
	    onClick: handleCloseNewOrder
	  }, "Ro\u2018yxatga qaytish")))), selectedRecord ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: detailGridStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Ariza raqami"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord.requestNumber || '—')), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Holati"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord.status || '—')), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Tuzilmalar"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord.selectedUserNames || '—')), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Manba"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord?.buyerOrderData?.supplierName || 'Kiritilmagan'))), selectedRecordIsDispatched ? /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, "Bu buyurtma", ' ', /*#__PURE__*/React.createElement("strong", null, selectedRecord?.warehouseDispatchData?.warehouseName || 'ombor'), ' ', "ga", ' ', formatDate$3(selectedRecord?.warehouseDispatchData?.dispatchedAt), "da jo\u2018natilgan. Bu yerda endi faqat ko\u2018rish mumkin.")) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, "Tovar haqida ma\u2019lumotlar"), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '14px'
	    }
	  }, items.map((item, index) => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: `${selectedRequestId}-item-${index}`,
	    p: "lg",
	    style: {
	      border: '1px solid #dbe3f0',
	      borderRadius: '12px',
	      background: '#f8fbff'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "default"
	  }, "Tovar #", index + 1), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '10px'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: item.productName || '',
	    onChange: event => updateItem(index, 'productName', event.target.value),
	    style: inputStyle$2,
	    disabled: !canEditSelectedRecord,
	    placeholder: "Tovar nomi"
	  }), /*#__PURE__*/React.createElement("textarea", {
	    value: item.features || '',
	    onChange: event => updateItem(index, 'features', event.target.value),
	    style: textAreaStyle,
	    disabled: !canEditSelectedRecord,
	    placeholder: "Xususiyatlari"
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
	      gap: '10px'
	    }
	  }, /*#__PURE__*/React.createElement("select", {
	    value: item.unit || 'dona',
	    onChange: event => updateItem(index, 'unit', event.target.value),
	    style: inputStyle$2,
	    disabled: !canEditSelectedRecord
	  }, availableUnits.map(unit => /*#__PURE__*/React.createElement("option", {
	    key: unit,
	    value: unit
	  }, unit))), /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    min: "1",
	    value: item.quantity ?? 1,
	    onChange: event => updateItem(index, 'quantity', event.target.value),
	    style: inputStyle$2,
	    disabled: !canEditSelectedRecord,
	    placeholder: "Soni"
	  }))))))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: true
	  }, "Qayerdan olinmoqda"), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: supplierName,
	    onChange: event => setSupplierName(event.target.value),
	    style: {
	      ...inputStyle$2,
	      marginTop: '8px'
	    },
	    disabled: !canEditSelectedRecord,
	    placeholder: "Masalan: Artel servis, Texnomart, mahalliy bozordan"
	  })), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$3
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, "Hujjatlar"), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '14px'
	    }
	  }, documents.map((document, index) => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: document.id,
	    p: "lg",
	    style: {
	      border: '1px solid #dbe3f0',
	      borderRadius: '12px',
	      background: '#f8fbff'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: document.name,
	    onChange: event => updateDocument(index, 'name', event.target.value),
	    style: inputStyle$2,
	    disabled: !canEditSelectedRecord,
	    placeholder: "Hujjat nomi"
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "file",
	    onChange: event => handleFileChange(index, event),
	    style: {
	      marginTop: '10px',
	      maxWidth: '100%'
	    },
	    disabled: !canEditSelectedRecord
	  }), document.fileName ? /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, "Tanlangan fayl: ", document.fileName) : null, document.url ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "sm"
	  }, /*#__PURE__*/React.createElement("a", {
	    href: document.url,
	    target: "_blank",
	    rel: "noreferrer"
	  }, "Oldingi yuklangan hujjatni ochish")) : null, canEdit ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "default"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    variant: "outlined",
	    size: "sm",
	    onClick: () => removeDocumentRow(index)
	  }, "Qatorni olib tashlash")) : null))), canEdit ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg",
	    display: "flex",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    variant: "outlined",
	    onClick: addDocumentRow,
	    disabled: !canEditSelectedRecord
	  }, "+ Hujjat qo\u2018shish")) : null), canEdit ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    onClick: saveOrder,
	    disabled: saving || !canEditSelectedRecord
	  }, selectedRecordIsDispatched ? 'Omborga jo‘natilgan' : saving ? 'Saqlanmoqda...' : 'Saqlash')) : null) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, "Jadvaldan ariza tanlang."))) : null)));
	};

	const api$2 = new adminjs.ApiClient();
	const cardStyle$2 = {
	  padding: '18px',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const inputStyle$1 = {
	  width: '100%',
	  maxWidth: '100%',
	  boxSizing: 'border-box',
	  padding: '10px 12px',
	  borderRadius: '10px',
	  border: '1px solid #cbd5e1',
	  fontSize: '14px',
	  fontFamily: 'inherit',
	  background: '#f8fafc'
	};
	const tableWrapStyle$2 = {
	  overflowX: 'auto',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const tableStyle$2 = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  minWidth: '820px'
	};
	const tableHeadCellStyle$2 = {
	  padding: '12px 14px',
	  textAlign: 'left',
	  fontSize: '12px',
	  fontWeight: 700,
	  color: '#475569',
	  background: '#f8fafc',
	  borderBottom: '1px solid #e5e7eb',
	  whiteSpace: 'nowrap'
	};
	const tableCellStyle$2 = {
	  padding: '12px 14px',
	  fontSize: '14px',
	  color: '#0f172a',
	  borderBottom: '1px solid #eef2f7',
	  verticalAlign: 'top'
	};
	const actionBarStyle$2 = {
	  display: 'flex',
	  flexWrap: 'wrap',
	  gap: '16px 18px',
	  alignItems: 'center'
	};
	const navButtonStyle$2 = {
	  minWidth: '170px',
	  justifyContent: 'center'
	};
	const rowInteractiveStyle$1 = {
	  cursor: 'pointer',
	  transition: 'background 0.15s ease'
	};
	const PAGE_SIZE$1 = 20;
	const tabsWrapStyle$1 = {
	  display: 'flex',
	  gap: '8px',
	  flexWrap: 'wrap',
	  marginBottom: '16px',
	  paddingBottom: '12px',
	  borderBottom: '1px solid #e5e7eb'
	};
	const tabButtonStyle$1 = isActive => ({
	  padding: '8px 14px',
	  borderRadius: '10px',
	  border: `1px solid ${isActive ? '#3b82f6' : '#dbe3f0'}`,
	  background: isActive ? '#eff6ff' : '#ffffff',
	  color: isActive ? '#1d4ed8' : '#475569',
	  fontSize: '13px',
	  fontWeight: 700,
	  cursor: 'pointer'
	});
	const extractMessage$1 = (data, fallbackMessage) => {
	  const fieldMessages = Object.values(data?.record?.errors || {}).map(error => String(error?.message || '').trim()).filter(Boolean);
	  if (fieldMessages.length) {
	    return fieldMessages.join('. ');
	  }
	  const noticeMessage = String(data?.notice?.message || '').trim();
	  return noticeMessage && noticeMessage !== 'thereWereValidationErrors' ? noticeMessage : fallbackMessage;
	};
	const formatDate$2 = value => {
	  if (!value) {
	    return '—';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return value;
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const PurchaseDispatchWorkspace = () => {
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const addNotice = adminjs.useNotice();
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const pageCopy = language === 'ru' ? {
	    title: 'Отправка заказа',
	    subtitle: 'Здесь выбирается заявка, товары отображаются только для просмотра и отправляются на склад структуры.',
	    toOrder: 'Оформление заказа',
	    toReceive: 'Приём заказа',
	    toWarehouses: 'Склады',
	    loading: 'Загрузка данных...',
	    readyTitle: 'Заказы, готовые к отправке',
	    readyDescription: 'Сохранённые закупщиком заказы показываются здесь. Изменять товары на этом этапе нельзя.',
	    readyEmpty: 'Нет заказов, готовых к отправке.',
	    selectedOrder: 'Выбранный заказ',
	    requestNumber: 'Номер заявки',
	    structures: 'Структуры',
	    source: 'Источник',
	    warehouseLabel: 'Структура-склад',
	    warehousePlaceholder: 'Выберите структуру',
	    pickOrder: 'Выберите заказ, готовый к отправке.',
	    sentHistory: 'История отправленных заказов',
	    sentDescription: 'Здесь хранится история: какой заказ и на какой склад структуры был отправлен.',
	    sentEmpty: 'Пока нет отправленных на склад заказов.',
	    warehouseColumn: 'Склад структуры',
	    accessDenied: 'Этот раздел закрыт для вашей роли.',
	    detailHint: 'Нажмите на строку таблицы — откроется отдельное окно отправки выбранного заказа.',
	    filterPlaceholder: 'Поиск по заявке, структуре, источнику или складу'
	  } : {
	    title: 'Buyurtmani jo‘natish',
	    subtitle: 'Bu yerda ariza tanlanadi, tovarlar faqat ko‘rish uchun chiqadi va tarkibiy tuzilma omboriga jo‘natiladi.',
	    toOrder: 'Buyurtma qilish',
	    toReceive: 'Buyurtmani qabul qilish',
	    toWarehouses: 'Omborlar',
	    loading: 'Ma’lumotlar yuklanmoqda...',
	    readyTitle: 'Jo‘natishga tayyor buyurtmalar',
	    readyDescription: 'Sotib oluvchi saqlagan buyurtmalar shu yerda chiqadi. Jo‘natilgandan keyin tuzilma ularni “Buyurtmani qabul qilish” sahifasida qabul qiladi.',
	    readyEmpty: 'Jo‘natishga tayyor buyurtma topilmadi.',
	    selectedOrder: 'Tanlangan buyurtma',
	    requestNumber: 'Ariza raqami',
	    structures: 'Tarkibiy tuzilmalar',
	    source: 'Manba',
	    warehouseLabel: 'Tarkibiy tuzilma (ombor)',
	    warehousePlaceholder: 'Tarkibiy tuzilmani tanlang',
	    pickOrder: 'Jo‘natishga tayyor buyurtmani tanlang.',
	    sentHistory: 'Jo‘natilgan buyurtmalar tarixi',
	    sentDescription: 'Qaysi buyurtma qaysi tarkibiy tuzilma omboriga yuborilgani shu yerda saqlanadi.',
	    sentEmpty: 'Hali omborga jo‘natilgan buyurtma yo‘q.',
	    warehouseColumn: 'Tuzilma ombori',
	    accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
	    detailHint: 'Jadval qatorini bossangiz, tanlangan buyurtma uchun alohida jo‘natish oynasi ochiladi.',
	    filterPlaceholder: 'Ariza, tuzilma, manba yoki ombor bo‘yicha filter'
	  };
	  const [records, setRecords] = react.useState([]);
	  const [sentRecords, setSentRecords] = react.useState([]);
	  const [warehouses, setWarehouses] = react.useState([]);
	  const [selectedRequestId, setSelectedRequestId] = react.useState('');
	  const [selectedWarehouseId, setSelectedWarehouseId] = react.useState('');
	  const [showDispatchForm, setShowDispatchForm] = react.useState(false);
	  const [loading, setLoading] = react.useState(true);
	  const [saving, setSaving] = react.useState(false);
	  const [activeTab, setActiveTab] = react.useState('ready');
	  const [readyPage, setReadyPage] = react.useState(1);
	  const [sentPage, setSentPage] = react.useState(1);
	  const [readyFilterText, setReadyFilterText] = react.useState('');
	  const [sentFilterText, setSentFilterText] = react.useState('');
	  const canView = ['admin', 'monitoring', 'sotib_oluvchi'].includes(currentAdmin?.role);
	  const canEdit = ['admin', 'sotib_oluvchi'].includes(currentAdmin?.role);
	  const allRecords = react.useMemo(() => [...records, ...sentRecords], [records, sentRecords]);
	  const selectedRecord = react.useMemo(() => allRecords.find(record => record.id === selectedRequestId) || null, [allRecords, selectedRequestId]);
	  const filterRows = (rows, query) => {
	    const normalizedQuery = String(query || '').trim().toLowerCase();
	    if (!normalizedQuery) {
	      return rows;
	    }
	    return rows.filter(record => {
	      const itemsText = (record?.items || []).map(item => `${item?.productName || ''} ${item?.features || ''}`).join(' ');
	      const searchableText = [record?.requestNumber, record?.status, record?.selectedUserNames, record?.buyerOrderData?.supplierName, record?.warehouseDispatchData?.warehouseName, itemsText].join(' ').toLowerCase();
	      return searchableText.includes(normalizedQuery);
	    });
	  };
	  const filteredReadyRecords = react.useMemo(() => filterRows(records, readyFilterText), [records, readyFilterText]);
	  const filteredSentRecords = react.useMemo(() => filterRows(sentRecords, sentFilterText), [sentRecords, sentFilterText]);
	  react.useEffect(() => {
	    if (!records.length && sentRecords.length && activeTab !== 'history') {
	      setActiveTab('history');
	    } else if (!sentRecords.length && records.length && activeTab !== 'ready') {
	      setActiveTab('ready');
	    }
	  }, [activeTab, records.length, sentRecords.length]);
	  react.useEffect(() => {
	    const totalReadyPages = Math.max(1, Math.ceil(filteredReadyRecords.length / PAGE_SIZE$1));
	    const totalSentPages = Math.max(1, Math.ceil(filteredSentRecords.length / PAGE_SIZE$1));
	    setReadyPage(current => Math.min(current, totalReadyPages));
	    setSentPage(current => Math.min(current, totalSentPages));
	  }, [filteredReadyRecords.length, filteredSentRecords.length]);
	  const loadWorkspace = async preferredRequestId => {
	    setLoading(true);
	    try {
	      const response = await api$2.resourceAction({
	        resourceId: 'PurchaseDispatchWorkspace',
	        actionName: 'dispatchWorkspace'
	      });
	      const nextRecords = response?.data?.records || [];
	      const nextSentRecords = response?.data?.sentRecords || [];
	      const nextWarehouses = response?.data?.warehouses || [];
	      const combined = [...nextRecords, ...nextSentRecords];
	      const nextSelectedId = preferredRequestId && combined.some(record => record.id === preferredRequestId) ? preferredRequestId : selectedRequestId && combined.some(record => record.id === selectedRequestId) ? selectedRequestId : '';
	      const nextSelectedRecord = combined.find(record => record.id === nextSelectedId) || null;
	      setRecords(nextRecords);
	      setSentRecords(nextSentRecords);
	      setWarehouses(nextWarehouses);
	      setSelectedRequestId(nextSelectedId);
	      setSelectedWarehouseId(String(nextSelectedRecord?.warehouseDispatchData?.warehouseId || nextWarehouses[0]?.id || ''));
	      if (preferredRequestId) {
	        setShowDispatchForm(true);
	      }
	    } catch (error) {
	      setRecords([]);
	      setSentRecords([]);
	      setWarehouses([]);
	      setSelectedRequestId('');
	      setSelectedWarehouseId('');
	      addNotice({
	        message: extractMessage$1(error?.response?.data, "Buyurtmani jo'natish sahifasini yuklab bo‘lmadi"),
	        type: 'error'
	      });
	    } finally {
	      setLoading(false);
	    }
	  };
	  react.useEffect(() => {
	    const initialRequestId = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('recordId') || '' : '';
	    loadWorkspace(initialRequestId);
	  }, []);
	  const openRecord = record => {
	    if (!record?.id) {
	      return;
	    }
	    if (typeof window !== 'undefined') {
	      window.location.assign(`/admin/resources/PurchaseDispatchWorkspace?recordId=${record.id}`);
	    }
	  };
	  const handleCloseDispatchForm = () => {
	    setShowDispatchForm(false);
	    setSelectedRequestId('');
	    if (typeof window !== 'undefined') {
	      window.location.assign('/admin/resources/PurchaseDispatchWorkspace');
	    }
	  };
	  const handleSend = async () => {
	    if (!canEdit) {
	      return;
	    }
	    if (!selectedRequestId) {
	      addNotice({
	        message: 'Avval jo‘natiladigan buyurtmani tanlang',
	        type: 'error'
	      });
	      return;
	    }
	    if (!selectedWarehouseId) {
	      addNotice({
	        message: language === 'ru' ? 'Выберите, на какой склад структуры нужно отправить заказ' : 'Qaysi tarkibiy tuzilma omboriga jo‘natilishini tanlang',
	        type: 'error'
	      });
	      return;
	    }
	    setSaving(true);
	    try {
	      const response = await api$2.resourceAction({
	        resourceId: 'PurchaseDispatchWorkspace',
	        actionName: 'dispatchWorkspace',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        data: {
	          requestId: selectedRequestId,
	          warehouseId: selectedWarehouseId
	        }
	      });
	      if (response?.data?.notice) {
	        addNotice(response.data.notice);
	      }
	      await loadWorkspace();
	    } catch (error) {
	      addNotice({
	        message: extractMessage$1(error?.response?.data, "Buyurtmani omborga jo'natib bo‘lmadi"),
	        type: 'error'
	      });
	    } finally {
	      setSaving(false);
	    }
	  };
	  const renderTable = ({
	    rows,
	    emptyText,
	    showWarehouse = false,
	    page,
	    setPage
	  }) => {
	    if (!rows.length) {
	      return /*#__PURE__*/React.createElement(designSystem.Text, {
	        color: "grey60"
	      }, emptyText);
	    }
	    const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE$1));
	    const safePage = Math.min(page, totalPages);
	    const startIndex = (safePage - 1) * PAGE_SIZE$1;
	    const paginatedRows = rows.slice(startIndex, startIndex + PAGE_SIZE$1);
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      style: tableWrapStyle$2
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$2
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$2
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$2
	    }, pageCopy.requestNumber), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$2
	    }, pageCopy.structures), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$2
	    }, pageCopy.source), showWarehouse ? /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$2
	    }, pageCopy.warehouseColumn) : null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$2
	    }, "Sana"))), /*#__PURE__*/React.createElement("tbody", null, paginatedRows.map((record, index) => {
	      const rowDate = record?.warehouseDispatchData?.dispatchedAt || record?.buyerOrderData?.submittedAt || record?.updatedAt || record?.createdAt;
	      return /*#__PURE__*/React.createElement("tr", {
	        key: record.id,
	        onClick: () => openRecord(record),
	        style: rowInteractiveStyle$1
	      }, /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$2
	      }, startIndex + index + 1), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$2
	      }, /*#__PURE__*/React.createElement(designSystem.Text, {
	        fontWeight: "bold"
	      }, record.requestNumber || record.id), /*#__PURE__*/React.createElement(designSystem.Text, {
	        mt: "xs",
	        color: "grey60"
	      }, record.status || '—')), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$2
	      }, record.selectedUserNames || '—'), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$2
	      }, record?.buyerOrderData?.supplierName || 'Kiritilmagan'), showWarehouse ? /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$2
	      }, record?.warehouseDispatchData?.warehouseName || '—') : null, /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$2
	      }, formatDate$2(rowDate)));
	    })))), totalPages > 1 ? /*#__PURE__*/React.createElement(designSystem.Text, {
	      mt: "xl",
	      textAlign: "center"
	    }, /*#__PURE__*/React.createElement(designSystem.Pagination, {
	      page: safePage,
	      perPage: PAGE_SIZE$1,
	      total: rows.length,
	      onChange: nextPage => setPage(nextPage)
	    })) : null);
	  };
	  if (!canView) {
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      bg: "white",
	      p: "xxl",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.H2, null, pageCopy.title), /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	      variant: "danger",
	      mt: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.accessDenied))));
	  }
	  return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, pageCopy.title), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey60"
	  }, pageCopy.subtitle), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...actionBarStyle$2,
	      marginTop: '16px',
	      marginBottom: '20px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseOrderWorkspace",
	    variant: "outlined",
	    style: navButtonStyle$2
	  }, pageCopy.toOrder), currentAdmin?.role === 'admin' ? /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseReceiveWorkspace",
	    variant: "outlined",
	    style: navButtonStyle$2
	  }, pageCopy.toReceive) : null, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/WarehouseOverview",
	    variant: "outlined",
	    style: navButtonStyle$2
	  }, pageCopy.toWarehouses)), loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.loading) : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, showDispatchForm ? null : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$2
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: tabsWrapStyle$1
	  }, /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: () => setActiveTab('ready'),
	    style: tabButtonStyle$1(activeTab === 'ready')
	  }, pageCopy.readyTitle, " (", filteredReadyRecords.length, ")"), /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: () => setActiveTab('history'),
	    style: tabButtonStyle$1(activeTab === 'history')
	  }, pageCopy.sentHistory, " (", filteredSentRecords.length, ")")), activeTab === 'ready' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, pageCopy.readyTitle), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.readyDescription), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: readyFilterText,
	    onChange: event => {
	      setReadyFilterText(event.target.value);
	      setReadyPage(1);
	    },
	    placeholder: pageCopy.filterPlaceholder,
	    style: {
	      ...inputStyle$1,
	      marginTop: '16px'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderTable({
	    rows: filteredReadyRecords,
	    emptyText: pageCopy.readyEmpty,
	    page: readyPage,
	    setPage: setReadyPage
	  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, pageCopy.sentHistory), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.sentDescription), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: sentFilterText,
	    onChange: event => {
	      setSentFilterText(event.target.value);
	      setSentPage(1);
	    },
	    placeholder: pageCopy.filterPlaceholder,
	    style: {
	      ...inputStyle$1,
	      marginTop: '16px'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderTable({
	    rows: filteredSentRecords,
	    showWarehouse: true,
	    emptyText: pageCopy.sentEmpty,
	    page: sentPage,
	    setPage: setSentPage
	  })))), showDispatchForm ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$2
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, pageCopy.selectedOrder), /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    variant: "outlined",
	    size: "sm",
	    onClick: handleCloseDispatchForm
	  }, "Ro\u2018yxatga qaytish")), selectedRecord ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '14px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	      gap: '12px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.requestNumber), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord.requestNumber || '',
	    style: inputStyle$1
	  })), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.structures), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord.selectedUserNames || '',
	    style: inputStyle$1
	  })), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.source), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord?.buyerOrderData?.supplierName || '',
	    style: inputStyle$1
	  })), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.warehouseLabel), /*#__PURE__*/React.createElement("select", {
	    value: selectedWarehouseId,
	    onChange: event => setSelectedWarehouseId(event.target.value),
	    style: {
	      ...inputStyle$1,
	      background: '#ffffff'
	    },
	    disabled: !canEdit || Boolean(selectedRecord?.warehouseDispatchData?.dispatchedAt)
	  }, /*#__PURE__*/React.createElement("option", {
	    value: ""
	  }, pageCopy.warehousePlaceholder), warehouses.map(warehouse => /*#__PURE__*/React.createElement("option", {
	    key: warehouse.id,
	    value: warehouse.id
	  }, warehouse.name))))), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "default"
	  }, "Tovarlar"), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '12px'
	    }
	  }, selectedRecord.items.map((item, index) => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: `${selectedRecord.id}-${index}`,
	    style: {
	      padding: '12px',
	      border: '1px solid #dbe3f0',
	      borderRadius: '12px',
	      background: '#f8fbff'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: item.productName || '',
	    style: inputStyle$1
	  }), /*#__PURE__*/React.createElement("textarea", {
	    readOnly: true,
	    value: item.features || '',
	    style: {
	      ...inputStyle$1,
	      minHeight: '80px',
	      marginTop: '10px',
	      resize: 'vertical'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
	      gap: '10px',
	      marginTop: '10px'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: item.unit || '',
	    style: inputStyle$1
	  }), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: String(item.quantity || 0),
	    style: inputStyle$1
	  })))))), selectedRecord?.warehouseDispatchData?.dispatchedAt ? /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "success"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, "Bu buyurtma", ' ', selectedRecord.warehouseDispatchData.warehouseName, ' ', "ga", formatDate$2(selectedRecord.warehouseDispatchData.dispatchedAt), ' ', "da jo\u2018natilgan.")) : canEdit ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    onClick: handleSend,
	    disabled: saving
	  }, saving ? 'Jo‘natilmoqda...' : 'Omborga jo‘natish')) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, "Siz bu sahifada faqat ko\u2018rish huquqiga egasiz."))) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.pickOrder), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey60"
	  }, pageCopy.detailHint))) : null)));
	};

	const api$1 = new adminjs.ApiClient();
	const PAGE_SIZE = 20;
	const cardStyle$1 = {
	  padding: '18px',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const inputStyle = {
	  width: '100%',
	  maxWidth: '100%',
	  boxSizing: 'border-box',
	  padding: '10px 12px',
	  borderRadius: '10px',
	  border: '1px solid #cbd5e1',
	  fontSize: '14px',
	  fontFamily: 'inherit',
	  background: '#f8fafc'
	};
	const tableWrapStyle$1 = {
	  overflowX: 'auto',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const tableStyle$1 = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  minWidth: '860px'
	};
	const tableHeadCellStyle$1 = {
	  padding: '12px 14px',
	  textAlign: 'left',
	  fontSize: '12px',
	  fontWeight: 700,
	  color: '#475569',
	  background: '#f8fafc',
	  borderBottom: '1px solid #e5e7eb',
	  whiteSpace: 'nowrap'
	};
	const tableCellStyle$1 = {
	  padding: '12px 14px',
	  fontSize: '14px',
	  color: '#0f172a',
	  borderBottom: '1px solid #eef2f7',
	  verticalAlign: 'top'
	};
	const actionBarStyle$1 = {
	  display: 'flex',
	  flexWrap: 'wrap',
	  gap: '16px 18px',
	  alignItems: 'center'
	};
	const navButtonStyle$1 = {
	  minWidth: '170px',
	  justifyContent: 'center'
	};
	const rowInteractiveStyle = {
	  cursor: 'pointer',
	  transition: 'background 0.15s ease'
	};
	const tabsWrapStyle = {
	  display: 'flex',
	  gap: '8px',
	  flexWrap: 'wrap',
	  marginBottom: '16px',
	  paddingBottom: '12px',
	  borderBottom: '1px solid #e5e7eb'
	};
	const tabButtonStyle = isActive => ({
	  padding: '8px 14px',
	  borderRadius: '10px',
	  border: `1px solid ${isActive ? '#3b82f6' : '#dbe3f0'}`,
	  background: isActive ? '#eff6ff' : '#ffffff',
	  color: isActive ? '#1d4ed8' : '#475569',
	  fontSize: '13px',
	  fontWeight: 700,
	  cursor: 'pointer'
	});
	const formatDate$1 = value => {
	  if (!value) {
	    return '—';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return value;
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const extractMessage = (data, fallbackMessage) => {
	  const fieldMessages = Object.values(data?.record?.errors || {}).map(error => String(error?.message || '').trim()).filter(Boolean);
	  if (fieldMessages.length) {
	    return fieldMessages.join('. ');
	  }
	  const noticeMessage = String(data?.notice?.message || '').trim();
	  return noticeMessage && noticeMessage !== 'thereWereValidationErrors' ? noticeMessage : fallbackMessage;
	};
	const PurchaseReceiveWorkspace = () => {
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const addNotice = adminjs.useNotice();
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const pageCopy = language === 'ru' ? {
	    title: 'Приём заказа',
	    subtitle: 'Структурное подразделение принимает отправленные заказы здесь. После приёма товары появляются на складе структуры.',
	    toDispatch: 'Отправка заказа',
	    toWarehouses: 'Склады',
	    loading: 'Загрузка данных...',
	    readyTitle: 'Заказы на приём',
	    readyDescription: 'Отправленные на структуру заказы видны здесь. После подтверждения они попадут в складской остаток.',
	    readyEmpty: 'Нет заказов, ожидающих приёма.',
	    receivedTitle: 'История принятых заказов',
	    receivedDescription: 'Здесь хранится история уже принятых на склад заказов.',
	    receivedEmpty: 'Принятых заказов пока нет.',
	    selectedOrder: 'Выбранный заказ',
	    requestNumber: 'Номер заявки',
	    structures: 'Структуры',
	    source: 'Источник',
	    warehouseLabel: 'Склад структуры',
	    pickOrder: 'Выберите заказ для приёма.',
	    receiveButton: 'Принять на склад',
	    receivingButton: 'Принимается...',
	    alreadyReceived: 'Этот заказ уже принят на склад.',
	    accessDenied: 'Этот раздел закрыт для вашей роли.',
	    filterPlaceholder: 'Поиск по заявке, структуре, источнику или складу'
	  } : {
	    title: 'Buyurtmani qabul qilish',
	    subtitle: 'Tarkibiy tuzilma jo‘natilgan buyurtmani shu yerda qabul qiladi. Qabul qilingandan keyin tovarlar ombor qoldig‘iga qo‘shiladi.',
	    toDispatch: 'Buyurtmani jo‘natish',
	    toWarehouses: 'Omborlar',
	    loading: 'Ma’lumotlar yuklanmoqda...',
	    readyTitle: 'Qabulga kelgan buyurtmalar',
	    readyDescription: 'Tuzilmaga jo‘natilgan buyurtmalar shu yerda chiqadi. Tasdiqlangandan keyin tovar omborga tushadi.',
	    readyEmpty: 'Qabulga kelgan buyurtma topilmadi.',
	    receivedTitle: 'Qabul qilingan buyurtmalar tarixi',
	    receivedDescription: 'Bu yerda omborga qabul qilingan buyurtmalar tarixi saqlanadi.',
	    receivedEmpty: 'Qabul qilingan buyurtma hali yo‘q.',
	    selectedOrder: 'Tanlangan buyurtma',
	    requestNumber: 'Ariza raqami',
	    structures: 'Tarkibiy tuzilmalar',
	    source: 'Manba',
	    warehouseLabel: 'Tuzilma ombori',
	    pickOrder: 'Qabul qilinadigan buyurtmani tanlang.',
	    receiveButton: 'Omborga qabul qilish',
	    receivingButton: 'Qabul qilinmoqda...',
	    alreadyReceived: 'Bu buyurtma allaqachon omborga qabul qilingan.',
	    accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
	    filterPlaceholder: 'Ariza, tuzilma, manba yoki ombor bo‘yicha filter'
	  };
	  const [records, setRecords] = react.useState([]);
	  const [receivedRecords, setReceivedRecords] = react.useState([]);
	  const [selectedRequestId, setSelectedRequestId] = react.useState('');
	  const [showReceiveForm, setShowReceiveForm] = react.useState(false);
	  const [loading, setLoading] = react.useState(true);
	  const [saving, setSaving] = react.useState(false);
	  const [activeTab, setActiveTab] = react.useState('ready');
	  const [readyPage, setReadyPage] = react.useState(1);
	  const [historyPage, setHistoryPage] = react.useState(1);
	  const [readyFilterText, setReadyFilterText] = react.useState('');
	  const [historyFilterText, setHistoryFilterText] = react.useState('');
	  const canView = ['admin', 'tuzilmalar'].includes(currentAdmin?.role);
	  const canEdit = ['admin', 'tuzilmalar'].includes(currentAdmin?.role);
	  const allRecords = react.useMemo(() => [...records, ...receivedRecords], [records, receivedRecords]);
	  const selectedRecord = react.useMemo(() => allRecords.find(record => record.id === selectedRequestId) || null, [allRecords, selectedRequestId]);
	  const filterRows = (rows, query) => {
	    const normalizedQuery = String(query || '').trim().toLowerCase();
	    if (!normalizedQuery) {
	      return rows;
	    }
	    return rows.filter(record => {
	      const itemsText = (record?.items || []).map(item => `${item?.productName || ''} ${item?.features || ''}`).join(' ');
	      const searchableText = [record?.requestNumber, record?.status, record?.selectedUserNames, record?.buyerOrderData?.supplierName, record?.warehouseDispatchData?.warehouseName, itemsText].join(' ').toLowerCase();
	      return searchableText.includes(normalizedQuery);
	    });
	  };
	  const filteredReadyRecords = react.useMemo(() => filterRows(records, readyFilterText), [records, readyFilterText]);
	  const filteredHistoryRecords = react.useMemo(() => filterRows(receivedRecords, historyFilterText), [receivedRecords, historyFilterText]);
	  react.useEffect(() => {
	    if (!records.length && receivedRecords.length && activeTab !== 'history') {
	      setActiveTab('history');
	    } else if (!receivedRecords.length && records.length && activeTab !== 'ready') {
	      setActiveTab('ready');
	    }
	  }, [activeTab, records.length, receivedRecords.length]);
	  react.useEffect(() => {
	    const totalReadyPages = Math.max(1, Math.ceil(filteredReadyRecords.length / PAGE_SIZE));
	    const totalHistoryPages = Math.max(1, Math.ceil(filteredHistoryRecords.length / PAGE_SIZE));
	    setReadyPage(current => Math.min(current, totalReadyPages));
	    setHistoryPage(current => Math.min(current, totalHistoryPages));
	  }, [filteredReadyRecords.length, filteredHistoryRecords.length]);
	  const loadWorkspace = async preferredRequestId => {
	    setLoading(true);
	    try {
	      const response = await api$1.resourceAction({
	        resourceId: 'PurchaseReceiveWorkspace',
	        actionName: 'receiveWorkspace'
	      });
	      const nextRecords = response?.data?.records || [];
	      const nextReceivedRecords = response?.data?.receivedRecords || [];
	      const combined = [...nextRecords, ...nextReceivedRecords];
	      const nextSelectedId = preferredRequestId && combined.some(record => record.id === preferredRequestId) ? preferredRequestId : selectedRequestId && combined.some(record => record.id === selectedRequestId) ? selectedRequestId : '';
	      setRecords(nextRecords);
	      setReceivedRecords(nextReceivedRecords);
	      setSelectedRequestId(nextSelectedId);
	      if (preferredRequestId) {
	        setShowReceiveForm(true);
	      }
	    } catch (error) {
	      setRecords([]);
	      setReceivedRecords([]);
	      setSelectedRequestId('');
	      addNotice({
	        message: extractMessage(error?.response?.data, 'Buyurtmani qabul qilish sahifasini yuklab bo‘lmadi'),
	        type: 'error'
	      });
	    } finally {
	      setLoading(false);
	    }
	  };
	  react.useEffect(() => {
	    const initialRequestId = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('recordId') || '' : '';
	    loadWorkspace(initialRequestId);
	  }, []);
	  const openRecord = record => {
	    if (!record?.id || typeof window === 'undefined') {
	      return;
	    }
	    window.location.assign(`/admin/resources/PurchaseReceiveWorkspace?recordId=${record.id}`);
	  };
	  const handleClose = () => {
	    setShowReceiveForm(false);
	    setSelectedRequestId('');
	    if (typeof window !== 'undefined') {
	      window.location.assign('/admin/resources/PurchaseReceiveWorkspace');
	    }
	  };
	  const handleReceive = async () => {
	    if (!canEdit) {
	      return;
	    }
	    if (!selectedRequestId) {
	      addNotice({
	        message: 'Avval qabul qilinadigan buyurtmani tanlang',
	        type: 'error'
	      });
	      return;
	    }
	    setSaving(true);
	    try {
	      const response = await api$1.resourceAction({
	        resourceId: 'PurchaseReceiveWorkspace',
	        actionName: 'receiveWorkspace',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        data: {
	          requestId: selectedRequestId
	        }
	      });
	      if (response?.data?.notice) {
	        addNotice(response.data.notice);
	      }
	      await loadWorkspace(selectedRequestId);
	    } catch (error) {
	      addNotice({
	        message: extractMessage(error?.response?.data, 'Buyurtmani omborga qabul qilib bo‘lmadi'),
	        type: 'error'
	      });
	    } finally {
	      setSaving(false);
	    }
	  };
	  const renderTable = ({
	    rows,
	    emptyText,
	    page,
	    setPage
	  }) => {
	    if (!rows.length) {
	      return /*#__PURE__*/React.createElement(designSystem.Text, {
	        color: "grey60"
	      }, emptyText);
	    }
	    const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
	    const safePage = Math.min(page, totalPages);
	    const startIndex = (safePage - 1) * PAGE_SIZE;
	    const paginatedRows = rows.slice(startIndex, startIndex + PAGE_SIZE);
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      style: tableWrapStyle$1
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$1
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, pageCopy.requestNumber), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, pageCopy.structures), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, pageCopy.source), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, pageCopy.warehouseLabel), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, "Sana"))), /*#__PURE__*/React.createElement("tbody", null, paginatedRows.map((record, index) => {
	      const rowDate = record?.warehouseDispatchData?.receivedAt || record?.warehouseDispatchData?.dispatchedAt || record?.updatedAt || record?.createdAt;
	      return /*#__PURE__*/React.createElement("tr", {
	        key: record.id,
	        onClick: () => openRecord(record),
	        style: rowInteractiveStyle
	      }, /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$1
	      }, startIndex + index + 1), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$1
	      }, /*#__PURE__*/React.createElement(designSystem.Text, {
	        fontWeight: "bold"
	      }, record.requestNumber || record.id), /*#__PURE__*/React.createElement(designSystem.Text, {
	        mt: "xs",
	        color: "grey60"
	      }, record.status || '—')), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$1
	      }, record.selectedUserNames || '—'), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$1
	      }, record?.buyerOrderData?.supplierName || 'Kiritilmagan'), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$1
	      }, record?.warehouseDispatchData?.warehouseName || '—'), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle$1
	      }, formatDate$1(rowDate)));
	    })))), totalPages > 1 ? /*#__PURE__*/React.createElement(designSystem.Text, {
	      mt: "xl",
	      textAlign: "center"
	    }, /*#__PURE__*/React.createElement(designSystem.Pagination, {
	      page: safePage,
	      perPage: PAGE_SIZE,
	      total: rows.length,
	      onChange: nextPage => setPage(nextPage)
	    })) : null);
	  };
	  if (!canView) {
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      bg: "white",
	      p: "xxl",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.H2, null, pageCopy.title), /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	      variant: "danger",
	      mt: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.accessDenied))));
	  }
	  return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, pageCopy.title), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey60"
	  }, pageCopy.subtitle), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...actionBarStyle$1,
	      marginTop: '16px',
	      marginBottom: '20px'
	    }
	  }, currentAdmin?.role !== 'tuzilmalar' ? /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseDispatchWorkspace",
	    variant: "outlined",
	    style: navButtonStyle$1
	  }, pageCopy.toDispatch) : null, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: currentAdmin?.role === 'tuzilmalar' ? '/admin/resources/MyWarehouse' : '/admin/resources/WarehouseOverview',
	    variant: "outlined",
	    style: navButtonStyle$1
	  }, pageCopy.toWarehouses)), loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.loading) : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, showReceiveForm ? null : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: tabsWrapStyle
	  }, /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: () => setActiveTab('ready'),
	    style: tabButtonStyle(activeTab === 'ready')
	  }, pageCopy.readyTitle, " (", filteredReadyRecords.length, ")"), /*#__PURE__*/React.createElement("button", {
	    type: "button",
	    onClick: () => setActiveTab('history'),
	    style: tabButtonStyle(activeTab === 'history')
	  }, pageCopy.receivedTitle, " (", filteredHistoryRecords.length, ")")), activeTab === 'ready' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, pageCopy.readyTitle), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.readyDescription), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: readyFilterText,
	    onChange: event => {
	      setReadyFilterText(event.target.value);
	      setReadyPage(1);
	    },
	    placeholder: pageCopy.filterPlaceholder,
	    style: {
	      ...inputStyle,
	      marginTop: '16px'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderTable({
	    rows: filteredReadyRecords,
	    emptyText: pageCopy.readyEmpty,
	    page: readyPage,
	    setPage: setReadyPage
	  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, pageCopy.receivedTitle), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.receivedDescription), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: historyFilterText,
	    onChange: event => {
	      setHistoryFilterText(event.target.value);
	      setHistoryPage(1);
	    },
	    placeholder: pageCopy.filterPlaceholder,
	    style: {
	      ...inputStyle,
	      marginTop: '16px'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderTable({
	    rows: filteredHistoryRecords,
	    emptyText: pageCopy.receivedEmpty,
	    page: historyPage,
	    setPage: setHistoryPage
	  })))), showReceiveForm ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, pageCopy.selectedOrder), /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    variant: "outlined",
	    size: "sm",
	    onClick: handleClose
	  }, "Ro\u2018yxatga qaytish")), selectedRecord ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '14px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	      gap: '12px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.requestNumber), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord.requestNumber || '',
	    style: inputStyle
	  })), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.structures), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord.selectedUserNames || '',
	    style: inputStyle
	  })), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.source), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord?.buyerOrderData?.supplierName || '',
	    style: inputStyle
	  })), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Label, null, pageCopy.warehouseLabel), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: selectedRecord?.warehouseDispatchData?.warehouseName || '',
	    style: inputStyle
	  }))), /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "default"
	  }, "Tovarlar"), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '12px'
	    }
	  }, (selectedRecord.items || []).map((item, index) => /*#__PURE__*/React.createElement(designSystem.Box, {
	    key: `${selectedRecord.id}-${index}`,
	    style: {
	      padding: '12px',
	      border: '1px solid #dbe3f0',
	      borderRadius: '12px',
	      background: '#f8fbff'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: item.productName || '',
	    style: inputStyle
	  }), /*#__PURE__*/React.createElement("textarea", {
	    readOnly: true,
	    value: item.features || '',
	    style: {
	      ...inputStyle,
	      minHeight: '80px',
	      marginTop: '10px',
	      resize: 'vertical'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
	      gap: '10px',
	      marginTop: '10px'
	    }
	  }, /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: item.unit || '',
	    style: inputStyle
	  }), /*#__PURE__*/React.createElement("input", {
	    readOnly: true,
	    value: String(item.quantity || 0),
	    style: inputStyle
	  })))))), selectedRecord?.warehouseDispatchData?.receivedAt ? /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "success"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.alreadyReceived, ' ', formatDate$1(selectedRecord?.warehouseDispatchData?.receivedAt))) : canEdit ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    onClick: handleReceive,
	    disabled: saving
	  }, saving ? pageCopy.receivingButton : pageCopy.receiveButton)) : null) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.pickOrder))) : null)));
	};

	const api = new adminjs.ApiClient();
	const cardStyle = {
	  padding: '18px',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const tableWrapStyle = {
	  overflowX: 'auto',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const tableStyle = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  minWidth: '880px'
	};
	const tableHeadCellStyle = {
	  padding: '12px 14px',
	  textAlign: 'left',
	  fontSize: '12px',
	  fontWeight: 700,
	  color: '#475569',
	  background: '#f8fafc',
	  borderBottom: '1px solid #e5e7eb',
	  whiteSpace: 'nowrap'
	};
	const tableCellStyle = {
	  padding: '12px 14px',
	  fontSize: '14px',
	  color: '#0f172a',
	  borderBottom: '1px solid #eef2f7',
	  verticalAlign: 'top'
	};
	const actionBarStyle = {
	  display: 'flex',
	  flexWrap: 'wrap',
	  gap: '16px 18px',
	  alignItems: 'center'
	};
	const navButtonStyle = {
	  minWidth: '170px',
	  justifyContent: 'center'
	};
	const filterInputStyle = {
	  width: '100%',
	  maxWidth: '420px',
	  boxSizing: 'border-box',
	  padding: '10px 12px',
	  borderRadius: '10px',
	  border: '1px solid #cbd5e1',
	  fontSize: '14px',
	  fontFamily: 'inherit',
	  background: '#ffffff'
	};
	const statsGridStyle = {
	  display: 'grid',
	  gap: '12px',
	  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
	  marginTop: '16px'
	};
	const statCardStyle = {
	  padding: '14px',
	  borderRadius: '12px',
	  border: '1px solid #dbe3f0',
	  background: '#f8fafc'
	};
	const clickableRowStyle = {
	  cursor: 'pointer',
	  transition: 'background 0.15s ease'
	};
	const getWarehouseIdFromLocation = () => {
	  if (typeof window === 'undefined') {
	    return '';
	  }
	  return String(new URLSearchParams(window.location.search).get('warehouseId') || '').trim();
	};
	const syncWarehouseLocation = warehouseId => {
	  if (typeof window === 'undefined') {
	    return;
	  }
	  const url = new URL(window.location.href);
	  if (warehouseId) {
	    url.searchParams.set('warehouseId', warehouseId);
	  } else {
	    url.searchParams.delete('warehouseId');
	  }
	  window.history.replaceState({}, '', `${url.pathname}${url.search}`);
	};
	const formatDate = value => {
	  if (!value) {
	    return '—';
	  }
	  const date = new Date(value);
	  if (Number.isNaN(date.getTime())) {
	    return value;
	  }
	  const pad = number => String(number).padStart(2, '0');
	  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
	};
	const WarehouseOverview = () => {
	  const [currentAdmin] = adminjs.useCurrentAdmin();
	  const addNotice = adminjs.useNotice();
	  const {
	    i18n: {
	      language
	    }
	  } = adminjs.useTranslation();
	  const isMyWarehousePage = typeof window !== 'undefined' && window.location.pathname.includes('/admin/resources/MyWarehouse');
	  const pageCopy = language === 'ru' ? {
	    title: 'Склады',
	    subtitle: 'При открытии склада вы сразу переходите внутрь и видите все товары, которые были фактически приняты структурой.',
	    toDispatch: 'Отправка заказа',
	    toReceive: 'Приём заказа',
	    toOrder: 'Оформление заказа',
	    toMyWarehouse: 'Мой склад',
	    loading: 'Загрузка складов...',
	    listTitle: 'Склады структур',
	    searchPlaceholder: 'Поиск по названию структуры или ответственному',
	    emptyList: 'Подходящие склады не найдены.',
	    openHint: 'Нажмите на строку склада, чтобы сразу открыть его содержимое.',
	    openAction: 'Открыть',
	    backToList: 'Назад к списку складов',
	    selectedTitle: 'Все товары внутри склада',
	    lastUpdated: 'Последнее обновление',
	    noItems: 'На этом складе пока нет принятых товаров.',
	    itemSearchPlaceholder: 'Поиск по товару, характеристике, источнику или заявке',
	    filteredItemsEmpty: 'По этому фильтру товары не найдены.',
	    pickWarehouse: 'Выберите склад, чтобы открыть его содержимое.',
	    accessDenied: 'Этот раздел закрыт для вашей роли.',
	    loadError: 'Не удалось загрузить данные складов'
	  } : {
	    title: 'Omborlar',
	    subtitle: 'Omborni ochsangiz, ichiga darrov kirib barcha qabul qilingan tovarlarni ko‘rasiz.',
	    toDispatch: 'Buyurtmani jo‘natish',
	    toReceive: 'Buyurtmani qabul qilish',
	    toOrder: 'Buyurtma qilish',
	    toMyWarehouse: 'Mening omborim',
	    loading: 'Omborlar yuklanmoqda...',
	    listTitle: 'Tarkibiy tuzilma omborlari',
	    searchPlaceholder: 'Tuzilma nomi yoki mas’ul bo‘yicha qidiring',
	    emptyList: 'Mos ombor topilmadi.',
	    openHint: 'Qator ustiga bossangiz, ombor ichiga darrov kirasiz.',
	    openAction: 'Ochish',
	    backToList: 'Omborlar ro‘yxatiga qaytish',
	    selectedTitle: 'Ombor ichidagi barcha tovarlar',
	    lastUpdated: 'Oxirgi yangilanish',
	    noItems: 'Bu omborda hozircha qabul qilingan tovar yo‘q.',
	    itemSearchPlaceholder: 'Tovar, xususiyat, manba yoki ariza bo‘yicha filter',
	    filteredItemsEmpty: 'Ushbu filter bo‘yicha tovar topilmadi.',
	    pickWarehouse: 'Ichini ko‘rish uchun omborni oching.',
	    accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
	    loadError: 'Omborlar ma’lumotini yuklab bo‘lmadi'
	  };
	  if (isMyWarehousePage) {
	    Object.assign(pageCopy, {
	      title: language === 'ru' ? 'Мой склад' : 'Mening omborim',
	      subtitle: language === 'ru' ? 'Здесь вы видите все товары, которые есть на складе вашей структуры.' : 'Bu yerda tuzilmangiz omborida bor barcha tovarlarni to‘liq ko‘rasiz.',
	      listTitle: language === 'ru' ? 'Мой склад' : 'Mening omborim',
	      selectedTitle: language === 'ru' ? 'Все товары на моём складе' : 'Mening omborimdagi barcha tovarlar'
	    });
	  }
	  const [warehouses, setWarehouses] = react.useState([]);
	  const [selectedWarehouseId, setSelectedWarehouseId] = react.useState(() => getWarehouseIdFromLocation());
	  const [searchText, setSearchText] = react.useState('');
	  const [itemSearchText, setItemSearchText] = react.useState('');
	  const [loading, setLoading] = react.useState(true);
	  const canView = ['admin', 'monitoring', 'sotib_oluvchi', 'tuzilmalar'].includes(currentAdmin?.role);
	  const filteredWarehouses = react.useMemo(() => {
	    const query = String(searchText || '').trim().toLowerCase();
	    if (!query) {
	      return warehouses;
	    }
	    return warehouses.filter(warehouse => `${warehouse?.name || ''} ${warehouse?.description || ''}`.toLowerCase().includes(query));
	  }, [searchText, warehouses]);
	  const selectedWarehouse = react.useMemo(() => warehouses.find(warehouse => warehouse.id === selectedWarehouseId) || null, [warehouses, selectedWarehouseId]);
	  const filteredSelectedItems = react.useMemo(() => {
	    const items = selectedWarehouse?.items || [];
	    const query = String(itemSearchText || '').trim().toLowerCase();
	    if (!query) {
	      return items;
	    }
	    return items.filter(item => [item?.productName, item?.features, item?.supplierName, item?.requestNumber, item?.unit].join(' ').toLowerCase().includes(query));
	  }, [itemSearchText, selectedWarehouse]);
	  const openWarehouse = warehouseId => {
	    setSelectedWarehouseId(warehouseId);
	    syncWarehouseLocation(warehouseId);
	    if (typeof window !== 'undefined') {
	      window.scrollTo({
	        top: 0,
	        behavior: 'smooth'
	      });
	    }
	  };
	  const handleBackToList = () => {
	    setSelectedWarehouseId('');
	    syncWarehouseLocation('');
	  };
	  const loadWarehouses = async () => {
	    setLoading(true);
	    try {
	      const response = await api.resourceAction({
	        resourceId: isMyWarehousePage ? 'MyWarehouse' : 'WarehouseOverview',
	        actionName: 'warehouseOverview'
	      });
	      const nextWarehouses = response?.data?.warehouses || [];
	      const requestedWarehouseId = getWarehouseIdFromLocation();
	      const shouldAutoOpen = currentAdmin?.role === 'tuzilmalar' || nextWarehouses.length === 1;
	      const defaultWarehouseId = shouldAutoOpen ? nextWarehouses[0]?.id || '' : '';
	      const nextSelectedWarehouseId = requestedWarehouseId || defaultWarehouseId;
	      setWarehouses(nextWarehouses);
	      setSelectedWarehouseId(currentId => {
	        if (currentId && nextWarehouses.some(warehouse => warehouse.id === currentId)) {
	          return currentId;
	        }
	        return nextSelectedWarehouseId;
	      });
	      if (nextSelectedWarehouseId) {
	        syncWarehouseLocation(nextSelectedWarehouseId);
	      }
	    } catch (error) {
	      setWarehouses([]);
	      setSelectedWarehouseId('');
	      addNotice({
	        message: error?.response?.data?.notice?.message || pageCopy.loadError,
	        type: 'error'
	      });
	    } finally {
	      setLoading(false);
	    }
	  };
	  react.useEffect(() => {
	    loadWarehouses();
	  }, []);
	  react.useEffect(() => {
	    setItemSearchText('');
	  }, [selectedWarehouseId]);
	  if (!canView) {
	    return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	      bg: "white",
	      p: "xxl",
	      borderRadius: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.H2, null, pageCopy.title), /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	      variant: "danger",
	      mt: "xl"
	    }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.accessDenied))));
	  }
	  return /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    bg: "white",
	    p: "xxl",
	    borderRadius: "xl"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold",
	    mb: "default"
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, pageCopy.title), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey60"
	  }, pageCopy.subtitle), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...actionBarStyle,
	      marginTop: '16px',
	      marginBottom: '20px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseDispatchWorkspace",
	    variant: "outlined",
	    style: navButtonStyle
	  }, pageCopy.toDispatch), ['admin', 'tuzilmalar'].includes(currentAdmin?.role) ? /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseReceiveWorkspace",
	    variant: "outlined",
	    style: navButtonStyle
	  }, pageCopy.toReceive) : null, /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/PurchaseOrderWorkspace",
	    variant: "outlined",
	    style: navButtonStyle
	  }, pageCopy.toOrder), ['admin', 'tuzilmalar'].includes(currentAdmin?.role) && !isMyWarehousePage ? /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/resources/MyWarehouse",
	    variant: "outlined",
	    style: navButtonStyle
	  }, pageCopy.toMyWarehouse) : null), loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.loading) : selectedWarehouse ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, currentAdmin?.role !== 'tuzilmalar' && warehouses.length > 1 ? /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    variant: "outlined",
	    style: {
	      width: 'fit-content'
	    },
	    onClick: handleBackToList
	  }, "\u2190 ", pageCopy.backToList) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    fontSize: "xl"
	  }, selectedWarehouse.name), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "xs",
	    color: "grey60"
	  }, selectedWarehouse.description || '—'), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    color: "grey60"
	  }, pageCopy.lastUpdated, ":", ' ', formatDate(selectedWarehouse.updatedAt)), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: statsGridStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: statCardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.rowsLabel), /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    fontSize: "xxl"
	  }, selectedWarehouse.itemCount || 0)), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: statCardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.totalLabel), /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    fontSize: "xxl"
	  }, selectedWarehouse.totalQuantity || 0)), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: statCardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, pageCopy.shipmentsLabel), /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    fontSize: "xxl"
	  }, selectedWarehouse.requestCount || 0)))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, pageCopy.selectedTitle), selectedWarehouse.items?.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: itemSearchText,
	    onChange: event => setItemSearchText(event.target.value),
	    placeholder: pageCopy.itemSearchPlaceholder,
	    style: {
	      ...filterInputStyle,
	      marginTop: '8px'
	    }
	  }), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg",
	    style: tableWrapStyle
	  }, /*#__PURE__*/React.createElement("table", {
	    style: tableStyle
	  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "#"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "Tovar"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "Xususiyatlari"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "Soni"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "Manba"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "Ariza"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "Kelgan sana"))), /*#__PURE__*/React.createElement("tbody", null, filteredSelectedItems.map((item, index) => /*#__PURE__*/React.createElement("tr", {
	    key: `${item.requestId}-${item.productName}-${index}`
	  }, /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, index + 1), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold"
	  }, item.productName || '—'), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "xs",
	    color: "grey60"
	  }, item.unit || 'dona')), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, item.features || '—'), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, item.quantity || 0), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, item.supplierName || '—'), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, item.requestNumber || '—'), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, formatDate(item.receivedAt))))))), filteredSelectedItems.length ? null : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info",
	    mt: "lg"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.filteredItemsEmpty))) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info",
	    mt: "lg"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.noItems)))) : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, pageCopy.listTitle), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60",
	    mb: "default"
	  }, pageCopy.openHint), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: searchText,
	    onChange: event => setSearchText(event.target.value),
	    placeholder: pageCopy.searchPlaceholder,
	    style: {
	      ...filterInputStyle,
	      marginTop: '4px',
	      marginBottom: '16px'
	    }
	  }), filteredWarehouses.length ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: tableWrapStyle
	  }, /*#__PURE__*/React.createElement("table", {
	    style: tableStyle
	  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, "#"), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, pageCopy.listTitle), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, pageCopy.rowsLabel), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, pageCopy.totalLabel), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, pageCopy.shipmentsLabel), /*#__PURE__*/React.createElement("th", {
	    style: tableHeadCellStyle
	  }, pageCopy.openAction))), /*#__PURE__*/React.createElement("tbody", null, filteredWarehouses.map((warehouse, index) => /*#__PURE__*/React.createElement("tr", {
	    key: warehouse.id,
	    style: {
	      ...clickableRowStyle,
	      background: index % 2 ? '#fcfdff' : '#ffffff'
	    },
	    onClick: () => openWarehouse(warehouse.id),
	    onKeyDown: event => {
	      if (event.key === 'Enter' || event.key === ' ') {
	        event.preventDefault();
	        openWarehouse(warehouse.id);
	      }
	    },
	    role: "button",
	    tabIndex: 0
	  }, /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, index + 1), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold"
	  }, warehouse.name), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "xs",
	    color: "grey60"
	  }, warehouse.description)), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, warehouse.itemCount || 0), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, warehouse.totalQuantity || 0), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, warehouse.requestCount || 0), /*#__PURE__*/React.createElement("td", {
	    style: tableCellStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "primary100",
	    fontWeight: "bold"
	  }, pageCopy.openAction, " \u2192"))))))) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, pageCopy.emptyList)))));
	};

	AdminJS.UserComponents = {};
	AdminJS.UserComponents.Login = Login;
	AdminJS.UserComponents.SidebarBranding = SidebarBranding;
	AdminJS.UserComponents.TopBar = TopBar;
	AdminJS.UserComponents.ZaxiraDashboard = Dashboard;
	AdminJS.UserComponents.ZaxiraPlaceholderPage = PlaceholderPage;
	AdminJS.UserComponents.ZaxiraPurchaseUsersEdit = PurchaseUsersEdit;
	AdminJS.UserComponents.ZaxiraPurchaseItemsEdit = PurchaseItemsEdit;
	AdminJS.UserComponents.ZaxiraPurchaseDownloadAction = PurchaseDownloadAction;
	AdminJS.UserComponents.ZaxiraPurchaseApprovalAction = PurchaseApprovalAction;
	AdminJS.UserComponents.ZaxiraPurchaseRequestListValue = PurchaseRequestListValue;
	AdminJS.UserComponents.ZaxiraPurchaseRequestShow = PurchaseRequestShow;
	AdminJS.UserComponents.ZaxiraPurchaseOrderWorkspace = PurchaseOrderWorkspace;
	AdminJS.UserComponents.ZaxiraPurchaseDispatchWorkspace = PurchaseDispatchWorkspace;
	AdminJS.UserComponents.ZaxiraPurchaseReceiveWorkspace = PurchaseReceiveWorkspace;
	AdminJS.UserComponents.ZaxiraWarehouseOverview = WarehouseOverview;

})(AdminJSDesignSystem, AdminJS, React, ReactRouterDOM, ReactRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9Mb2dpbi5qc3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9TaWRlYmFyQnJhbmRpbmcuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvVG9wQmFyLmpzeCIsIi4uL3NyYy9hZG1pbi9wYWdlLWRhdGEuanMiLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUGxhY2Vob2xkZXJQYWdlLmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlVXNlcnNFZGl0LmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlSXRlbXNFZGl0LmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlRG93bmxvYWRBY3Rpb24uanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VBcHByb3ZhbEFjdGlvbi5qc3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VSZXF1ZXN0U2hvdy5qc3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZU9yZGVyV29ya3NwYWNlLmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlRGlzcGF0Y2hXb3Jrc3BhY2UuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlLmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1dhcmVob3VzZU92ZXJ2aWV3LmpzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Qm94LFxyXG5cdEJ1dHRvbixcclxuXHRGb3JtR3JvdXAsXHJcblx0SDIsXHJcblx0SW5wdXQsXHJcblx0TGFiZWwsXHJcblx0TWVzc2FnZUJveCxcclxuXHRUZXh0LFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHNoZWxsU3R5bGUgPSB7XHJcblx0YmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZiZmYgMCUsICNlZWY2ZmYgNDUlLCAjZjhmYWZjIDEwMCUpJyxcclxufVxyXG5cclxuY29uc3QgY2FyZFN0eWxlID0ge1xyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjZTJlOGYwJyxcclxuXHRiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KScsXHJcbn1cclxuXHJcbmNvbnN0IGZpZWxkSW5wdXRTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdG1pbkhlaWdodDogJzQycHgnLFxyXG59XHJcblxyXG5jb25zdCBwYXNzd29yZFdyYXBTdHlsZSA9IHtcclxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxufVxyXG5cclxuY29uc3QgcGFzc3dvcmRUb2dnbGVTdHlsZSA9IHtcclxuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHR0b3A6ICc1MCUnLFxyXG5cdHJpZ2h0OiAnOHB4JyxcclxuXHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuXHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG5cdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR3aWR0aDogJzM0cHgnLFxyXG5cdGhlaWdodDogJzM0cHgnLFxyXG5cdGJvcmRlcjogJ25vbmUnLFxyXG5cdGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcblx0Y29sb3I6ICcjNjQ3NDhiJyxcclxuXHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0cGFkZGluZzogMCxcclxufVxyXG5cclxuY29uc3QgRXllSWNvbiA9ICh7IG9wZW4gfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHdpZHRoPScxOCdcclxuXHRcdGhlaWdodD0nMTgnXHJcblx0XHR2aWV3Qm94PScwIDAgMTggMTgnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdD5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9J00xLjUgOUMyLjcgNi40IDUuMyA0LjUgOSA0LjVDMTIuNyA0LjUgMTUuMyA2LjQgMTYuNSA5QzE1LjMgMTEuNiAxMi43IDEzLjUgOSAxMy41QzUuMyAxMy41IDIuNyAxMS42IDEuNSA5WidcclxuXHRcdFx0c3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcblx0XHRcdHN0cm9rZVdpZHRoPScxLjUnXHJcblx0XHRcdHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHRzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcblx0XHQvPlxyXG5cdFx0PGNpcmNsZSBjeD0nOScgY3k9JzknIHI9JzIuMicgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZVdpZHRoPScxLjUnIC8+XHJcblx0XHR7b3BlbiA/IG51bGwgOiAoXHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZD0nTTMgMTVMMTUgMydcclxuXHRcdFx0XHRzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuXHRcdFx0XHRzdHJva2VXaWR0aD0nMS41J1xyXG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHQvPlxyXG5cdFx0KX1cclxuXHQ8L3N2Zz5cclxuKVxyXG5cclxuY29uc3QgcmVzb2x2ZU1lc3NhZ2UgPSAobWVzc2FnZSwgdHJhbnNsYXRlTWVzc2FnZSkgPT4ge1xyXG5cdGlmICghbWVzc2FnZSkge1xyXG5cdFx0cmV0dXJuICcnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWVzc2FnZS5zcGxpdCgnICcpLmxlbmd0aCA+IDEgPyBtZXNzYWdlIDogdHJhbnNsYXRlTWVzc2FnZShtZXNzYWdlKVxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHRjb25zdCBwcm9wcyA9IHdpbmRvdy5fX0FQUF9TVEFURV9fIHx8IHt9XHJcblx0Y29uc3QgeyBhY3Rpb24sIGVycm9yTWVzc2FnZTogbWVzc2FnZSB9ID0gcHJvcHNcclxuXHRjb25zdCB7IHRyYW5zbGF0ZUNvbXBvbmVudCwgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cdGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgZXJyb3JNZXNzYWdlID0gcmVzb2x2ZU1lc3NhZ2UobWVzc2FnZSwgdHJhbnNsYXRlTWVzc2FnZSlcclxuXHRjb25zdCBlbWFpbExhYmVsID0gdHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5wcm9wZXJ0aWVzLmVtYWlsJylcclxuXHRjb25zdCBwYXNzd29yZExhYmVsID0gdHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5wcm9wZXJ0aWVzLnBhc3N3b3JkJylcclxuXHRjb25zdCBwYXNzd29yZFRvZ2dsZUxhYmVsID0gdHJhbnNsYXRlQ29tcG9uZW50KFxyXG5cdFx0c2hvd1Bhc3N3b3JkID8gJ0xvZ2luLmhpZGVQYXNzd29yZCcgOiAnTG9naW4uc2hvd1Bhc3N3b3JkJyxcclxuXHQpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdHZhcmlhbnQ9J2dyZXknXHJcblx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ9J2NlbnRlcidcclxuXHRcdFx0bWluSGVpZ2h0PScxMDB2aCdcclxuXHRcdFx0cD0neGwnXHJcblx0XHRcdHN0eWxlPXtzaGVsbFN0eWxlfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0YXM9J2Zvcm0nXHJcblx0XHRcdFx0YWN0aW9uPXthY3Rpb259XHJcblx0XHRcdFx0bWV0aG9kPSdQT1NUJ1xyXG5cdFx0XHRcdGJnPSd3aGl0ZSdcclxuXHRcdFx0XHRwPSd4MydcclxuXHRcdFx0XHR3aWR0aD17WycxMDAlJywgJzUyMHB4J119XHJcblx0XHRcdFx0Ym9yZGVyUmFkaXVzPSd4bCdcclxuXHRcdFx0XHRib3hTaGFkb3c9J2xvZ2luJ1xyXG5cdFx0XHRcdHN0eWxlPXtjYXJkU3R5bGV9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8Qm94IG1iPSd4bCc+XHJcblx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRhcz0nc3BhbidcclxuXHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnkxMDAnXHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9J2JvbGQnXHJcblx0XHRcdFx0XHRcdHA9J3NtJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZWZmNmZmJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0WmF4aXJhLnV6XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8SDIgbXQ9J2xnJz57dHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi53ZWxjb21lSGVhZGVyJyl9PC9IMj5cclxuXHRcdFx0XHRcdDxUZXh0IG10PSdkZWZhdWx0JyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdHt0cmFuc2xhdGVDb21wb25lbnQoJ0xvZ2luLndlbGNvbWVNZXNzYWdlJyl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdHtlcnJvck1lc3NhZ2UgPyAoXHJcblx0XHRcdFx0XHQ8TWVzc2FnZUJveCBteT0nbGcnIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gdmFyaWFudD0nZGFuZ2VyJyAvPlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0PExhYmVsIHJlcXVpcmVkPntlbWFpbExhYmVsfTwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0bmFtZT0nZW1haWwnXHJcblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J3VzZXJuYW1lJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ZW1haWxMYWJlbH1cclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0c3R5bGU9e2ZpZWxkSW5wdXRTdHlsZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblxyXG5cdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQ8TGFiZWwgcmVxdWlyZWQ+e3Bhc3N3b3JkTGFiZWx9PC9MYWJlbD5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e3Bhc3N3b3JkV3JhcFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGFzc3dvcmRMYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J2N1cnJlbnQtcGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyAuLi5maWVsZElucHV0U3R5bGUsIHBhZGRpbmdSaWdodDogJzQ2cHgnIH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKGN1cnJlbnRWYWx1ZSA9PiAhY3VycmVudFZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17cGFzc3dvcmRUb2dnbGVTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtwYXNzd29yZFRvZ2dsZUxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPXtwYXNzd29yZFRvZ2dsZUxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17c2hvd1Bhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEV5ZUljb24gb3Blbj17c2hvd1Bhc3N3b3JkfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cclxuXHRcdFx0XHQ8Qm94IG10PSd4bCc+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ubG9naW5CdXR0b24nKX1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIiwiaW1wb3J0IHsgQm94LCBJY29uLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBTaWRlYmFyQnJhbmRpbmcgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0YXM9e0xpbmt9XHJcblx0XHRcdHRvPScvYWRtaW4nXHJcblx0XHRcdGRpc3BsYXk9J2Jsb2NrJ1xyXG5cdFx0XHRweD0nbGcnXHJcblx0XHRcdHB0PSdsZydcclxuXHRcdFx0cGI9J3hsJ1xyXG5cdFx0XHRzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcblx0XHQ+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRwPSdsZydcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0Z2FwOiAnMTJweCcsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTYzZDdhIDAlLCAjMjU2M2ViIDEwMCUpJyxcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogJzAgMTJweCAyOHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjIpJyxcclxuXHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHdpZHRoPSc0NHB4J1xyXG5cdFx0XHRcdFx0aGVpZ2h0PSc0NHB4J1xyXG5cdFx0XHRcdFx0ZGlzcGxheT0nZmxleCdcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PSdjZW50ZXInXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRmbGV4U2hyaW5rOiAwLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCknLFxyXG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKScsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJY29uIGljb249J0FyY2hpdmUnIHNpemU9ezI0fSBjb2xvcj0nd2hpdGUnIC8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggZmxleD0nMSc+XHJcblx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRhcz0nc3BhbidcclxuXHRcdFx0XHRcdFx0ZGlzcGxheT0nYmxvY2snXHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9JzkwMCdcclxuXHRcdFx0XHRcdFx0Zm9udFNpemU9J3hsJ1xyXG5cdFx0XHRcdFx0XHRjb2xvcj0nd2hpdGUnXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdFx0YXM9J3NwYW4nXHJcblx0XHRcdFx0XHRcdGRpc3BsYXk9J2Jsb2NrJ1xyXG5cdFx0XHRcdFx0XHRtdD0neHMnXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplPSdzbSdcclxuXHRcdFx0XHRcdFx0Y29sb3I9J3doaXRlJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBvcGFjaXR5OiAwLjgyIH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdE9tYm9yeG9uYSBuYXpvcmF0aVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckJyYW5kaW5nXHJcbiIsImltcG9ydCB7XHJcblx0Qm94LFxyXG5cdEJ1dHRvbixcclxuXHREcm9wRG93bixcclxuXHREcm9wRG93bkl0ZW0sXHJcblx0RHJvcERvd25NZW51LFxyXG5cdERyb3BEb3duVHJpZ2dlcixcclxuXHRJY29uLFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZUN1cnJlbnRBZG1pbiwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUb3BCYXIgPSAoeyB0b2dnbGVTaWRlYmFyIH0pID0+IHtcclxuXHRjb25zdCBbY3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXHJcblx0Y29uc3QgcHJvZmlsZUxpbmsgPSBjdXJyZW50QWRtaW4/LmlkXHJcblx0XHQ/IGAvYWRtaW4vcmVzb3VyY2VzL1VzZXIvcmVjb3Jkcy8ke2N1cnJlbnRBZG1pbi5pZH0vc2hvd2BcclxuXHRcdDogJy9hZG1pbidcclxuXHRjb25zdCB7XHJcblx0XHRpMThuOiB7XHJcblx0XHRcdGxhbmd1YWdlLFxyXG5cdFx0XHRvcHRpb25zOiB7IHN1cHBvcnRlZExuZ3MgfSxcclxuXHRcdFx0Y2hhbmdlTGFuZ3VhZ2UsXHJcblx0XHR9LFxyXG5cdFx0dHJhbnNsYXRlQnV0dG9uLFxyXG5cdFx0dHJhbnNsYXRlQ29tcG9uZW50LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG5cdGNvbnN0IGF2YWlsYWJsZUxhbmd1YWdlcyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PlxyXG5cdFx0XHRzdXBwb3J0ZWRMbmdzID8gc3VwcG9ydGVkTG5ncy5maWx0ZXIobGFuZyA9PiBsYW5nICE9PSAnY2ltb2RlJykgOiBbXSxcclxuXHRcdFtzdXBwb3J0ZWRMbmdzXSxcclxuXHQpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdGJnPSd3aGl0ZSdcclxuXHRcdFx0Ym9yZGVyQm90dG9tPSdkZWZhdWx0J1xyXG5cdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRmbGV4V3JhcD0nd3JhcCdcclxuXHRcdFx0Z2FwPSdsZydcclxuXHRcdFx0cHg9J2xnJ1xyXG5cdFx0XHRweT0nZGVmYXVsdCdcclxuXHRcdFx0c3R5bGU9e3sgcm93R2FwOiAnMTJweCcgfX1cclxuXHRcdD5cclxuXHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBhbGlnbkl0ZW1zPSdjZW50ZXInIGdhcD0nZGVmYXVsdCc+XHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0cHk9J3NtJ1xyXG5cdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlU2lkZWJhcn1cclxuXHRcdFx0XHRcdGRpc3BsYXk9e1snYmxvY2snLCAnYmxvY2snLCAnYmxvY2snLCAnYmxvY2snLCAnbm9uZSddfVxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SWNvbiBpY29uPSdNZW51JyBzaXplPXsyNH0gLz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0ZGlzcGxheT0nZmxleCdcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdFx0ZmxleFdyYXA9J3dyYXAnXHJcblx0XHRcdFx0Z2FwPSd4bCdcclxuXHRcdFx0XHRzdHlsZT17eyBjb2x1bW5HYXA6ICcxNnB4Jywgcm93R2FwOiAnMTJweCcgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdHthdmFpbGFibGVMYW5ndWFnZXMubGVuZ3RoID4gMSA/IChcclxuXHRcdFx0XHRcdDxEcm9wRG93bj5cclxuXHRcdFx0XHRcdFx0PERyb3BEb3duVHJpZ2dlcj5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNvbG9yPSd0ZXh0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uIGljb249J0dsb2JlJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RyYW5zbGF0ZUNvbXBvbmVudChcclxuXHRcdFx0XHRcdFx0XHRcdFx0YExhbmd1YWdlU2VsZWN0b3IuYXZhaWxhYmxlTGFuZ3VhZ2VzLiR7bGFuZ3VhZ2V9YCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZTogbGFuZ3VhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0Ryb3BEb3duVHJpZ2dlcj5cclxuXHRcdFx0XHRcdFx0PERyb3BEb3duTWVudT5cclxuXHRcdFx0XHRcdFx0XHR7YXZhaWxhYmxlTGFuZ3VhZ2VzLm1hcChsYW5nID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxEcm9wRG93bkl0ZW0ga2V5PXtsYW5nfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VMYW5ndWFnZShsYW5nKX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdGVDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YExhbmd1YWdlU2VsZWN0b3IuYXZhaWxhYmxlTGFuZ3VhZ2VzLiR7bGFuZ31gLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZTogbGFuZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Ecm9wRG93bkl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvRHJvcERvd25NZW51PlxyXG5cdFx0XHRcdFx0PC9Ecm9wRG93bj5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRocmVmPXtwcm9maWxlTGlua31cclxuXHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNDhweCcgfX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SWNvbiBpY29uPSdVc2VyJyBtcj0nc20nIC8+XHJcblx0XHRcdFx0XHR7dHJhbnNsYXRlQ29tcG9uZW50KCdUb3BCYXIubXlQcm9maWxlJyl9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRocmVmPScvYWRtaW4vbG9nb3V0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRzdHlsZT17eyBtaW5XaWR0aDogJzEyMHB4JyB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJY29uIGljb249J0xvZ091dCcgbXI9J3NtJyAvPlxyXG5cdFx0XHRcdFx0e3RyYW5zbGF0ZUJ1dHRvbignbG9nb3V0Jyl9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcclxuIiwiY29uc3Qgc2lkZWJhclBhZ2VzID0gW1xyXG5cdHtcclxuXHRcdGlkOiAnbWVuaW5nLXByb2ZpbGltJyxcclxuXHRcdGxhYmVsOiAnTWVuaW5nIHByb2ZpbGltJyxcclxuXHRcdGljb246ICdVc2VyJyxcclxuXHRcdHNob3J0VXo6ICdTaGF4c2l5IG1h4oCZbHVtb3RsYXJpbmdpem5pIGtv4oCYcmlzaCB2YSB0YWhyaXJsYXNoIHNhaGlmYXNpLicsXHJcblx0XHRzaG9ydFJ1OiAn0KHRgtGA0LDQvdC40YbQsCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwINC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LvQuNGH0L3Ri9GFINC00LDQvdC90YvRhS4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICd4YXJpZC11Y2h1bi1hcml6YScsXHJcblx0XHRsYWJlbDogJ1hhcmlkJyxcclxuXHRcdGljb246ICdTaG9wcGluZ0NhcnQnLFxyXG5cdFx0c2hvcnRVejpcclxuXHRcdFx0J0JpciBuZWNodGEgZm95ZGFsYW51dmNoaW5pIHRhbmxhYiwgaXpvaCB2YSB0b3ZhcmxhciBiaWxhbiBhcml6YSB5YXJhdGlzaCBib+KAmGxpbWkuJyxcclxuXHRcdHNob3J0UnU6XHJcblx0XHRcdCfQoNCw0LfQtNC10Lsg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LfQsNGP0LLQutC4INGBINCy0YvQsdC+0YDQvtC8INC90LXRgdC60L7Qu9GM0LrQuNGFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LCDQutC+0LzQvNC10L3RgtCw0YDQuNC10Lwg0Lgg0YLQvtCy0LDRgNCw0LzQuC4nLFxyXG5cdFx0cmVzb3VyY2VMaW5rOiAnL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZVJlcXVlc3QnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdhcml6YWxhcm5pLXRhc2RpcWxhc2gnLFxyXG5cdFx0bGFiZWw6ICdBcml6YWxhcm5pIHRhc2RpcWxhc2gnLFxyXG5cdFx0aWNvbjogJ0NoZWNrQ2lyY2xlJyxcclxuXHRcdHNob3J0VXo6ICdLaXJpdGlsZ2FuIGFyaXphbGFybmkga2/igJhyaWIgY2hpcWlzaCBzYWhpZmFzaS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ch0YLRgNCw0L3QuNGG0LAg0LTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsCDQuCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQt9Cw0Y/QstC+0LouJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnZm95ZGFsYW51dmNoaWxhcicsXHJcblx0XHRsYWJlbDogJ0ZveWRhbGFudXZjaGlsYXInLFxyXG5cdFx0aWNvbjogJ1VzZXInLFxyXG5cdFx0c2hvcnRVejogJ1RpemltIGZveWRhbGFudXZjaGlsYXJpIGJpbGFuIGlzaGxhc2ggYm/igJhsaW1pLicsXHJcblx0XHRzaG9ydFJ1OiAn0KDQsNC30LTQtdC7INC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDRgdC40YHRgtC10LzRiy4nLFxyXG5cdFx0cmVzb3VyY2VMaW5rOiAnL2FkbWluL3Jlc291cmNlcy9Vc2VyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnY2hpcWltLXFpbGlzaCcsXHJcblx0XHRsYWJlbDogJ0NoaXFpbSBxaWxpc2gnLFxyXG5cdFx0aWNvbjogJ1NlbmQnLFxyXG5cdFx0c2hvcnRVejogJ01haHN1bG90IGNoaXFpbWluaSByYXNtaXlsYXNodGlyaXNoIHNhaGlmYXNpLicsXHJcblx0XHRzaG9ydFJ1OiAn0KHRgtGA0LDQvdC40YbQsCDQvtGE0L7RgNC80LvQtdC90LjRjyDRgNCw0YHRhdC+0LTQsCDRgtC+0LLQsNGA0L7Qsi4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICd0cmFuc2ZlcicsXHJcblx0XHRsYWJlbDogJ1RyYW5zZmVyJyxcclxuXHRcdGljb246ICdSZXBlYXQnLFxyXG5cdFx0c2hvcnRVejogJ09tYm9ybGFyIG/igJhydGFzaWRhIGtv4oCYY2hpcmlzaCB1Y2h1biB0YXl5b3Igc2FoaWZhLicsXHJcblx0XHRzaG9ydFJ1OiAn0JPQvtGC0L7QstCw0Y8g0YHRgtGA0LDQvdC40YbQsCDQtNC70Y8g0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQvNC10LbQtNGDINGB0LrQu9Cw0LTQsNC80LguJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnb21ib3JsYXInLFxyXG5cdFx0bGFiZWw6ICdPbWJvcmxhcicsXHJcblx0XHRpY29uOiAnQXJjaGl2ZScsXHJcblx0XHRzaG9ydFV6OiAnQmFyY2hhIG9tYm9ybGFyIHJv4oCYeXhhdGkgdWNodW4gYm/igJhsaW0uJyxcclxuXHRcdHNob3J0UnU6ICfQoNCw0LfQtNC10Lsg0LTQu9GPINGB0L/QuNGB0LrQsCDQstGB0LXRhSDRgdC60LvQsNC00L7Qsi4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdtZW5pbmctb21ib3JpbScsXHJcblx0XHRsYWJlbDogJ01lbmluZyBvbWJvcmltJyxcclxuXHRcdGljb246ICdQYWNrYWdlJyxcclxuXHRcdHNob3J0VXo6ICdTaGF4c2l5IG9tYm9yIG1h4oCZbHVtb3RsYXJpIHVjaHVuIHRheXlvciBzYWhpZmEuJyxcclxuXHRcdHNob3J0UnU6ICfQk9C+0YLQvtCy0LDRjyDRgdGC0YDQsNC90LjRhtCwINC00LvRjyDQtNCw0L3QvdGL0YUg0LzQvtC10LPQviDRgdC60LvQsNC00LAuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnaW52ZW50YXJpemF0c2l5YScsXHJcblx0XHRsYWJlbDogJ0ludmVudGFyaXphdHNpeWEnLFxyXG5cdFx0aWNvbjogJ1Rvb2wnLFxyXG5cdFx0c2hvcnRVejogJ0ludmVudGFyaXphdHNpeWEgamFyYXlvbmkgdWNodW4gdGF5eW9yIGJv4oCYbGltLicsXHJcblx0XHRzaG9ydFJ1OiAn0JPQvtGC0L7QstGL0Lkg0YDQsNC30LTQtdC7INC00LvRjyDQuNC90LLQtdC90YLQsNGA0LjQt9Cw0YbQuNC4LicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2Jvc2hxYS1vbWJvcmxhcicsXHJcblx0XHRsYWJlbDogJ0Jvc2hxYSBvbWJvcmxhcicsXHJcblx0XHRpY29uOiAnTGF5ZXJzJyxcclxuXHRcdHNob3J0VXo6ICdCb3NocWEgb21ib3JsYXIgYmlsYW4gaXNobGFzaCBzYWhpZmFzaS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ch0YLRgNCw0L3QuNGG0LAg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQtNGA0YPQs9C40LzQuCDRgdC60LvQsNC00LDQvNC4LicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2J1eXVydG1hLXFpbGlzaCcsXHJcblx0XHRsYWJlbDogJ0J1eXVydG1hIHFpbGlzaCcsXHJcblx0XHRpY29uOiAnU2hvcHBpbmdCYWcnLFxyXG5cdFx0c2hvcnRVejogJ1lhbmdpIGJ1eXVydG1hIHlhcmF0aXNoIHVjaHVuIHNhaGlmYS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ch0YLRgNCw0L3QuNGG0LAg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0L3QvtCy0L7Qs9C+INC30LDQutCw0LfQsC4nLFxyXG5cdFx0cmVzb3VyY2VMaW5rOiAnL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZU9yZGVyV29ya3NwYWNlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnYnV5dXJ0bWFuaS1qb25hdGlzaCcsXHJcblx0XHRsYWJlbDogJ0J1eXVydG1hbmkgam/igJhuYXRpc2gnLFxyXG5cdFx0aWNvbjogJ1RydWNrJyxcclxuXHRcdHNob3J0VXo6ICdCdXl1cnRtYWxhcm5pIGpv4oCYbmF0aXNoIHVjaHVuIHRheXlvciBzYWhpZmEuJyxcclxuXHRcdHNob3J0UnU6ICfQk9C+0YLQvtCy0LDRjyDRgdGC0YDQsNC90LjRhtCwINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC30LDQutCw0LfQvtCyLicsXHJcblx0fSxcclxuXVxyXG5cclxuY29uc3QgcGFnZU1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhzaWRlYmFyUGFnZXMubWFwKHBhZ2UgPT4gW3BhZ2UuaWQsIHBhZ2VdKSlcclxuY29uc3QgY3VzdG9tU2lkZWJhclBhZ2VzID0gc2lkZWJhclBhZ2VzLmZpbHRlcihcclxuXHRwYWdlID0+XHJcblx0XHRwYWdlLmlkICE9PSAnZm95ZGFsYW51dmNoaWxhcicgJiZcclxuXHRcdHBhZ2UuaWQgIT09ICdtZW5pbmctcHJvZmlsaW0nICYmXHJcblx0XHRwYWdlLmlkICE9PSAneGFyaWQtdWNodW4tYXJpemEnICYmXHJcblx0XHRwYWdlLmlkICE9PSAnYXJpemFsYXJuaS10YXNkaXFsYXNoJyAmJlxyXG5cdFx0cGFnZS5pZCAhPT0gJ2J1eXVydG1hLXFpbGlzaCcgJiZcclxuXHRcdHBhZ2UuaWQgIT09ICdidXl1cnRtYW5pLWpvbmF0aXNoJyAmJlxyXG5cdFx0cGFnZS5pZCAhPT0gJ29tYm9ybGFyJyxcclxuKVxyXG5cclxuZXhwb3J0IHsgY3VzdG9tU2lkZWJhclBhZ2VzLCBwYWdlTWFwLCBzaWRlYmFyUGFnZXMgfVxyXG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSDIsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyB1c2VDdXJyZW50QWRtaW4gfSBmcm9tICdhZG1pbmpzJ1xyXG5cclxuaW1wb3J0IHsgc2lkZWJhclBhZ2VzIH0gZnJvbSAnLi4vcGFnZS1kYXRhLmpzJ1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjdXJyZW50QWRtaW5dID0gdXNlQ3VycmVudEFkbWluKClcclxuXHRjb25zdCB2aXNpYmxlUGFnZXMgPSBzaWRlYmFyUGFnZXMuZmlsdGVyKHBhZ2UgPT4ge1xyXG5cdFx0aWYgKHBhZ2UuaWQgPT09ICdtZW5pbmctcHJvZmlsaW0nKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0cGFnZS5pZCA9PT0gJ2ZveWRhbGFudXZjaGlsYXInICYmXHJcblx0XHRcdCFbJ2FkbWluJywgJ21vbml0b3JpbmcnXS5pbmNsdWRlcyhjdXJyZW50QWRtaW4/LnJvbGUpXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHRwYWdlLmlkID09PSAnYnV5dXJ0bWEtcWlsaXNoJyAmJlxyXG5cdFx0XHQhWydhZG1pbicsICdtb25pdG9yaW5nJywgJ3NvdGliX29sdXZjaGknXS5pbmNsdWRlcyhjdXJyZW50QWRtaW4/LnJvbGUpXHJcblx0XHQpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCB2YXJpYW50PSdncmV5Jz5cclxuXHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCcgYm94U2hhZG93PSdjYXJkJz5cclxuXHRcdFx0XHQ8VGV4dCBjb2xvcj0ncHJpbWFyeTEwMCcgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0WmF4aXJhLnV6XHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDxIMj5PbWJvcnhvbmEgbmF6b3JhdGkgdWNodW4gYXNvc2l5IGJv4oCYbGltbGFyPC9IMj5cclxuXHRcdFx0XHQ8VGV4dCBtdD0nZGVmYXVsdCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFNpeiB0aXppbWdheycgJ31cclxuXHRcdFx0XHRcdDxzdHJvbmc+e2N1cnJlbnRBZG1pbj8udGl0bGUgfHwgY3VycmVudEFkbWluPy51c2VybmFtZX08L3N0cm9uZz57JyAnfVxyXG5cdFx0XHRcdFx0c2lmYXRpZGEga2lyZ2Fuc2l6LiBSb2xpbmdpejogPHN0cm9uZz57Y3VycmVudEFkbWluPy5yb2xlfTwvc3Ryb25nPlxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4V3JhcD0nd3JhcCcgZ2FwPSdkZWZhdWx0JyBtYj0neGwnPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRhcz0nYSdcclxuXHRcdFx0XHRcdFx0aHJlZj17YC9hZG1pbi9yZXNvdXJjZXMvVXNlci9yZWNvcmRzLyR7Y3VycmVudEFkbWluPy5pZH0vZWRpdGB9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFByb2ZpbG5pIHRhaHJpcmxhc2hcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2dyaWQnIGdyaWRUZW1wbGF0ZUNvbHVtbnM9e1snMWZyJywgJzFmciAxZnInXX0gZ2FwPSdsZyc+XHJcblx0XHRcdFx0XHR7dmlzaWJsZVBhZ2VzLm1hcChwYWdlID0+IChcclxuXHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdGtleT17cGFnZS5pZH1cclxuXHRcdFx0XHRcdFx0XHRiZz0nZmlsdGVyQmcnXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyPScxcHggc29saWQgI0U1RTdFQidcclxuXHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM9J3hsJ1xyXG5cdFx0XHRcdFx0XHRcdHA9J3hsJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYWdlLmxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBjb2xvcj0nZ3JleTEwMCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtwYWdlLnNob3J0VXp9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGFzPSdhJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17cGFnZS5yZXNvdXJjZUxpbmsgfHwgYC9hZG1pbi9wYWdlcy8ke3BhZ2UuaWR9YH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdEJv4oCYbGltbmkgb2NoaXNoXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcclxuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEgyLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlQ3VycmVudEFkbWluIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgcGFnZU1hcCB9IGZyb20gJy4uL3BhZ2UtZGF0YS5qcydcclxuXHJcbmNvbnN0IFBsYWNlaG9sZGVyUGFnZSA9ICgpID0+IHtcclxuXHRjb25zdCB7IHBhZ2VOYW1lIH0gPSB1c2VQYXJhbXMoKVxyXG5cdGNvbnN0IFtjdXJyZW50QWRtaW5dID0gdXNlQ3VycmVudEFkbWluKClcclxuXHRjb25zdCBwYWdlID0gcGFnZU1hcFtwYWdlTmFtZV0gfHwge1xyXG5cdFx0bGFiZWw6ICdTYWhpZmEnLFxyXG5cdFx0c2hvcnRVejogJ0J1IHNhaGlmYSBob3ppcmNoYSB0YXl5b3IgaG9sYXRkYSB0dXJpYmRpLicsXHJcblx0XHRzaG9ydFJ1OiAn0K3RgtCwINGB0YLRgNCw0L3QuNGG0LAg0L/QvtC60LAg0L/QvtC00LPQvtGC0L7QstC70LXQvdCwINCyINGH0LXRgNC90L7QstC+0Lwg0LLQuNC00LUuJyxcclxuXHR9XHJcblx0Y29uc3QgcHJvZmlsZVNob3dMaW5rID0gY3VycmVudEFkbWluPy5pZFxyXG5cdFx0PyBgL2FkbWluL3Jlc291cmNlcy9Vc2VyL3JlY29yZHMvJHtjdXJyZW50QWRtaW4uaWR9L3Nob3dgXHJcblx0XHQ6ICcvYWRtaW4nXHJcblx0Y29uc3QgcHJvZmlsZUVkaXRMaW5rID0gY3VycmVudEFkbWluPy5pZFxyXG5cdFx0PyBgL2FkbWluL3Jlc291cmNlcy9Vc2VyL3JlY29yZHMvJHtjdXJyZW50QWRtaW4uaWR9L2VkaXRgXHJcblx0XHQ6ICcvYWRtaW4nXHJcblxyXG5cdGlmIChwYWdlTmFtZSA9PT0gJ21lbmluZy1wcm9maWxpbScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxCb3ggdmFyaWFudD0nZ3JleSc+XHJcblx0XHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCcgYm94U2hhZG93PSdjYXJkJz5cclxuXHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdwcmltYXJ5MTAwJyBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PEgyPk1lbmluZyBwcm9maWxpbTwvSDI+XHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0nZGVmYXVsdCcgbWI9J3hsJz5cclxuXHRcdFx0XHRcdFx0U2l6IGhvemlyeycgJ31cclxuXHRcdFx0XHRcdFx0PHN0cm9uZz57Y3VycmVudEFkbWluPy50aXRsZSB8fCBjdXJyZW50QWRtaW4/LnVzZXJuYW1lfTwvc3Ryb25nPnsnICd9XHJcblx0XHRcdFx0XHRcdHByb2ZpbGlkYSB0dXJpYnNpei4gQnUgc2FoaWZhZGEgbWHigJlsdW1vdGxhcmluZ2l6bmkga2/igJhyaXNoaW5naXogdmFcclxuXHRcdFx0XHRcdFx0dGFocmlybGFzaGluZ2l6IG11bWtpbi5cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2dyaWQnIGdyaWRUZW1wbGF0ZUNvbHVtbnM9e1snMWZyJywgJzFmciAxZnInXX0gZ2FwPSdsZyc+XHJcblx0XHRcdFx0XHRcdDxCb3ggcD0neGwnIGJnPSdmaWx0ZXJCZycgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdEZveWRhbGFudXZjaGkgbm9taVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dD57Y3VycmVudEFkbWluPy51c2VybmFtZX08L1RleHQ+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8Qm94IHA9J3hsJyBiZz0nZmlsdGVyQmcnIGJvcmRlclJhZGl1cz0neGwnPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRJc20gdmEgZmFtaWx5YVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdHtjdXJyZW50QWRtaW4/LmZpcnN0TmFtZX0ge2N1cnJlbnRBZG1pbj8ubGFzdE5hbWV9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0PEJveCBwPSd4bCcgYmc9J2ZpbHRlckJnJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0VHV6aWxtYVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dD57Y3VycmVudEFkbWluPy5vcmdhbml6YXRpb25OYW1lfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDxCb3ggcD0neGwnIGJnPSdmaWx0ZXJCZycgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFRlbGVmb24gdmEgcm9sXHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0PntjdXJyZW50QWRtaW4/LnBob25lTnVtYmVyfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlJvbDoge2N1cnJlbnRBZG1pbj8ucm9sZX08L1RleHQ+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4V3JhcD0nd3JhcCcgZ2FwPSdkZWZhdWx0JyBtdD0neGwnPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPXtwcm9maWxlRWRpdExpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFByb2ZpbG5pIHRhaHJpcmxhc2hcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGhyZWY9Jy9hZG1pbi9sb2dvdXQnIHZhcmlhbnQ9J291dGxpbmVkJz5cclxuXHRcdFx0XHRcdFx0XHRDaGlxaXNoXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0PFRleHQgbXQ9J2xnJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdEVzbGF0bWE6IHJvbCBtYXlkb25pIGZhcWF0IGFkbWluaXN0cmF0b3IgdG9tb25pZGFuIG/igJh6Z2FydGlyaWxhZGkuXHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggdmFyaWFudD0nZ3JleSc+XHJcblx0XHRcdDxCb3ggYmc9J3doaXRlJyBwPSd4eGwnIGJvcmRlclJhZGl1cz0neGwnIGJveFNoYWRvdz0nY2FyZCc+XHJcblx0XHRcdFx0PFRleHQgY29sb3I9J3ByaW1hcnkxMDAnIGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8VGV4dCBtYj0nbGcnPlxyXG5cdFx0XHRcdFx0S2lyaXNoIHFpbGluZ2FuIHByb2ZpbDp7JyAnfVxyXG5cdFx0XHRcdFx0PHN0cm9uZz57Y3VycmVudEFkbWluPy50aXRsZSB8fCBjdXJyZW50QWRtaW4/LnVzZXJuYW1lfTwvc3Ryb25nPlxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhXcmFwPSd3cmFwJyBnYXA9J2RlZmF1bHQnIG1iPSd4bCc+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPXtwcm9maWxlU2hvd0xpbmt9IHZhcmlhbnQ9J291dGxpbmVkJz5cclxuXHRcdFx0XHRcdFx0TWVuaW5nIHByb2ZpbGltXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGhyZWY9e3Byb2ZpbGVFZGl0TGlua30+XHJcblx0XHRcdFx0XHRcdFByb2ZpbG5pIHRhaHJpcmxhc2hcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaHJlZj0nL2FkbWluL2xvZ291dCcgdmFyaWFudD0nb3V0bGluZWQnPlxyXG5cdFx0XHRcdFx0XHRDaGlxaXNoXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8SDI+e3BhZ2UubGFiZWx9PC9IMj5cclxuXHRcdFx0XHQ8VGV4dCBtdD0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRCdSBib+KAmGxpbSBob3ppcmNoYSB0YXl5b3Igc2FoaWZhIHNpZmF0aWRhIHFv4oCYc2hpbGRpLiBLZXlpbmdpIHZhemlmYW5pXHJcblx0XHRcdFx0XHRheXRnYW5pbmdpemRhbiBzb+KAmG5nIGF5bmFuIHNodSB5ZXJnYSBrZXJha2xpIGlzaCBqYXJheW9uaSB1bGFuYWRpLlxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0PEJveCBtdD0neGwnIHA9J3hsJyBiZz0nZmlsdGVyQmcnIGJvcmRlclJhZGl1cz0neGwnPlxyXG5cdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0T+KAmHpiZWtjaGFcclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0PntwYWdlLnNob3J0VXp9PC9UZXh0PlxyXG5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG10PSdsZycgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx00KDRg9GB0YHQutC40LlcclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0PntwYWdlLnNob3J0UnV9PC9UZXh0PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXJQYWdlXHJcbiIsImltcG9ydCB7IEJveCwgTGFiZWwsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyBBcGlDbGllbnQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcblxyXG5jb25zdCBwYXJzZVNlbGVjdGVkVXNlcnMgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWUubWFwKGl0ZW0gPT4gU3RyaW5nKGl0ZW0pKVxyXG5cdH1cclxuXHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh2YWx1ZSlcclxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQubWFwKGl0ZW0gPT4gU3RyaW5nKGl0ZW0pKSA6IFtdXHJcblx0fSBjYXRjaCB7XHJcblx0XHRyZXR1cm4gW11cclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHJlc29sdmVTdHJ1Y3R1cmVMYWJlbCA9IHVzZXIgPT5cclxuXHR1c2VyPy5wYXJhbXM/Lm9yZ2FuaXphdGlvbk5hbWUgfHxcclxuXHR1c2VyPy5wYXJhbXM/LmRpc3BsYXlOYW1lIHx8XHJcblx0dXNlcj8udGl0bGUgfHxcclxuXHQnVHV6aWxtYSBub21pIGtpcml0aWxtYWdhbidcclxuXHJcbmNvbnN0IHJlc29sdmVBcHByb3ZlckxhYmVsID0gdXNlciA9PiB7XHJcblx0Y29uc3QgdXNlcm5hbWUgPSB1c2VyPy5wYXJhbXM/LnVzZXJuYW1lID8gYEAke3VzZXIucGFyYW1zLnVzZXJuYW1lfWAgOiAnJ1xyXG5cdGNvbnN0IGZ1bGxOYW1lID0gW3VzZXI/LnBhcmFtcz8uZmlyc3ROYW1lLCB1c2VyPy5wYXJhbXM/Lmxhc3ROYW1lXVxyXG5cdFx0LmZpbHRlcihCb29sZWFuKVxyXG5cdFx0LmpvaW4oJyAnKVxyXG5cdFx0LnRyaW0oKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0W2Z1bGxOYW1lIHx8IHVzZXI/LnBhcmFtcz8uZGlzcGxheU5hbWUgfHwgdXNlcj8udGl0bGUsIHVzZXJuYW1lXVxyXG5cdFx0XHQuZmlsdGVyKEJvb2xlYW4pXHJcblx0XHRcdC5qb2luKCcg4oCUICcpIHx8XHJcblx0XHR1c2VyPy5wYXJhbXM/LnVzZXJuYW1lIHx8XHJcblx0XHQnTW9uaXRvcmluZydcclxuXHQpXHJcbn1cclxuXHJcbmNvbnN0IGl0ZW1TdHlsZSA9IGNoZWNrZWQgPT4gKHtcclxuXHRkaXNwbGF5OiAnZmxleCcsXHJcblx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0Z2FwOiAnMTBweCcsXHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTJweCcsXHJcblx0Ym9yZGVyOiBjaGVja2VkID8gJzFweCBzb2xpZCAjMjU2M2ViJyA6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0YmFja2dyb3VuZDogY2hlY2tlZCA/ICcjZWZmNmZmJyA6ICcjZmZmZmZmJyxcclxuXHRjdXJzb3I6ICdwb2ludGVyJyxcclxufSlcclxuXHJcbmNvbnN0IGVycm9yVGV4dFN0eWxlID0ge1xyXG5cdGNvbG9yOiAnI2RjMjYyNicsXHJcblx0Zm9udFNpemU6ICcxMnB4JyxcclxufVxyXG5cclxuY29uc3Qgc2VsZWN0U3R5bGUgPSB7XHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRwYWRkaW5nOiAnMTJweCAxNHB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG5cdGZvbnRTaXplOiAnMTRweCcsXHJcbn1cclxuXHJcbmNvbnN0IFB1cmNoYXNlVXNlcnNFZGl0ID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSA9IHByb3BzXHJcblx0Y29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IHtcclxuXHRcdGkxOG46IHsgbGFuZ3VhZ2UgfSxcclxuXHR9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuXHRjb25zdCB0ZXh0ID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICfQodGC0YDRg9C60YLRg9GA0YsnLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICfQktGL0LHQtdGA0LjRgtC1INC+0LTQvdGDINC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0YHRgtGA0YPQutGC0YPRgC4nLFxyXG5cdFx0XHRcdFx0YXBwcm92ZXJMYWJlbDogJ9Ch0L7Qs9C70LDRgdGD0Y7RidC40Lkg0YDRg9C60L7QstC+0LTQuNGC0LXQu9GMJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyRGVzY3JpcHRpb246ICfQktGL0LHQtdGA0LjRgtC1INGA0YPQutC+0LLQvtC00LjRgtC10LvRjyDQuNC3INGB0L/QuNGB0LrQsC4nLFxyXG5cdFx0XHRcdFx0YXBwcm92ZXJQbGFjZWhvbGRlcjogJ9CS0YvQsdC10YDQuNGC0LUg0YDRg9C60L7QstC+0LTQuNGC0LXQu9GPJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6ICfQl9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhS4uLicsXHJcblx0XHRcdFx0XHRlbXB0eTogJ9Cf0L7QutCwINC90LXRgiDRgdGC0YDRg9C60YLRg9GAINC00LvRjyDQstGL0LHQvtGA0LAuJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyRW1wdHk6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0YEg0YDQvtC70YzRjiBtb25pdG9yaW5nINC/0L7QutCwINC90LUg0L3QsNC50LTQtdC90YsuJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdUdXppbG1hbGFyJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XHQnVHV6aWxtYSByb2xpZGFnaSBiaXIgeW9raSBiaXIgbmVjaHRhIGZveWRhbGFudXZjaGluaSB0YW5sYW5nLicsXHJcblx0XHRcdFx0XHRhcHByb3ZlckxhYmVsOiAnVGFzZGlxbG92Y2hpIGJvc2hsaXEnLFxyXG5cdFx0XHRcdFx0YXBwcm92ZXJEZXNjcmlwdGlvbjogJ01vbml0b3Jpbmcgcm9saWRhZ2kgYm9zaGxpcW5pIHRhbmxhbmcuJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyUGxhY2Vob2xkZXI6ICdCb3NobGlxbmkgdGFubGFuZycsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiAnTWHigJlsdW1vdGxhciB5dWtsYW5tb3FkYS4uLicsXHJcblx0XHRcdFx0XHRlbXB0eTogJ0hvemlyY2hhIHR1emlsbWEgcm9saWRhZ2kgZm95ZGFsYW51dmNoaSB0b3BpbG1hZGkuJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyRW1wdHk6XHJcblx0XHRcdFx0XHRcdCdIb3ppcmNoYSBtb25pdG9yaW5nIHJvbGlkYWdpIGZveWRhbGFudXZjaGkgdG9waWxtYWRpLicsXHJcblx0XHRcdFx0fVxyXG5cclxuXHRjb25zdCBzZWxlY3RlZFVzZXJzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IHBhcnNlU2VsZWN0ZWRVc2VycyhyZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0pLFxyXG5cdFx0W3Byb3BlcnR5LnBhdGgsIHJlY29yZC5wYXJhbXNdLFxyXG5cdClcclxuXHRjb25zdCBzZWxlY3RlZEFwcHJvdmVyID0gU3RyaW5nKHJlY29yZC5wYXJhbXM/LmFwcHJvdmVyIHx8ICcnKVxyXG5cdGNvbnN0IHNlbGVjdGVkVXNlcnNFcnJvciA9IHJlY29yZC5lcnJvcnM/LnNlbGVjdGVkVXNlcnM/Lm1lc3NhZ2VcclxuXHRjb25zdCBhcHByb3ZlckVycm9yID0gcmVjb3JkLmVycm9ycz8uYXBwcm92ZXI/Lm1lc3NhZ2VcclxuXHJcblx0Y29uc3Qgc3RydWN0dXJlVXNlcnMgPSB1c2VNZW1vKFxyXG5cdFx0KCkgPT4gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlcj8ucGFyYW1zPy5yb2xlID09PSAndHV6aWxtYWxhcicpLFxyXG5cdFx0W3VzZXJzXSxcclxuXHQpXHJcblxyXG5cdGNvbnN0IG1vbml0b3JpbmdVc2VycyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiB1c2Vycy5maWx0ZXIodXNlciA9PiB1c2VyPy5wYXJhbXM/LnJvbGUgPT09ICdtb25pdG9yaW5nJyksXHJcblx0XHRbdXNlcnNdLFxyXG5cdClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxldCBpc0FjdGl2ZSA9IHRydWVcclxuXHJcblx0XHRjb25zdCBsb2FkVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG5cdFx0XHRcdFx0cmVzb3VyY2VJZDogJ1VzZXInLFxyXG5cdFx0XHRcdFx0YWN0aW9uTmFtZTogJ3BpY2tlcicsXHJcblx0XHRcdFx0XHRwYXJhbXM6IHsgcGVyUGFnZTogNTAwIH0sXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0aWYgKGlzQWN0aXZlKSB7XHJcblx0XHRcdFx0XHRzZXRVc2VycyhyZXNwb25zZS5kYXRhLnJlY29yZHMgfHwgW10pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGNhdGNoIHtcclxuXHRcdFx0XHRpZiAoaXNBY3RpdmUpIHtcclxuXHRcdFx0XHRcdHNldFVzZXJzKFtdKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRpZiAoaXNBY3RpdmUpIHtcclxuXHRcdFx0XHRcdHNldExvYWRpbmcoZmFsc2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bG9hZFVzZXJzKClcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRpc0FjdGl2ZSA9IGZhbHNlXHJcblx0XHR9XHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IHRvZ2dsZVVzZXIgPSB1c2VySWQgPT4ge1xyXG5cdFx0Y29uc3QgbmV4dFVzZXJzID0gc2VsZWN0ZWRVc2Vycy5pbmNsdWRlcyh1c2VySWQpXHJcblx0XHRcdD8gc2VsZWN0ZWRVc2Vycy5maWx0ZXIoaWQgPT4gaWQgIT09IHVzZXJJZClcclxuXHRcdFx0OiBbLi4uc2VsZWN0ZWRVc2VycywgdXNlcklkXVxyXG5cclxuXHRcdG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIEpTT04uc3RyaW5naWZ5KG5leHRVc2VycykpXHJcblx0fVxyXG5cclxuXHRjb25zdCBzZWxlY3RBcHByb3ZlciA9IHVzZXJJZCA9PiB7XHJcblx0XHRvbkNoYW5nZSgnYXBwcm92ZXInLCBTdHJpbmcodXNlcklkKSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94PlxyXG5cdFx0XHQ8TGFiZWwgcmVxdWlyZWQ9e3Byb3BlcnR5LmlzUmVxdWlyZWR9PlxyXG5cdFx0XHRcdHtwcm9wZXJ0eS5sYWJlbCAmJiBwcm9wZXJ0eS5sYWJlbCAhPT0gcHJvcGVydHkucGF0aFxyXG5cdFx0XHRcdFx0PyBwcm9wZXJ0eS5sYWJlbFxyXG5cdFx0XHRcdFx0OiB0ZXh0LmxhYmVsfVxyXG5cdFx0XHQ8L0xhYmVsPlxyXG5cdFx0XHQ8VGV4dCBtYj0nZGVmYXVsdCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdHt0ZXh0LmRlc2NyaXB0aW9ufVxyXG5cdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnOHB4JyB9fT5cclxuXHRcdFx0XHR7bG9hZGluZyA/IChcclxuXHRcdFx0XHRcdDxUZXh0Pnt0ZXh0LmxvYWRpbmd9PC9UZXh0PlxyXG5cdFx0XHRcdCkgOiBzdHJ1Y3R1cmVVc2Vycy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRzdHJ1Y3R1cmVVc2Vycy5tYXAodXNlciA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHVzZXJJZCA9IFN0cmluZyh1c2VyLmlkKVxyXG5cdFx0XHRcdFx0XHRjb25zdCBjaGVja2VkID0gc2VsZWN0ZWRVc2Vycy5pbmNsdWRlcyh1c2VySWQpXHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBrZXk9e3VzZXJJZH0gc3R5bGU9e2l0ZW1TdHlsZShjaGVja2VkKX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2NoZWNrZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVVc2VyKHVzZXJJZCl9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3Jlc29sdmVTdHJ1Y3R1cmVMYWJlbCh1c2VyKX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PFRleHQ+e3RleHQuZW1wdHl9PC9UZXh0PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0e3NlbGVjdGVkVXNlcnNFcnJvciA/IChcclxuXHRcdFx0XHQ8VGV4dCBtdD0nc20nIHN0eWxlPXtlcnJvclRleHRTdHlsZX0+XHJcblx0XHRcdFx0XHR7c2VsZWN0ZWRVc2Vyc0Vycm9yfVxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHQ8Qm94IG10PSd4bCc+XHJcblx0XHRcdFx0PExhYmVsIHJlcXVpcmVkPnt0ZXh0LmFwcHJvdmVyTGFiZWx9PC9MYWJlbD5cclxuXHRcdFx0XHQ8VGV4dCBtYj0nZGVmYXVsdCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0e3RleHQuYXBwcm92ZXJEZXNjcmlwdGlvbn1cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdHtsb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0PFRleHQ+e3RleHQubG9hZGluZ308L1RleHQ+XHJcblx0XHRcdFx0KSA6IG1vbml0b3JpbmdVc2Vycy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZEFwcHJvdmVyfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2VsZWN0QXBwcm92ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3NlbGVjdFN0eWxlfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPScnPnt0ZXh0LmFwcHJvdmVyUGxhY2Vob2xkZXJ9PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdHttb25pdG9yaW5nVXNlcnMubWFwKHVzZXIgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXt1c2VyLmlkfSB2YWx1ZT17U3RyaW5nKHVzZXIuaWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtyZXNvbHZlQXBwcm92ZXJMYWJlbCh1c2VyKX1cclxuXHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PFRleHQ+e3RleHQuYXBwcm92ZXJFbXB0eX08L1RleHQ+XHJcblx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0e2FwcHJvdmVyRXJyb3IgPyAoXHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nIHN0eWxlPXtlcnJvclRleHRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdHthcHByb3ZlckVycm9yfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VVc2Vyc0VkaXRcclxuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIExhYmVsLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFVOSVRfT1BUSU9OUyA9IFtcclxuXHQnZG9uYScsXHJcblx0J2tnJyxcclxuXHQnbGl0cicsXHJcblx0J21ldHInLFxyXG5cdCdxdXRpJyxcclxuXHQna29tcGxla3QnLFxyXG5cdCdqdWZ0JyxcclxuXHQncGFrZXQnLFxyXG5dXHJcbmNvbnN0IEVNUFRZX0lURU0gPSB7XHJcblx0cHJvZHVjdE5hbWU6ICcnLFxyXG5cdGZlYXR1cmVzOiAnJyxcclxuXHR1bml0OiAnZG9uYScsXHJcblx0cXVhbnRpdHk6IDEsXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlSXRlbXMgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIFt7IC4uLkVNUFRZX0lURU0gfV1cclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHZhbHVlKVxyXG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSAmJiBwYXJzZWQubGVuZ3RoID8gcGFyc2VkIDogW3sgLi4uRU1QVFlfSVRFTSB9XVxyXG5cdH0gY2F0Y2gge1xyXG5cdFx0cmV0dXJuIFt7IC4uLkVNUFRZX0lURU0gfV1cclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IFB1cmNoYXNlSXRlbXNFZGl0ID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSA9IHByb3BzXHJcblx0Y29uc3Qge1xyXG5cdFx0aTE4bjogeyBsYW5ndWFnZSB9LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblx0Y29uc3QgdGV4dCA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdGxhYmVsOiAn0KLQvtCy0LDRgNGLJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAn0JLRiyDQvNC+0LbQtdGC0LUg0LTQvtCx0LDQstC40YLRjCDQvdC10L7Qs9GA0LDQvdC40YfQtdC90L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGC0L7QstCw0YDQvtCyLicsXHJcblx0XHRcdFx0XHRpdGVtOiAn0KLQvtCy0LDRgCcsXHJcblx0XHRcdFx0XHRuYW1lOiAn0J3QsNC30LLQsNC90LjQtSDRgtC+0LLQsNGA0LAnLFxyXG5cdFx0XHRcdFx0ZmVhdHVyZXM6ICfQpdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutC4JyxcclxuXHRcdFx0XHRcdHF1YW50aXR5OiAn0JrQvtC70LjRh9C10YHRgtCy0L4nLFxyXG5cdFx0XHRcdFx0cmVtb3ZlOiAn0KPQtNCw0LvQuNGC0YwnLFxyXG5cdFx0XHRcdFx0YWRkOiAnKyDQlNC+0LHQsNCy0LjRgtGMINGC0L7QstCw0YAnLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHRsYWJlbDogJ1RvdmFybGFyJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnVG92YXJsYXJuaSB4b2hsYWdhbmNoYSBxb+KAmHNoaXNoaW5naXogbXVta2luLicsXHJcblx0XHRcdFx0XHRpdGVtOiAnVG92YXInLFxyXG5cdFx0XHRcdFx0bmFtZTogJ1RvdmFyIG5vbWknLFxyXG5cdFx0XHRcdFx0ZmVhdHVyZXM6ICdYdXN1c2l5YXRsYXJpJyxcclxuXHRcdFx0XHRcdHF1YW50aXR5OiAnU29uaScsXHJcblx0XHRcdFx0XHRyZW1vdmU6ICdPbGliIHRhc2hsYXNoJyxcclxuXHRcdFx0XHRcdGFkZDogJysgVG92YXIgcW/igJhzaGlzaCcsXHJcblx0XHRcdFx0fVxyXG5cdGNvbnN0IGl0ZW1zID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IHBhcnNlSXRlbXMocmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdKSxcclxuXHRcdFtwcm9wZXJ0eS5wYXRoLCByZWNvcmQucGFyYW1zXSxcclxuXHQpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIXJlY29yZC5wYXJhbXM/Lltwcm9wZXJ0eS5wYXRoXSkge1xyXG5cdFx0XHRvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBKU09OLnN0cmluZ2lmeShbeyAuLi5FTVBUWV9JVEVNIH1dKSlcclxuXHRcdH1cclxuXHR9LCBbb25DaGFuZ2UsIHByb3BlcnR5LnBhdGgsIHJlY29yZC5wYXJhbXNdKVxyXG5cclxuXHRjb25zdCB1cGRhdGVJdGVtcyA9IG5leHRJdGVtcyA9PiB7XHJcblx0XHRvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBKU09OLnN0cmluZ2lmeShuZXh0SXRlbXMpKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgdXBkYXRlRmllbGQgPSAoaW5kZXgsIGZpZWxkLCB2YWx1ZSkgPT4ge1xyXG5cdFx0Y29uc3QgbmV4dEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBjdXJyZW50SW5kZXgpID0+XHJcblx0XHRcdGN1cnJlbnRJbmRleCA9PT0gaW5kZXhcclxuXHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0Li4uaXRlbSxcclxuXHRcdFx0XHRcdFx0W2ZpZWxkXTogZmllbGQgPT09ICdxdWFudGl0eScgPyBOdW1iZXIodmFsdWUgfHwgMCkgOiB2YWx1ZSxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ6IGl0ZW0sXHJcblx0XHQpXHJcblxyXG5cdFx0dXBkYXRlSXRlbXMobmV4dEl0ZW1zKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuXHRcdHVwZGF0ZUl0ZW1zKFsuLi5pdGVtcywgeyAuLi5FTVBUWV9JVEVNIH1dKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVtb3ZlSXRlbSA9IGluZGV4ID0+IHtcclxuXHRcdGNvbnN0IG5leHRJdGVtcyA9IGl0ZW1zLmZpbHRlcigoXywgY3VycmVudEluZGV4KSA9PiBjdXJyZW50SW5kZXggIT09IGluZGV4KVxyXG5cdFx0dXBkYXRlSXRlbXMobmV4dEl0ZW1zLmxlbmd0aCA/IG5leHRJdGVtcyA6IFt7IC4uLkVNUFRZX0lURU0gfV0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveD5cclxuXHRcdFx0PExhYmVsIHJlcXVpcmVkPXtwcm9wZXJ0eS5pc1JlcXVpcmVkfT5cclxuXHRcdFx0XHR7cHJvcGVydHkubGFiZWwgJiYgcHJvcGVydHkubGFiZWwgIT09IHByb3BlcnR5LnBhdGhcclxuXHRcdFx0XHRcdD8gcHJvcGVydHkubGFiZWxcclxuXHRcdFx0XHRcdDogdGV4dC5sYWJlbH1cclxuXHRcdFx0PC9MYWJlbD5cclxuXHRcdFx0PFRleHQgbWI9J2RlZmF1bHQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHR7dGV4dC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE0cHgnIH19PlxyXG5cdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdGtleT17YCR7cHJvcGVydHkucGF0aH0tJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0XHRwPSdsZydcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTRweCcsXHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZiZmYnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQuaXRlbX0gI3tpbmRleCArIDF9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGV4dC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ucHJvZHVjdE5hbWUgfHwgJyd9XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRmllbGQoaW5kZXgsICdwcm9kdWN0TmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNjYmQ1ZTEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdHJvd3M9JzQnXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGV4dC5mZWF0dXJlc31cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmZlYXR1cmVzIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZpZWxkKGluZGV4LCAnZmVhdHVyZXMnLCBldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjY2JkNWUxJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzaXplOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0udW5pdCB8fCAnZG9uYSd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZpZWxkKGluZGV4LCAndW5pdCcsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjY2JkNWUxJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e1VOSVRfT1BUSU9OUy5tYXAodW5pdCA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBrZXk9e3VuaXR9IHZhbHVlPXt1bml0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt1bml0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdudW1iZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1pbj0nMSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3RleHQucXVhbnRpdHl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnF1YW50aXR5ID8/IDF9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZpZWxkKGluZGV4LCAncXVhbnRpdHknLCBldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdDxCb3ggbXQ9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGluZGV4KX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGV4dC5yZW1vdmV9XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0PEJveCBtdD0nbGcnPlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT0nYnV0dG9uJyBvbkNsaWNrPXthZGRJdGVtfT5cclxuXHRcdFx0XHRcdHt0ZXh0LmFkZH1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlSXRlbXNFZGl0XHJcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBIMiwgSWNvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQdXJjaGFzZURvd25sb2FkQWN0aW9uID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHsgYWN0aW9uLCByZWNvcmQgfSA9IHByb3BzXHJcblx0Y29uc3Qge1xyXG5cdFx0aTE4bjogeyBsYW5ndWFnZSB9LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG5cdGNvbnN0IGZvcm1hdCA9XHJcblx0XHRhY3Rpb24/LmN1c3RvbT8uZm9ybWF0IHx8IChhY3Rpb24/Lm5hbWUgPT09ICdkb3dubG9hZFdvcmQnID8gJ3dvcmQnIDogJ3BkZicpXHJcblx0Y29uc3QgZXh0ZW5zaW9uID0gZm9ybWF0ID09PSAnd29yZCcgPyAnZG9jeCcgOiAncGRmJ1xyXG5cdGNvbnN0IHJlY29yZElkID0gcmVjb3JkPy5pZFxyXG5cdGNvbnN0IGRvd25sb2FkVXJsID0gYC9hZG1pbi9wdXJjaGFzZS1yZXF1ZXN0cy8ke3JlY29yZElkfS9kb3dubG9hZC8ke2Zvcm1hdH0/bGFuZz0ke2xhbmd1YWdlIHx8ICd1eid9YFxyXG5cdGNvbnN0IGJhY2tVcmwgPSBgL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZVJlcXVlc3QvcmVjb3Jkcy8ke3JlY29yZElkfS9zaG93YFxyXG5cdGNvbnN0IHRleHQgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0aXRsZTogYCR7ZXh0ZW5zaW9uLnRvVXBwZXJDYXNlKCl9INGE0LDQudC7INC/0L7QtNCz0L7RgtCw0LLQu9C40LLQsNC10YLRgdGPYCxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XHQn0JfQsNCz0YDRg9C30LrQsCDQtNC+0LvQttC90LAg0L3QsNGH0LDRgtGM0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4g0JXRgdC70Lgg0Y3RgtC+0LPQviDQvdC1INC/0YDQvtC40LfQvtGI0LvQviwg0L3QsNC20LzQuNGC0LUg0LrQvdC+0L/QutGDINC90LjQttC1LicsXHJcblx0XHRcdFx0XHRkb3dubG9hZEFnYWluOiBgJHtleHRlbnNpb24udG9VcHBlckNhc2UoKX0g0YHQutCw0YfQsNGC0YxgLFxyXG5cdFx0XHRcdFx0Z29CYWNrOiAn0JLQtdGA0L3Rg9GC0YzRgdGPINC6INC30LDRj9Cy0LrQtScsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiBgJHtleHRlbnNpb24udG9VcHBlckNhc2UoKX0gZmF5bCB0YXl5b3JsYW5tb3FkYWAsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J1l1a2xhYiBvbGlzaCBhdnRvbWF0aWsgYm9zaGxhbmlzaGkga2VyYWsuIEJvc2hsYW5tYXNhLCBxdXlpZGFnaSB0dWdtYW5pIGJvc2luZy4nLFxyXG5cdFx0XHRcdFx0ZG93bmxvYWRBZ2FpbjogYCR7ZXh0ZW5zaW9uLnRvVXBwZXJDYXNlKCl9IHl1a2xhYiBvbGlzaGAsXHJcblx0XHRcdFx0XHRnb0JhY2s6ICdBcml6YWdhIHFheXRpc2gnLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghcmVjb3JkSWQpIHtcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZFxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpXHJcblx0XHRpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cdFx0aWZyYW1lLnNyYyA9IGRvd25sb2FkVXJsXHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSlcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyhpZnJhbWUpKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCBbZG93bmxvYWRVcmwsIHJlY29yZElkXSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggdmFyaWFudD0nZ3JleSc+XHJcblx0XHRcdDxCb3ggYmc9J3doaXRlJyBwPSd4eGwnIGJvcmRlclJhZGl1cz0neGwnIGJveFNoYWRvdz0nY2FyZCc+XHJcblx0XHRcdFx0PFRleHQgY29sb3I9J3ByaW1hcnkxMDAnIGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8SDI+e3RleHQudGl0bGV9PC9IMj5cclxuXHRcdFx0XHQ8VGV4dCBtdD0nZGVmYXVsdCcgbWI9J3hsJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHR7dGV4dC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdDxCb3ggZGlzcGxheT0nZmxleCcgZmxleFdyYXA9J3dyYXAnIGdhcD0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPXtkb3dubG9hZFVybH0+XHJcblx0XHRcdFx0XHRcdDxJY29uIGljb249J0Rvd25sb2FkJyBtcj0nc20nIC8+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LmRvd25sb2FkQWdhaW59XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGhyZWY9e2JhY2tVcmx9IHZhcmlhbnQ9J291dGxpbmVkJz5cclxuXHRcdFx0XHRcdFx0e3RleHQuZ29CYWNrfVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZURvd25sb2FkQWN0aW9uXHJcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBIMiwgTWVzc2FnZUJveCwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IEFwaUNsaWVudCwgdXNlTm90aWNlLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcclxuY29uc3QgREVDSVNJT05TID0gWyd0YXNkaXFsYW5kaScsICdxaXNtYW4gdGFzZGlxbGFuZGknLCAncmFkIGV0aWxkaSddXHJcblxyXG5jb25zdCBwYXJzZUhpc3RvcnkgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodmFsdWUpXHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWQpID8gcGFyc2VkIDogW11cclxuXHR9IGNhdGNoIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgb3B0aW9uU3R5bGUgPSBzZWxlY3RlZCA9PiAoe1xyXG5cdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcblx0Z2FwOiAnMTBweCcsXHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTJweCcsXHJcblx0Ym9yZGVyOiBzZWxlY3RlZCA/ICcxcHggc29saWQgIzI1NjNlYicgOiAnMXB4IHNvbGlkICNkYmUzZjAnLFxyXG5cdGJhY2tncm91bmQ6IHNlbGVjdGVkID8gJyNlZmY2ZmYnIDogJyNmZmZmZmYnLFxyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG59KVxyXG5cclxuY29uc3QgdGV4dGFyZWFTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdG1pbkhlaWdodDogJzEyMHB4JyxcclxuXHRwYWRkaW5nOiAnMTJweCAxNHB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcblx0cmVzaXplOiAndmVydGljYWwnLFxyXG5cdGZvbnRTaXplOiAnMTRweCcsXHJcblx0Zm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG59XHJcblxyXG5jb25zdCBnZXREZWNpc2lvbk9wdGlvbk1ldGEgPSAoZGVjaXNpb24sIGxhbmd1YWdlKSA9PiB7XHJcblx0Y29uc3Qgb3B0aW9ucyA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmRpOiB7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAn0J/QvtC00YLQstC10YDQtNC40YLRjCcsXHJcblx0XHRcdFx0XHRcdGljb246ICfinJMnLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2RjZmNlNycsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzE2NjUzNCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0J3Fpc21hbiB0YXNkaXFsYW5kaSc6IHtcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICfQp9Cw0YHRgtC40YfQvdC+INC/0L7QtNGC0LLQtdGA0LTQuNGC0YwnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAn4peQJyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmZWYzYzcnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyNiNDUzMDknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzoge1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ9Ce0YLQutC70L7QvdC40YLRjCcsXHJcblx0XHRcdFx0XHRcdGljb246ICfinJUnLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2ZlZTJlMicsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI2I5MWMxYycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaToge1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ1Rhc2RpcWxhc2gnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAn4pyTJyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNkY2ZjZTcnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyMxNjY1MzQnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiB7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAnUWlzbWFuIHRhc2RpcWxhc2gnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAn4peQJyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmZWYzYzcnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyNiNDUzMDknLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzoge1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ1JhZCBldGlzaCcsXHJcblx0XHRcdFx0XHRcdGljb246ICfinJUnLFxyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2ZlZTJlMicsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnI2I5MWMxYycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdG9wdGlvbnNbZGVjaXNpb25dIHx8IHtcclxuXHRcdFx0bGFiZWw6IGRlY2lzaW9uLFxyXG5cdFx0XHRpY29uOiAn4oCiJyxcclxuXHRcdFx0YmFja2dyb3VuZDogJyNlMmU4ZjAnLFxyXG5cdFx0XHRjb2xvcjogJyM0NzU1NjknLFxyXG5cdFx0fVxyXG5cdClcclxufVxyXG5cclxuY29uc3QgcmVzb2x2ZVN0YWdlTGFiZWwgPSAoc3RhZ2UsIHRleHQpID0+IHtcclxuXHRpZiAoc3RhZ2UgPT09ICdtb25pdG9yaW5nJykge1xyXG5cdFx0cmV0dXJuIHRleHQuc3RhZ2VNb25pdG9yaW5nXHJcblx0fVxyXG5cclxuXHRpZiAoc3RhZ2UgPT09ICd5YWt1bmxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHRleHQuc3RhZ2VGaW5pc2hlZFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRleHQuc3RhZ2VTdHJ1Y3R1cmVzXHJcbn1cclxuXHJcbmNvbnN0IHJlc29sdmVIaXN0b3J5U3RhZ2UgPSAoc3RhZ2UsIHRleHQpID0+IHtcclxuXHRpZiAoc3RhZ2UgPT09ICdtb25pdG9yaW5nJykge1xyXG5cdFx0cmV0dXJuIHRleHQuc3RhZ2VNb25pdG9yaW5nU2hvcnRcclxuXHR9XHJcblxyXG5cdGlmIChzdGFnZSA9PT0gJ3lha3VubGFuZGknKSB7XHJcblx0XHRyZXR1cm4gdGV4dC5zdGFnZUZpbmlzaGVkU2hvcnRcclxuXHR9XHJcblxyXG5cdHJldHVybiB0ZXh0LnN0YWdlU3RydWN0dXJlc1Nob3J0XHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICctJ1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKVxyXG5cdGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhZCA9IG51bWJlciA9PiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0cmV0dXJuIGAke3BhZChkYXRlLmdldERhdGUoKSl9LiR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtwYWQoZGF0ZS5nZXRIb3VycygpKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCkpfWBcclxufVxyXG5cclxuY29uc3QgUHVyY2hhc2VBcHByb3ZhbEFjdGlvbiA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IGFjdGlvbiwgcmVjb3JkLCByZXNvdXJjZSB9ID0gcHJvcHNcclxuXHRjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxyXG5cdGNvbnN0IFtkZWNpc2lvbiwgc2V0RGVjaXNpb25dID0gdXNlU3RhdGUoJ3Rhc2RpcWxhbmRpJylcclxuXHRjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3Qge1xyXG5cdFx0aTE4bjogeyBsYW5ndWFnZSB9LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG5cdGNvbnN0IHRleHQgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ9Cf0YDQuNC90Y/RgtGMINGA0LXRiNC10L3QuNC1INC/0L4g0LfQsNGP0LLQutC1JyxcclxuXHRcdFx0XHRcdHN1YnRpdGxlOlxyXG5cdFx0XHRcdFx0XHQn0J7Qt9C90LDQutC+0LzRjNGC0LXRgdGMINGBINC80LDRgtC10YDQuNCw0LvQsNC80Lgg0LfQsNGP0LLQutC4INC4INCy0YvQsdC10YDQuNGC0LUg0LjRgtC+0LPQvtCy0L7QtSDRgNC10YjQtdC90LjQtS4nLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAn0KHRgtCw0YLRg9GBJyxcclxuXHRcdFx0XHRcdHN0YWdlOiAn0KLQtdC60YPRidC40Lkg0Y3RgtCw0L8nLFxyXG5cdFx0XHRcdFx0c3VtbWFyeTogJ9Cl0L7QtCDRgdC+0LPQu9Cw0YHQvtCy0LDQvdC40Y8nLFxyXG5cdFx0XHRcdFx0bm9TdW1tYXJ5OiAn0JjRgdGC0L7RgNC40Y8g0YHQvtCz0LvQsNGB0L7QstCw0L3QuNGPINC/0L7QutCwINC/0YPRgdGC0LAuJyxcclxuXHRcdFx0XHRcdGRlY2lzaW9uTGFiZWw6ICfQktGL0LHQtdGA0LjRgtC1INGA0LXRiNC10L3QuNC1JyxcclxuXHRcdFx0XHRcdGNvbW1lbnRMYWJlbDogJ9Ca0L7QvNC80LXQvdGC0LDRgNC40LknLFxyXG5cdFx0XHRcdFx0Y29tbWVudE9wdGlvbmFsOlxyXG5cdFx0XHRcdFx0XHQn0J/RgNC4INC/0L7Qu9C90L7QvCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQuCDQutC+0LzQvNC10L3RgtCw0YDQuNC5INC90LUg0L7QsdGP0LfQsNGC0LXQu9C10L0uJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRSZXF1aXJlZDpcclxuXHRcdFx0XHRcdFx0J9Cf0YDQuCDRh9Cw0YHRgtC40YfQvdC+0Lwg0L/QvtC00YLQstC10YDQttC00LXQvdC40Lgg0Lgg0L7RgtC60LDQt9C1INC60L7QvNC80LXQvdGC0LDRgNC40Lkg0L7QsdGP0LfQsNGC0LXQu9C10L0uJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRSZXF1aXJlZEVycm9yOlxyXG5cdFx0XHRcdFx0XHQn0JTQu9GPINGH0LDRgdGC0LjRh9C90L7Qs9C+INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINC4INC+0YLQutCw0LfQsCDQvdGD0LbQvdC+INGD0LrQsNC30LDRgtGMINC60L7QvNC80LXQvdGC0LDRgNC40LkuJyxcclxuXHRcdFx0XHRcdHN1Ym1pdDogJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0YDQtdGI0LXQvdC40LUnLFxyXG5cdFx0XHRcdFx0c2F2aW5nOiAn0KHQvtGF0YDQsNC90Y/QtdGC0YHRjy4uLicsXHJcblx0XHRcdFx0XHRiYWNrOiAn0JLQtdGA0L3Rg9GC0YzRgdGPINC6INC30LDRj9Cy0LrQtScsXHJcblx0XHRcdFx0XHRoaXN0b3J5VGl0bGU6ICfQmNGB0YLQvtGA0LjRjyDRgdC+0LPQu9Cw0YHQvtCy0LDQvdC40Y8nLFxyXG5cdFx0XHRcdFx0c2F2ZUVycm9yOiAn0J3QtSDRg9C00LDQu9C+0YHRjCDRgdC+0YXRgNCw0L3QuNGC0Ywg0YDQtdGI0LXQvdC40LUuJyxcclxuXHRcdFx0XHRcdHN0YWdlU3RydWN0dXJlczogJ9Ch0L7Qs9C70LDRgdC+0LLQsNC90LjQtSDRgdGC0YDRg9C60YLRg9GAJyxcclxuXHRcdFx0XHRcdHN0YWdlTW9uaXRvcmluZzogJ9Ch0L7Qs9C70LDRgdC+0LLQsNC90LjQtSDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y8nLFxyXG5cdFx0XHRcdFx0c3RhZ2VGaW5pc2hlZDogJ9Cf0YDQvtGG0LXRgdGBINC30LDQstC10YDRiNGR0L0nLFxyXG5cdFx0XHRcdFx0c3RhZ2VTdHJ1Y3R1cmVzU2hvcnQ6ICfRgdGC0YDRg9C60YLRg9GA0YsnLFxyXG5cdFx0XHRcdFx0c3RhZ2VNb25pdG9yaW5nU2hvcnQ6ICfRgNGD0LrQvtCy0L7QtNC40YLQtdC70YwnLFxyXG5cdFx0XHRcdFx0c3RhZ2VGaW5pc2hlZFNob3J0OiAn0LfQsNCy0LXRgNGI0LXQvdC+JyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICdRYXJvcm5pIHRhc2RpcWxhc2gnLFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6XHJcblx0XHRcdFx0XHRcdCdBcml6YSBtYXRlcmlhbGxhcmluaSBrb+KAmHJpYiBjaGlxaW5nIHZhIHlha3VuaXkgcWFyb3JuaSB0YW5sYW5nLicsXHJcblx0XHRcdFx0XHRzdGF0dXM6ICdIb2xhdGknLFxyXG5cdFx0XHRcdFx0c3RhZ2U6ICdKb3JpeSBib3NxaWNoJyxcclxuXHRcdFx0XHRcdHN1bW1hcnk6ICdUYXNkaXFsYXNoIGphcmF5b25pJyxcclxuXHRcdFx0XHRcdG5vU3VtbWFyeTogJ0hvemlyY2hhIHRhc2RpcWxhc2ggdGFyaXhpIHlv4oCYcS4nLFxyXG5cdFx0XHRcdFx0ZGVjaXNpb25MYWJlbDogJ1Fhcm9yIHR1cmluaSB0YW5sYW5nJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRMYWJlbDogJ0l6b2gnLFxyXG5cdFx0XHRcdFx0Y29tbWVudE9wdGlvbmFsOiAnVG/igJhsaXEgdGFzZGlxbGFzaGRhIGl6b2ggeW96aXNoIG1hamJ1cml5IGVtYXMuJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRSZXF1aXJlZDpcclxuXHRcdFx0XHRcdFx0J1Fpc21hbiB0YXNkaXFsYXNoIHZhIHJhZCBldGlzaGRhIGl6b2gga2lyaXRpc2ggc2hhcnQuJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRSZXF1aXJlZEVycm9yOlxyXG5cdFx0XHRcdFx0XHQnUWlzbWFuIHRhc2RpcWxhc2ggeW9raSByYWQgZXRpc2ggdWNodW4gaXpvaCB5b3ppbmcuJyxcclxuXHRcdFx0XHRcdHN1Ym1pdDogJ1Fhcm9ybmkgdGFzZGlxbGFzaCcsXHJcblx0XHRcdFx0XHRzYXZpbmc6ICdTYXFsYW5tb3FkYS4uLicsXHJcblx0XHRcdFx0XHRiYWNrOiAnQXJpemFnYSBxYXl0aXNoJyxcclxuXHRcdFx0XHRcdGhpc3RvcnlUaXRsZTogJ1Rhc2RpcWxhc2ggdGFyaXhpJyxcclxuXHRcdFx0XHRcdHNhdmVFcnJvcjogJ1Fhcm9ybmkgc2FxbGFiIGJv4oCYbG1hZGkuJyxcclxuXHRcdFx0XHRcdHN0YWdlU3RydWN0dXJlczogJ1R1emlsbWFsYXIgdGFzZGln4oCYaScsXHJcblx0XHRcdFx0XHRzdGFnZU1vbml0b3Jpbmc6ICdCb3NobGlxIHRhc2RpZ+KAmGknLFxyXG5cdFx0XHRcdFx0c3RhZ2VGaW5pc2hlZDogJ0phcmF5b24geWFrdW5sYW5nYW4nLFxyXG5cdFx0XHRcdFx0c3RhZ2VTdHJ1Y3R1cmVzU2hvcnQ6ICd0dXppbG1hbGFyJyxcclxuXHRcdFx0XHRcdHN0YWdlTW9uaXRvcmluZ1Nob3J0OiAnYm9zaGxpcScsXHJcblx0XHRcdFx0XHRzdGFnZUZpbmlzaGVkU2hvcnQ6ICd5YWt1bmxhbmRpJyxcclxuXHRcdFx0XHR9XHJcblxyXG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VNZW1vKFxyXG5cdFx0KCkgPT4gcGFyc2VIaXN0b3J5KHJlY29yZD8ucGFyYW1zPy5hcHByb3ZhbEhpc3RvcnkpLnNsaWNlKCkucmV2ZXJzZSgpLFxyXG5cdFx0W3JlY29yZD8ucGFyYW1zPy5hcHByb3ZhbEhpc3RvcnldLFxyXG5cdClcclxuXHRjb25zdCBuZWVkc0NvbW1lbnQgPSBkZWNpc2lvbiAhPT0gJ3Rhc2RpcWxhbmRpJ1xyXG5cdGNvbnN0IGJhY2tVcmwgPSBgL2FkbWluL3Jlc291cmNlcy8ke3Jlc291cmNlPy5pZH0vcmVjb3Jkcy8ke3JlY29yZD8uaWR9L3Nob3dgXHJcblxyXG5cdGNvbnN0IHN1Ym1pdERlY2lzaW9uID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKG5lZWRzQ29tbWVudCAmJiAhY29tbWVudC50cmltKCkpIHtcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOiB0ZXh0LmNvbW1lbnRSZXF1aXJlZEVycm9yLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdH0pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHNldFNhdmluZyh0cnVlKVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnJlY29yZEFjdGlvbih7XHJcblx0XHRcdFx0cmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsXHJcblx0XHRcdFx0cmVjb3JkSWQ6IHJlY29yZC5pZCxcclxuXHRcdFx0XHRhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSxcclxuXHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRkZWNpc2lvbixcclxuXHRcdFx0XHRcdGNvbW1lbnQsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdGlmIChyZXNwb25zZT8uZGF0YT8ubm90aWNlKSB7XHJcblx0XHRcdFx0YWRkTm90aWNlKHJlc3BvbnNlLmRhdGEubm90aWNlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlPy5kYXRhPy5yZWRpcmVjdFVybCB8fCBiYWNrVXJsXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRzZXRTYXZpbmcoZmFsc2UpXHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5ub3RpY2U/Lm1lc3NhZ2UgfHwgdGV4dC5zYXZlRXJyb3IsXHJcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IHZhcmlhbnQ9J2dyZXknPlxyXG5cdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJyBib3hTaGFkb3c9J2NhcmQnPlxyXG5cdFx0XHRcdDxIMj57dGV4dC50aXRsZX08L0gyPlxyXG5cdFx0XHRcdDxUZXh0IG10PSdkZWZhdWx0JyBtYj0neGwnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdHt0ZXh0LnN1YnRpdGxlfVxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0PE1lc3NhZ2VCb3ggdmFyaWFudD0naW5mbycgbWI9J3hsJz5cclxuXHRcdFx0XHRcdDxUZXh0PlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPnt0ZXh0LnN0YXR1c306PC9zdHJvbmc+IHtyZWNvcmQ/LnBhcmFtcz8uc3RhdHVzIHx8ICctJ31cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e3RleHQuc3RhZ2V9Ojwvc3Ryb25nPnsnICd9XHJcblx0XHRcdFx0XHRcdHtyZXNvbHZlU3RhZ2VMYWJlbChyZWNvcmQ/LnBhcmFtcz8uY3VycmVudFN0YWdlLCB0ZXh0KX1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e3RleHQuc3VtbWFyeX06PC9zdHJvbmc+eycgJ31cclxuXHRcdFx0XHRcdFx0e3JlY29yZD8ucGFyYW1zPy5hcHByb3ZhbFN1bW1hcnkgfHwgdGV4dC5ub1N1bW1hcnl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9NZXNzYWdlQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC5kZWNpc2lvbkxhYmVsfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0e0RFQ0lTSU9OUy5tYXAob3B0aW9uID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZCA9IGRlY2lzaW9uID09PSBvcHRpb25cclxuXHRcdFx0XHRcdFx0XHRjb25zdCBtZXRhID0gZ2V0RGVjaXNpb25PcHRpb25NZXRhKG9wdGlvbiwgbGFuZ3VhZ2UpXHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwga2V5PXtvcHRpb259IHN0eWxlPXtvcHRpb25TdHlsZShzZWxlY3RlZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdyYWRpbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdkZWNpc2lvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17b3B0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3NlbGVjdGVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiBzZXREZWNpc2lvbihvcHRpb24pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXA6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMjRweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJzI0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IG1ldGEuYmFja2dyb3VuZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IG1ldGEuY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmxleFNocmluazogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21ldGEuaWNvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e21ldGEubGFiZWx9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBtdD0neGwnPlxyXG5cdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0e3RleHQuY29tbWVudExhYmVsfVxyXG5cdFx0XHRcdFx0XHR7bmVlZHNDb21tZW50ID8gJyAqJyA6ICcnfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PFRleHQgbWI9J2RlZmF1bHQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0e25lZWRzQ29tbWVudCA/IHRleHQuY29tbWVudFJlcXVpcmVkIDogdGV4dC5jb21tZW50T3B0aW9uYWx9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8dGV4dGFyZWFcclxuXHRcdFx0XHRcdFx0dmFsdWU9e2NvbW1lbnR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXt0ZXh0LmNvbW1lbnRMYWJlbH1cclxuXHRcdFx0XHRcdFx0c3R5bGU9e3RleHRhcmVhU3R5bGV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhXcmFwPSd3cmFwJyBnYXA9J2RlZmF1bHQnIG10PSd4bCc+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3N1Ym1pdERlY2lzaW9ufSBkaXNhYmxlZD17c2F2aW5nfT5cclxuXHRcdFx0XHRcdFx0e3NhdmluZyA/IHRleHQuc2F2aW5nIDogdGV4dC5zdWJtaXR9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGhyZWY9e2JhY2tVcmx9IHZhcmlhbnQ9J291dGxpbmVkJz5cclxuXHRcdFx0XHRcdFx0e3RleHQuYmFja31cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHR7aGlzdG9yeS5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHQ8Qm94IG10PSd4eGwnPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQuaGlzdG9yeVRpdGxlfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0e2hpc3RvcnkubWFwKChlbnRyeSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgJHtlbnRyeS5kZWNpZGVkQXQgfHwgJ2VudHJ5J30tJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwPSdsZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2UyZThmMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZW50cnkudXNlck5hbWUgfHwgJy0nfSDigJQge2VudHJ5LmRlY2lzaW9uIHx8ICctJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVzb2x2ZUhpc3RvcnlTdGFnZShlbnRyeS5zdGFnZSwgdGV4dCl9IMK3eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Zm9ybWF0RGF0ZShlbnRyeS5kZWNpZGVkQXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtlbnRyeS5jb21tZW50ID8gPFRleHQgbXQ9J3NtJz57ZW50cnkuY29tbWVudH08L1RleHQ+IDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VBcHByb3ZhbEFjdGlvblxyXG4iLCJpbXBvcnQgeyBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5cclxuY29uc3QgY29tcGFjdFN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICdibG9jaycsXHJcblx0bWF4V2lkdGg6ICcyMjBweCcsXHJcblx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG5cdHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuXHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxufVxyXG5cclxuY29uc3QgY29tbWVudFN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICctd2Via2l0LWJveCcsXHJcblx0bWF4V2lkdGg6ICczNjBweCcsXHJcblx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG5cdHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuXHR3aGl0ZVNwYWNlOiAnbm9ybWFsJyxcclxuXHRsaW5lSGVpZ2h0OiAnMS40JyxcclxuXHRXZWJraXRCb3hPcmllbnQ6ICd2ZXJ0aWNhbCcsXHJcblx0V2Via2l0TGluZUNsYW1wOiAyLFxyXG59XHJcblxyXG5jb25zdCBkZXRhaWxDYXJkU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2Jsb2NrJyxcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdG1heFdpZHRoOiAnbm9uZScsXHJcblx0bWluV2lkdGg6ICcxMDAlJyxcclxuXHRwYWRkaW5nOiAnMThweCAyMHB4JyxcclxuXHRtYXJnaW46ICc2cHggMCAxMnB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTRweCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG5cdGxpbmVIZWlnaHQ6ICcxLjcnLFxyXG5cdGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDQpJyxcclxufVxyXG5cclxuY29uc3Qgbm90ZUNhcmRTdHlsZSA9IHtcclxuXHQuLi5kZXRhaWxDYXJkU3R5bGUsXHJcblx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXHJcblx0d29yZEJyZWFrOiAnYnJlYWstd29yZCcsXHJcbn1cclxuXHJcbmNvbnN0IHNlY3Rpb25UaXRsZVN0eWxlID0ge1xyXG5cdGZvbnRTaXplOiAnMTNweCcsXHJcblx0Zm9udFdlaWdodDogNzAwLFxyXG5cdGNvbG9yOiAnIzBmMTcyYScsXHJcblx0bWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbn1cclxuXHJcbmNvbnN0IGhlbHBlclRleHRTdHlsZSA9IHtcclxuXHRmb250U2l6ZTogJzEycHgnLFxyXG5cdGNvbG9yOiAnIzY0NzQ4YicsXHJcbn1cclxuXHJcbmNvbnN0IGNoaXBXcmFwU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLFxyXG5cdGdhcDogJzEwcHgnLFxyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0bWFyZ2luVG9wOiAnOHB4JyxcclxufVxyXG5cclxuY29uc3QgY2hpcFN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcblx0anVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdGJhY2tncm91bmQ6ICcjZWZmNmZmJyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2JmZGJmZScsXHJcblx0Y29sb3I6ICcjMWQ0ZWQ4JyxcclxuXHRmb250U2l6ZTogJzEzcHgnLFxyXG5cdGZvbnRXZWlnaHQ6IDYwMCxcclxuXHRsaW5lSGVpZ2h0OiAnMS41JyxcclxuXHRib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuXHR3aGl0ZVNwYWNlOiAnbm9ybWFsJyxcclxuXHR3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcclxufVxyXG5cclxuY29uc3QgdGFibGVXcmFwU3R5bGUgPSB7XHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRvdmVyZmxvd1g6ICdhdXRvJyxcclxuXHRtYXJnaW5Ub3A6ICc4cHgnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZVN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0Ym9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXHJcblx0Zm9udFNpemU6ICcxM3B4JyxcclxufVxyXG5cclxuY29uc3QgdGFibGVIZWFkQ2VsbFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRjb2xvcjogJyMzMzQxNTUnLFxyXG5cdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlQ2VsbFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHR2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuXHRjb2xvcjogJyMxMTE4MjcnLFxyXG59XHJcblxyXG5jb25zdCBzdGF0dXNCYWRnZUJhc2VTdHlsZSA9IHtcclxuXHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRwYWRkaW5nOiAnNHB4IDEwcHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuXHRmb250U2l6ZTogJzEycHgnLFxyXG5cdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRsaW5lSGVpZ2h0OiAnMS40JyxcclxuXHRtYXhXaWR0aDogJ2ZpdC1jb250ZW50JyxcclxufVxyXG5cclxuY29uc3QgcGFyc2VJdGVtcyA9IHZhbHVlID0+IHtcclxuXHRpZiAoIXZhbHVlKSB7XHJcblx0XHRyZXR1cm4gW11cclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHZhbHVlKVxyXG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZCA6IFtdXHJcblx0fSBjYXRjaCB7XHJcblx0XHRyZXR1cm4gW11cclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlQXJyYXkgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh2YWx1ZSlcclxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQgOiBbXVxyXG5cdH0gY2F0Y2gge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBnZXRJdGVtc0NvdW50TGFiZWwgPSAoY291bnQsIGxhbmd1YWdlKSA9PiB7XHJcblx0aWYgKGxhbmd1YWdlID09PSAncnUnKSB7XHJcblx0XHRyZXR1cm4gYCR7Y291bnR9ICR7Y291bnQgPT09IDEgPyAn0LLQuNC0INGC0L7QstCw0YDQsCcgOiBjb3VudCA8IDUgPyAn0LLQuNC00LAg0YLQvtCy0LDRgNCwJyA6ICfQstC40LTQvtCyINGC0L7QstCw0YDQsCd9YFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGAke2NvdW50fSB0YSB0dXJkYWdpIHRvdmFyYFxyXG59XHJcblxyXG5jb25zdCBnZXRTZWxlY3RlZFVzZXJzQ291bnRMYWJlbCA9IChjb3VudCwgbGFuZ3VhZ2UpID0+IHtcclxuXHRpZiAobGFuZ3VhZ2UgPT09ICdydScpIHtcclxuXHRcdHJldHVybiBgJHtjb3VudH0gJHtjb3VudCA9PT0gMSA/ICfRgdGC0YDRg9C60YLRg9GA0LAnIDogY291bnQgPCA1ID8gJ9GB0YLRgNGD0LrRgtGD0YDRiycgOiAn0YHRgtGA0YPQutGC0YPRgCd9YFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGAke2NvdW50fSB0YSB0dXppbG1hYFxyXG59XHJcblxyXG5jb25zdCBub3JtYWxpemVUZXh0ID0gdmFsdWUgPT5cclxuXHRTdHJpbmcodmFsdWUgfHwgJy0nKVxyXG5cdFx0LnJlcGxhY2UoL1xccysvZywgJyAnKVxyXG5cdFx0LnRyaW0oKSB8fCAnLSdcclxuXHJcbmNvbnN0IG5vcm1hbGl6ZURldGFpbGVkVGV4dCA9IHZhbHVlID0+IFN0cmluZyh2YWx1ZSB8fCAnJykudHJpbSgpIHx8ICfigJQnXHJcblxyXG5jb25zdCBzcGxpdE5hbWVzID0gdmFsdWUgPT5cclxuXHRTdHJpbmcodmFsdWUgfHwgJycpXHJcblx0XHQuc3BsaXQoJywnKVxyXG5cdFx0Lm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKVxyXG5cdFx0LmZpbHRlcihCb29sZWFuKVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudEN5Y2xlSGlzdG9yeSA9IGhpc3RvcnkgPT4ge1xyXG5cdGNvbnN0IGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGhpc3RvcnkpID8gaGlzdG9yeSA6IFtdXHJcblx0Y29uc3QgbGFzdFJlc3VibWl0dGVkSW5kZXggPSBlbnRyaWVzXHJcblx0XHQubWFwKGl0ZW0gPT4gU3RyaW5nKGl0ZW0/LnN0YWdlIHx8ICcnKS50b0xvd2VyQ2FzZSgpKVxyXG5cdFx0Lmxhc3RJbmRleE9mKCdyZXN1Ym1pdHRlZCcpXHJcblxyXG5cdHJldHVybiBsYXN0UmVzdWJtaXR0ZWRJbmRleCA+PSAwXHJcblx0XHQ/IGVudHJpZXMuc2xpY2UobGFzdFJlc3VibWl0dGVkSW5kZXggKyAxKVxyXG5cdFx0OiBlbnRyaWVzXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gdmFsdWUgPT4ge1xyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiAn4oCUJ1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKVxyXG5cclxuXHRpZiAoTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xyXG5cdFx0cmV0dXJuIG5vcm1hbGl6ZURldGFpbGVkVGV4dCh2YWx1ZSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhZCA9IG51bWJlciA9PiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0cmV0dXJuIGAke3BhZChkYXRlLmdldERhdGUoKSl9LiR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtwYWQoZGF0ZS5nZXRIb3VycygpKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCkpfWBcclxufVxyXG5cclxuY29uc3QgZ2V0TG9jYWxpemVkVmFsdWUgPSAocGF0aCwgdmFsdWUsIGxhbmd1YWdlKSA9PiB7XHJcblx0Y29uc3Qgbm9ybWFsaXplZFZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnRvTG93ZXJDYXNlKClcclxuXHJcblx0aWYgKHBhdGggPT09ICdzdGF0dXMnKSB7XHJcblx0XHRjb25zdCBsYWJlbHMgPVxyXG5cdFx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0XHQna2/igJhyaWxtb3FkYSc6ICfQndCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQuCcsXHJcblx0XHRcdFx0XHRcdCd0dXppbG1hbGFyIHRhc2RpZ+KAmGlkYSc6ICfQndCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQuCcsXHJcblx0XHRcdFx0XHRcdHRhc2RpcWxhbm1vcWRhOiAn0J3QsCDRg9GC0LLQtdGA0LbQtNC10L3QuNC4JyxcclxuXHRcdFx0XHRcdFx0J2Jvc2hsaXEgdGFzZGln4oCYaWRhJzogJ9Cd0LAg0YPRgtCy0LXRgNC20LTQtdC90LjQuCcsXHJcblx0XHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHRcdHRhc2RpcWxhbmRpOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdFx0J3Fpc21hbiB0YXNkaXFsYW5kaSc6ICfQp9Cw0YHRgtC40YfQvdC+INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHRcdCdzb3RpYiBvbGlzaCBrZXJhayc6ICfQotGA0LXQsdGD0LXRgtGB0Y8g0LfQsNC60YPQv9C60LAnLFxyXG5cdFx0XHRcdFx0XHQnc290aWIgb2xpbm1vcWRhJzogJ9CSINC30LDQutGD0L/QutC1JyxcclxuXHRcdFx0XHRcdFx0J3JhZCBldGlsZGknOiAn0J7RgtC60LDQt9Cw0L3QvicsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0OiB7XHJcblx0XHRcdFx0XHRcdCdrb+KAmHJpbG1vcWRhJzogJ0tv4oCYcmlsbW9xZGEnLFxyXG5cdFx0XHRcdFx0XHQndHV6aWxtYWxhciB0YXNkaWfigJhpZGEnOiAnS2/igJhyaWxtb3FkYScsXHJcblx0XHRcdFx0XHRcdHRhc2RpcWxhbm1vcWRhOiAnVGFzZGlxbGFubW9xZGEnLFxyXG5cdFx0XHRcdFx0XHQnYm9zaGxpcSB0YXNkaWfigJhpZGEnOiAnVGFzZGlxbGFubW9xZGEnLFxyXG5cdFx0XHRcdFx0XHR0YXNkaXFsYW5nYW46ICdUYXNkaXFsYW5nYW4nLFxyXG5cdFx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ1Rhc2RpcWxhbmdhbicsXHJcblx0XHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiAnUWlzbWFuIHRhc2RpcWxhbmRpJyxcclxuXHRcdFx0XHRcdFx0J3NvdGliIG9saXNoIGtlcmFrJzogJ1NvdGliIG9saXNoIGtlcmFrJyxcclxuXHRcdFx0XHRcdFx0J3NvdGliIG9saW5tb3FkYSc6ICdTb3RpYiBvbGlubW9xZGEnLFxyXG5cdFx0XHRcdFx0XHQncmFkIGV0aWxkaSc6ICdSYWQgZXRpbGRpJyxcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbGFiZWxzW25vcm1hbGl6ZWRWYWx1ZV0gfHwgdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnY3VycmVudFN0YWdlJykge1xyXG5cdFx0Y29uc3QgbGFiZWxzID1cclxuXHRcdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0dHV6aWxtYWxhcjogJ9Ch0YLRgNGD0LrRgtGD0YDRiycsXHJcblx0XHRcdFx0XHRcdG1vbml0b3Jpbmc6ICfQoNGD0LrQvtCy0L7QtNC40YLQtdC70YwnLFxyXG5cdFx0XHRcdFx0XHRzb3RpYl9vbGlzaDogJ9CX0LDQutGD0L/QutCwJyxcclxuXHRcdFx0XHRcdFx0eWFrdW5sYW5kaTogJ9CX0LDQstC10YDRiNC10L3QvicsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0OiB7XHJcblx0XHRcdFx0XHRcdHR1emlsbWFsYXI6ICdUdXppbG1hJyxcclxuXHRcdFx0XHRcdFx0bW9uaXRvcmluZzogJ0Jvc2hsaXEnLFxyXG5cdFx0XHRcdFx0XHRzb3RpYl9vbGlzaDogJ1NvdGliIG9saXNoJyxcclxuXHRcdFx0XHRcdFx0eWFrdW5sYW5kaTogJ1lha3VubGFuZGknLFxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdHJldHVybiBsYWJlbHNbbm9ybWFsaXplZFZhbHVlXSB8fCB2YWx1ZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmNvbnN0IGdldFN0YXR1c1N0eWxlID0gKHBhdGgsIHZhbHVlKSA9PiB7XHJcblx0Y29uc3Qgbm9ybWFsaXplZFZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnRvTG93ZXJDYXNlKClcclxuXHJcblx0aWYgKHBhdGggPT09ICdjdXJyZW50U3RhZ2UnKSB7XHJcblx0XHRpZiAobm9ybWFsaXplZFZhbHVlID09PSAnbW9uaXRvcmluZycpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2VkZTlmZScsXHJcblx0XHRcdFx0Y29sb3I6ICcjNmQyOGQ5JyxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChub3JtYWxpemVkVmFsdWUgPT09ICdzb3RpYl9vbGlzaCcpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2RiZWFmZScsXHJcblx0XHRcdFx0Y29sb3I6ICcjMWQ0ZWQ4JyxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChub3JtYWxpemVkVmFsdWUgPT09ICd5YWt1bmxhbmRpJykge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXR1c0JhZGdlQmFzZVN0eWxlLFxyXG5cdFx0XHRcdGJhY2tncm91bmQ6ICcjZTVlN2ViJyxcclxuXHRcdFx0XHRjb2xvcjogJyMzNzQxNTEnLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHsgLi4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsIGJhY2tncm91bmQ6ICcjZGJlYWZlJywgY29sb3I6ICcjMWQ0ZWQ4JyB9XHJcblx0fVxyXG5cclxuXHRpZiAoWyd0YXNkaXFsYW5nYW4nLCAndGFzZGlxbGFuZGknXS5pbmNsdWRlcyhub3JtYWxpemVkVmFsdWUpKSB7XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSwgYmFja2dyb3VuZDogJyNkY2ZjZTcnLCBjb2xvcjogJyMxNjY1MzQnIH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkVmFsdWUgPT09ICdxaXNtYW4gdGFzZGlxbGFuZGknKSB7XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSwgYmFja2dyb3VuZDogJyNmZWYzYzcnLCBjb2xvcjogJyNiNDUzMDknIH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkVmFsdWUgPT09ICdzb3RpYiBvbGlzaCBrZXJhaycpIHtcclxuXHRcdHJldHVybiB7IC4uLnN0YXR1c0JhZGdlQmFzZVN0eWxlLCBiYWNrZ3JvdW5kOiAnI2RiZWFmZScsIGNvbG9yOiAnIzFkNGVkOCcgfVxyXG5cdH1cclxuXHJcblx0aWYgKG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ3NvdGliIG9saW5tb3FkYScpIHtcclxuXHRcdHJldHVybiB7IC4uLnN0YXR1c0JhZGdlQmFzZVN0eWxlLCBiYWNrZ3JvdW5kOiAnI2VkZTlmZScsIGNvbG9yOiAnIzZkMjhkOScgfVxyXG5cdH1cclxuXHJcblx0aWYgKG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ3JhZCBldGlsZGknKSB7XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSwgYmFja2dyb3VuZDogJyNmZWUyZTInLCBjb2xvcjogJyNiOTFjMWMnIH1cclxuXHR9XHJcblxyXG5cdGlmIChbJ3Rhc2RpcWxhbm1vcWRhJywgJ2Jvc2hsaXEgdGFzZGln4oCYaWRhJ10uaW5jbHVkZXMobm9ybWFsaXplZFZhbHVlKSkge1xyXG5cdFx0cmV0dXJuIHsgLi4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsIGJhY2tncm91bmQ6ICcjZWRlOWZlJywgY29sb3I6ICcjNmQyOGQ5JyB9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4geyAuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSwgYmFja2dyb3VuZDogJyNkYmVhZmUnLCBjb2xvcjogJyMxZDRlZDgnIH1cclxufVxyXG5cclxuY29uc3QgZ2V0QXBwcm92YWxTaG9ydExhYmVsID0gKHZhbHVlLCBwYXJhbXMsIGxhbmd1YWdlKSA9PiB7XHJcblx0Y29uc3Qgc3VmZml4ID0gbGFuZ3VhZ2UgPT09ICdydScgPyAn0YjRgi4nIDogJ3RhJ1xyXG5cdGNvbnN0IHRleHQgPSBTdHJpbmcodmFsdWUgfHwgJycpXHJcblx0Y29uc3QgZGlyZWN0TWF0Y2ggPSB0ZXh0Lm1hdGNoKC8oXFxkKylcXHMqXFwvXFxzKihcXGQrKS8pXHJcblxyXG5cdGlmIChkaXJlY3RNYXRjaCkge1xyXG5cdFx0cmV0dXJuIGAke2RpcmVjdE1hdGNoWzFdfS8ke2RpcmVjdE1hdGNoWzJdfSAke3N1ZmZpeH1gXHJcblx0fVxyXG5cclxuXHRjb25zdCBzZWxlY3RlZFVzZXJzQ291bnQgPSBwYXJzZUFycmF5KHBhcmFtcy5zZWxlY3RlZFVzZXJzKS5sZW5ndGhcclxuXHRjb25zdCByZXZpZXdlZENvdW50ID0gcGFyc2VBcnJheShwYXJhbXMuc3RydWN0dXJlQXBwcm92YWxzKS5maWx0ZXIoXHJcblx0XHRpdGVtID0+IGl0ZW0/LmRlY2lzaW9uLFxyXG5cdCkubGVuZ3RoXHJcblxyXG5cdGlmIChzZWxlY3RlZFVzZXJzQ291bnQpIHtcclxuXHRcdHJldHVybiBgJHtyZXZpZXdlZENvdW50fS8ke3NlbGVjdGVkVXNlcnNDb3VudH0gJHtzdWZmaXh9YFxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHZhbHVlXHJcbn1cclxuXHJcbmNvbnN0IGdldFJlcXVlc3ROdW1iZXJMYWJlbCA9ICh2YWx1ZSwgcGFyYW1zLCByZWNvcmQpID0+IHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmF3RGF0ZSA9IFN0cmluZyhwYXJhbXMuY3JlYXRlZEF0IHx8ICcnKVxyXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcclxuXHRcdC5zbGljZSgwLCAxMilcclxuXHRjb25zdCBmYWxsYmFja0RhdGUgPVxyXG5cdFx0cmF3RGF0ZSB8fCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICcnKS5zbGljZSgwLCAxMilcclxuXHRjb25zdCBpZFBhcnQgPVxyXG5cdFx0U3RyaW5nKHJlY29yZD8uaWQgfHwgJycpXHJcblx0XHRcdC5zbGljZSgtNClcclxuXHRcdFx0LnRvVXBwZXJDYXNlKCkgfHwgJzAwMDAnXHJcblx0cmV0dXJuIGBYUi0ke2ZhbGxiYWNrRGF0ZX0tJHtpZFBhcnR9YFxyXG59XHJcblxyXG5jb25zdCBnZXREZWNpc2lvbk1ldGEgPSAoZGVjaXNpb24sIGxhbmd1YWdlKSA9PiB7XHJcblx0Y29uc3Qgbm9ybWFsaXplZERlY2lzaW9uID0gU3RyaW5nKGRlY2lzaW9uIHx8ICcnKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnRvTG93ZXJDYXNlKClcclxuXHJcblx0Y29uc3QgbGFiZWxzID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZ2FuOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmRpOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiAn0KfQsNGB0YLQuNGH0L3QviDQv9C+0LTRgtCy0LXRgNC20LTQtdC90L4nLFxyXG5cdFx0XHRcdFx0J3JhZCBldGlsZGknOiAn0J7RgtC60LDQt9Cw0L3QvicsXHJcblx0XHRcdFx0XHRwZW5kaW5nOiAn0J7QttC40LTQsNC10YLRgdGPJyxcclxuXHRcdFx0XHRcdHdhaXRpbmc6ICfQntGH0LXRgNC10LTRjCDQvdC1INC/0L7QtNC+0YjQu9CwJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZ2FuOiAnVGFzZGlxbGFuZ2FuJyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmRpOiAnVGFzZGlxbGFuZGknLFxyXG5cdFx0XHRcdFx0J3Fpc21hbiB0YXNkaXFsYW5kaSc6ICdRaXNtYW4gdGFzZGlxbGFuZGknLFxyXG5cdFx0XHRcdFx0J3JhZCBldGlsZGknOiAnUmFkIGV0aWxkaScsXHJcblx0XHRcdFx0XHRwZW5kaW5nOiAnS3V0aWxtb3FkYScsXHJcblx0XHRcdFx0XHR3YWl0aW5nOiAnTmF2YmF0aSBrZWxtYWdhbicsXHJcblx0XHRcdFx0fVxyXG5cclxuXHRpZiAoWyd0YXNkaXFsYW5nYW4nLCAndGFzZGlxbGFuZGknXS5pbmNsdWRlcyhub3JtYWxpemVkRGVjaXNpb24pKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbDogbGFiZWxzW25vcm1hbGl6ZWREZWNpc2lvbl0sXHJcblx0XHRcdHN5bWJvbDogJ+KckycsXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZGNmY2U3JyxcclxuXHRcdFx0Y29sb3I6ICcjMTY2NTM0JyxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkRGVjaXNpb24gPT09ICdxaXNtYW4gdGFzZGlxbGFuZGknKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbDogbGFiZWxzW25vcm1hbGl6ZWREZWNpc2lvbl0sXHJcblx0XHRcdHN5bWJvbDogJ+KckycsXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZmVmM2M3JyxcclxuXHRcdFx0Y29sb3I6ICcjYjQ1MzA5JyxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkRGVjaXNpb24gPT09ICdyYWQgZXRpbGRpJykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWw6IGxhYmVsc1tub3JtYWxpemVkRGVjaXNpb25dLFxyXG5cdFx0XHRzeW1ib2w6ICfinJUnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZlZTJlMicsXHJcblx0XHRcdGNvbG9yOiAnI2I5MWMxYycsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAobm9ybWFsaXplZERlY2lzaW9uID09PSAnd2FpdGluZycpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsOiBsYWJlbHMud2FpdGluZyxcclxuXHRcdFx0c3ltYm9sOiAn4oCiJyxcclxuXHRcdFx0YmFja2dyb3VuZDogJyNmMWY1ZjknLFxyXG5cdFx0XHRjb2xvcjogJyM0NzU1NjknLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGxhYmVsOiBsYWJlbHMucGVuZGluZyxcclxuXHRcdHN5bWJvbDogJ+KApicsXHJcblx0XHRiYWNrZ3JvdW5kOiAnI2RiZWFmZScsXHJcblx0XHRjb2xvcjogJyMxZDRlZDgnLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZ2V0QXBwcm92YWxSb3dzID0gKHBhcmFtcywgbGFuZ3VhZ2UpID0+IHtcclxuXHRjb25zdCBzZWxlY3RlZFVzZXJzID0gcGFyc2VBcnJheShwYXJhbXMuc2VsZWN0ZWRVc2VycykubWFwKGl0ZW0gPT5cclxuXHRcdFN0cmluZyhpdGVtKSxcclxuXHQpXHJcblx0Y29uc3Qgc2VsZWN0ZWROYW1lcyA9IHNwbGl0TmFtZXMocGFyYW1zLnNlbGVjdGVkVXNlck5hbWVzKVxyXG5cdGNvbnN0IHN0cnVjdHVyZUFwcHJvdmFscyA9IHBhcnNlQXJyYXkocGFyYW1zLnN0cnVjdHVyZUFwcHJvdmFscylcclxuXHRjb25zdCBhcHByb3ZhbEhpc3RvcnkgPSBwYXJzZUFycmF5KHBhcmFtcy5hcHByb3ZhbEhpc3RvcnkpXHJcblx0Y29uc3QgY3VycmVudEN5Y2xlSGlzdG9yeSA9IGdldEN1cnJlbnRDeWNsZUhpc3RvcnkoYXBwcm92YWxIaXN0b3J5KVxyXG5cdGNvbnN0IGFwcHJvdmFsTWFwID0gbmV3IE1hcCgpXHJcblxyXG5cdHN0cnVjdHVyZUFwcHJvdmFscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0Y29uc3Qga2V5ID0gU3RyaW5nKGl0ZW0/LnVzZXJJZCB8fCBgaWR4LSR7aW5kZXh9YClcclxuXHRcdGFwcHJvdmFsTWFwLnNldChrZXksIGl0ZW0pXHJcblx0fSlcclxuXHJcblx0Y29uc3QgYmFzZVJvd3MgPSAoc2VsZWN0ZWRVc2Vycy5sZW5ndGggPyBzZWxlY3RlZFVzZXJzIDogc2VsZWN0ZWROYW1lcykubWFwKFxyXG5cdFx0KGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdGNvbnN0IHVzZXJJZCA9IHNlbGVjdGVkVXNlcnNbaW5kZXhdIHx8IGBpZHgtJHtpbmRleH1gXHJcblx0XHRcdGNvbnN0IGFwcHJvdmFsID1cclxuXHRcdFx0XHRhcHByb3ZhbE1hcC5nZXQodXNlcklkKSB8fFxyXG5cdFx0XHRcdChzZWxlY3RlZFVzZXJzLmxlbmd0aCA/IG51bGwgOiBzdHJ1Y3R1cmVBcHByb3ZhbHNbaW5kZXhdKVxyXG5cdFx0XHRjb25zdCBuYW1lID0gYXBwcm92YWw/LnVzZXJOYW1lXHJcblx0XHRcdFx0PyBub3JtYWxpemVEZXRhaWxlZFRleHQoYXBwcm92YWwudXNlck5hbWUpXHJcblx0XHRcdFx0OiBzZWxlY3RlZE5hbWVzW2luZGV4XSB8fCBub3JtYWxpemVEZXRhaWxlZFRleHQoaXRlbSlcclxuXHRcdFx0Y29uc3QgbWV0YSA9IGdldERlY2lzaW9uTWV0YShhcHByb3ZhbD8uZGVjaXNpb24gfHwgJ3BlbmRpbmcnLCBsYW5ndWFnZSlcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aW5kZXg6IGluZGV4ICsgMSxcclxuXHRcdFx0XHRyb2xlOiBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQodGC0YDRg9C60YLRg9GA0LAnIDogJ1R1emlsbWEnLFxyXG5cdFx0XHRcdG5hbWUsXHJcblx0XHRcdFx0bWV0YSxcclxuXHRcdFx0XHRjb21tZW50OiBub3JtYWxpemVEZXRhaWxlZFRleHQoYXBwcm92YWw/LmNvbW1lbnQpLFxyXG5cdFx0XHRcdGRhdGU6IGZvcm1hdERhdGVUaW1lKGFwcHJvdmFsPy5kZWNpZGVkQXQpLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdClcclxuXHJcblx0Y29uc3QgbGFzdEFwcHJvdmVyRW50cnkgPSBbLi4uY3VycmVudEN5Y2xlSGlzdG9yeV1cclxuXHRcdC5yZXZlcnNlKClcclxuXHRcdC5maW5kKFxyXG5cdFx0XHRpdGVtID0+XHJcblx0XHRcdFx0U3RyaW5nKGl0ZW0/LnN0YWdlIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAnbW9uaXRvcmluZycgfHxcclxuXHRcdFx0XHRTdHJpbmcoaXRlbT8ucm9sZSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ21vbml0b3JpbmcnLFxyXG5cdFx0KVxyXG5cclxuXHRjb25zdCBub3JtYWxpemVkU3RhdHVzID0gU3RyaW5nKHBhcmFtcy5zdGF0dXMgfHwgJycpLnRvTG93ZXJDYXNlKClcclxuXHRjb25zdCBoYXNTdHJ1Y3R1cmVSZWplY3Rpb24gPSBzdHJ1Y3R1cmVBcHByb3ZhbHMuc29tZShcclxuXHRcdGl0ZW0gPT4gU3RyaW5nKGl0ZW0/LmRlY2lzaW9uIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAncmFkIGV0aWxkaScsXHJcblx0KVxyXG5cdGxldCBhcHByb3ZlclN0YXRlID0gJ3dhaXRpbmcnXHJcblx0aWYgKGxhc3RBcHByb3ZlckVudHJ5Py5kZWNpc2lvbikge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9IGxhc3RBcHByb3ZlckVudHJ5LmRlY2lzaW9uXHJcblx0fSBlbHNlIGlmIChcclxuXHRcdFsndGFzZGlxbGFuZ2FuJywgJ3Rhc2RpcWxhbmRpJywgJ3Fpc21hbiB0YXNkaXFsYW5kaSddLmluY2x1ZGVzKFxyXG5cdFx0XHRub3JtYWxpemVkU3RhdHVzLFxyXG5cdFx0KVxyXG5cdCkge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9IG5vcm1hbGl6ZWRTdGF0dXNcclxuXHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRTdGF0dXMgPT09ICdyYWQgZXRpbGRpJyAmJiAhaGFzU3RydWN0dXJlUmVqZWN0aW9uKSB7XHJcblx0XHRhcHByb3ZlclN0YXRlID0gbm9ybWFsaXplZFN0YXR1c1xyXG5cdH0gZWxzZSBpZiAoXHJcblx0XHRTdHJpbmcocGFyYW1zLmN1cnJlbnRTdGFnZSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ21vbml0b3JpbmcnIHx8XHJcblx0XHRub3JtYWxpemVkU3RhdHVzID09PSAndGFzZGlxbGFubW9xZGEnXHJcblx0KSB7XHJcblx0XHRhcHByb3ZlclN0YXRlID0gJ3BlbmRpbmcnXHJcblx0fVxyXG5cclxuXHRiYXNlUm93cy5wdXNoKHtcclxuXHRcdGluZGV4OiBiYXNlUm93cy5sZW5ndGggKyAxLFxyXG5cdFx0cm9sZTogbGFuZ3VhZ2UgPT09ICdydScgPyAn0KDRg9C60L7QstC+0LTQuNGC0LXQu9GMJyA6ICdCb3NobGlxJyxcclxuXHRcdG5hbWU6IG5vcm1hbGl6ZURldGFpbGVkVGV4dChwYXJhbXMuYXBwcm92ZXJOYW1lKSxcclxuXHRcdG1ldGE6IGdldERlY2lzaW9uTWV0YShhcHByb3ZlclN0YXRlLCBsYW5ndWFnZSksXHJcblx0XHRjb21tZW50OiBub3JtYWxpemVEZXRhaWxlZFRleHQobGFzdEFwcHJvdmVyRW50cnk/LmNvbW1lbnQpLFxyXG5cdFx0ZGF0ZTogZm9ybWF0RGF0ZVRpbWUobGFzdEFwcHJvdmVyRW50cnk/LmRlY2lkZWRBdCksXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIGJhc2VSb3dzXHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclNob3dWYWx1ZSA9ICh7IHBhdGgsIHBhcmFtcywgcG9wdWxhdGVkLCByZWNvcmQsIGxhbmd1YWdlIH0pID0+IHtcclxuXHRpZiAocGF0aCA9PT0gJ3JlcXVlc3ROdW1iZXInKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0c3R5bGU9e3sgLi4uZGV0YWlsQ2FyZFN0eWxlLCBmb250V2VpZ2h0OiA3MDAsIGxldHRlclNwYWNpbmc6ICcwLjA0ZW0nIH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7Z2V0UmVxdWVzdE51bWJlckxhYmVsKHBhcmFtcy5yZXF1ZXN0TnVtYmVyLCBwYXJhbXMsIHJlY29yZCl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0aWYgKHBhdGggPT09ICdzZWxlY3RlZFVzZXJOYW1lcycpIHtcclxuXHRcdGNvbnN0IG5hbWVzID0gc3BsaXROYW1lcyhwYXJhbXMuc2VsZWN0ZWRVc2VyTmFtZXMpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17ZGV0YWlsQ2FyZFN0eWxlfT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzZWN0aW9uVGl0bGVTdHlsZX0+XHJcblx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JLRi9Cx0YDQsNC90L3Ri9C1INGB0YLRgNGD0LrRgtGD0YDRiycgOiAnVGFubGFuZ2FuIHR1emlsbWFsYXInfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgLi4uaGVscGVyVGV4dFN0eWxlLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdHtnZXRTZWxlY3RlZFVzZXJzQ291bnRMYWJlbChuYW1lcy5sZW5ndGgsIGxhbmd1YWdlKX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtjaGlwV3JhcFN0eWxlfT5cclxuXHRcdFx0XHRcdHtuYW1lcy5sZW5ndGhcclxuXHRcdFx0XHRcdFx0PyBuYW1lcy5tYXAobmFtZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBrZXk9e25hbWV9IHN0eWxlPXtjaGlwU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHQ6ICfigJQnfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnYXBwcm92ZXJOYW1lJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17ZGV0YWlsQ2FyZFN0eWxlfT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgY29sb3I6ICcjMGYxNzJhJyB9fT5cclxuXHRcdFx0XHRcdHtub3JtYWxpemVEZXRhaWxlZFRleHQocGFyYW1zLmFwcHJvdmVyTmFtZSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAuLi5oZWxwZXJUZXh0U3R5bGUsIG1hcmdpblRvcDogJzZweCcgfX0+XHJcblx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0XHRcdFx0PyAn0KDRg9C60L7QstC+0LTQuNGC0LXQu9GMIC8g0LzQvtC90LjRgtC+0YDQuNC90LMnXHJcblx0XHRcdFx0XHRcdDogJ0Jvc2hsaXEgLyBtb25pdG9yaW5nJ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2NvbW1lbnQnIHx8IHBhdGggPT09ICdsYXN0Q29tbWVudCcpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e25vdGVDYXJkU3R5bGV9Pntub3JtYWxpemVEZXRhaWxlZFRleHQocGFyYW1zW3BhdGhdKX08L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnaXRlbXNTdW1tYXJ5Jykge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSBwYXJzZUl0ZW1zKHBhcmFtcy5pdGVtcylcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXtkZXRhaWxDYXJkU3R5bGV9PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3NlY3Rpb25UaXRsZVN0eWxlfT5cclxuXHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQlNC10YLQsNC70Lgg0YLQvtCy0LDRgNC+0LInIDogJ1RvdmFyIHRhZnNpbG90aSd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17dGFibGVXcmFwU3R5bGV9PlxyXG5cdFx0XHRcdFx0PHRhYmxlIHN0eWxlPXt0YWJsZVN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT4jPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9Ci0L7QstCw0YAnIDogJ1RvdmFyJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQpdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutCwJyA6ICdYdXN1c2l5YXRpJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQldC0LicgOiAnQmlybGlnaSd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JrQvtC7LdCy0L4nIDogJ1NvbmknfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0e2l0ZW1zLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17YCR7aXRlbS5wcm9kdWN0TmFtZX0tJHtpbmRleH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT57aW5kZXggKyAxfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplRGV0YWlsZWRUZXh0KGl0ZW0ucHJvZHVjdE5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplRGV0YWlsZWRUZXh0KGl0ZW0uZmVhdHVyZXMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplRGV0YWlsZWRUZXh0KGl0ZW0udW5pdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVEZXRhaWxlZFRleHQoaXRlbS5xdWFudGl0eSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0gY29sU3Bhbj17NX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICfQotC+0LLQsNGA0Ysg0L3QtSDRg9C60LDQt9Cw0L3RiydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ1RvdmFyIGtpcml0aWxtYWdhbid9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnYXBwcm92YWxTdW1tYXJ5Jykge1xyXG5cdFx0Y29uc3Qgcm93cyA9IGdldEFwcHJvdmFsUm93cyhwYXJhbXMsIGxhbmd1YWdlKVxyXG5cdFx0Y29uc3Qgc3VtbWFyeSA9IGdldEFwcHJvdmFsU2hvcnRMYWJlbChcclxuXHRcdFx0cGFyYW1zLmFwcHJvdmFsU3VtbWFyeSxcclxuXHRcdFx0cGFyYW1zLFxyXG5cdFx0XHRsYW5ndWFnZSxcclxuXHRcdClcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXtkZXRhaWxDYXJkU3R5bGV9PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3NlY3Rpb25UaXRsZVN0eWxlfT5cclxuXHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQotCw0LHQu9C40YbQsCDRgdC+0LPQu9Cw0YHQvtCy0LDQvdC40Y8nIDogJ1Rhc2RpcWxhc2ggamFkdmFsaSd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyAuLi5oZWxwZXJUZXh0U3R5bGUsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9CS0YvQv9C+0LvQvdC10L3QvicgOiAnS2/igJhyaWIgY2hpcWlsZ2FuJ306IHtzdW1tYXJ5fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3RhYmxlV3JhcFN0eWxlfT5cclxuXHRcdFx0XHRcdDx0YWJsZSBzdHlsZT17dGFibGVTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+IzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQoNC+0LvRjCcgOiAnUm9sJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQndCw0LfQstCw0L3QuNC1JyA6ICdOb21pJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQl9C90LDQuicgOiAnQmVsZ2knfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9Ch0YLQsNGC0YPRgScgOiAnSG9sYXQnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9Ca0L7QvNC80LXQvdGC0LDRgNC40LknIDogJ0l6b2gnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9CS0YDQtdC80Y8nIDogJ1ZhcXRpJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdHtyb3dzLm1hcChyb3cgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17YCR7cm93LnJvbGV9LSR7cm93LmluZGV4fS0ke3Jvdy5uYW1lfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT57cm93LmluZGV4fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9Pntyb3cucm9sZX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3sgLi4udGFibGVDZWxsU3R5bGUsIG1pbldpZHRoOiAnMTgwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMjRweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJzI0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJvdy5tZXRhLmJhY2tncm91bmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiByb3cubWV0YS5jb2xvcixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogODAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93Lm1ldGEuc3ltYm9sfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNHB4IDlweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogcm93Lm1ldGEuYmFja2dyb3VuZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHJvdy5tZXRhLmNvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA3MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93Lm1ldGEubGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4udGFibGVDZWxsU3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW5XaWR0aDogJzIyMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3b3JkQnJlYWs6ICdicmVhay13b3JkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5jb21tZW50fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3sgLi4udGFibGVDZWxsU3R5bGUsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cuZGF0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnY3JlYXRlZEJ5Jykge1xyXG5cdFx0Y29uc3QgdXNlcm5hbWUgPVxyXG5cdFx0XHRwb3B1bGF0ZWQuY3JlYXRlZEJ5Py5wYXJhbXM/LnVzZXJuYW1lIHx8XHJcblx0XHRcdG5vcm1hbGl6ZURldGFpbGVkVGV4dChwYXJhbXMuY3JlYXRlZEJ5KVxyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e2RldGFpbENhcmRTdHlsZX0+e3VzZXJuYW1lfTwvZGl2PlxyXG5cdH1cclxuXHJcblx0aWYgKFsnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCddLmluY2x1ZGVzKHBhdGgpKSB7XHJcblx0XHRyZXR1cm4gPGRpdiBzdHlsZT17ZGV0YWlsQ2FyZFN0eWxlfT57Zm9ybWF0RGF0ZVRpbWUocGFyYW1zW3BhdGhdKX08L2Rpdj5cclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXtkZXRhaWxDYXJkU3R5bGV9Pntub3JtYWxpemVEZXRhaWxlZFRleHQocGFyYW1zW3BhdGhdKX08L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmNvbnN0IFB1cmNoYXNlUmVxdWVzdExpc3RWYWx1ZSA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIHdoZXJlIH0gPSBwcm9wc1xyXG5cdGNvbnN0IHtcclxuXHRcdGkxOG46IHsgbGFuZ3VhZ2UgfSxcclxuXHR9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuXHRjb25zdCBwYXRoID0gcHJvcGVydHk/LnBhdGhcclxuXHRjb25zdCBwYXJhbXMgPSByZWNvcmQ/LnBhcmFtcyB8fCB7fVxyXG5cdGNvbnN0IHBvcHVsYXRlZCA9IHJlY29yZD8ucG9wdWxhdGVkIHx8IHt9XHJcblx0Y29uc3QgaXNTaG93ID0gd2hlcmUgPT09ICdzaG93J1xyXG5cclxuXHRsZXQgdmFsdWUgPSBwYXJhbXNbcGF0aF1cclxuXHRsZXQgdGl0bGUgPSB2YWx1ZVxyXG5cdGxldCBzdHlsZSA9IGNvbXBhY3RTdHlsZVxyXG5cclxuXHRpZiAoWydjb21tZW50JywgJ2xhc3RDb21tZW50J10uaW5jbHVkZXMocGF0aCkpIHtcclxuXHRcdHN0eWxlID0gY29tbWVudFN0eWxlXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ3NlbGVjdGVkVXNlck5hbWVzJykge1xyXG5cdFx0Y29uc3Qgc2VsZWN0ZWRVc2Vyc0NvdW50ID0gcGFyc2VBcnJheShwYXJhbXMuc2VsZWN0ZWRVc2VycykubGVuZ3RoXHJcblx0XHR2YWx1ZSA9IGlzU2hvd1xyXG5cdFx0XHQ/IHBhcmFtcy5zZWxlY3RlZFVzZXJOYW1lc1xyXG5cdFx0XHQ6IGdldFNlbGVjdGVkVXNlcnNDb3VudExhYmVsKHNlbGVjdGVkVXNlcnNDb3VudCwgbGFuZ3VhZ2UpXHJcblx0XHR0aXRsZSA9IHBhcmFtcy5zZWxlY3RlZFVzZXJOYW1lcyB8fCB2YWx1ZVxyXG5cdH1cclxuXHJcblx0aWYgKHBhdGggPT09ICdpdGVtc1N1bW1hcnknKSB7XHJcblx0XHRjb25zdCBpdGVtcyA9IHBhcnNlSXRlbXMocGFyYW1zLml0ZW1zKVxyXG5cdFx0dmFsdWUgPSBpc1Nob3dcclxuXHRcdFx0PyBwYXJhbXMuaXRlbXNTdW1tYXJ5XHJcblx0XHRcdDogZ2V0SXRlbXNDb3VudExhYmVsKGl0ZW1zLmxlbmd0aCwgbGFuZ3VhZ2UpXHJcblx0XHR0aXRsZSA9IHBhcmFtcy5pdGVtc1N1bW1hcnkgfHwgdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnYXBwcm92YWxTdW1tYXJ5Jykge1xyXG5cdFx0dmFsdWUgPSBnZXRBcHByb3ZhbFNob3J0TGFiZWwocGFyYW1zLmFwcHJvdmFsU3VtbWFyeSwgcGFyYW1zLCBsYW5ndWFnZSlcclxuXHRcdHRpdGxlID0gcGFyYW1zLmFwcHJvdmFsU3VtbWFyeSB8fCB2YWx1ZVxyXG5cdH1cclxuXHJcblx0aWYgKHBhdGggPT09ICdyZXF1ZXN0TnVtYmVyJykge1xyXG5cdFx0dmFsdWUgPSBnZXRSZXF1ZXN0TnVtYmVyTGFiZWwodmFsdWUsIHBhcmFtcywgcmVjb3JkKVxyXG5cdFx0dGl0bGUgPSB2YWx1ZVxyXG5cdH1cclxuXHJcblx0aWYgKHBhdGggPT09ICdjcmVhdGVkQnknKSB7XHJcblx0XHR2YWx1ZSA9IHBvcHVsYXRlZC5jcmVhdGVkQnk/LnBhcmFtcz8udXNlcm5hbWUgfHwgcGFyYW1zLmNyZWF0ZWRCeVxyXG5cdFx0dGl0bGUgPSB2YWx1ZVxyXG5cdH1cclxuXHJcblx0aWYgKFsnY3JlYXRlZEF0JywgJ3VwZGF0ZWRBdCddLmluY2x1ZGVzKHBhdGgpKSB7XHJcblx0XHR2YWx1ZSA9IGZvcm1hdERhdGVUaW1lKHZhbHVlKVxyXG5cdFx0dGl0bGUgPSB2YWx1ZVxyXG5cdH1cclxuXHJcblx0aWYgKFsnc3RhdHVzJywgJ2N1cnJlbnRTdGFnZSddLmluY2x1ZGVzKHBhdGgpKSB7XHJcblx0XHRjb25zdCBsb2NhbGl6ZWRWYWx1ZSA9IG5vcm1hbGl6ZVRleHQoXHJcblx0XHRcdGdldExvY2FsaXplZFZhbHVlKHBhdGgsIHZhbHVlLCBsYW5ndWFnZSksXHJcblx0XHQpXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8VGV4dCBzdHlsZT17Z2V0U3RhdHVzU3R5bGUocGF0aCwgdmFsdWUpfSB0aXRsZT17bG9jYWxpemVkVmFsdWV9PlxyXG5cdFx0XHRcdHtsb2NhbGl6ZWRWYWx1ZX1cclxuXHRcdFx0PC9UZXh0PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0aWYgKGlzU2hvdykge1xyXG5cdFx0cmV0dXJuIHJlbmRlclNob3dWYWx1ZSh7IHBhdGgsIHBhcmFtcywgcG9wdWxhdGVkLCByZWNvcmQsIGxhbmd1YWdlIH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCB0ZXh0ID0gbm9ybWFsaXplVGV4dCh2YWx1ZSlcclxuXHRjb25zdCB0b29sdGlwID0gbm9ybWFsaXplVGV4dCh0aXRsZSB8fCB2YWx1ZSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUZXh0IHN0eWxlPXtzdHlsZX0gdGl0bGU9e3Rvb2x0aXB9PlxyXG5cdFx0XHR7dGV4dH1cclxuXHRcdDwvVGV4dD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlUmVxdWVzdExpc3RWYWx1ZVxyXG4iLCJpbXBvcnQgeyBCb3gsIEgyLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5cclxuY29uc3QgcGFyc2VBcnJheSA9IHZhbHVlID0+IHtcclxuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh2YWx1ZSlcclxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQgOiBbXVxyXG5cdH0gY2F0Y2gge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBwYXJzZUl0ZW1zID0gdmFsdWUgPT5cclxuXHRwYXJzZUFycmF5KHZhbHVlKS5tYXAoaXRlbSA9PiAoe1xyXG5cdFx0cHJvZHVjdE5hbWU6IFN0cmluZyhpdGVtPy5wcm9kdWN0TmFtZSB8fCAnJykudHJpbSgpLFxyXG5cdFx0ZmVhdHVyZXM6IFN0cmluZyhpdGVtPy5mZWF0dXJlcyB8fCAnJykudHJpbSgpLFxyXG5cdFx0dW5pdDogU3RyaW5nKGl0ZW0/LnVuaXQgfHwgJycpLnRyaW0oKSxcclxuXHRcdHF1YW50aXR5OiBTdHJpbmcoaXRlbT8ucXVhbnRpdHkgfHwgJycpLnRyaW0oKSxcclxuXHR9KSlcclxuXHJcbmNvbnN0IHBhcnNlQnV5ZXJPcmRlckRhdGEgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiB7fVxyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodmFsdWUpXHJcblx0XHRyZXR1cm4gcGFyc2VkICYmIHR5cGVvZiBwYXJzZWQgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHBhcnNlZClcclxuXHRcdFx0PyBwYXJzZWRcclxuXHRcdFx0OiB7fVxyXG5cdH0gY2F0Y2gge1xyXG5cdFx0cmV0dXJuIHt9XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBzcGxpdE5hbWVzID0gdmFsdWUgPT5cclxuXHRTdHJpbmcodmFsdWUgfHwgJycpXHJcblx0XHQuc3BsaXQoJywnKVxyXG5cdFx0Lm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKVxyXG5cdFx0LmZpbHRlcihCb29sZWFuKVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudEN5Y2xlSGlzdG9yeSA9IGhpc3RvcnkgPT4ge1xyXG5cdGNvbnN0IGVudHJpZXMgPSBBcnJheS5pc0FycmF5KGhpc3RvcnkpID8gaGlzdG9yeSA6IFtdXHJcblx0Y29uc3QgbGFzdFJlc3VibWl0dGVkSW5kZXggPSBlbnRyaWVzXHJcblx0XHQubWFwKGl0ZW0gPT4gU3RyaW5nKGl0ZW0/LnN0YWdlIHx8ICcnKS50b0xvd2VyQ2FzZSgpKVxyXG5cdFx0Lmxhc3RJbmRleE9mKCdyZXN1Ym1pdHRlZCcpXHJcblxyXG5cdHJldHVybiBsYXN0UmVzdWJtaXR0ZWRJbmRleCA+PSAwXHJcblx0XHQ/IGVudHJpZXMuc2xpY2UobGFzdFJlc3VibWl0dGVkSW5kZXggKyAxKVxyXG5cdFx0OiBlbnRyaWVzXHJcbn1cclxuXHJcbmNvbnN0IG5vcm1hbGl6ZVRleHQgPSB2YWx1ZSA9PiBTdHJpbmcodmFsdWUgfHwgJycpLnRyaW0oKSB8fCAn4oCUJ1xyXG5cclxuY29uc3QgZm9ybWF0RGF0ZVRpbWUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICfigJQnXHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXHJcblx0aWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuXHRcdHJldHVybiBub3JtYWxpemVUZXh0KHZhbHVlKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFkID0gbnVtYmVyID0+IFN0cmluZyhudW1iZXIpLnBhZFN0YXJ0KDIsICcwJylcclxuXHRyZXR1cm4gYCR7cGFkKGRhdGUuZ2V0RGF0ZSgpKX0uJHtwYWQoZGF0ZS5nZXRNb250aCgpICsgMSl9LiR7ZGF0ZS5nZXRGdWxsWWVhcigpfSAke3BhZChkYXRlLmdldEhvdXJzKCkpfToke3BhZChkYXRlLmdldE1pbnV0ZXMoKSl9YFxyXG59XHJcblxyXG5jb25zdCBnZXRSZXF1ZXN0TnVtYmVyID0gKHBhcmFtcywgcmVjb3JkKSA9PiB7XHJcblx0aWYgKHBhcmFtcy5yZXF1ZXN0TnVtYmVyKSB7XHJcblx0XHRyZXR1cm4gcGFyYW1zLnJlcXVlc3ROdW1iZXJcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJhd0RhdGUgPSBTdHJpbmcocGFyYW1zLmNyZWF0ZWRBdCB8fCAnJylcclxuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXHJcblx0XHQuc2xpY2UoMCwgMTIpXHJcblx0Y29uc3QgZmFsbGJhY2tEYXRlID1cclxuXHRcdHJhd0RhdGUgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnJykuc2xpY2UoMCwgMTIpXHJcblx0Y29uc3QgaWRQYXJ0ID0gU3RyaW5nKHJlY29yZD8uaWQgfHwgJycpXHJcblx0XHQuc2xpY2UoLTQpXHJcblx0XHQudG9VcHBlckNhc2UoKVxyXG5cdHJldHVybiBgWFItJHtmYWxsYmFja0RhdGV9LSR7aWRQYXJ0IHx8ICcwMDAwJ31gXHJcbn1cclxuXHJcbmNvbnN0IGdldExvY2FsaXplZFN0YXR1cyA9ICh2YWx1ZSwgbGFuZ3VhZ2UpID0+IHtcclxuXHRjb25zdCBub3JtYWxpemVkID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnRvTG93ZXJDYXNlKClcclxuXHJcblx0Y29uc3Qgc3RhdHVzTGFiZWxzID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0J2tv4oCYcmlsbW9xZGEnOiAn0J3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LgnLFxyXG5cdFx0XHRcdFx0J3R1emlsbWFsYXIgdGFzZGln4oCYaWRhJzogJ9Cd0LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC4JyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbm1vcWRhOiAn0J3QsCDRg9GC0LLQtdGA0LbQtNC10L3QuNC4JyxcclxuXHRcdFx0XHRcdCdib3NobGlxIHRhc2RpZ+KAmGlkYSc6ICfQndCwINGD0YLQstC10YDQttC00LXQvdC40LgnLFxyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZ2FuOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmRpOiAn0J/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiAn0KfQsNGB0YLQuNGH0L3QviDQv9C+0LTRgtCy0LXRgNC20LTQtdC90L4nLFxyXG5cdFx0XHRcdFx0J3NvdGliIG9saXNoIGtlcmFrJzogJ9Ci0YDQtdCx0YPQtdGC0YHRjyDQt9Cw0LrRg9C/0LrQsCcsXHJcblx0XHRcdFx0XHQnc290aWIgb2xpbm1vcWRhJzogJ9CSINC30LDQutGD0L/QutC1JyxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ9Ce0YLQutCw0LfQsNC90L4nLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHQna2/igJhyaWxtb3FkYSc6ICdLb+KAmHJpbG1vcWRhJyxcclxuXHRcdFx0XHRcdCd0dXppbG1hbGFyIHRhc2RpZ+KAmGlkYSc6ICdLb+KAmHJpbG1vcWRhJyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbm1vcWRhOiAnVGFzZGlxbGFubW9xZGEnLFxyXG5cdFx0XHRcdFx0J2Jvc2hsaXEgdGFzZGln4oCYaWRhJzogJ1Rhc2RpcWxhbm1vcWRhJyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ1Rhc2RpcWxhbmdhbicsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ1Rhc2RpcWxhbmdhbicsXHJcblx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzogJ1Fpc21hbiB0YXNkaXFsYW5kaScsXHJcblx0XHRcdFx0XHQnc290aWIgb2xpc2gga2VyYWsnOiAnU290aWIgb2xpc2gga2VyYWsnLFxyXG5cdFx0XHRcdFx0J3NvdGliIG9saW5tb3FkYSc6ICdTb3RpYiBvbGlubW9xZGEnLFxyXG5cdFx0XHRcdFx0J3JhZCBldGlsZGknOiAnUmFkIGV0aWxkaScsXHJcblx0XHRcdFx0fVxyXG5cclxuXHRyZXR1cm4gc3RhdHVzTGFiZWxzW25vcm1hbGl6ZWRdIHx8IG5vcm1hbGl6ZVRleHQodmFsdWUpXHJcbn1cclxuXHJcbmNvbnN0IGdldExvY2FsaXplZFN0YWdlID0gKHZhbHVlLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBTdHJpbmcodmFsdWUgfHwgJycpXHJcblx0XHQudHJpbSgpXHJcblx0XHQudG9Mb3dlckNhc2UoKVxyXG5cclxuXHRjb25zdCBzdGFnZUxhYmVscyA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdHR1emlsbWFsYXI6ICfQodGC0YDRg9C60YLRg9GA0YsnLFxyXG5cdFx0XHRcdFx0bW9uaXRvcmluZzogJ9Cg0YPQutC+0LLQvtC00LjRgtC10LvRjCcsXHJcblx0XHRcdFx0XHRzb3RpYl9vbGlzaDogJ9CX0LDQutGD0L/QutCwJyxcclxuXHRcdFx0XHRcdHlha3VubGFuZGk6ICfQl9Cw0LLQtdGA0YjQtdC90L4nLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHR0dXppbG1hbGFyOiAnVHV6aWxtYWxhcicsXHJcblx0XHRcdFx0XHRtb25pdG9yaW5nOiAnQm9zaGxpcScsXHJcblx0XHRcdFx0XHRzb3RpYl9vbGlzaDogJ1NvdGliIG9saXNoJyxcclxuXHRcdFx0XHRcdHlha3VubGFuZGk6ICdZYWt1bmxhbmRpJyxcclxuXHRcdFx0XHR9XHJcblxyXG5cdHJldHVybiBzdGFnZUxhYmVsc1tub3JtYWxpemVkXSB8fCBub3JtYWxpemVUZXh0KHZhbHVlKVxyXG59XHJcblxyXG5jb25zdCBnZXRTdGF0dXNCYWRnZVN0eWxlID0gdmFsdWUgPT4ge1xyXG5cdGNvbnN0IHN0YXR1cyA9IFN0cmluZyh2YWx1ZSB8fCAnJylcclxuXHRcdC50cmltKClcclxuXHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdGlmIChbJ3Rhc2RpcWxhbmdhbicsICd0YXNkaXFsYW5kaSddLmluY2x1ZGVzKHN0YXR1cykpIHtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmQ6ICcjZGNmY2U3JywgY29sb3I6ICcjMTY2NTM0JyB9XHJcblx0fVxyXG5cclxuXHRpZiAoc3RhdHVzID09PSAncWlzbWFuIHRhc2RpcWxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZDogJyNmZWYzYzcnLCBjb2xvcjogJyNiNDUzMDknIH1cclxuXHR9XHJcblxyXG5cdGlmIChzdGF0dXMgPT09ICdzb3RpYiBvbGlzaCBrZXJhaycpIHtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmQ6ICcjZGJlYWZlJywgY29sb3I6ICcjMWQ0ZWQ4JyB9XHJcblx0fVxyXG5cclxuXHRpZiAoc3RhdHVzID09PSAnc290aWIgb2xpbm1vcWRhJykge1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZDogJyNlZGU5ZmUnLCBjb2xvcjogJyM2ZDI4ZDknIH1cclxuXHR9XHJcblxyXG5cdGlmIChzdGF0dXMgPT09ICdyYWQgZXRpbGRpJykge1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZDogJyNmZWUyZTInLCBjb2xvcjogJyNiOTFjMWMnIH1cclxuXHR9XHJcblxyXG5cdGlmIChbJ3Rhc2RpcWxhbm1vcWRhJywgJ2Jvc2hsaXEgdGFzZGln4oCYaWRhJywgJ21vbml0b3JpbmcnXS5pbmNsdWRlcyhzdGF0dXMpKSB7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kOiAnI2VkZTlmZScsIGNvbG9yOiAnIzZkMjhkOScgfVxyXG5cdH1cclxuXHJcblx0aWYgKHN0YXR1cyA9PT0gJ3lha3VubGFuZGknKSB7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kOiAnI2U1ZTdlYicsIGNvbG9yOiAnIzM3NDE1MScgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgYmFja2dyb3VuZDogJyNkYmVhZmUnLCBjb2xvcjogJyMxZDRlZDgnIH1cclxufVxyXG5cclxuY29uc3QgZ2V0RGVjaXNpb25NZXRhID0gKGRlY2lzaW9uLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IG5vcm1hbGl6ZWQgPSBTdHJpbmcoZGVjaXNpb24gfHwgJycpXHJcblx0XHQudHJpbSgpXHJcblx0XHQudG9Mb3dlckNhc2UoKVxyXG5cdGNvbnN0IGxhYmVscyA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzogJ9Cn0LDRgdGC0LjRh9C90L4g0L/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ9Ce0YLQutCw0LfQsNC90L4nLFxyXG5cdFx0XHRcdFx0cGVuZGluZzogJ9Ce0LbQuNC00LDQtdGC0YHRjycsXHJcblx0XHRcdFx0XHR3YWl0aW5nOiAn0J7Rh9C10YDQtdC00Ywg0L3QtSDQv9C+0LTQvtGI0LvQsCcsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ1Rhc2RpcWxhbmdhbicsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ1Rhc2RpcWxhbmRpJyxcclxuXHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiAnUWlzbWFuIHRhc2RpcWxhbmRpJyxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ1JhZCBldGlsZGknLFxyXG5cdFx0XHRcdFx0cGVuZGluZzogJ0t1dGlsbW9xZGEnLFxyXG5cdFx0XHRcdFx0d2FpdGluZzogJ05hdmJhdGkga2VsbWFnYW4nLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0aWYgKFsndGFzZGlxbGFuZ2FuJywgJ3Rhc2RpcWxhbmRpJ10uaW5jbHVkZXMobm9ybWFsaXplZCkpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHN5bWJvbDogJ+KckycsXHJcblx0XHRcdGxhYmVsOiBsYWJlbHNbbm9ybWFsaXplZF0sXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZGNmY2U3JyxcclxuXHRcdFx0Y29sb3I6ICcjMTY2NTM0JyxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkID09PSAncWlzbWFuIHRhc2RpcWxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3ltYm9sOiAn4pyTJyxcclxuXHRcdFx0bGFiZWw6IGxhYmVsc1tub3JtYWxpemVkXSxcclxuXHRcdFx0YmFja2dyb3VuZDogJyNmZWYzYzcnLFxyXG5cdFx0XHRjb2xvcjogJyNiNDUzMDknLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKG5vcm1hbGl6ZWQgPT09ICdyYWQgZXRpbGRpJykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3ltYm9sOiAn4pyVJyxcclxuXHRcdFx0bGFiZWw6IGxhYmVsc1tub3JtYWxpemVkXSxcclxuXHRcdFx0YmFja2dyb3VuZDogJyNmZWUyZTInLFxyXG5cdFx0XHRjb2xvcjogJyNiOTFjMWMnLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKG5vcm1hbGl6ZWQgPT09ICd3YWl0aW5nJykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c3ltYm9sOiAn4oCiJyxcclxuXHRcdFx0bGFiZWw6IGxhYmVscy53YWl0aW5nLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2YxZjVmOScsXHJcblx0XHRcdGNvbG9yOiAnIzQ3NTU2OScsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c3ltYm9sOiAn4oCmJyxcclxuXHRcdGxhYmVsOiBsYWJlbHMucGVuZGluZyxcclxuXHRcdGJhY2tncm91bmQ6ICcjZGJlYWZlJyxcclxuXHRcdGNvbG9yOiAnIzFkNGVkOCcsXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBnZXRBcHByb3ZhbFJvd3MgPSAocGFyYW1zLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IHNlbGVjdGVkVXNlcnMgPSBwYXJzZUFycmF5KHBhcmFtcy5zZWxlY3RlZFVzZXJzKS5tYXAoaXRlbSA9PlxyXG5cdFx0U3RyaW5nKGl0ZW0pLFxyXG5cdClcclxuXHRjb25zdCBzZWxlY3RlZE5hbWVzID0gc3BsaXROYW1lcyhwYXJhbXMuc2VsZWN0ZWRVc2VyTmFtZXMpXHJcblx0Y29uc3Qgc3RydWN0dXJlQXBwcm92YWxzID0gcGFyc2VBcnJheShwYXJhbXMuc3RydWN0dXJlQXBwcm92YWxzKVxyXG5cdGNvbnN0IGFwcHJvdmFsSGlzdG9yeSA9IHBhcnNlQXJyYXkocGFyYW1zLmFwcHJvdmFsSGlzdG9yeSlcclxuXHRjb25zdCBjdXJyZW50Q3ljbGVIaXN0b3J5ID0gZ2V0Q3VycmVudEN5Y2xlSGlzdG9yeShhcHByb3ZhbEhpc3RvcnkpXHJcblx0Y29uc3QgYXBwcm92YWxNYXAgPSBuZXcgTWFwKClcclxuXHJcblx0c3RydWN0dXJlQXBwcm92YWxzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRhcHByb3ZhbE1hcC5zZXQoU3RyaW5nKGl0ZW0/LnVzZXJJZCB8fCBgaWR4LSR7aW5kZXh9YCksIGl0ZW0pXHJcblx0fSlcclxuXHJcblx0Y29uc3Qgcm93cyA9IChzZWxlY3RlZFVzZXJzLmxlbmd0aCA/IHNlbGVjdGVkVXNlcnMgOiBzZWxlY3RlZE5hbWVzKS5tYXAoXHJcblx0XHQoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0Y29uc3QgdXNlcklkID0gc2VsZWN0ZWRVc2Vyc1tpbmRleF0gfHwgYGlkeC0ke2luZGV4fWBcclxuXHRcdFx0Y29uc3QgYXBwcm92YWwgPVxyXG5cdFx0XHRcdGFwcHJvdmFsTWFwLmdldCh1c2VySWQpIHx8XHJcblx0XHRcdFx0KHNlbGVjdGVkVXNlcnMubGVuZ3RoID8gbnVsbCA6IHN0cnVjdHVyZUFwcHJvdmFsc1tpbmRleF0pXHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGluZGV4OiBpbmRleCArIDEsXHJcblx0XHRcdFx0cm9sZTogbGFuZ3VhZ2UgPT09ICdydScgPyAn0KHRgtGA0YPQutGC0YPRgNCwJyA6ICdUdXppbG1hJyxcclxuXHRcdFx0XHRuYW1lOiBhcHByb3ZhbD8udXNlck5hbWVcclxuXHRcdFx0XHRcdD8gbm9ybWFsaXplVGV4dChhcHByb3ZhbC51c2VyTmFtZSlcclxuXHRcdFx0XHRcdDogc2VsZWN0ZWROYW1lc1tpbmRleF0gfHwgbm9ybWFsaXplVGV4dChpdGVtKSxcclxuXHRcdFx0XHRtZXRhOiBnZXREZWNpc2lvbk1ldGEoYXBwcm92YWw/LmRlY2lzaW9uIHx8ICdwZW5kaW5nJywgbGFuZ3VhZ2UpLFxyXG5cdFx0XHRcdGNvbW1lbnQ6IG5vcm1hbGl6ZVRleHQoYXBwcm92YWw/LmNvbW1lbnQpLFxyXG5cdFx0XHRcdGRhdGU6IGZvcm1hdERhdGVUaW1lKGFwcHJvdmFsPy5kZWNpZGVkQXQpLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdClcclxuXHJcblx0Y29uc3QgYXBwcm92ZXJFbnRyeSA9IFsuLi5jdXJyZW50Q3ljbGVIaXN0b3J5XVxyXG5cdFx0LnJldmVyc2UoKVxyXG5cdFx0LmZpbmQoXHJcblx0XHRcdGl0ZW0gPT5cclxuXHRcdFx0XHRTdHJpbmcoaXRlbT8uc3RhZ2UgfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdtb25pdG9yaW5nJyB8fFxyXG5cdFx0XHRcdFN0cmluZyhpdGVtPy5yb2xlIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAnbW9uaXRvcmluZycsXHJcblx0XHQpXHJcblxyXG5cdGNvbnN0IG5vcm1hbGl6ZWRTdGF0dXMgPSBTdHJpbmcocGFyYW1zLnN0YXR1cyB8fCAnJykudG9Mb3dlckNhc2UoKVxyXG5cdGNvbnN0IGhhc1N0cnVjdHVyZVJlamVjdGlvbiA9IHN0cnVjdHVyZUFwcHJvdmFscy5zb21lKFxyXG5cdFx0aXRlbSA9PiBTdHJpbmcoaXRlbT8uZGVjaXNpb24gfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdyYWQgZXRpbGRpJyxcclxuXHQpXHJcblx0bGV0IGFwcHJvdmVyU3RhdGUgPSAnd2FpdGluZydcclxuXHRpZiAoYXBwcm92ZXJFbnRyeT8uZGVjaXNpb24pIHtcclxuXHRcdGFwcHJvdmVyU3RhdGUgPSBhcHByb3ZlckVudHJ5LmRlY2lzaW9uXHJcblx0fSBlbHNlIGlmIChcclxuXHRcdFsndGFzZGlxbGFuZ2FuJywgJ3Rhc2RpcWxhbmRpJywgJ3Fpc21hbiB0YXNkaXFsYW5kaSddLmluY2x1ZGVzKFxyXG5cdFx0XHRub3JtYWxpemVkU3RhdHVzLFxyXG5cdFx0KVxyXG5cdCkge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9IG5vcm1hbGl6ZWRTdGF0dXNcclxuXHR9IGVsc2UgaWYgKG5vcm1hbGl6ZWRTdGF0dXMgPT09ICdyYWQgZXRpbGRpJyAmJiAhaGFzU3RydWN0dXJlUmVqZWN0aW9uKSB7XHJcblx0XHRhcHByb3ZlclN0YXRlID0gbm9ybWFsaXplZFN0YXR1c1xyXG5cdH0gZWxzZSBpZiAoXHJcblx0XHRTdHJpbmcocGFyYW1zLmN1cnJlbnRTdGFnZSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ21vbml0b3JpbmcnIHx8XHJcblx0XHRub3JtYWxpemVkU3RhdHVzID09PSAndGFzZGlxbGFubW9xZGEnXHJcblx0KSB7XHJcblx0XHRhcHByb3ZlclN0YXRlID0gJ3BlbmRpbmcnXHJcblx0fVxyXG5cclxuXHRyb3dzLnB1c2goe1xyXG5cdFx0aW5kZXg6IHJvd3MubGVuZ3RoICsgMSxcclxuXHRcdHJvbGU6IGxhbmd1YWdlID09PSAncnUnID8gJ9Cg0YPQutC+0LLQvtC00LjRgtC10LvRjCcgOiAnQm9zaGxpcScsXHJcblx0XHRuYW1lOiBub3JtYWxpemVUZXh0KHBhcmFtcy5hcHByb3Zlck5hbWUpLFxyXG5cdFx0bWV0YTogZ2V0RGVjaXNpb25NZXRhKGFwcHJvdmVyU3RhdGUsIGxhbmd1YWdlKSxcclxuXHRcdGNvbW1lbnQ6IG5vcm1hbGl6ZVRleHQoYXBwcm92ZXJFbnRyeT8uY29tbWVudCksXHJcblx0XHRkYXRlOiBmb3JtYXREYXRlVGltZShhcHByb3ZlckVudHJ5Py5kZWNpZGVkQXQpLFxyXG5cdH0pXHJcblxyXG5cdHJldHVybiByb3dzXHJcbn1cclxuXHJcbmNvbnN0IGNhcmRTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMThweCAyMHB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTRweCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG5cdGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDQpJyxcclxufVxyXG5cclxuY29uc3QgUHVyY2hhc2VSZXF1ZXN0U2hvdyA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IHJlY29yZCB9ID0gcHJvcHNcclxuXHRjb25zdCB7XHJcblx0XHRpMThuOiB7IGxhbmd1YWdlIH0sXHJcblx0fSA9IHVzZVRyYW5zbGF0aW9uKClcclxuXHJcblx0Y29uc3QgcGFyYW1zID0gcmVjb3JkPy5wYXJhbXMgfHwge31cclxuXHRjb25zdCBjcmVhdGVkQnkgPVxyXG5cdFx0cmVjb3JkPy5wb3B1bGF0ZWQ/LmNyZWF0ZWRCeT8ucGFyYW1zPy51c2VybmFtZSB8fCBwYXJhbXMuY3JlYXRlZEJ5XHJcblx0Y29uc3QgaXRlbXMgPSBwYXJzZUl0ZW1zKHBhcmFtcy5pdGVtcylcclxuXHRjb25zdCBzdHJ1Y3R1cmVOYW1lcyA9IHNwbGl0TmFtZXMocGFyYW1zLnNlbGVjdGVkVXNlck5hbWVzKVxyXG5cdGNvbnN0IGFwcHJvdmFsUm93cyA9IGdldEFwcHJvdmFsUm93cyhwYXJhbXMsIGxhbmd1YWdlKVxyXG5cdGNvbnN0IGJ1eWVyT3JkZXIgPSBwYXJzZUJ1eWVyT3JkZXJEYXRhKHBhcmFtcy5idXllck9yZGVyRGF0YSlcclxuXHRjb25zdCBidXllckRvY3VtZW50cyA9IHBhcnNlQXJyYXkoYnV5ZXJPcmRlci5kb2N1bWVudHMpXHJcblx0Y29uc3Qgb3JpZ2luYWxJdGVtcyA9IHBhcnNlSXRlbXMoYnV5ZXJPcmRlci5vcmlnaW5hbEl0ZW1zKVxyXG5cdGNvbnN0IHN0YXR1c1N0eWxlID0gZ2V0U3RhdHVzQmFkZ2VTdHlsZShwYXJhbXMuc3RhdHVzKVxyXG5cdGNvbnN0IHN0YWdlU3R5bGUgPSBnZXRTdGF0dXNCYWRnZVN0eWxlKHBhcmFtcy5jdXJyZW50U3RhZ2UpXHJcblxyXG5cdGNvbnN0IHRleHQgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ9Cf0L7QtNGA0L7QsdC90L7RgdGC0Lgg0LfQsNGP0LLQutC4JyxcclxuXHRcdFx0XHRcdHJlcXVlc3RObzogJ9Cd0L7QvNC10YAg0LfQsNGP0LLQutC4JyxcclxuXHRcdFx0XHRcdHN0YXR1czogJ9Ch0YLQsNGC0YPRgScsXHJcblx0XHRcdFx0XHRzdGFnZTogJ9Ct0YLQsNC/JyxcclxuXHRcdFx0XHRcdGNyZWF0b3I6ICfQodC+0LfQtNCw0Lsg0LfQsNGP0LLQutGDJyxcclxuXHRcdFx0XHRcdGNyZWF0ZWRBdDogJ9CU0LDRgtCwINGB0L7Qt9C00LDQvdC40Y8nLFxyXG5cdFx0XHRcdFx0dXBkYXRlZEF0OiAn0JTQsNGC0LAg0L7QsdC90L7QstC70LXQvdC40Y8nLFxyXG5cdFx0XHRcdFx0c3RydWN0dXJlczogJ9CS0YvQsdGA0LDQvdC90YvQtSDRgdGC0YDRg9C60YLRg9GA0YsnLFxyXG5cdFx0XHRcdFx0YXBwcm92ZXI6ICfQoNGD0LrQvtCy0L7QtNC40YLQtdC70YwgLyDQvNC+0L3QuNGC0L7RgNC40L3QsycsXHJcblx0XHRcdFx0XHRjb21tZW50OiAn0JrQvtC80LzQtdC90YLQsNGA0LjQuSDQuiDQt9Cw0Y/QstC60LUnLFxyXG5cdFx0XHRcdFx0bGFzdENvbW1lbnQ6ICfQn9C+0YHQu9C10LTQvdC40Lkg0LrQvtC80LzQtdC90YLQsNGA0LjQuScsXHJcblx0XHRcdFx0XHRpdGVtczogJ9CU0LXRgtCw0LvQuCDRgtC+0LLQsNGA0L7QsicsXHJcblx0XHRcdFx0XHR0YWJsZUFwcHJvdmFsOiAn0KLQsNCx0LvQuNGG0LAg0YHQvtCz0LvQsNGB0L7QstCw0L3QuNGPJyxcclxuXHRcdFx0XHRcdHJvbGU6ICfQoNC+0LvRjCcsXHJcblx0XHRcdFx0XHRuYW1lOiAn0J3QsNC30LLQsNC90LjQtScsXHJcblx0XHRcdFx0XHRtYXJrOiAn0JfQvdCw0LonLFxyXG5cdFx0XHRcdFx0ZGVjaXNpb246ICfQoNC10YjQtdC90LjQtScsXHJcblx0XHRcdFx0XHRjb21tZW50Q29sOiAn0JrQvtC80LzQtdC90YLQsNGA0LjQuScsXHJcblx0XHRcdFx0XHR0aW1lOiAn0JLRgNC10LzRjycsXHJcblx0XHRcdFx0XHRwcm9kdWN0OiAn0KLQvtCy0LDRgCcsXHJcblx0XHRcdFx0XHRmZWF0dXJlczogJ9Cl0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC60LAnLFxyXG5cdFx0XHRcdFx0dW5pdDogJ9CV0LQuJyxcclxuXHRcdFx0XHRcdHF0eTogJ9Ca0L7Quy3QstC+JyxcclxuXHRcdFx0XHRcdHByb2N1cmVtZW50OiAn0JTQsNC90L3Ri9C1INC30LDQutGD0L/QutC4JyxcclxuXHRcdFx0XHRcdHN1cHBsaWVyOiAn0J7RgtC60YPQtNCwINC30LDQutGD0L/QsNC10YLRgdGPJyxcclxuXHRcdFx0XHRcdGRvY3VtZW50czogJ9CU0L7QutGD0LzQtdC90YLRiycsXHJcblx0XHRcdFx0XHRzYXZlZEJ5OiAn0J/QvtGB0LvQtdC00L3QtdC1INGB0L7RhdGA0LDQvdC10L3QuNC1JyxcclxuXHRcdFx0XHRcdG9yaWdpbmFsSXRlbXM6ICfQn9C10YDQstC+0L3QsNGH0LDQu9GM0L3Ri9C1INGC0L7QstCw0YDRiycsXHJcblx0XHRcdFx0XHRjaGFuZ2VOb3RpY2U6ICfQo9Cy0LXQtNC+0LzQu9C10L3QuNC1INC+0LEg0LjQt9C80LXQvdC10L3QuNC4JyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICdBcml6YSB0YWZzaWxvdGknLFxyXG5cdFx0XHRcdFx0cmVxdWVzdE5vOiAnQXJpemEgcmFxYW1pJyxcclxuXHRcdFx0XHRcdHN0YXR1czogJ0hvbGF0aScsXHJcblx0XHRcdFx0XHRzdGFnZTogJ0Jvc3FpY2hpJyxcclxuXHRcdFx0XHRcdGNyZWF0b3I6ICdBcml6YW5pIHlhcmF0Z2FuJyxcclxuXHRcdFx0XHRcdGNyZWF0ZWRBdDogJ1lhcmF0aWxnYW4gc2FuYScsXHJcblx0XHRcdFx0XHR1cGRhdGVkQXQ6ICdZYW5naWxhbmdhbiBzYW5hJyxcclxuXHRcdFx0XHRcdHN0cnVjdHVyZXM6ICdUYW5sYW5nYW4gdHV6aWxtYWxhcicsXHJcblx0XHRcdFx0XHRhcHByb3ZlcjogJ0Jvc2hsaXEgLyBtb25pdG9yaW5nJyxcclxuXHRcdFx0XHRcdGNvbW1lbnQ6ICdBcml6YSBpem9oaScsXHJcblx0XHRcdFx0XHRsYXN0Q29tbWVudDogJ094aXJnaSBpem9oJyxcclxuXHRcdFx0XHRcdGl0ZW1zOiAnVG92YXIgdGFmc2lsb3RpJyxcclxuXHRcdFx0XHRcdHRhYmxlQXBwcm92YWw6ICdUYXNkaXFsYXNoIGphZHZhbGknLFxyXG5cdFx0XHRcdFx0cm9sZTogJ1JvbCcsXHJcblx0XHRcdFx0XHRuYW1lOiAnTm9taScsXHJcblx0XHRcdFx0XHRtYXJrOiAnQmVsZ2knLFxyXG5cdFx0XHRcdFx0ZGVjaXNpb246ICdRYXJvcicsXHJcblx0XHRcdFx0XHRjb21tZW50Q29sOiAnSXpvaCcsXHJcblx0XHRcdFx0XHR0aW1lOiAnVmFxdGknLFxyXG5cdFx0XHRcdFx0cHJvZHVjdDogJ1RvdmFyJyxcclxuXHRcdFx0XHRcdGZlYXR1cmVzOiAnWHVzdXNpeWF0aScsXHJcblx0XHRcdFx0XHR1bml0OiAnQmlybGlnaScsXHJcblx0XHRcdFx0XHRxdHk6ICdTb25pJyxcclxuXHRcdFx0XHRcdHByb2N1cmVtZW50OiAnQnV5dXJ0bWEgbWHigJlsdW1vdGxhcmknLFxyXG5cdFx0XHRcdFx0c3VwcGxpZXI6ICdRYXllcmRhbiBvbGlubW9xZGEnLFxyXG5cdFx0XHRcdFx0ZG9jdW1lbnRzOiAnSHVqamF0bGFyJyxcclxuXHRcdFx0XHRcdHNhdmVkQnk6ICdPeGlyZ2kgc2FxbG92Y2hpJyxcclxuXHRcdFx0XHRcdG9yaWdpbmFsSXRlbXM6ICdFc2tpIHRvdmFyIG1h4oCZbHVtb3RsYXJpJyxcclxuXHRcdFx0XHRcdGNoYW5nZU5vdGljZTogJ0/igJh6Z2FyaXNoIGhhcWlkYSB4YWJhcicsXHJcblx0XHRcdFx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCB2YXJpYW50PSdncmV5Jz5cclxuXHRcdFx0PEJveFxyXG5cdFx0XHRcdGJnPSd3aGl0ZSdcclxuXHRcdFx0XHRwPSd4eGwnXHJcblx0XHRcdFx0Ym9yZGVyUmFkaXVzPSd4bCdcclxuXHRcdFx0XHRib3hTaGFkb3c9J2NhcmQnXHJcblx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEgyIG1iPSd4bCc+e3RleHQudGl0bGV9PC9IMj5cclxuXHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdFx0XHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJyxcclxuXHRcdFx0XHRcdFx0Z2FwOiAnMTJweCcsXHJcblx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogJzE4cHgnLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQucmVxdWVzdE5vfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbScgZm9udFdlaWdodD0nYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0e2dldFJlcXVlc3ROdW1iZXIocGFyYW1zLCByZWNvcmQpfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC5zdGF0dXN9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4uc3RhdHVzU3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzhweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNnB4IDEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogNzAwLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7Z2V0TG9jYWxpemVkU3RhdHVzKHBhcmFtcy5zdGF0dXMsIGxhbmd1YWdlKX1cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQuc3RhZ2V9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4uc3RhZ2VTdHlsZSxcclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnOHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICc2cHggMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA3MDAsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtnZXRMb2NhbGl6ZWRTdGFnZShwYXJhbXMuY3VycmVudFN0YWdlLCBsYW5ndWFnZSl9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0LmNyZWF0b3J9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz57bm9ybWFsaXplVGV4dChjcmVhdGVkQnkpfTwvVGV4dD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt7IC4uLmNhcmRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nbGcnPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC5zdHJ1Y3R1cmVzfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdncmlkJyxcclxuXHRcdFx0XHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJyxcclxuXHRcdFx0XHRcdFx0XHRnYXA6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3N0cnVjdHVyZU5hbWVzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHRzdHJ1Y3R1cmVOYW1lcy5tYXAobmFtZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2VmZjZmZicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNiZmRiZmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdCkpXHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PFRleHQ+4oCUPC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggc3R5bGU9e3sgLi4uY2FyZFN0eWxlLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0e3RleHQuYXBwcm92ZXJ9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nIGZvbnRXZWlnaHQ9J2JvbGQnPlxyXG5cdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChwYXJhbXMuYXBwcm92ZXJOYW1lKX1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0Li4uY2FyZFN0eWxlLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuXHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcclxuXHRcdFx0XHRcdFx0d29yZEJyZWFrOiAnYnJlYWstd29yZCcsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LmNvbW1lbnR9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dD57bm9ybWFsaXplVGV4dChwYXJhbXMuY29tbWVudCl9PC9UZXh0PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt7IC4uLmNhcmRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nbGcnPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC5pdGVtc31cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3dYOiAnYXV0bycgfX0+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQjXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5wcm9kdWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQuZmVhdHVyZXN9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC51bml0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQucXR5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2Ake2l0ZW0ucHJvZHVjdE5hbWV9LSR7aW5kZXh9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW5kZXggKyAxfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChpdGVtLnByb2R1Y3ROYW1lKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZVRleHQoaXRlbS5mZWF0dXJlcyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGl0ZW0udW5pdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGl0ZW0ucXVhbnRpdHkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdHtvcmlnaW5hbEl0ZW1zLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgLi4uY2FyZFN0eWxlLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC5vcmlnaW5hbEl0ZW1zfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3dYOiAnYXV0bycgfX0+XHJcblx0XHRcdFx0XHRcdFx0PHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQjXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LnByb2R1Y3R9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LmZlYXR1cmVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC51bml0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5xdHl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtvcmlnaW5hbEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtgb3JpZ2luYWwtJHtpdGVtLnByb2R1Y3ROYW1lfS0ke2luZGV4fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aW5kZXggKyAxfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZVRleHQoaXRlbS5wcm9kdWN0TmFtZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChpdGVtLmZlYXR1cmVzKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGl0ZW0udW5pdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChpdGVtLnF1YW50aXR5KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHRcdDxCb3ggc3R5bGU9e3sgLi4uY2FyZFN0eWxlLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LnByb2N1cmVtZW50fVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PFRleHQ+XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e3RleHQuc3VwcGxpZXJ9Ojwvc3Ryb25nPnsnICd9XHJcblx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGJ1eWVyT3JkZXIuc3VwcGxpZXJOYW1lKX1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e3RleHQuc2F2ZWRCeX06PC9zdHJvbmc+IHtub3JtYWxpemVUZXh0KGJ1eWVyT3JkZXIuc2F2ZWRCeSl9eycgJ31cclxuXHRcdFx0XHRcdFx0e2J1eWVyT3JkZXIuc2F2ZWRBdFxyXG5cdFx0XHRcdFx0XHRcdD8gYCgke2Zvcm1hdERhdGVUaW1lKGJ1eWVyT3JkZXIuc2F2ZWRBdCl9KWBcclxuXHRcdFx0XHRcdFx0XHQ6ICcnfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHRcdDxCb3ggbXQ9J2xnJz5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC5kb2N1bWVudHN9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0e2J1eWVyRG9jdW1lbnRzLmxlbmd0aCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnOHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtidXllckRvY3VtZW50cy5tYXAoKGRvY3VtZW50LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17YCR7ZG9jdW1lbnQ/LnVybCB8fCBkb2N1bWVudD8ubmFtZSB8fCAnZG9jJ30tJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e2RvY3VtZW50Py51cmwgfHwgJyMnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldD0nX2JsYW5rJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbD0nbm9yZWZlcnJlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGRvY3VtZW50Py5uYW1lIHx8IGRvY3VtZW50Py5maWxlTmFtZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0PuKAlDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHR7YnV5ZXJPcmRlci5jaGFuZ2VOb3RlID8gKFxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdC4uLmNhcmRTdHlsZSxcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2ZmZjdlZCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNmZGJhNzQnLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0LmNoYW5nZU5vdGljZX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dD57YnV5ZXJPcmRlci5jaGFuZ2VOb3RlfTwvVGV4dD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt7IC4uLmNhcmRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nbGcnPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC50YWJsZUFwcHJvdmFsfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBvdmVyZmxvd1g6ICdhdXRvJyB9fT5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnIH19PlxyXG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCNcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LnJvbGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQubWFya31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LmRlY2lzaW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQuY29tbWVudENvbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LnRpbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2FwcHJvdmFsUm93cy5tYXAocm93ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17YCR7cm93LnJvbGV9LSR7cm93LmluZGV4fS0ke3Jvdy5uYW1lfWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5pbmRleH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5yb2xlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW5XaWR0aDogJzE4MHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6ICcyNHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJvdy5tZXRhLmJhY2tncm91bmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHJvdy5tZXRhLmNvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDgwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5tZXRhLnN5bWJvbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNHB4IDlweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJvdy5tZXRhLmJhY2tncm91bmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHJvdy5tZXRhLmNvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5tZXRhLmxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW5XaWR0aDogJzIyMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d29yZEJyZWFrOiAnYnJlYWstd29yZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cuY29tbWVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cuZGF0ZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLFxyXG5cdFx0XHRcdFx0XHRnYXA6ICcxMnB4JyxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0LmNyZWF0ZWRBdH1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPntmb3JtYXREYXRlVGltZShwYXJhbXMuY3JlYXRlZEF0KX08L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC51cGRhdGVkQXR9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz57Zm9ybWF0RGF0ZVRpbWUocGFyYW1zLnVwZGF0ZWRBdCl9PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQubGFzdENvbW1lbnR9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz57bm9ybWFsaXplVGV4dChwYXJhbXMubGFzdENvbW1lbnQpfTwvVGV4dD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VSZXF1ZXN0U2hvd1xyXG4iLCJpbXBvcnQge1xyXG5cdEJveCxcclxuXHRCdXR0b24sXHJcblx0SDIsXHJcblx0TGFiZWwsXHJcblx0TWVzc2FnZUJveCxcclxuXHRQYWdpbmF0aW9uLFxyXG5cdFRleHQsXHJcbn0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgQXBpQ2xpZW50LCB1c2VDdXJyZW50QWRtaW4sIHVzZU5vdGljZSB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgaW5wdXRTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdG1heFdpZHRoOiAnMTAwJScsXHJcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcblx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNjYmQ1ZTEnLFxyXG5cdGZvbnRTaXplOiAnMTRweCcsXHJcblx0Zm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxufVxyXG5cclxuY29uc3QgdGV4dEFyZWFTdHlsZSA9IHtcclxuXHQuLi5pbnB1dFN0eWxlLFxyXG5cdG1pbkhlaWdodDogJzkycHgnLFxyXG5cdHJlc2l6ZTogJ3ZlcnRpY2FsJyxcclxufVxyXG5cclxuY29uc3QgY2FyZFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxOHB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTRweCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG59XHJcblxyXG5jb25zdCBuZXdCYWRnZVN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcblx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0cGFkZGluZzogJzJweCAxMHB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0YmFja2dyb3VuZDogJyNkY2ZjZTcnLFxyXG5cdGNvbG9yOiAnIzE2NjUzNCcsXHJcblx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRmb250V2VpZ2h0OiA3MDAsXHJcbn1cclxuXHJcbmNvbnN0IHF1ZXVlVHlwZUJhZGdlU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRnYXA6ICc2cHgnLFxyXG5cdHBhZGRpbmc6ICc0cHggOXB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0Zm9udFNpemU6ICcxMXB4JyxcclxuXHRmb250V2VpZ2h0OiA3MDAsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcclxuXHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuXHRsaW5lSGVpZ2h0OiAxLFxyXG59XHJcblxyXG5jb25zdCBzdGF0dXNEb3RTdHlsZSA9IGNvbG9yID0+ICh7XHJcblx0d2lkdGg6ICc3cHgnLFxyXG5cdGhlaWdodDogJzdweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdGJhY2tncm91bmQ6IGNvbG9yLFxyXG5cdGZsZXhTaHJpbms6IDAsXHJcbn0pXHJcblxyXG5jb25zdCBQQUdFX1NJWkUgPSAyMFxyXG5cclxuY29uc3QgdGFibGVXcmFwU3R5bGUgPSB7XHJcblx0b3ZlcmZsb3dYOiAnYXV0bycsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdGJvcmRlclJhZGl1czogJzE0cHgnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxufVxyXG5cclxuY29uc3QgdGFibGVTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLFxyXG5cdG1pbldpZHRoOiAnODYwcHgnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZUhlYWRDZWxsU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRmb250V2VpZ2h0OiA3MDAsXHJcblx0Y29sb3I6ICcjNDc1NTY5JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZUNlbGxTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMTJweCAxNHB4JyxcclxuXHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdGNvbG9yOiAnIzBmMTcyYScsXHJcblx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG59XHJcblxyXG5jb25zdCByb3dJbnRlcmFjdGl2ZVN0eWxlID0ge1xyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIDAuMTVzIGVhc2UnLFxyXG59XHJcblxyXG5jb25zdCBkZXRhaWxHcmlkU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLFxyXG5cdGdhcDogJzEycHgnLFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEb2N1bWVudFJvdyA9IGRvY3VtZW50ID0+ICh7XHJcblx0aWQ6XHJcblx0XHRTdHJpbmcoZG9jdW1lbnQ/LmlkIHx8ICcnKS50cmltKCkgfHxcclxuXHRcdGBkb2MtJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDgpfWAsXHJcblx0bmFtZTogU3RyaW5nKGRvY3VtZW50Py5uYW1lIHx8ICcnKS50cmltKCksXHJcblx0ZmlsZU5hbWU6IFN0cmluZyhkb2N1bWVudD8uZmlsZU5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHR1cmw6IFN0cmluZyhkb2N1bWVudD8udXJsIHx8ICcnKS50cmltKCksXHJcblx0bWltZVR5cGU6IFN0cmluZyhkb2N1bWVudD8ubWltZVR5cGUgfHwgJycpLnRyaW0oKSxcclxuXHRjb250ZW50OiAnJyxcclxufSlcclxuXHJcbmNvbnN0IHRvRGF0YVVybCA9IGZpbGUgPT5cclxuXHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcblx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShTdHJpbmcocmVhZGVyLnJlc3VsdCB8fCAnJykpXHJcblx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ0ZheWxuaSBv4oCYcWliIGJv4oCYbG1hZGknKSlcclxuXHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcblx0fSlcclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICfigJQnXHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXHJcblxyXG5cdGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhZCA9IG51bWJlciA9PiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0cmV0dXJuIGAke3BhZChkYXRlLmdldERhdGUoKSl9LiR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtwYWQoZGF0ZS5nZXRIb3VycygpKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCkpfWBcclxufVxyXG5cclxuY29uc3QgR0VORVJJQ19WQUxJREFUSU9OX05PVElDRSA9ICd0aGVyZVdlcmVWYWxpZGF0aW9uRXJyb3JzJ1xyXG5cclxuY29uc3QgZXh0cmFjdFdvcmtzcGFjZU1lc3NhZ2UgPSAoZGF0YSwgZmFsbGJhY2tNZXNzYWdlID0gJycpID0+IHtcclxuXHRjb25zdCBmaWVsZE1lc3NhZ2VzID0gT2JqZWN0LnZhbHVlcyhkYXRhPy5yZWNvcmQ/LmVycm9ycyB8fCB7fSlcclxuXHRcdC5tYXAoZXJyb3IgPT4gU3RyaW5nKGVycm9yPy5tZXNzYWdlIHx8ICcnKS50cmltKCkpXHJcblx0XHQuZmlsdGVyKEJvb2xlYW4pXHJcblx0Y29uc3QgYmFzZUVycm9yTWVzc2FnZSA9IFN0cmluZyhkYXRhPy5yZWNvcmQ/LmJhc2VFcnJvcj8ubWVzc2FnZSB8fCAnJykudHJpbSgpXHJcblx0Y29uc3Qgbm90aWNlTWVzc2FnZSA9IFN0cmluZyhkYXRhPy5ub3RpY2U/Lm1lc3NhZ2UgfHwgJycpLnRyaW0oKVxyXG5cdGNvbnN0IG1lc3NhZ2VzID0gW1xyXG5cdFx0Li4ubmV3IFNldChbYmFzZUVycm9yTWVzc2FnZSwgLi4uZmllbGRNZXNzYWdlc10uZmlsdGVyKEJvb2xlYW4pKSxcclxuXHRdXHJcblxyXG5cdGlmIChtZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdHJldHVybiBtZXNzYWdlcy5qb2luKCcuICcpXHJcblx0fVxyXG5cclxuXHRpZiAobm90aWNlTWVzc2FnZSAmJiBub3RpY2VNZXNzYWdlICE9PSBHRU5FUklDX1ZBTElEQVRJT05fTk9USUNFKSB7XHJcblx0XHRyZXR1cm4gbm90aWNlTWVzc2FnZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbGxiYWNrTWVzc2FnZVxyXG59XHJcblxyXG5jb25zdCBub3JtYWxpemVPcmRlckRvY3VtZW50cyA9IGRvY3VtZW50cyA9PlxyXG5cdGRvY3VtZW50c1xyXG5cdFx0Lm1hcChkb2N1bWVudCA9PiAoe1xyXG5cdFx0XHRuYW1lOiBTdHJpbmcoZG9jdW1lbnQ/Lm5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdFx0ZmlsZU5hbWU6IFN0cmluZyhkb2N1bWVudD8uZmlsZU5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdFx0dXJsOiBTdHJpbmcoZG9jdW1lbnQ/LnVybCB8fCAnJykudHJpbSgpLFxyXG5cdFx0XHRtaW1lVHlwZTogU3RyaW5nKGRvY3VtZW50Py5taW1lVHlwZSB8fCAnJykudHJpbSgpLFxyXG5cdFx0XHRjb250ZW50OiBTdHJpbmcoZG9jdW1lbnQ/LmNvbnRlbnQgfHwgJycpLnRyaW0oKSxcclxuXHRcdH0pKVxyXG5cdFx0LmZpbHRlcihcclxuXHRcdFx0ZG9jdW1lbnQgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5uYW1lIHx8IGRvY3VtZW50LmZpbGVOYW1lIHx8IGRvY3VtZW50LnVybCB8fCBkb2N1bWVudC5jb250ZW50LFxyXG5cdFx0KVxyXG5cclxuY29uc3QgZ2V0Q2xpZW50VmFsaWRhdGlvbk1lc3NhZ2UgPSAoe1xyXG5cdHJlcXVlc3RJZCxcclxuXHRzdXBwbGllck5hbWUsXHJcblx0aXRlbXMsXHJcblx0ZG9jdW1lbnRzLFxyXG59KSA9PiB7XHJcblx0aWYgKCFTdHJpbmcocmVxdWVzdElkIHx8ICcnKS50cmltKCkpIHtcclxuXHRcdHJldHVybiAnQXZ2YWwgYXJpemEgSUQgc2luaSB0YW5sYW5nJ1xyXG5cdH1cclxuXHJcblx0aWYgKCFTdHJpbmcoc3VwcGxpZXJOYW1lIHx8ICcnKS50cmltKCkpIHtcclxuXHRcdHJldHVybiAnUWF5ZXJkYW4gb2xpbmF5b3RnYW5pbmkga2lyaXRpbmcnXHJcblx0fVxyXG5cclxuXHRjb25zdCB2YWxpZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT5cclxuXHRcdFN0cmluZyhpdGVtPy5wcm9kdWN0TmFtZSB8fCAnJykudHJpbSgpLFxyXG5cdClcclxuXHJcblx0aWYgKCF2YWxpZEl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuICdLYW1pZGEgYml0dGEgdG92YXIgbm9taW5pIGtpcml0aW5nJ1xyXG5cdH1cclxuXHJcblx0aWYgKGRvY3VtZW50cy5zb21lKGRvY3VtZW50ID0+ICFTdHJpbmcoZG9jdW1lbnQ/Lm5hbWUgfHwgJycpLnRyaW0oKSkpIHtcclxuXHRcdHJldHVybiAnSGFyIGJpciBodWpqYXRnYSBub20ga2lyaXRpbmcnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gJydcclxufVxyXG5cclxuY29uc3QgUHVyY2hhc2VPcmRlcldvcmtzcGFjZSA9ICgpID0+IHtcclxuXHRjb25zdCBbY3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXHJcblx0Y29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcclxuXHRjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbb3JkZXJlZFJlY29yZHMsIHNldE9yZGVyZWRSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFthdmFpbGFibGVVbml0cywgc2V0QXZhaWxhYmxlVW5pdHNdID0gdXNlU3RhdGUoWydkb25hJ10pXHJcblx0Y29uc3QgW3NlbGVjdGVkUmVxdWVzdElkLCBzZXRTZWxlY3RlZFJlcXVlc3RJZF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFtzdXBwbGllck5hbWUsIHNldFN1cHBsaWVyTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbZG9jdW1lbnRzLCBzZXREb2N1bWVudHNdID0gdXNlU3RhdGUoW2NyZWF0ZURvY3VtZW50Um93KCldKVxyXG5cdGNvbnN0IFtzaG93Q3JlYXRlRm9ybSwgc2V0U2hvd0NyZWF0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG5cdGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHRjb25zdCBjYW5WaWV3ID0gWydhZG1pbicsICdtb25pdG9yaW5nJywgJ3NvdGliX29sdXZjaGknXS5pbmNsdWRlcyhcclxuXHRcdGN1cnJlbnRBZG1pbj8ucm9sZSxcclxuXHQpXHJcblx0Y29uc3QgY2FuRWRpdCA9IFsnYWRtaW4nLCAnc290aWJfb2x1dmNoaSddLmluY2x1ZGVzKGN1cnJlbnRBZG1pbj8ucm9sZSlcclxuXHJcblx0Y29uc3QgYXBwbHlTZWVuU3RhdGUgPSAobGlzdCwgcmVxdWVzdElkKSA9PlxyXG5cdFx0bGlzdC5tYXAocmVjb3JkID0+XHJcblx0XHRcdHJlY29yZC5pZCA9PT0gcmVxdWVzdElkXHJcblx0XHRcdFx0PyB7XHJcblx0XHRcdFx0XHRcdC4uLnJlY29yZCxcclxuXHRcdFx0XHRcdFx0YnV5ZXJPcmRlckRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHQuLi4ocmVjb3JkPy5idXllck9yZGVyRGF0YSB8fCB7fSksXHJcblx0XHRcdFx0XHRcdFx0aXNOZXc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdGxhc3RWaWV3ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG5cdFx0XHRcdFx0XHRcdGxhc3RWaWV3ZWRCeTpcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRBZG1pbj8udGl0bGUgfHxcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRBZG1pbj8ub3JnYW5pemF0aW9uTmFtZSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEFkbWluPy51c2VybmFtZSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0JycsXHJcblx0XHRcdFx0XHRcdFx0bGFzdFZpZXdlZFJvbGU6IGN1cnJlbnRBZG1pbj8ucm9sZSB8fCAnJyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQ6IHJlY29yZCxcclxuXHRcdClcclxuXHJcblx0Y29uc3QgbWFya1JlY29yZFNlZW4gPSBhc3luYyByZXF1ZXN0SWQgPT4ge1xyXG5cdFx0aWYgKCFjYW5FZGl0IHx8ICFyZXF1ZXN0SWQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdGFyZ2V0UmVjb3JkID0gWy4uLnJlY29yZHMsIC4uLm9yZGVyZWRSZWNvcmRzXS5maW5kKFxyXG5cdFx0XHRyZWNvcmQgPT4gcmVjb3JkLmlkID09PSByZXF1ZXN0SWQsXHJcblx0XHQpXHJcblxyXG5cdFx0aWYgKHRhcmdldFJlY29yZCAmJiAhdGFyZ2V0UmVjb3JkPy5idXllck9yZGVyRGF0YT8uaXNOZXcpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgYXBpLnJlY29yZEFjdGlvbih7XHJcblx0XHRcdFx0cmVzb3VyY2VJZDogJ1B1cmNoYXNlQnV5ZXJRdWV1ZScsXHJcblx0XHRcdFx0cmVjb3JkSWQ6IHJlcXVlc3RJZCxcclxuXHRcdFx0XHRhY3Rpb25OYW1lOiAnbWFya0J1eWVyTm90aWZpY2F0aW9uU2VlbicsXHJcblx0XHRcdFx0ZGF0YToge30sXHJcblx0XHRcdH0pXHJcblx0XHRcdHNldFJlY29yZHMoY3VycmVudFJlY29yZHMgPT4gYXBwbHlTZWVuU3RhdGUoY3VycmVudFJlY29yZHMsIHJlcXVlc3RJZCkpXHJcblx0XHRcdHNldE9yZGVyZWRSZWNvcmRzKGN1cnJlbnRSZWNvcmRzID0+XHJcblx0XHRcdFx0YXBwbHlTZWVuU3RhdGUoY3VycmVudFJlY29yZHMsIHJlcXVlc3RJZCksXHJcblx0XHRcdClcclxuXHRcdH0gY2F0Y2gge1xyXG5cdFx0XHQvLyBuby1vcDogYmFkZ2UgaXMgaW5mb3JtYXRpb25hbCBhbmQgc2hvdWxkIG5vdCBpbnRlcnJ1cHQgdGhlIHdvcmtmbG93XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBvcGVuUmVxdWVzdCA9IGFzeW5jIHJlY29yZCA9PiB7XHJcblx0XHRpZiAoIXJlY29yZD8uaWQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0YXdhaXQgbWFya1JlY29yZFNlZW4ocmVjb3JkLmlkKVxyXG5cclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uYXNzaWduKFxyXG5cdFx0XHRcdGAvYWRtaW4vcmVzb3VyY2VzL1B1cmNoYXNlT3JkZXJXb3Jrc3BhY2U/cmVjb3JkSWQ9JHtyZWNvcmQuaWR9YCxcclxuXHRcdFx0KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgYXBwbHlSZWNvcmQgPSByZWNvcmQgPT4ge1xyXG5cdFx0aWYgKCFyZWNvcmQpIHtcclxuXHRcdFx0c2V0SXRlbXMoW10pXHJcblx0XHRcdHNldFN1cHBsaWVyTmFtZSgnJylcclxuXHRcdFx0c2V0RG9jdW1lbnRzKFtjcmVhdGVEb2N1bWVudFJvdygpXSlcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZWRJdGVtcyA9IEFycmF5LmlzQXJyYXkocmVjb3JkPy5idXllck9yZGVyRGF0YT8uaXRlbXMpXHJcblx0XHRcdD8gcmVjb3JkLmJ1eWVyT3JkZXJEYXRhLml0ZW1zXHJcblx0XHRcdDogW11cclxuXHRcdGNvbnN0IG5leHRJdGVtcyA9IChzYXZlZEl0ZW1zLmxlbmd0aCA/IHNhdmVkSXRlbXMgOiByZWNvcmQuaXRlbXMgfHwgW10pLm1hcChcclxuXHRcdFx0aXRlbSA9PiAoe1xyXG5cdFx0XHRcdHByb2R1Y3ROYW1lOiBTdHJpbmcoaXRlbT8ucHJvZHVjdE5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdFx0XHRmZWF0dXJlczogU3RyaW5nKGl0ZW0/LmZlYXR1cmVzIHx8ICcnKS50cmltKCksXHJcblx0XHRcdFx0dW5pdDogU3RyaW5nKGl0ZW0/LnVuaXQgfHwgYXZhaWxhYmxlVW5pdHNbMF0gfHwgJ2RvbmEnKS50cmltKCksXHJcblx0XHRcdFx0cXVhbnRpdHk6IE1hdGgubWF4KDEsIE51bWJlcihpdGVtPy5xdWFudGl0eSB8fCAxKSksXHJcblx0XHRcdH0pLFxyXG5cdFx0KVxyXG5cclxuXHRcdGNvbnN0IHNhdmVkRG9jdW1lbnRzID0gQXJyYXkuaXNBcnJheShyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5kb2N1bWVudHMpXHJcblx0XHRcdD8gcmVjb3JkLmJ1eWVyT3JkZXJEYXRhLmRvY3VtZW50c1xyXG5cdFx0XHQ6IFtdXHJcblxyXG5cdFx0c2V0SXRlbXMobmV4dEl0ZW1zKVxyXG5cdFx0c2V0U3VwcGxpZXJOYW1lKFN0cmluZyhyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUgfHwgJycpLnRyaW0oKSlcclxuXHRcdHNldERvY3VtZW50cyhcclxuXHRcdFx0c2F2ZWREb2N1bWVudHMubGVuZ3RoXHJcblx0XHRcdFx0PyBzYXZlZERvY3VtZW50cy5tYXAoZG9jdW1lbnQgPT4gY3JlYXRlRG9jdW1lbnRSb3coZG9jdW1lbnQpKVxyXG5cdFx0XHRcdDogW2NyZWF0ZURvY3VtZW50Um93KCldLFxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbG9hZFdvcmtzcGFjZSA9IGFzeW5jIHByZWZlcnJlZFJlcXVlc3RJZCA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG5cdFx0XHRcdHJlc291cmNlSWQ6ICdQdXJjaGFzZUJ1eWVyUXVldWUnLFxyXG5cdFx0XHRcdGFjdGlvbk5hbWU6ICdidXllcldvcmtzcGFjZScsXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRjb25zdCBuZXh0UmVjb3JkcyA9IHJlc3BvbnNlPy5kYXRhPy5yZWNvcmRzIHx8IFtdXHJcblx0XHRcdGNvbnN0IG5leHRPcmRlcmVkUmVjb3JkcyA9IHJlc3BvbnNlPy5kYXRhPy5vcmRlcmVkUmVjb3JkcyB8fCBbXVxyXG5cdFx0XHRjb25zdCBuZXh0VW5pdHMgPSByZXNwb25zZT8uZGF0YT8uYXZhaWxhYmxlVW5pdHMgfHwgWydkb25hJ11cclxuXHRcdFx0Y29uc3QgcXVldWVSZWNvcmRzID0gWy4uLm5leHRSZWNvcmRzLCAuLi5uZXh0T3JkZXJlZFJlY29yZHNdXHJcblx0XHRcdGNvbnN0IHJlc29sdmVkUmVxdWVzdElkID1cclxuXHRcdFx0XHRwcmVmZXJyZWRSZXF1ZXN0SWQgJiZcclxuXHRcdFx0XHRxdWV1ZVJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBwcmVmZXJyZWRSZXF1ZXN0SWQpXHJcblx0XHRcdFx0XHQ/IHByZWZlcnJlZFJlcXVlc3RJZFxyXG5cdFx0XHRcdFx0OiBzZWxlY3RlZFJlcXVlc3RJZCAmJlxyXG5cdFx0XHRcdFx0XHQgIHF1ZXVlUmVjb3Jkcy5zb21lKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHNlbGVjdGVkUmVxdWVzdElkKVxyXG5cdFx0XHRcdFx0XHQ/IHNlbGVjdGVkUmVxdWVzdElkXHJcblx0XHRcdFx0XHRcdDogJydcclxuXHJcblx0XHRcdHNldEF2YWlsYWJsZVVuaXRzKG5leHRVbml0cylcclxuXHRcdFx0c2V0UmVjb3JkcyhuZXh0UmVjb3JkcylcclxuXHRcdFx0c2V0T3JkZXJlZFJlY29yZHMobmV4dE9yZGVyZWRSZWNvcmRzKVxyXG5cdFx0XHRzZXRTZWxlY3RlZFJlcXVlc3RJZChyZXNvbHZlZFJlcXVlc3RJZClcclxuXHJcblx0XHRcdGlmIChwcmVmZXJyZWRSZXF1ZXN0SWQpIHtcclxuXHRcdFx0XHRzZXRTaG93Q3JlYXRlRm9ybSh0cnVlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmVzb2x2ZWRSZXF1ZXN0SWQpIHtcclxuXHRcdFx0XHRjb25zdCByZXNvbHZlZFJlY29yZCA9XHJcblx0XHRcdFx0XHRxdWV1ZVJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmlkID09PSByZXNvbHZlZFJlcXVlc3RJZCkgfHwgbnVsbFxyXG5cdFx0XHRcdGFwcGx5UmVjb3JkKHJlc29sdmVkUmVjb3JkKVxyXG5cclxuXHRcdFx0XHRpZiAocHJlZmVycmVkUmVxdWVzdElkICYmIHJlc29sdmVkUmVjb3JkPy5idXllck9yZGVyRGF0YT8uaXNOZXcpIHtcclxuXHRcdFx0XHRcdHZvaWQgbWFya1JlY29yZFNlZW4ocmVzb2x2ZWRSZXF1ZXN0SWQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGFwcGx5UmVjb3JkKG51bGwpXHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldFJlY29yZHMoW10pXHJcblx0XHRcdHNldE9yZGVyZWRSZWNvcmRzKFtdKVxyXG5cdFx0XHRzZXRTZWxlY3RlZFJlcXVlc3RJZCgnJylcclxuXHRcdFx0YXBwbHlSZWNvcmQobnVsbClcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOiBleHRyYWN0V29ya3NwYWNlTWVzc2FnZShcclxuXHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YSxcclxuXHRcdFx0XHRcdCdCdXl1cnRtYSBzYWhpZmFzaSBtYeKAmWx1bW90bGFyaW5pIHl1a2xhYiBib+KAmGxtYWRpJyxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdH0pXHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGluaXRpYWxSZXF1ZXN0SWQgPVxyXG5cdFx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG5cdFx0XHRcdD8gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3JlY29yZElkJykgfHwgJydcclxuXHRcdFx0XHQ6ICcnXHJcblxyXG5cdFx0bG9hZFdvcmtzcGFjZShpbml0aWFsUmVxdWVzdElkKVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCBjb21iaW5lZFJlY29yZHMgPSB1c2VNZW1vKCgpID0+IHtcclxuXHRcdGNvbnN0IHJlY29yZE1hcCA9IG5ldyBNYXAoKVxyXG5cclxuXHRcdDtbLi4ucmVjb3JkcywgLi4ub3JkZXJlZFJlY29yZHNdLmZvckVhY2gocmVjb3JkID0+IHtcclxuXHRcdFx0aWYgKHJlY29yZD8uaWQpIHtcclxuXHRcdFx0XHRyZWNvcmRNYXAuc2V0KHJlY29yZC5pZCwgcmVjb3JkKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cclxuXHRcdGNvbnN0IGdldFRpbWVzdGFtcCA9IHJlY29yZCA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlID1cclxuXHRcdFx0XHRyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5ub3RpZmljYXRpb25VcGRhdGVkQXQgfHxcclxuXHRcdFx0XHRyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zYXZlZEF0IHx8XHJcblx0XHRcdFx0cmVjb3JkPy51cGRhdGVkQXQgfHxcclxuXHRcdFx0XHRyZWNvcmQ/LmNyZWF0ZWRBdCB8fFxyXG5cdFx0XHRcdDBcclxuXHRcdFx0Y29uc3QgcGFyc2VkID0gbmV3IERhdGUodmFsdWUpLmdldFRpbWUoKVxyXG5cdFx0XHRyZXR1cm4gTnVtYmVyLmlzTmFOKHBhcnNlZCkgPyAwIDogcGFyc2VkXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIEFycmF5LmZyb20ocmVjb3JkTWFwLnZhbHVlcygpKS5zb3J0KFxyXG5cdFx0XHQobGVmdCwgcmlnaHQpID0+IGdldFRpbWVzdGFtcChyaWdodCkgLSBnZXRUaW1lc3RhbXAobGVmdCksXHJcblx0XHQpXHJcblx0fSwgW3JlY29yZHMsIG9yZGVyZWRSZWNvcmRzXSlcclxuXHJcblx0Y29uc3QgZmlsdGVyZWRSZWNvcmRzID0gdXNlTWVtbygoKSA9PiB7XHJcblx0XHRjb25zdCBxdWVyeSA9IFN0cmluZyhzZWFyY2hUZXh0IHx8ICcnKVxyXG5cdFx0XHQudHJpbSgpXHJcblx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdFx0aWYgKCFxdWVyeSkge1xyXG5cdFx0XHRyZXR1cm4gY29tYmluZWRSZWNvcmRzXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGNvbWJpbmVkUmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IHtcclxuXHRcdFx0Y29uc3QgaXRlbVRleHQgPSAocmVjb3JkPy5pdGVtcyB8fCBbXSlcclxuXHRcdFx0XHQubWFwKGl0ZW0gPT4gYCR7aXRlbT8ucHJvZHVjdE5hbWUgfHwgJyd9ICR7aXRlbT8uZmVhdHVyZXMgfHwgJyd9YClcclxuXHRcdFx0XHQuam9pbignICcpXHJcblx0XHRcdGNvbnN0IHNlYXJjaGFibGVUZXh0ID0gW1xyXG5cdFx0XHRcdHJlY29yZD8ucmVxdWVzdE51bWJlcixcclxuXHRcdFx0XHRyZWNvcmQ/LnN0YXR1cyxcclxuXHRcdFx0XHRyZWNvcmQ/LnNlbGVjdGVkVXNlck5hbWVzLFxyXG5cdFx0XHRcdHJlY29yZD8uYnV5ZXJPcmRlckRhdGE/LnN1cHBsaWVyTmFtZSxcclxuXHRcdFx0XHRpdGVtVGV4dCxcclxuXHRcdFx0XVxyXG5cdFx0XHRcdC5qb2luKCcgJylcclxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKVxyXG5cclxuXHRcdFx0cmV0dXJuIHNlYXJjaGFibGVUZXh0LmluY2x1ZGVzKHF1ZXJ5KVxyXG5cdFx0fSlcclxuXHR9LCBbY29tYmluZWRSZWNvcmRzLCBzZWFyY2hUZXh0XSlcclxuXHJcblx0Y29uc3QgYWxsUXVldWVSZWNvcmRzID0gdXNlTWVtbygoKSA9PiBjb21iaW5lZFJlY29yZHMsIFtjb21iaW5lZFJlY29yZHNdKVxyXG5cclxuXHRjb25zdCBzZWxlY3RlZFJlY29yZCA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PlxyXG5cdFx0XHRhbGxRdWV1ZVJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBzZWxlY3RlZFJlcXVlc3RJZCkgfHwgbnVsbCxcclxuXHRcdFthbGxRdWV1ZVJlY29yZHMsIHNlbGVjdGVkUmVxdWVzdElkXSxcclxuXHQpXHJcblx0Y29uc3Qgc2VsZWN0ZWRSZWNvcmRJc0Rpc3BhdGNoZWQgPSBCb29sZWFuKFxyXG5cdFx0U3RyaW5nKHNlbGVjdGVkUmVjb3JkPy53YXJlaG91c2VEaXNwYXRjaERhdGE/LmRpc3BhdGNoZWRBdCB8fCAnJykudHJpbSgpLFxyXG5cdClcclxuXHRjb25zdCBjYW5FZGl0U2VsZWN0ZWRSZWNvcmQgPSBjYW5FZGl0ICYmICFzZWxlY3RlZFJlY29yZElzRGlzcGF0Y2hlZFxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdG90YWxQYWdlcyA9IE1hdGgubWF4KFxyXG5cdFx0XHQxLFxyXG5cdFx0XHRNYXRoLmNlaWwoZmlsdGVyZWRSZWNvcmRzLmxlbmd0aCAvIFBBR0VfU0laRSksXHJcblx0XHQpXHJcblx0XHRzZXRDdXJyZW50UGFnZShjdXJyZW50ID0+IE1hdGgubWluKGN1cnJlbnQsIHRvdGFsUGFnZXMpKVxyXG5cdH0sIFtmaWx0ZXJlZFJlY29yZHMubGVuZ3RoXSlcclxuXHJcblx0Y29uc3QgdXBkYXRlSXRlbSA9IChpbmRleCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcblx0XHRzZXRJdGVtcyhjdXJyZW50SXRlbXMgPT5cclxuXHRcdFx0Y3VycmVudEl0ZW1zLm1hcCgoaXRlbSwgY3VycmVudEluZGV4KSA9PlxyXG5cdFx0XHRcdGN1cnJlbnRJbmRleCA9PT0gaW5kZXhcclxuXHRcdFx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0XHRcdC4uLml0ZW0sXHJcblx0XHRcdFx0XHRcdFx0W2ZpZWxkXTpcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkID09PSAncXVhbnRpdHknID8gTWF0aC5tYXgoMSwgTnVtYmVyKHZhbHVlIHx8IDEpKSA6IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6IGl0ZW0sXHJcblx0XHRcdCksXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRjb25zdCB1cGRhdGVEb2N1bWVudCA9IChpbmRleCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcblx0XHRzZXREb2N1bWVudHMoY3VycmVudERvY3VtZW50cyA9PlxyXG5cdFx0XHRjdXJyZW50RG9jdW1lbnRzLm1hcCgoZG9jdW1lbnQsIGN1cnJlbnRJbmRleCkgPT5cclxuXHRcdFx0XHRjdXJyZW50SW5kZXggPT09IGluZGV4XHJcblx0XHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0XHQuLi5kb2N1bWVudCxcclxuXHRcdFx0XHRcdFx0XHRbZmllbGRdOiB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0OiBkb2N1bWVudCxcclxuXHRcdFx0KSxcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNlbGVjdFJlcXVlc3QgPSBhc3luYyBldmVudCA9PiB7XHJcblx0XHRjb25zdCBuZXh0UmVxdWVzdElkID0gU3RyaW5nKGV2ZW50LnRhcmdldC52YWx1ZSB8fCAnJylcclxuXHRcdGNvbnN0IG5leHRSZWNvcmQgPVxyXG5cdFx0XHRyZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5pZCA9PT0gbmV4dFJlcXVlc3RJZCkgfHwgbnVsbFxyXG5cclxuXHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKG5leHRSZXF1ZXN0SWQpXHJcblx0XHRhcHBseVJlY29yZChuZXh0UmVjb3JkKVxyXG5cdFx0YXdhaXQgbWFya1JlY29yZFNlZW4obmV4dFJlcXVlc3RJZClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN0YXJ0TmV3T3JkZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoIXJlY29yZHMubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5leHRSZXF1ZXN0SWQgPSBzZWxlY3RlZFJlcXVlc3RJZCB8fCByZWNvcmRzWzBdPy5pZCB8fCAnJ1xyXG5cdFx0Y29uc3QgbmV4dFJlY29yZCA9XHJcblx0XHRcdHJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBuZXh0UmVxdWVzdElkKSB8fCBudWxsXHJcblx0XHRhd2FpdCBvcGVuUmVxdWVzdChuZXh0UmVjb3JkKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VOZXdPcmRlciA9ICgpID0+IHtcclxuXHRcdHNldFNob3dDcmVhdGVGb3JtKGZhbHNlKVxyXG5cdFx0c2V0U2VsZWN0ZWRSZXF1ZXN0SWQoJycpXHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmFzc2lnbignL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZU9yZGVyV29ya3NwYWNlJylcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSBhc3luYyAoaW5kZXgsIGV2ZW50KSA9PiB7XHJcblx0XHRpZiAoIWNhbkVkaXRTZWxlY3RlZFJlY29yZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF1cclxuXHJcblx0XHRpZiAoIWZpbGUpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgY29udGVudCA9IGF3YWl0IHRvRGF0YVVybChmaWxlKVxyXG5cdFx0XHRzZXREb2N1bWVudHMoY3VycmVudERvY3VtZW50cyA9PlxyXG5cdFx0XHRcdGN1cnJlbnREb2N1bWVudHMubWFwKChkb2N1bWVudCwgY3VycmVudEluZGV4KSA9PlxyXG5cdFx0XHRcdFx0Y3VycmVudEluZGV4ID09PSBpbmRleFxyXG5cdFx0XHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLmRvY3VtZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmlsZU5hbWU6IGZpbGUubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdG1pbWVUeXBlOiBmaWxlLnR5cGUsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0OiBkb2N1bWVudCxcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHQpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgJ0ZheWxuaSB5dWtsYXNoZGEgeGF0b2xpayBib+KAmGxkaScsXHJcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGFkZERvY3VtZW50Um93ID0gKCkgPT4ge1xyXG5cdFx0aWYgKCFjYW5FZGl0U2VsZWN0ZWRSZWNvcmQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0c2V0RG9jdW1lbnRzKGN1cnJlbnREb2N1bWVudHMgPT4gWy4uLmN1cnJlbnREb2N1bWVudHMsIGNyZWF0ZURvY3VtZW50Um93KCldKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVtb3ZlRG9jdW1lbnRSb3cgPSBpbmRleCA9PiB7XHJcblx0XHRpZiAoIWNhbkVkaXRTZWxlY3RlZFJlY29yZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHNldERvY3VtZW50cyhjdXJyZW50RG9jdW1lbnRzID0+IHtcclxuXHRcdFx0Y29uc3QgbmV4dERvY3VtZW50cyA9IGN1cnJlbnREb2N1bWVudHMuZmlsdGVyKFxyXG5cdFx0XHRcdChfLCBjdXJyZW50SW5kZXgpID0+IGN1cnJlbnRJbmRleCAhPT0gaW5kZXgsXHJcblx0XHRcdClcclxuXHRcdFx0cmV0dXJuIG5leHREb2N1bWVudHMubGVuZ3RoID8gbmV4dERvY3VtZW50cyA6IFtjcmVhdGVEb2N1bWVudFJvdygpXVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNhdmVPcmRlciA9IGFzeW5jICgpID0+IHtcclxuXHRcdGlmICghY2FuRWRpdFNlbGVjdGVkUmVjb3JkKSB7XHJcblx0XHRcdGlmIChzZWxlY3RlZFJlY29yZElzRGlzcGF0Y2hlZCkge1xyXG5cdFx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHQnQnUgYnV5dXJ0bWEgb21ib3JnYSBqb+KAmG5hdGlsZ2FuLiBFbmRpIGJ1IHllcmRhIGZhcWF0IGtv4oCYcmlzaCBtdW1raW4uJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbmZvJyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5vcm1hbGl6ZWREb2N1bWVudHMgPSBub3JtYWxpemVPcmRlckRvY3VtZW50cyhkb2N1bWVudHMpXHJcblx0XHRjb25zdCB2YWxpZGF0aW9uTWVzc2FnZSA9IGdldENsaWVudFZhbGlkYXRpb25NZXNzYWdlKHtcclxuXHRcdFx0cmVxdWVzdElkOiBzZWxlY3RlZFJlcXVlc3RJZCxcclxuXHRcdFx0c3VwcGxpZXJOYW1lLFxyXG5cdFx0XHRpdGVtcyxcclxuXHRcdFx0ZG9jdW1lbnRzOiBub3JtYWxpemVkRG9jdW1lbnRzLFxyXG5cdFx0fSlcclxuXHJcblx0XHRpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOiB2YWxpZGF0aW9uTWVzc2FnZSxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRzZXRTYXZpbmcodHJ1ZSlcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5yZXNvdXJjZUFjdGlvbih7XHJcblx0XHRcdFx0cmVzb3VyY2VJZDogJ1B1cmNoYXNlQnV5ZXJRdWV1ZScsXHJcblx0XHRcdFx0YWN0aW9uTmFtZTogJ2J1eWVyV29ya3NwYWNlJyxcclxuXHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0cmVxdWVzdElkOiBzZWxlY3RlZFJlcXVlc3RJZCxcclxuXHRcdFx0XHRcdHN1cHBsaWVyTmFtZTogc3VwcGxpZXJOYW1lLnRyaW0oKSxcclxuXHRcdFx0XHRcdGl0ZW1zLFxyXG5cdFx0XHRcdFx0ZG9jdW1lbnRzOiBub3JtYWxpemVkRG9jdW1lbnRzLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRjb25zdCByZXNwb25zZU5vdGljZSA9IHJlc3BvbnNlPy5kYXRhPy5ub3RpY2VcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2VNZXNzYWdlID0gZXh0cmFjdFdvcmtzcGFjZU1lc3NhZ2UocmVzcG9uc2U/LmRhdGEpXHJcblxyXG5cdFx0XHRpZiAocmVzcG9uc2VOb3RpY2U/LnR5cGUgPT09ICdlcnJvcicpIHtcclxuXHRcdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdFx0Li4ucmVzcG9uc2VOb3RpY2UsXHJcblx0XHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0XHRyZXNwb25zZU1lc3NhZ2UgfHxcclxuXHRcdFx0XHRcdFx0J0J1eXVydG1hIG1h4oCZbHVtb3RsYXJpbmkgdGVrc2hpcmliLCBxYXl0YSBzYXFsYW5nJyxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocmVzcG9uc2VOb3RpY2UpIHtcclxuXHRcdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdFx0Li4ucmVzcG9uc2VOb3RpY2UsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiByZXNwb25zZU1lc3NhZ2UgfHwgcmVzcG9uc2VOb3RpY2UubWVzc2FnZSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRTaG93Q3JlYXRlRm9ybShmYWxzZSlcclxuXHRcdFx0YXdhaXQgbG9hZFdvcmtzcGFjZSgnJylcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogZXh0cmFjdFdvcmtzcGFjZU1lc3NhZ2UoXHJcblx0XHRcdFx0XHRlcnJvcj8ucmVzcG9uc2U/LmRhdGEsXHJcblx0XHRcdFx0XHQnQnV5dXJ0bWEgbWHigJlsdW1vdGxhcmluaSBzYXFsYWIgYm/igJhsbWFkaScsXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0U2F2aW5nKGZhbHNlKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVuZGVyUXVldWVUYWJsZSA9ICh7IHJvd3MsIGVtcHR5VGV4dCB9KSA9PiB7XHJcblx0XHRpZiAoIXJvd3MubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVybiA8VGV4dCBjb2xvcj0nZ3JleTYwJz57ZW1wdHlUZXh0fTwvVGV4dD5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5tYXgoMSwgTWF0aC5jZWlsKHJvd3MubGVuZ3RoIC8gUEFHRV9TSVpFKSlcclxuXHRcdGNvbnN0IHNhZmVQYWdlID0gTWF0aC5taW4oY3VycmVudFBhZ2UsIHRvdGFsUGFnZXMpXHJcblx0XHRjb25zdCBzdGFydEluZGV4ID0gKHNhZmVQYWdlIC0gMSkgKiBQQUdFX1NJWkVcclxuXHRcdGNvbnN0IHBhZ2luYXRlZFJvd3MgPSByb3dzLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBQQUdFX1NJWkUpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJveD5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt0YWJsZVdyYXBTdHlsZX0+XHJcblx0XHRcdFx0XHQ8dGFibGUgc3R5bGU9e3RhYmxlU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PiM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlN0YXR1czwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+QXJpemE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlR1emlsbWFsYXI8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlRvdmFyIC8gbWFuYmE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlNhbmE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHR7cGFnaW5hdGVkUm93cy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJvd0RhdGUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5ub3RpZmljYXRpb25VcGRhdGVkQXQgfHxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVjb3JkPy5idXllck9yZGVyRGF0YT8uc2F2ZWRBdCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWNvcmQ/LnVwZGF0ZWRBdCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWNvcmQ/LmNyZWF0ZWRBdFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaGFzU2F2ZWRPcmRlciA9IEJvb2xlYW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZD8uYnV5ZXJPcmRlckRhdGE/LnNhdmVkQXQgfHxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVjb3JkPy5idXllck9yZGVyRGF0YT8uc3VwcGxpZXJOYW1lIHx8XHJcblx0XHRcdFx0XHRcdFx0XHRcdChBcnJheS5pc0FycmF5KHJlY29yZD8uYnV5ZXJPcmRlckRhdGE/Lml0ZW1zKSAmJlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZC5idXllck9yZGVyRGF0YS5pdGVtcy5sZW5ndGgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdHlwZU1ldGEgPSBoYXNTYXZlZE9yZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdRaWxpbmdhbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkb3RDb2xvcjogJyMwMDU3ZDknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ucXVldWVUeXBlQmFkZ2VTdHlsZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNlZmY2ZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJyMwMDU3ZDknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJDb2xvcjogJyNiN2QzZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdRaWxpbm1hZ2FuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRvdENvbG9yOiAnI2RjMjYyNicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5xdWV1ZVR5cGVCYWRnZVN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2ZlZjJmMicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnI2RjMjYyNicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAnI2ZlY2FjYScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3JlY29yZC5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB2b2lkIG9wZW5SZXF1ZXN0KHJlY29yZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRSZXF1ZXN0SWQgPT09IHJlY29yZC5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHsgLi4ucm93SW50ZXJhY3RpdmVTdHlsZSwgYmFja2dyb3VuZDogJyNmOGZiZmYnIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiByb3dJbnRlcmFjdGl2ZVN0eWxlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e3N0YXJ0SW5kZXggKyBpbmRleCArIDF9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggZGlzcGxheT0nZmxleCcgZmxleERpcmVjdGlvbj0nY29sdW1uJyBnYXA9J3hzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBhcz0nc3Bhbicgc3R5bGU9e3R5cGVNZXRhLnN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBzdHlsZT17c3RhdHVzRG90U3R5bGUodHlwZU1ldGEuZG90Q29sb3IpfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnt0eXBlTWV0YS5sYWJlbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkPy5idXllck9yZGVyRGF0YT8uaXNOZXcgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBhcz0nc3Bhbicgc3R5bGU9e25ld0JhZGdlU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0WWFuZ2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWNvcmQucmVxdWVzdE51bWJlciB8fCByZWNvcmQuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0neHMnIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkLnN0YXR1cyB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlY29yZC5zZWxlY3RlZFVzZXJOYW1lcyB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGBNYW5iYTogJHtyZWNvcmQuYnV5ZXJPcmRlckRhdGEuc3VwcGxpZXJOYW1lfWBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IGAke3JlY29yZD8uaXRlbXM/Lmxlbmd0aCB8fCAwfSB0YSB0b3ZhcmB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT57Zm9ybWF0RGF0ZShyb3dEYXRlKX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0e3RvdGFsUGFnZXMgPiAxID8gKFxyXG5cdFx0XHRcdFx0PFRleHQgbXQ9J3hsJyB0ZXh0QWxpZ249J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxQYWdpbmF0aW9uXHJcblx0XHRcdFx0XHRcdFx0cGFnZT17c2FmZVBhZ2V9XHJcblx0XHRcdFx0XHRcdFx0cGVyUGFnZT17UEFHRV9TSVpFfVxyXG5cdFx0XHRcdFx0XHRcdHRvdGFsPXtyb3dzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17cGFnZSA9PiBzZXRDdXJyZW50UGFnZShwYWdlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAoIWNhblZpZXcpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxCb3g+XHJcblx0XHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0XHQ8SDI+QnV5dXJ0bWEgcWlsaXNoPC9IMj5cclxuXHRcdFx0XHRcdDxNZXNzYWdlQm94IHZhcmlhbnQ9J2RhbmdlcicgbXQ9J3hsJz5cclxuXHRcdFx0XHRcdFx0PFRleHQ+QnUgYm/igJhsaW0gc2l6bmluZyByb2xpbmdpeiB1Y2h1biB5b3BpcS48L1RleHQ+XHJcblx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxCb3ggYmc9J3doaXRlJyBwPSd4eGwnIGJvcmRlclJhZGl1cz0neGwnPlxyXG5cdFx0XHRcdDxUZXh0IGNvbG9yPSdwcmltYXJ5MTAwJyBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRaYXhpcmEudXpcclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PEgyPkJ1eXVydG1hIHFpbGlzaDwvSDI+XHJcblx0XHRcdFx0PFRleHQgbXQ9J3NtJyBjb2xvcj0nZ3JleTYwJz5cclxuXHRcdFx0XHRcdEphZHZhbCBxYXRvcmluaSBib3NzYW5naXosIHRhbmxhbmdhbiBhcml6YSB1Y2h1biBidXl1cnRtYSBpc2ggb3luYXNpXHJcblx0XHRcdFx0XHRvY2hpbGFkaS4gQnV5dXJ0bWEgc2FxbGFuZ2FuZGFuIGtleWluIHVuaSBhbG9oaWRheycgJ31cclxuXHRcdFx0XHRcdDxzdHJvbmc+QnV5dXJ0bWFuaSBqb+KAmG5hdGlzaDwvc3Ryb25nPiBzYWhpZmFzaWRhbiBvbWJvcmdhIHl1Ym9yYXNpei5cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdFx0XHRmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdFx0XHRcdFx0XHRnYXA6ICcxNnB4IDE4cHgnLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICcxNnB4JyxcclxuXHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMjBweCcsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdGhyZWY9Jy9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VEaXNwYXRjaFdvcmtzcGFjZSdcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7IG1pbldpZHRoOiAnMTcwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0QnV5dXJ0bWFuaSBqb+KAmG5hdGlzaFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdGFzPSdhJ1xyXG5cdFx0XHRcdFx0XHRocmVmPScvYWRtaW4vcmVzb3VyY2VzL1dhcmVob3VzZU92ZXJ2aWV3J1xyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgbWluV2lkdGg6ICcxNzBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRPbWJvcmxhclxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdHtsb2FkaW5nID8gKFxyXG5cdFx0XHRcdFx0PFRleHQ+TWHigJlsdW1vdGxhciB5dWtsYW5tb3FkYS4uLjwvVGV4dD5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0XHR7c2hvd0NyZWF0ZUZvcm0gPyBudWxsIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdhcD0nZGVmYXVsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleFdyYXA9J3dyYXAnXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCc+QmFyY2hhIGJ1eXVydG1hbGFyPC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IG10PSd4cycgY29sb3I9J2dyZXk2MCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VhcmNoVGV4dC50cmltKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgRmlsdGVyIG5hdGlqYXNpZGEgJHtmaWx0ZXJlZFJlY29yZHMubGVuZ3RofSB0YSBidXl1cnRtYSB0b3BpbGRpLmBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBjb21iaW5lZFJlY29yZHMubGVuZ3RoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgWWFuZ2ksIG5hdmJhdGRhZ2kgdmEgc2FxbGFuZ2FuIGJ1eXVydG1hbGFyIGJpciBqYWR2YWxkYSAke2ZpbHRlcmVkUmVjb3Jkcy5sZW5ndGh9IHRhIGhvbGF0ZGEga2/igJhyaW5tb3FkYS5gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnSG96aXJjaGEgYnV5dXJ0bWEgdmEgYXJpemFsYXIgeW/igJhxLid9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjb21iaW5lZFJlY29yZHMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UWl6aWwg4oCUIGJ1eXVydG1hIHFpbGlubWFnYW4sIGtv4oCYayDigJQgYnV5dXJ0bWEgcWlsaW5nYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzZWFyY2hUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldFNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNldEN1cnJlbnRQYWdlKDEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdBcml6YSwgdHV6aWxtYSwgbWFuYmEgeW9raSB0b3ZhciBub21pIGJv4oCYeWljaGEgZmlsdGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAuLi5pbnB1dFN0eWxlLCBtYXJnaW5Ub3A6ICcxNnB4JyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IG10PSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJRdWV1ZVRhYmxlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb3dzOiBmaWx0ZXJlZFJlY29yZHMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZW1wdHlUZXh0OiBzZWFyY2hUZXh0LnRyaW0oKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnRmlsdGVyIGJv4oCYeWljaGEgYnV5dXJ0bWEgdG9waWxtYWRpLidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ0J1eXVydG1hbGFyIGhhbGkgeW/igJhxLicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7c2hvd0NyZWF0ZUZvcm0gPyAoXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdhcD0nZGVmYXVsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcD0nd3JhcCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJz5UYW5sYW5nYW4gYXJpemEgZGV0YWxpPC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3hzJyBjb2xvcj0nZ3JleTYwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG92YXJsYXIsIG1hbmJhIHZhIGh1amphdGxhciBzaHUgYmxvayBpY2hpZGEgYW5pcVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrb+KAmHJpbmFkaS5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBnYXA9J2RlZmF1bHQnIGZsZXhXcmFwPSd3cmFwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZD8uYnV5ZXJPcmRlckRhdGE/LmlzTmV3ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGFzPSdzcGFuJyBzdHlsZT17bmV3QmFkZ2VTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0WWFuZ2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmV3T3JkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJv4oCYeXhhdGdhIHFheXRpc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtkZXRhaWxHcmlkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEFyaXphIHJhcWFtaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkUmVjb3JkLnJlcXVlc3ROdW1iZXIgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEhvbGF0aVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+e3NlbGVjdGVkUmVjb3JkLnN0YXR1cyB8fCAn4oCUJ308L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUdXppbG1hbGFyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRSZWNvcmQuc2VsZWN0ZWRVc2VyTmFtZXMgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdE1hbmJhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRSZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUgfHxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdLaXJpdGlsbWFnYW4nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkUmVjb3JkSXNEaXNwYXRjaGVkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lc3NhZ2VCb3ggdmFyaWFudD0naW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEJ1IGJ1eXVydG1heycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkUmVjb3JkPy53YXJlaG91c2VEaXNwYXRjaERhdGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Py53YXJlaG91c2VOYW1lIHx8ICdvbWJvcid9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdHJvbmc+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Zvcm1hdERhdGUoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZFJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy5kaXNwYXRjaGVkQXQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYSBqb+KAmG5hdGlsZ2FuLiBCdSB5ZXJkYSBlbmRpIGZhcWF0IGtv4oCYcmlzaCBtdW1raW4uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTWVzc2FnZUJveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRvdmFyIGhhcWlkYSBtYeKAmWx1bW90bGFyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTRweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgJHtzZWxlY3RlZFJlcXVlc3RJZH0taXRlbS0ke2luZGV4fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwPSdsZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjZGJlM2YwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYmZmJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUb3ZhciAje2luZGV4ICsgMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ucHJvZHVjdE5hbWUgfHwgJyd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVJdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Byb2R1Y3ROYW1lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17aW5wdXRTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWNhbkVkaXRTZWxlY3RlZFJlY29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVG92YXIgbm9taSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmZlYXR1cmVzIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlSXRlbShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdmZWF0dXJlcycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3RleHRBcmVhU3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFjYW5FZGl0U2VsZWN0ZWRSZWNvcmR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1h1c3VzaXlhdGxhcmknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdncmlkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnVuaXQgfHwgJ2RvbmEnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW0oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3VuaXQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWNhbkVkaXRTZWxlY3RlZFJlY29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXZhaWxhYmxlVW5pdHMubWFwKHVuaXQgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17dW5pdH0gdmFsdWU9e3VuaXR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt1bml0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J251bWJlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pbj0nMSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnF1YW50aXR5ID8/IDF9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlSXRlbShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQncXVhbnRpdHknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWNhbkVkaXRTZWxlY3RlZFJlY29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdTb25pJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWwgcmVxdWlyZWQ+UWF5ZXJkYW4gb2xpbm1vcWRhPC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c3VwcGxpZXJOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U3VwcGxpZXJOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IC4uLmlucHV0U3R5bGUsIG1hcmdpblRvcDogJzhweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFjYW5FZGl0U2VsZWN0ZWRSZWNvcmR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdNYXNhbGFuOiBBcnRlbCBzZXJ2aXMsIFRleG5vbWFydCwgbWFoYWxsaXkgYm96b3JkYW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SHVqamF0bGFyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTRweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtkb2N1bWVudHMubWFwKChkb2N1bWVudCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2RvY3VtZW50LmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cD0nbGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmJmZicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17ZG9jdW1lbnQubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlRG9jdW1lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshY2FuRWRpdFNlbGVjdGVkUmVjb3JkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nSHVqamF0IG5vbWknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdmaWxlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlRmlsZUNoYW5nZShpbmRleCwgZXZlbnQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JywgbWF4V2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWNhbkVkaXRTZWxlY3RlZFJlY29yZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2RvY3VtZW50LmZpbGVOYW1lID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRhbmxhbmdhbiBmYXlsOiB7ZG9jdW1lbnQuZmlsZU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtkb2N1bWVudC51cmwgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggbXQ9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17ZG9jdW1lbnQudXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWw9J25vcmVmZXJyZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2xkaW5naSB5dWtsYW5nYW4gaHVqamF0bmkgb2NoaXNoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IG10PSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlRG9jdW1lbnRSb3coaW5kZXgpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFFhdG9ybmkgb2xpYiB0YXNobGFzaFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXQ9J2xnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwPSdkZWZhdWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhXcmFwPSd3cmFwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXthZGREb2N1bWVudFJvd31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshY2FuRWRpdFNlbGVjdGVkUmVjb3JkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCsgSHVqamF0IHFv4oCYc2hpc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhbkVkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2ZsZXgnIGdhcD0nZGVmYXVsdCcgZmxleFdyYXA9J3dyYXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3NhdmVPcmRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17c2F2aW5nIHx8ICFjYW5FZGl0U2VsZWN0ZWRSZWNvcmR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRSZWNvcmRJc0Rpc3BhdGNoZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ09tYm9yZ2Egam/igJhuYXRpbGdhbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogc2F2aW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ1NhcWxhbm1vcWRhLi4uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdTYXFsYXNoJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVzc2FnZUJveCB2YXJpYW50PSdpbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dD5KYWR2YWxkYW4gYXJpemEgdGFubGFuZy48L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTWVzc2FnZUJveD5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlT3JkZXJXb3Jrc3BhY2VcclxuIiwiaW1wb3J0IHtcclxuXHRCb3gsXHJcblx0QnV0dG9uLFxyXG5cdEgyLFxyXG5cdExhYmVsLFxyXG5cdE1lc3NhZ2VCb3gsXHJcblx0UGFnaW5hdGlvbixcclxuXHRUZXh0LFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IEFwaUNsaWVudCwgdXNlQ3VycmVudEFkbWluLCB1c2VOb3RpY2UsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcblxyXG5jb25zdCBjYXJkU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzE4cHgnLFxyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbn1cclxuXHJcbmNvbnN0IGlucHV0U3R5bGUgPSB7XHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRtYXhXaWR0aDogJzEwMCUnLFxyXG5cdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG5cdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjY2JkNWUxJyxcclxuXHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlV3JhcFN0eWxlID0ge1xyXG5cdG92ZXJmbG93WDogJ2F1dG8nLFxyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlU3R5bGUgPSB7XHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcclxuXHRtaW5XaWR0aDogJzgyMHB4JyxcclxufVxyXG5cclxuY29uc3QgdGFibGVIZWFkQ2VsbFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxMnB4IDE0cHgnLFxyXG5cdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdGZvbnRTaXplOiAnMTJweCcsXHJcblx0Zm9udFdlaWdodDogNzAwLFxyXG5cdGNvbG9yOiAnIzQ3NTU2OScsXHJcblx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxufVxyXG5cclxuY29uc3QgdGFibGVDZWxsU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRjb2xvcjogJyMwZjE3MmEnLFxyXG5cdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHR2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxufVxyXG5cclxuY29uc3QgYWN0aW9uQmFyU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdGZsZXhXcmFwOiAnd3JhcCcsXHJcblx0Z2FwOiAnMTZweCAxOHB4JyxcclxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxufVxyXG5cclxuY29uc3QgbmF2QnV0dG9uU3R5bGUgPSB7XHJcblx0bWluV2lkdGg6ICcxNzBweCcsXHJcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG59XHJcblxyXG5jb25zdCByb3dJbnRlcmFjdGl2ZVN0eWxlID0ge1xyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG5cdHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIDAuMTVzIGVhc2UnLFxyXG59XHJcblxyXG5jb25zdCBQQUdFX1NJWkUgPSAyMFxyXG5cclxuY29uc3QgdGFic1dyYXBTdHlsZSA9IHtcclxuXHRkaXNwbGF5OiAnZmxleCcsXHJcblx0Z2FwOiAnOHB4JyxcclxuXHRmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG5cdHBhZGRpbmdCb3R0b206ICcxMnB4JyxcclxuXHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcbn1cclxuXHJcbmNvbnN0IHRhYkJ1dHRvblN0eWxlID0gaXNBY3RpdmUgPT4gKHtcclxuXHRwYWRkaW5nOiAnOHB4IDE0cHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdGJvcmRlcjogYDFweCBzb2xpZCAke2lzQWN0aXZlID8gJyMzYjgyZjYnIDogJyNkYmUzZjAnfWAsXHJcblx0YmFja2dyb3VuZDogaXNBY3RpdmUgPyAnI2VmZjZmZicgOiAnI2ZmZmZmZicsXHJcblx0Y29sb3I6IGlzQWN0aXZlID8gJyMxZDRlZDgnIDogJyM0NzU1NjknLFxyXG5cdGZvbnRTaXplOiAnMTNweCcsXHJcblx0Zm9udFdlaWdodDogNzAwLFxyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG59KVxyXG5cclxuY29uc3QgZXh0cmFjdE1lc3NhZ2UgPSAoZGF0YSwgZmFsbGJhY2tNZXNzYWdlKSA9PiB7XHJcblx0Y29uc3QgZmllbGRNZXNzYWdlcyA9IE9iamVjdC52YWx1ZXMoZGF0YT8ucmVjb3JkPy5lcnJvcnMgfHwge30pXHJcblx0XHQubWFwKGVycm9yID0+IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCAnJykudHJpbSgpKVxyXG5cdFx0LmZpbHRlcihCb29sZWFuKVxyXG5cclxuXHRpZiAoZmllbGRNZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdHJldHVybiBmaWVsZE1lc3NhZ2VzLmpvaW4oJy4gJylcclxuXHR9XHJcblxyXG5cdGNvbnN0IG5vdGljZU1lc3NhZ2UgPSBTdHJpbmcoZGF0YT8ubm90aWNlPy5tZXNzYWdlIHx8ICcnKS50cmltKClcclxuXHRyZXR1cm4gbm90aWNlTWVzc2FnZSAmJiBub3RpY2VNZXNzYWdlICE9PSAndGhlcmVXZXJlVmFsaWRhdGlvbkVycm9ycydcclxuXHRcdD8gbm90aWNlTWVzc2FnZVxyXG5cdFx0OiBmYWxsYmFja01lc3NhZ2VcclxufVxyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9IHZhbHVlID0+IHtcclxuXHRpZiAoIXZhbHVlKSB7XHJcblx0XHRyZXR1cm4gJ+KAlCdcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSlcclxuXHJcblx0aWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFkID0gbnVtYmVyID0+IFN0cmluZyhudW1iZXIpLnBhZFN0YXJ0KDIsICcwJylcclxuXHRyZXR1cm4gYCR7cGFkKGRhdGUuZ2V0RGF0ZSgpKX0uJHtwYWQoZGF0ZS5nZXRNb250aCgpICsgMSl9LiR7ZGF0ZS5nZXRGdWxsWWVhcigpfSAke3BhZChkYXRlLmdldEhvdXJzKCkpfToke3BhZChkYXRlLmdldE1pbnV0ZXMoKSl9YFxyXG59XHJcblxyXG5jb25zdCBQdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjdXJyZW50QWRtaW5dID0gdXNlQ3VycmVudEFkbWluKClcclxuXHRjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxyXG5cdGNvbnN0IHtcclxuXHRcdGkxOG46IHsgbGFuZ3VhZ2UgfSxcclxuXHR9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cdGNvbnN0IHBhZ2VDb3B5ID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfQntGC0L/RgNCw0LLQutCwINC30LDQutCw0LfQsCcsXHJcblx0XHRcdFx0XHRzdWJ0aXRsZTpcclxuXHRcdFx0XHRcdFx0J9CX0LTQtdGB0Ywg0LLRi9Cx0LjRgNCw0LXRgtGB0Y8g0LfQsNGP0LLQutCwLCDRgtC+0LLQsNGA0Ysg0L7RgtC+0LHRgNCw0LbQsNGO0YLRgdGPINGC0L7Qu9GM0LrQviDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwINC4INC+0YLQv9GA0LDQstC70Y/RjtGC0YHRjyDQvdCwINGB0LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNGLLicsXHJcblx0XHRcdFx0XHR0b09yZGVyOiAn0J7RhNC+0YDQvNC70LXQvdC40LUg0LfQsNC60LDQt9CwJyxcclxuXHRcdFx0XHRcdHRvUmVjZWl2ZTogJ9Cf0YDQuNGR0Lwg0LfQsNC60LDQt9CwJyxcclxuXHRcdFx0XHRcdHRvV2FyZWhvdXNlczogJ9Ch0LrQu9Cw0LTRiycsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiAn0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUuLi4nLFxyXG5cdFx0XHRcdFx0cmVhZHlUaXRsZTogJ9CX0LDQutCw0LfRiywg0LPQvtGC0L7QstGL0LUg0Log0L7RgtC/0YDQsNCy0LrQtScsXHJcblx0XHRcdFx0XHRyZWFkeURlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XHQn0KHQvtGF0YDQsNC90ZHQvdC90YvQtSDQt9Cw0LrRg9C/0YnQuNC60L7QvCDQt9Cw0LrQsNC30Ysg0L/QvtC60LDQt9GL0LLQsNGO0YLRgdGPINC30LTQtdGB0YwuINCY0LfQvNC10L3Rj9GC0Ywg0YLQvtCy0LDRgNGLINC90LAg0Y3RgtC+0Lwg0Y3RgtCw0L/QtSDQvdC10LvRjNC30Y8uJyxcclxuXHRcdFx0XHRcdHJlYWR5RW1wdHk6ICfQndC10YIg0LfQsNC60LDQt9C+0LIsINCz0L7RgtC+0LLRi9GFINC6INC+0YLQv9GA0LDQstC60LUuJyxcclxuXHRcdFx0XHRcdHNlbGVjdEFjdGlvbjogJ9Ce0YLQutGA0YvRgtGMJyxcclxuXHRcdFx0XHRcdHZpZXdBY3Rpb246ICfQn9GA0L7RgdC80L7RgtGAJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkQWN0aW9uOiAn0JLRi9Cx0YDQsNC90L4nLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRPcmRlcjogJ9CS0YvQsdGA0LDQvdC90YvQuSDQt9Cw0LrQsNC3JyxcclxuXHRcdFx0XHRcdHJlcXVlc3ROdW1iZXI6ICfQndC+0LzQtdGAINC30LDRj9Cy0LrQuCcsXHJcblx0XHRcdFx0XHRzdHJ1Y3R1cmVzOiAn0KHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdHNvdXJjZTogJ9CY0YHRgtC+0YfQvdC40LonLFxyXG5cdFx0XHRcdFx0d2FyZWhvdXNlTGFiZWw6ICfQodGC0YDRg9C60YLRg9GA0LAt0YHQutC70LDQtCcsXHJcblx0XHRcdFx0XHR3YXJlaG91c2VQbGFjZWhvbGRlcjogJ9CS0YvQsdC10YDQuNGC0LUg0YHRgtGA0YPQutGC0YPRgNGDJyxcclxuXHRcdFx0XHRcdGl0ZW1zOiAn0KLQvtCy0LDRgNGLJyxcclxuXHRcdFx0XHRcdHBpY2tPcmRlcjogJ9CS0YvQsdC10YDQuNGC0LUg0LfQsNC60LDQtywg0LPQvtGC0L7QstGL0Lkg0Log0L7RgtC/0YDQsNCy0LrQtS4nLFxyXG5cdFx0XHRcdFx0c2VuZEJ1dHRvbjogJ9Ce0YLQv9GA0LDQstC40YLRjCDQvdCwINGB0LrQu9Cw0LQnLFxyXG5cdFx0XHRcdFx0c2VuZGluZ0J1dHRvbjogJ9Ce0YLQv9GA0LDQstC70Y/QtdGC0YHRjy4uLicsXHJcblx0XHRcdFx0XHRzZW50SGlzdG9yeTogJ9CY0YHRgtC+0YDQuNGPINC+0YLQv9GA0LDQstC70LXQvdC90YvRhSDQt9Cw0LrQsNC30L7QsicsXHJcblx0XHRcdFx0XHRzZW50RGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHRcdCfQl9C00LXRgdGMINGF0YDQsNC90LjRgtGB0Y8g0LjRgdGC0L7RgNC40Y86INC60LDQutC+0Lkg0LfQsNC60LDQtyDQuCDQvdCwINC60LDQutC+0Lkg0YHQutC70LDQtCDRgdGC0YDRg9C60YLRg9GA0Ysg0LHRi9C7INC+0YLQv9GA0LDQstC70LXQvS4nLFxyXG5cdFx0XHRcdFx0c2VudEVtcHR5OiAn0J/QvtC60LAg0L3QtdGCINC+0YLQv9GA0LDQstC70LXQvdC90YvRhSDQvdCwINGB0LrQu9Cw0LQg0LfQsNC60LDQt9C+0LIuJyxcclxuXHRcdFx0XHRcdHdhcmVob3VzZUNvbHVtbjogJ9Ch0LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdHJlYWRPbmx5SW5mbzogJ9CjINCy0LDRgSDQt9C00LXRgdGMINGC0L7Qu9GM0LrQviDQv9GA0LDQstC+INC/0YDQvtGB0LzQvtGC0YDQsC4nLFxyXG5cdFx0XHRcdFx0YWNjZXNzRGVuaWVkOiAn0K3RgtC+0YIg0YDQsNC30LTQtdC7INC30LDQutGA0YvRgiDQtNC70Y8g0LLQsNGI0LXQuSDRgNC+0LvQuC4nLFxyXG5cdFx0XHRcdFx0ZGV0YWlsSGludDpcclxuXHRcdFx0XHRcdFx0J9Cd0LDQttC80LjRgtC1INC90LAg0YHRgtGA0L7QutGDINGC0LDQsdC70LjRhtGLIOKAlCDQvtGC0LrRgNC+0LXRgtGB0Y8g0L7RgtC00LXQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQv9GA0LDQstC60Lgg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0LfQsNC60LDQt9CwLicsXHJcblx0XHRcdFx0XHRzZW50SW5mbzogJ9Ct0YLQvtGCINC30LDQutCw0Lcg0YPQttC1INC+0YLQv9GA0LDQstC70LXQvSDQvdCwINGB0LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNGLOicsXHJcblx0XHRcdFx0XHRmaWx0ZXJQbGFjZWhvbGRlcjogJ9Cf0L7QuNGB0Log0L/QviDQt9Cw0Y/QstC60LUsINGB0YLRgNGD0LrRgtGD0YDQtSwg0LjRgdGC0L7Rh9C90LjQutGDINC40LvQuCDRgdC60LvQsNC00YMnLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ0J1eXVydG1hbmkgam/igJhuYXRpc2gnLFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6XHJcblx0XHRcdFx0XHRcdCdCdSB5ZXJkYSBhcml6YSB0YW5sYW5hZGksIHRvdmFybGFyIGZhcWF0IGtv4oCYcmlzaCB1Y2h1biBjaGlxYWRpIHZhIHRhcmtpYml5IHR1emlsbWEgb21ib3JpZ2Egam/igJhuYXRpbGFkaS4nLFxyXG5cdFx0XHRcdFx0dG9PcmRlcjogJ0J1eXVydG1hIHFpbGlzaCcsXHJcblx0XHRcdFx0XHR0b1JlY2VpdmU6ICdCdXl1cnRtYW5pIHFhYnVsIHFpbGlzaCcsXHJcblx0XHRcdFx0XHR0b1dhcmVob3VzZXM6ICdPbWJvcmxhcicsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiAnTWHigJlsdW1vdGxhciB5dWtsYW5tb3FkYS4uLicsXHJcblx0XHRcdFx0XHRyZWFkeVRpdGxlOiAnSm/igJhuYXRpc2hnYSB0YXl5b3IgYnV5dXJ0bWFsYXInLFxyXG5cdFx0XHRcdFx0cmVhZHlEZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J1NvdGliIG9sdXZjaGkgc2FxbGFnYW4gYnV5dXJ0bWFsYXIgc2h1IHllcmRhIGNoaXFhZGkuIEpv4oCYbmF0aWxnYW5kYW4ga2V5aW4gdHV6aWxtYSB1bGFybmkg4oCcQnV5dXJ0bWFuaSBxYWJ1bCBxaWxpc2jigJ0gc2FoaWZhc2lkYSBxYWJ1bCBxaWxhZGkuJyxcclxuXHRcdFx0XHRcdHJlYWR5RW1wdHk6ICdKb+KAmG5hdGlzaGdhIHRheXlvciBidXl1cnRtYSB0b3BpbG1hZGkuJyxcclxuXHRcdFx0XHRcdHNlbGVjdEFjdGlvbjogJ09jaGlzaCcsXHJcblx0XHRcdFx0XHR2aWV3QWN0aW9uOiAnS2/igJhyaXNoJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkQWN0aW9uOiAnVGFubGFuZ2FuJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkT3JkZXI6ICdUYW5sYW5nYW4gYnV5dXJ0bWEnLFxyXG5cdFx0XHRcdFx0cmVxdWVzdE51bWJlcjogJ0FyaXphIHJhcWFtaScsXHJcblx0XHRcdFx0XHRzdHJ1Y3R1cmVzOiAnVGFya2liaXkgdHV6aWxtYWxhcicsXHJcblx0XHRcdFx0XHRzb3VyY2U6ICdNYW5iYScsXHJcblx0XHRcdFx0XHR3YXJlaG91c2VMYWJlbDogJ1RhcmtpYml5IHR1emlsbWEgKG9tYm9yKScsXHJcblx0XHRcdFx0XHR3YXJlaG91c2VQbGFjZWhvbGRlcjogJ1RhcmtpYml5IHR1emlsbWFuaSB0YW5sYW5nJyxcclxuXHRcdFx0XHRcdGl0ZW1zOiAnVG92YXJsYXInLFxyXG5cdFx0XHRcdFx0cGlja09yZGVyOiAnSm/igJhuYXRpc2hnYSB0YXl5b3IgYnV5dXJ0bWFuaSB0YW5sYW5nLicsXHJcblx0XHRcdFx0XHRzZW5kQnV0dG9uOiAnT21ib3JnYSBqb+KAmG5hdGlzaCcsXHJcblx0XHRcdFx0XHRzZW5kaW5nQnV0dG9uOiAnSm/igJhuYXRpbG1vcWRhLi4uJyxcclxuXHRcdFx0XHRcdHNlbnRIaXN0b3J5OiAnSm/igJhuYXRpbGdhbiBidXl1cnRtYWxhciB0YXJpeGknLFxyXG5cdFx0XHRcdFx0c2VudERlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XHQnUWF5c2kgYnV5dXJ0bWEgcWF5c2kgdGFya2liaXkgdHV6aWxtYSBvbWJvcmlnYSB5dWJvcmlsZ2FuaSBzaHUgeWVyZGEgc2FxbGFuYWRpLicsXHJcblx0XHRcdFx0XHRzZW50RW1wdHk6ICdIYWxpIG9tYm9yZ2Egam/igJhuYXRpbGdhbiBidXl1cnRtYSB5b+KAmHEuJyxcclxuXHRcdFx0XHRcdHdhcmVob3VzZUNvbHVtbjogJ1R1emlsbWEgb21ib3JpJyxcclxuXHRcdFx0XHRcdHJlYWRPbmx5SW5mbzogJ1NpeiBidSBzYWhpZmFkYSBmYXFhdCBrb+KAmHJpc2ggaHVxdXFpZ2EgZWdhc2l6LicsXHJcblx0XHRcdFx0XHRhY2Nlc3NEZW5pZWQ6ICdCdSBib+KAmGxpbSBzaXpuaW5nIHJvbGluZ2l6IHVjaHVuIHlvcGlxLicsXHJcblx0XHRcdFx0XHRkZXRhaWxIaW50OlxyXG5cdFx0XHRcdFx0XHQnSmFkdmFsIHFhdG9yaW5pIGJvc3NhbmdpeiwgdGFubGFuZ2FuIGJ1eXVydG1hIHVjaHVuIGFsb2hpZGEgam/igJhuYXRpc2ggb3luYXNpIG9jaGlsYWRpLicsXHJcblx0XHRcdFx0XHRzZW50SW5mbzpcclxuXHRcdFx0XHRcdFx0J0J1IGJ1eXVydG1hIGFsbGFxYWNob24gcXV5aWRhZ2kgdGFya2liaXkgdHV6aWxtYSBvbWJvcmlnYSBqb+KAmG5hdGlsZ2FuOicsXHJcblx0XHRcdFx0XHRmaWx0ZXJQbGFjZWhvbGRlcjogJ0FyaXphLCB0dXppbG1hLCBtYW5iYSB5b2tpIG9tYm9yIGJv4oCYeWljaGEgZmlsdGVyJyxcclxuXHRcdFx0XHR9XHJcblx0Y29uc3QgW3JlY29yZHMsIHNldFJlY29yZHNdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW3NlbnRSZWNvcmRzLCBzZXRTZW50UmVjb3Jkc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbd2FyZWhvdXNlcywgc2V0V2FyZWhvdXNlc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbc2VsZWN0ZWRSZXF1ZXN0SWQsIHNldFNlbGVjdGVkUmVxdWVzdElkXSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtzZWxlY3RlZFdhcmVob3VzZUlkLCBzZXRTZWxlY3RlZFdhcmVob3VzZUlkXSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtzaG93RGlzcGF0Y2hGb3JtLCBzZXRTaG93RGlzcGF0Y2hGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblx0Y29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgncmVhZHknKVxyXG5cdGNvbnN0IFtyZWFkeVBhZ2UsIHNldFJlYWR5UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG5cdGNvbnN0IFtzZW50UGFnZSwgc2V0U2VudFBhZ2VdID0gdXNlU3RhdGUoMSlcclxuXHRjb25zdCBbcmVhZHlGaWx0ZXJUZXh0LCBzZXRSZWFkeUZpbHRlclRleHRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW3NlbnRGaWx0ZXJUZXh0LCBzZXRTZW50RmlsdGVyVGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0Y29uc3QgY2FuVmlldyA9IFsnYWRtaW4nLCAnbW9uaXRvcmluZycsICdzb3RpYl9vbHV2Y2hpJ10uaW5jbHVkZXMoXHJcblx0XHRjdXJyZW50QWRtaW4/LnJvbGUsXHJcblx0KVxyXG5cdGNvbnN0IGNhbkVkaXQgPSBbJ2FkbWluJywgJ3NvdGliX29sdXZjaGknXS5pbmNsdWRlcyhjdXJyZW50QWRtaW4/LnJvbGUpXHJcblxyXG5cdGNvbnN0IGFsbFJlY29yZHMgPSB1c2VNZW1vKFxyXG5cdFx0KCkgPT4gWy4uLnJlY29yZHMsIC4uLnNlbnRSZWNvcmRzXSxcclxuXHRcdFtyZWNvcmRzLCBzZW50UmVjb3Jkc10sXHJcblx0KVxyXG5cclxuXHRjb25zdCBzZWxlY3RlZFJlY29yZCA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBhbGxSZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5pZCA9PT0gc2VsZWN0ZWRSZXF1ZXN0SWQpIHx8IG51bGwsXHJcblx0XHRbYWxsUmVjb3Jkcywgc2VsZWN0ZWRSZXF1ZXN0SWRdLFxyXG5cdClcclxuXHJcblx0Y29uc3QgZmlsdGVyUm93cyA9IChyb3dzLCBxdWVyeSkgPT4ge1xyXG5cdFx0Y29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5IHx8ICcnKVxyXG5cdFx0XHQudHJpbSgpXHJcblx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdFx0aWYgKCFub3JtYWxpemVkUXVlcnkpIHtcclxuXHRcdFx0cmV0dXJuIHJvd3NcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcm93cy5maWx0ZXIocmVjb3JkID0+IHtcclxuXHRcdFx0Y29uc3QgaXRlbXNUZXh0ID0gKHJlY29yZD8uaXRlbXMgfHwgW10pXHJcblx0XHRcdFx0Lm1hcChpdGVtID0+IGAke2l0ZW0/LnByb2R1Y3ROYW1lIHx8ICcnfSAke2l0ZW0/LmZlYXR1cmVzIHx8ICcnfWApXHJcblx0XHRcdFx0LmpvaW4oJyAnKVxyXG5cdFx0XHRjb25zdCBzZWFyY2hhYmxlVGV4dCA9IFtcclxuXHRcdFx0XHRyZWNvcmQ/LnJlcXVlc3ROdW1iZXIsXHJcblx0XHRcdFx0cmVjb3JkPy5zdGF0dXMsXHJcblx0XHRcdFx0cmVjb3JkPy5zZWxlY3RlZFVzZXJOYW1lcyxcclxuXHRcdFx0XHRyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUsXHJcblx0XHRcdFx0cmVjb3JkPy53YXJlaG91c2VEaXNwYXRjaERhdGE/LndhcmVob3VzZU5hbWUsXHJcblx0XHRcdFx0aXRlbXNUZXh0LFxyXG5cdFx0XHRdXHJcblx0XHRcdFx0LmpvaW4oJyAnKVxyXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdFx0XHRyZXR1cm4gc2VhcmNoYWJsZVRleHQuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGZpbHRlcmVkUmVhZHlSZWNvcmRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IGZpbHRlclJvd3MocmVjb3JkcywgcmVhZHlGaWx0ZXJUZXh0KSxcclxuXHRcdFtyZWNvcmRzLCByZWFkeUZpbHRlclRleHRdLFxyXG5cdClcclxuXHRjb25zdCBmaWx0ZXJlZFNlbnRSZWNvcmRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IGZpbHRlclJvd3Moc2VudFJlY29yZHMsIHNlbnRGaWx0ZXJUZXh0KSxcclxuXHRcdFtzZW50UmVjb3Jkcywgc2VudEZpbHRlclRleHRdLFxyXG5cdClcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICghcmVjb3Jkcy5sZW5ndGggJiYgc2VudFJlY29yZHMubGVuZ3RoICYmIGFjdGl2ZVRhYiAhPT0gJ2hpc3RvcnknKSB7XHJcblx0XHRcdHNldEFjdGl2ZVRhYignaGlzdG9yeScpXHJcblx0XHR9IGVsc2UgaWYgKCFzZW50UmVjb3Jkcy5sZW5ndGggJiYgcmVjb3Jkcy5sZW5ndGggJiYgYWN0aXZlVGFiICE9PSAncmVhZHknKSB7XHJcblx0XHRcdHNldEFjdGl2ZVRhYigncmVhZHknKVxyXG5cdFx0fVxyXG5cdH0sIFthY3RpdmVUYWIsIHJlY29yZHMubGVuZ3RoLCBzZW50UmVjb3Jkcy5sZW5ndGhdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgdG90YWxSZWFkeVBhZ2VzID0gTWF0aC5tYXgoXHJcblx0XHRcdDEsXHJcblx0XHRcdE1hdGguY2VpbChmaWx0ZXJlZFJlYWR5UmVjb3Jkcy5sZW5ndGggLyBQQUdFX1NJWkUpLFxyXG5cdFx0KVxyXG5cdFx0Y29uc3QgdG90YWxTZW50UGFnZXMgPSBNYXRoLm1heChcclxuXHRcdFx0MSxcclxuXHRcdFx0TWF0aC5jZWlsKGZpbHRlcmVkU2VudFJlY29yZHMubGVuZ3RoIC8gUEFHRV9TSVpFKSxcclxuXHRcdClcclxuXHJcblx0XHRzZXRSZWFkeVBhZ2UoY3VycmVudCA9PiBNYXRoLm1pbihjdXJyZW50LCB0b3RhbFJlYWR5UGFnZXMpKVxyXG5cdFx0c2V0U2VudFBhZ2UoY3VycmVudCA9PiBNYXRoLm1pbihjdXJyZW50LCB0b3RhbFNlbnRQYWdlcykpXHJcblx0fSwgW2ZpbHRlcmVkUmVhZHlSZWNvcmRzLmxlbmd0aCwgZmlsdGVyZWRTZW50UmVjb3Jkcy5sZW5ndGhdKVxyXG5cclxuXHRjb25zdCBsb2FkV29ya3NwYWNlID0gYXN5bmMgcHJlZmVycmVkUmVxdWVzdElkID0+IHtcclxuXHRcdHNldExvYWRpbmcodHJ1ZSlcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5yZXNvdXJjZUFjdGlvbih7XHJcblx0XHRcdFx0cmVzb3VyY2VJZDogJ1B1cmNoYXNlRGlzcGF0Y2hXb3Jrc3BhY2UnLFxyXG5cdFx0XHRcdGFjdGlvbk5hbWU6ICdkaXNwYXRjaFdvcmtzcGFjZScsXHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbnN0IG5leHRSZWNvcmRzID0gcmVzcG9uc2U/LmRhdGE/LnJlY29yZHMgfHwgW11cclxuXHRcdFx0Y29uc3QgbmV4dFNlbnRSZWNvcmRzID0gcmVzcG9uc2U/LmRhdGE/LnNlbnRSZWNvcmRzIHx8IFtdXHJcblx0XHRcdGNvbnN0IG5leHRXYXJlaG91c2VzID0gcmVzcG9uc2U/LmRhdGE/LndhcmVob3VzZXMgfHwgW11cclxuXHRcdFx0Y29uc3QgY29tYmluZWQgPSBbLi4ubmV4dFJlY29yZHMsIC4uLm5leHRTZW50UmVjb3Jkc11cclxuXHRcdFx0Y29uc3QgbmV4dFNlbGVjdGVkSWQgPVxyXG5cdFx0XHRcdHByZWZlcnJlZFJlcXVlc3RJZCAmJlxyXG5cdFx0XHRcdGNvbWJpbmVkLnNvbWUocmVjb3JkID0+IHJlY29yZC5pZCA9PT0gcHJlZmVycmVkUmVxdWVzdElkKVxyXG5cdFx0XHRcdFx0PyBwcmVmZXJyZWRSZXF1ZXN0SWRcclxuXHRcdFx0XHRcdDogc2VsZWN0ZWRSZXF1ZXN0SWQgJiZcclxuXHRcdFx0XHRcdFx0ICBjb21iaW5lZC5zb21lKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHNlbGVjdGVkUmVxdWVzdElkKVxyXG5cdFx0XHRcdFx0XHQ/IHNlbGVjdGVkUmVxdWVzdElkXHJcblx0XHRcdFx0XHRcdDogJydcclxuXHRcdFx0Y29uc3QgbmV4dFNlbGVjdGVkUmVjb3JkID1cclxuXHRcdFx0XHRjb21iaW5lZC5maW5kKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IG5leHRTZWxlY3RlZElkKSB8fCBudWxsXHJcblxyXG5cdFx0XHRzZXRSZWNvcmRzKG5leHRSZWNvcmRzKVxyXG5cdFx0XHRzZXRTZW50UmVjb3JkcyhuZXh0U2VudFJlY29yZHMpXHJcblx0XHRcdHNldFdhcmVob3VzZXMobmV4dFdhcmVob3VzZXMpXHJcblx0XHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKG5leHRTZWxlY3RlZElkKVxyXG5cdFx0XHRzZXRTZWxlY3RlZFdhcmVob3VzZUlkKFxyXG5cdFx0XHRcdFN0cmluZyhcclxuXHRcdFx0XHRcdG5leHRTZWxlY3RlZFJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy53YXJlaG91c2VJZCB8fFxyXG5cdFx0XHRcdFx0XHRuZXh0V2FyZWhvdXNlc1swXT8uaWQgfHxcclxuXHRcdFx0XHRcdFx0JycsXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0KVxyXG5cclxuXHRcdFx0aWYgKHByZWZlcnJlZFJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdHNldFNob3dEaXNwYXRjaEZvcm0odHJ1ZSlcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0c2V0UmVjb3JkcyhbXSlcclxuXHRcdFx0c2V0U2VudFJlY29yZHMoW10pXHJcblx0XHRcdHNldFdhcmVob3VzZXMoW10pXHJcblx0XHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKCcnKVxyXG5cdFx0XHRzZXRTZWxlY3RlZFdhcmVob3VzZUlkKCcnKVxyXG5cdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IGV4dHJhY3RNZXNzYWdlKFxyXG5cdFx0XHRcdFx0ZXJyb3I/LnJlc3BvbnNlPy5kYXRhLFxyXG5cdFx0XHRcdFx0XCJCdXl1cnRtYW5pIGpvJ25hdGlzaCBzYWhpZmFzaW5pIHl1a2xhYiBib+KAmGxtYWRpXCIsXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBpbml0aWFsUmVxdWVzdElkID1cclxuXHRcdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcclxuXHRcdFx0XHQ/IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdyZWNvcmRJZCcpIHx8ICcnXHJcblx0XHRcdFx0OiAnJ1xyXG5cclxuXHRcdGxvYWRXb3Jrc3BhY2UoaW5pdGlhbFJlcXVlc3RJZClcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb3BlblJlY29yZCA9IHJlY29yZCA9PiB7XHJcblx0XHRpZiAoIXJlY29yZD8uaWQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXHJcblx0XHRcdFx0YC9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VEaXNwYXRjaFdvcmtzcGFjZT9yZWNvcmRJZD0ke3JlY29yZC5pZH1gLFxyXG5cdFx0XHQpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZURpc3BhdGNoRm9ybSA9ICgpID0+IHtcclxuXHRcdHNldFNob3dEaXNwYXRjaEZvcm0oZmFsc2UpXHJcblx0XHRzZXRTZWxlY3RlZFJlcXVlc3RJZCgnJylcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvYWRtaW4vcmVzb3VyY2VzL1B1cmNoYXNlRGlzcGF0Y2hXb3Jrc3BhY2UnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jICgpID0+IHtcclxuXHRcdGlmICghY2FuRWRpdCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbGVjdGVkUmVxdWVzdElkKSB7XHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogJ0F2dmFsIGpv4oCYbmF0aWxhZGlnYW4gYnV5dXJ0bWFuaSB0YW5sYW5nJyxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXNlbGVjdGVkV2FyZWhvdXNlSWQpIHtcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOlxyXG5cdFx0XHRcdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0XHRcdFx0PyAn0JLRi9Cx0LXRgNC40YLQtSwg0L3QsCDQutCw0LrQvtC5INGB0LrQu9Cw0LQg0YHRgtGA0YPQutGC0YPRgNGLINC90YPQttC90L4g0L7RgtC/0YDQsNCy0LjRgtGMINC30LDQutCw0LcnXHJcblx0XHRcdFx0XHRcdDogJ1FheXNpIHRhcmtpYml5IHR1emlsbWEgb21ib3JpZ2Egam/igJhuYXRpbGlzaGluaSB0YW5sYW5nJyxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRzZXRTYXZpbmcodHJ1ZSlcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5yZXNvdXJjZUFjdGlvbih7XHJcblx0XHRcdFx0cmVzb3VyY2VJZDogJ1B1cmNoYXNlRGlzcGF0Y2hXb3Jrc3BhY2UnLFxyXG5cdFx0XHRcdGFjdGlvbk5hbWU6ICdkaXNwYXRjaFdvcmtzcGFjZScsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdHJlcXVlc3RJZDogc2VsZWN0ZWRSZXF1ZXN0SWQsXHJcblx0XHRcdFx0XHR3YXJlaG91c2VJZDogc2VsZWN0ZWRXYXJlaG91c2VJZCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0aWYgKHJlc3BvbnNlPy5kYXRhPy5ub3RpY2UpIHtcclxuXHRcdFx0XHRhZGROb3RpY2UocmVzcG9uc2UuZGF0YS5ub3RpY2UpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGF3YWl0IGxvYWRXb3Jrc3BhY2UoKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOiBleHRyYWN0TWVzc2FnZShcclxuXHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YSxcclxuXHRcdFx0XHRcdFwiQnV5dXJ0bWFuaSBvbWJvcmdhIGpvJ25hdGliIGJv4oCYbG1hZGlcIixcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdH0pXHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRzZXRTYXZpbmcoZmFsc2UpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZW5kZXJUYWJsZSA9ICh7XHJcblx0XHRyb3dzLFxyXG5cdFx0ZW1wdHlUZXh0LFxyXG5cdFx0c2hvd1dhcmVob3VzZSA9IGZhbHNlLFxyXG5cdFx0cGFnZSxcclxuXHRcdHNldFBhZ2UsXHJcblx0fSkgPT4ge1xyXG5cdFx0aWYgKCFyb3dzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gPFRleHQgY29sb3I9J2dyZXk2MCc+e2VtcHR5VGV4dH08L1RleHQ+XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdG90YWxQYWdlcyA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChyb3dzLmxlbmd0aCAvIFBBR0VfU0laRSkpXHJcblx0XHRjb25zdCBzYWZlUGFnZSA9IE1hdGgubWluKHBhZ2UsIHRvdGFsUGFnZXMpXHJcblx0XHRjb25zdCBzdGFydEluZGV4ID0gKHNhZmVQYWdlIC0gMSkgKiBQQUdFX1NJWkVcclxuXHRcdGNvbnN0IHBhZ2luYXRlZFJvd3MgPSByb3dzLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBQQUdFX1NJWkUpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJveD5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt0YWJsZVdyYXBTdHlsZX0+XHJcblx0XHRcdFx0XHQ8dGFibGUgc3R5bGU9e3RhYmxlU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PiM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PntwYWdlQ29weS5yZXF1ZXN0TnVtYmVyfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+e3BhZ2VDb3B5LnN0cnVjdHVyZXN9PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT57cGFnZUNvcHkuc291cmNlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHR7c2hvd1dhcmVob3VzZSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PntwYWdlQ29weS53YXJlaG91c2VDb2x1bW59PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlNhbmE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHR7cGFnaW5hdGVkUm93cy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJvd0RhdGUgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWNvcmQ/LndhcmVob3VzZURpc3BhdGNoRGF0YT8uZGlzcGF0Y2hlZEF0IHx8XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZD8uYnV5ZXJPcmRlckRhdGE/LnN1Ym1pdHRlZEF0IHx8XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZD8udXBkYXRlZEF0IHx8XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZD8uY3JlYXRlZEF0XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtyZWNvcmQuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb3BlblJlY29yZChyZWNvcmQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtyb3dJbnRlcmFjdGl2ZVN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e3N0YXJ0SW5kZXggKyBpbmRleCArIDF9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkLnJlcXVlc3ROdW1iZXIgfHwgcmVjb3JkLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3hzJyBjb2xvcj0nZ3JleTYwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlY29yZC5zdGF0dXMgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWNvcmQuc2VsZWN0ZWRVc2VyTmFtZXMgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUgfHwgJ0tpcml0aWxtYWdhbid9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c2hvd1dhcmVob3VzZSA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkPy53YXJlaG91c2VEaXNwYXRjaERhdGE/LndhcmVob3VzZU5hbWUgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9Pntmb3JtYXREYXRlKHJvd0RhdGUpfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHR7dG90YWxQYWdlcyA+IDEgPyAoXHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0neGwnIHRleHRBbGlnbj0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PFBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0XHRwYWdlPXtzYWZlUGFnZX1cclxuXHRcdFx0XHRcdFx0XHRwZXJQYWdlPXtQQUdFX1NJWkV9XHJcblx0XHRcdFx0XHRcdFx0dG90YWw9e3Jvd3MubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtuZXh0UGFnZSA9PiBzZXRQYWdlKG5leHRQYWdlKX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAoIWNhblZpZXcpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxCb3g+XHJcblx0XHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0XHQ8SDI+e3BhZ2VDb3B5LnRpdGxlfTwvSDI+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZUJveCB2YXJpYW50PSdkYW5nZXInIG10PSd4bCc+XHJcblx0XHRcdFx0XHRcdDxUZXh0PntwYWdlQ29weS5hY2Nlc3NEZW5pZWR9PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9NZXNzYWdlQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94PlxyXG5cdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHQ8VGV4dCBjb2xvcj0ncHJpbWFyeTEwMCcgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0WmF4aXJhLnV6XHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDxIMj57cGFnZUNvcHkudGl0bGV9PC9IMj5cclxuXHRcdFx0XHQ8VGV4dCBtdD0nc20nIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0e3BhZ2VDb3B5LnN1YnRpdGxlfVxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgLi4uYWN0aW9uQmFyU3R5bGUsIG1hcmdpblRvcDogJzE2cHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdGhyZWY9Jy9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VPcmRlcldvcmtzcGFjZSdcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXtuYXZCdXR0b25TdHlsZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnRvT3JkZXJ9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdHtjdXJyZW50QWRtaW4/LnJvbGUgPT09ICdhZG1pbicgPyAoXHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRhcz0nYSdcclxuXHRcdFx0XHRcdFx0XHRocmVmPScvYWRtaW4vcmVzb3VyY2VzL1B1cmNoYXNlUmVjZWl2ZVdvcmtzcGFjZSdcclxuXHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17bmF2QnV0dG9uU3R5bGV9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkudG9SZWNlaXZlfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRhcz0nYSdcclxuXHRcdFx0XHRcdFx0aHJlZj0nL2FkbWluL3Jlc291cmNlcy9XYXJlaG91c2VPdmVydmlldydcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXtuYXZCdXR0b25TdHlsZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnRvV2FyZWhvdXNlc31cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHR7bG9hZGluZyA/IChcclxuXHRcdFx0XHRcdDxUZXh0PntwYWdlQ29weS5sb2FkaW5nfTwvVGV4dD5cclxuXHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0XHR7c2hvd0Rpc3BhdGNoRm9ybSA/IG51bGwgOiAoXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3RhYnNXcmFwU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigncmVhZHknKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17dGFiQnV0dG9uU3R5bGUoYWN0aXZlVGFiID09PSAncmVhZHknKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlQ29weS5yZWFkeVRpdGxlfSAoe2ZpbHRlcmVkUmVhZHlSZWNvcmRzLmxlbmd0aH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignaGlzdG9yeScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt0YWJCdXR0b25TdHlsZShhY3RpdmVUYWIgPT09ICdoaXN0b3J5Jyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkuc2VudEhpc3Rvcnl9ICh7ZmlsdGVyZWRTZW50UmVjb3Jkcy5sZW5ndGh9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHthY3RpdmVUYWIgPT09ICdyZWFkeScgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlQ29weS5yZWFkeVRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBjb2xvcj0nZ3JleTYwJz57cGFnZUNvcHkucmVhZHlEZXNjcmlwdGlvbn08L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3JlYWR5RmlsdGVyVGV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFJlYWR5RmlsdGVyVGV4dChldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFJlYWR5UGFnZSgxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwYWdlQ29weS5maWx0ZXJQbGFjZWhvbGRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IC4uLmlucHV0U3R5bGUsIG1hcmdpblRvcDogJzE2cHgnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IG10PSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyVGFibGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3dzOiBmaWx0ZXJlZFJlYWR5UmVjb3JkcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZW1wdHlUZXh0OiBwYWdlQ29weS5yZWFkeUVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlOiByZWFkeVBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFBhZ2U6IHNldFJlYWR5UGFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlQ29weS5zZW50SGlzdG9yeX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9J2dyZXk2MCc+e3BhZ2VDb3B5LnNlbnREZXNjcmlwdGlvbn08L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlbnRGaWx0ZXJUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VudEZpbHRlclRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRTZW50UGFnZSgxKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwYWdlQ29weS5maWx0ZXJQbGFjZWhvbGRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IC4uLmlucHV0U3R5bGUsIG1hcmdpblRvcDogJzE2cHgnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IG10PSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVuZGVyVGFibGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3dzOiBmaWx0ZXJlZFNlbnRSZWNvcmRzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93V2FyZWhvdXNlOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbXB0eVRleHQ6IHBhZ2VDb3B5LnNlbnRFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZTogc2VudFBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFBhZ2U6IHNldFNlbnRQYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtzaG93RGlzcGF0Y2hGb3JtID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdhcD0nZGVmYXVsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmxleFdyYXA9J3dyYXAnXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnNlbGVjdGVkT3JkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPSdzbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVDbG9zZURpc3BhdGNoRm9ybX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFJv4oCYeXhhdGdhIHFheXRpc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRSZWNvcmQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxNHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdyaWRUZW1wbGF0ZUNvbHVtbnM6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWw+e3BhZ2VDb3B5LnJlcXVlc3ROdW1iZXJ9PC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWRSZWNvcmQucmVxdWVzdE51bWJlciB8fCAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17aW5wdXRTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExhYmVsPntwYWdlQ29weS5zdHJ1Y3R1cmVzfTwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlbGVjdGVkUmVjb3JkLnNlbGVjdGVkVXNlck5hbWVzIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWw+e3BhZ2VDb3B5LnNvdXJjZX08L0xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkUmVjb3JkPy5idXllck9yZGVyRGF0YT8uc3VwcGxpZXJOYW1lIHx8ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWw+e3BhZ2VDb3B5LndhcmVob3VzZUxhYmVsfTwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWRXYXJlaG91c2VJZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFNlbGVjdGVkV2FyZWhvdXNlSWQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAuLi5pbnB1dFN0eWxlLCBiYWNrZ3JvdW5kOiAnI2ZmZmZmZicgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQhY2FuRWRpdCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Qm9vbGVhbihcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRSZWNvcmQ/LndhcmVob3VzZURpc3BhdGNoRGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8uZGlzcGF0Y2hlZEF0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9Jyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkud2FyZWhvdXNlUGxhY2Vob2xkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dhcmVob3VzZXMubWFwKHdhcmVob3VzZSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17d2FyZWhvdXNlLmlkfSB2YWx1ZT17d2FyZWhvdXNlLmlkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dhcmVob3VzZS5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRvdmFybGFyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTJweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZC5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgJHtzZWxlY3RlZFJlY29yZC5pZH0tJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmJmZicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5wcm9kdWN0TmFtZSB8fCAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmZlYXR1cmVzIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmlucHV0U3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiAnODBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzaXplOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnVuaXQgfHwgJyd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1N0cmluZyhpdGVtLnF1YW50aXR5IHx8IDApfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy5kaXNwYXRjaGVkQXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TWVzc2FnZUJveCB2YXJpYW50PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QnUgYnV5dXJ0bWF7JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZC53YXJlaG91c2VEaXNwYXRjaERhdGEud2FyZWhvdXNlTmFtZX17JyAnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Zvcm1hdERhdGUoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZFJlY29yZC53YXJlaG91c2VEaXNwYXRjaERhdGEuZGlzcGF0Y2hlZEF0LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYSBqb+KAmG5hdGlsZ2FuLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IGNhbkVkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2ZsZXgnIGdhcD0nZGVmYXVsdCcgZmxleFdyYXA9J3dyYXAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVNlbmR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3NhdmluZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzYXZpbmcgPyAnSm/igJhuYXRpbG1vcWRhLi4uJyA6ICdPbWJvcmdhIGpv4oCYbmF0aXNoJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lc3NhZ2VCb3ggdmFyaWFudD0naW5mbyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNpeiBidSBzYWhpZmFkYSBmYXFhdCBrb+KAmHJpc2ggaHVxdXFpZ2EgZWdhc2l6LlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TWVzc2FnZUJveCB2YXJpYW50PSdpbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dD57cGFnZUNvcHkucGlja09yZGVyfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5LmRldGFpbEhpbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlXHJcbiIsImltcG9ydCB7XHJcblx0Qm94LFxyXG5cdEJ1dHRvbixcclxuXHRIMixcclxuXHRMYWJlbCxcclxuXHRNZXNzYWdlQm94LFxyXG5cdFBhZ2luYXRpb24sXHJcblx0VGV4dCxcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyBBcGlDbGllbnQsIHVzZUN1cnJlbnRBZG1pbiwgdXNlTm90aWNlLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5jb25zdCBQQUdFX1NJWkUgPSAyMFxyXG5cclxuY29uc3QgY2FyZFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxOHB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTRweCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG59XHJcblxyXG5jb25zdCBpbnB1dFN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0bWF4V2lkdGg6ICcxMDAlJyxcclxuXHRib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuXHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcblx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcblx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZVdyYXBTdHlsZSA9IHtcclxuXHRvdmVyZmxvd1g6ICdhdXRvJyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTRweCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZVN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0Ym9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXHJcblx0bWluV2lkdGg6ICc4NjBweCcsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlSGVhZENlbGxTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMTJweCAxNHB4JyxcclxuXHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRmb250U2l6ZTogJzEycHgnLFxyXG5cdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRjb2xvcjogJyM0NzU1NjknLFxyXG5cdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlQ2VsbFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxMnB4IDE0cHgnLFxyXG5cdGZvbnRTaXplOiAnMTRweCcsXHJcblx0Y29sb3I6ICcjMGYxNzJhJyxcclxuXHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0dmVydGljYWxBbGlnbjogJ3RvcCcsXHJcbn1cclxuXHJcbmNvbnN0IGFjdGlvbkJhclN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdGdhcDogJzE2cHggMThweCcsXHJcblx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbn1cclxuXHJcbmNvbnN0IG5hdkJ1dHRvblN0eWxlID0ge1xyXG5cdG1pbldpZHRoOiAnMTcwcHgnLFxyXG5cdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxufVxyXG5cclxuY29uc3Qgcm93SW50ZXJhY3RpdmVTdHlsZSA9IHtcclxuXHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHR0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjE1cyBlYXNlJyxcclxufVxyXG5cclxuY29uc3QgdGFic1dyYXBTdHlsZSA9IHtcclxuXHRkaXNwbGF5OiAnZmxleCcsXHJcblx0Z2FwOiAnOHB4JyxcclxuXHRmbGV4V3JhcDogJ3dyYXAnLFxyXG5cdG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG5cdHBhZGRpbmdCb3R0b206ICcxMnB4JyxcclxuXHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcbn1cclxuXHJcbmNvbnN0IHRhYkJ1dHRvblN0eWxlID0gaXNBY3RpdmUgPT4gKHtcclxuXHRwYWRkaW5nOiAnOHB4IDE0cHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdGJvcmRlcjogYDFweCBzb2xpZCAke2lzQWN0aXZlID8gJyMzYjgyZjYnIDogJyNkYmUzZjAnfWAsXHJcblx0YmFja2dyb3VuZDogaXNBY3RpdmUgPyAnI2VmZjZmZicgOiAnI2ZmZmZmZicsXHJcblx0Y29sb3I6IGlzQWN0aXZlID8gJyMxZDRlZDgnIDogJyM0NzU1NjknLFxyXG5cdGZvbnRTaXplOiAnMTNweCcsXHJcblx0Zm9udFdlaWdodDogNzAwLFxyXG5cdGN1cnNvcjogJ3BvaW50ZXInLFxyXG59KVxyXG5cclxuY29uc3QgZm9ybWF0RGF0ZSA9IHZhbHVlID0+IHtcclxuXHRpZiAoIXZhbHVlKSB7XHJcblx0XHRyZXR1cm4gJ+KAlCdcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSlcclxuXHJcblx0aWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuXHRcdHJldHVybiB2YWx1ZVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcGFkID0gbnVtYmVyID0+IFN0cmluZyhudW1iZXIpLnBhZFN0YXJ0KDIsICcwJylcclxuXHRyZXR1cm4gYCR7cGFkKGRhdGUuZ2V0RGF0ZSgpKX0uJHtwYWQoZGF0ZS5nZXRNb250aCgpICsgMSl9LiR7ZGF0ZS5nZXRGdWxsWWVhcigpfSAke3BhZChkYXRlLmdldEhvdXJzKCkpfToke3BhZChkYXRlLmdldE1pbnV0ZXMoKSl9YFxyXG59XHJcblxyXG5jb25zdCBleHRyYWN0TWVzc2FnZSA9IChkYXRhLCBmYWxsYmFja01lc3NhZ2UpID0+IHtcclxuXHRjb25zdCBmaWVsZE1lc3NhZ2VzID0gT2JqZWN0LnZhbHVlcyhkYXRhPy5yZWNvcmQ/LmVycm9ycyB8fCB7fSlcclxuXHRcdC5tYXAoZXJyb3IgPT4gU3RyaW5nKGVycm9yPy5tZXNzYWdlIHx8ICcnKS50cmltKCkpXHJcblx0XHQuZmlsdGVyKEJvb2xlYW4pXHJcblxyXG5cdGlmIChmaWVsZE1lc3NhZ2VzLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuIGZpZWxkTWVzc2FnZXMuam9pbignLiAnKVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgbm90aWNlTWVzc2FnZSA9IFN0cmluZyhkYXRhPy5ub3RpY2U/Lm1lc3NhZ2UgfHwgJycpLnRyaW0oKVxyXG5cdHJldHVybiBub3RpY2VNZXNzYWdlICYmIG5vdGljZU1lc3NhZ2UgIT09ICd0aGVyZVdlcmVWYWxpZGF0aW9uRXJyb3JzJ1xyXG5cdFx0PyBub3RpY2VNZXNzYWdlXHJcblx0XHQ6IGZhbGxiYWNrTWVzc2FnZVxyXG59XHJcblxyXG5jb25zdCBQdXJjaGFzZVJlY2VpdmVXb3Jrc3BhY2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2N1cnJlbnRBZG1pbl0gPSB1c2VDdXJyZW50QWRtaW4oKVxyXG5cdGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXHJcblx0Y29uc3Qge1xyXG5cdFx0aTE4bjogeyBsYW5ndWFnZSB9LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblx0Y29uc3QgcGFnZUNvcHkgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ9Cf0YDQuNGR0Lwg0LfQsNC60LDQt9CwJyxcclxuXHRcdFx0XHRcdHN1YnRpdGxlOlxyXG5cdFx0XHRcdFx0XHQn0KHRgtGA0YPQutGC0YPRgNC90L7QtSDQv9C+0LTRgNCw0LfQtNC10LvQtdC90LjQtSDQv9GA0LjQvdC40LzQsNC10YIg0L7RgtC/0YDQsNCy0LvQtdC90L3Ri9C1INC30LDQutCw0LfRiyDQt9C00LXRgdGMLiDQn9C+0YHQu9C1INC/0YDQuNGR0LzQsCDRgtC+0LLQsNGA0Ysg0L/QvtGP0LLQu9GP0Y7RgtGB0Y8g0L3QsCDRgdC60LvQsNC00LUg0YHRgtGA0YPQutGC0YPRgNGLLicsXHJcblx0XHRcdFx0XHR0b0Rpc3BhdGNoOiAn0J7RgtC/0YDQsNCy0LrQsCDQt9Cw0LrQsNC30LAnLFxyXG5cdFx0XHRcdFx0dG9XYXJlaG91c2VzOiAn0KHQutC70LDQtNGLJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6ICfQl9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhS4uLicsXHJcblx0XHRcdFx0XHRyZWFkeVRpdGxlOiAn0JfQsNC60LDQt9GLINC90LAg0L/RgNC40ZHQvCcsXHJcblx0XHRcdFx0XHRyZWFkeURlc2NyaXB0aW9uOlxyXG5cdFx0XHRcdFx0XHQn0J7RgtC/0YDQsNCy0LvQtdC90L3Ri9C1INC90LAg0YHRgtGA0YPQutGC0YPRgNGDINC30LDQutCw0LfRiyDQstC40LTQvdGLINC30LTQtdGB0YwuINCf0L7RgdC70LUg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L7QvdC4INC/0L7Qv9Cw0LTRg9GCINCyINGB0LrQu9Cw0LTRgdC60L7QuSDQvtGB0YLQsNGC0L7Qui4nLFxyXG5cdFx0XHRcdFx0cmVhZHlFbXB0eTogJ9Cd0LXRgiDQt9Cw0LrQsNC30L7Qsiwg0L7QttC40LTQsNGO0YnQuNGFINC/0YDQuNGR0LzQsC4nLFxyXG5cdFx0XHRcdFx0cmVjZWl2ZWRUaXRsZTogJ9CY0YHRgtC+0YDQuNGPINC/0YDQuNC90Y/RgtGL0YUg0LfQsNC60LDQt9C+0LInLFxyXG5cdFx0XHRcdFx0cmVjZWl2ZWREZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J9CX0LTQtdGB0Ywg0YXRgNCw0L3QuNGC0YHRjyDQuNGB0YLQvtGA0LjRjyDRg9C20LUg0L/RgNC40L3Rj9GC0YvRhSDQvdCwINGB0LrQu9Cw0LQg0LfQsNC60LDQt9C+0LIuJyxcclxuXHRcdFx0XHRcdHJlY2VpdmVkRW1wdHk6ICfQn9GA0LjQvdGP0YLRi9GFINC30LDQutCw0LfQvtCyINC/0L7QutCwINC90LXRgi4nLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRPcmRlcjogJ9CS0YvQsdGA0LDQvdC90YvQuSDQt9Cw0LrQsNC3JyxcclxuXHRcdFx0XHRcdHJlcXVlc3ROdW1iZXI6ICfQndC+0LzQtdGAINC30LDRj9Cy0LrQuCcsXHJcblx0XHRcdFx0XHRzdHJ1Y3R1cmVzOiAn0KHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdHNvdXJjZTogJ9CY0YHRgtC+0YfQvdC40LonLFxyXG5cdFx0XHRcdFx0d2FyZWhvdXNlTGFiZWw6ICfQodC60LvQsNC0INGB0YLRgNGD0LrRgtGD0YDRiycsXHJcblx0XHRcdFx0XHRwaWNrT3JkZXI6ICfQktGL0LHQtdGA0LjRgtC1INC30LDQutCw0Lcg0LTQu9GPINC/0YDQuNGR0LzQsC4nLFxyXG5cdFx0XHRcdFx0cmVjZWl2ZUJ1dHRvbjogJ9Cf0YDQuNC90Y/RgtGMINC90LAg0YHQutC70LDQtCcsXHJcblx0XHRcdFx0XHRyZWNlaXZpbmdCdXR0b246ICfQn9GA0LjQvdC40LzQsNC10YLRgdGPLi4uJyxcclxuXHRcdFx0XHRcdGFscmVhZHlSZWNlaXZlZDogJ9Ct0YLQvtGCINC30LDQutCw0Lcg0YPQttC1INC/0YDQuNC90Y/RgiDQvdCwINGB0LrQu9Cw0LQuJyxcclxuXHRcdFx0XHRcdGFjY2Vzc0RlbmllZDogJ9Ct0YLQvtGCINGA0LDQt9C00LXQuyDQt9Cw0LrRgNGL0YIg0LTQu9GPINCy0LDRiNC10Lkg0YDQvtC70LguJyxcclxuXHRcdFx0XHRcdGZpbHRlclBsYWNlaG9sZGVyOiAn0J/QvtC40YHQuiDQv9C+INC30LDRj9Cy0LrQtSwg0YHRgtGA0YPQutGC0YPRgNC1LCDQuNGB0YLQvtGH0L3QuNC60YMg0LjQu9C4INGB0LrQu9Cw0LTRgycsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAnQnV5dXJ0bWFuaSBxYWJ1bCBxaWxpc2gnLFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6XHJcblx0XHRcdFx0XHRcdCdUYXJraWJpeSB0dXppbG1hIGpv4oCYbmF0aWxnYW4gYnV5dXJ0bWFuaSBzaHUgeWVyZGEgcWFidWwgcWlsYWRpLiBRYWJ1bCBxaWxpbmdhbmRhbiBrZXlpbiB0b3ZhcmxhciBvbWJvciBxb2xkaWfigJhpZ2EgcW/igJhzaGlsYWRpLicsXHJcblx0XHRcdFx0XHR0b0Rpc3BhdGNoOiAnQnV5dXJ0bWFuaSBqb+KAmG5hdGlzaCcsXHJcblx0XHRcdFx0XHR0b1dhcmVob3VzZXM6ICdPbWJvcmxhcicsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiAnTWHigJlsdW1vdGxhciB5dWtsYW5tb3FkYS4uLicsXHJcblx0XHRcdFx0XHRyZWFkeVRpdGxlOiAnUWFidWxnYSBrZWxnYW4gYnV5dXJ0bWFsYXInLFxyXG5cdFx0XHRcdFx0cmVhZHlEZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J1R1emlsbWFnYSBqb+KAmG5hdGlsZ2FuIGJ1eXVydG1hbGFyIHNodSB5ZXJkYSBjaGlxYWRpLiBUYXNkaXFsYW5nYW5kYW4ga2V5aW4gdG92YXIgb21ib3JnYSB0dXNoYWRpLicsXHJcblx0XHRcdFx0XHRyZWFkeUVtcHR5OiAnUWFidWxnYSBrZWxnYW4gYnV5dXJ0bWEgdG9waWxtYWRpLicsXHJcblx0XHRcdFx0XHRyZWNlaXZlZFRpdGxlOiAnUWFidWwgcWlsaW5nYW4gYnV5dXJ0bWFsYXIgdGFyaXhpJyxcclxuXHRcdFx0XHRcdHJlY2VpdmVkRGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHRcdCdCdSB5ZXJkYSBvbWJvcmdhIHFhYnVsIHFpbGluZ2FuIGJ1eXVydG1hbGFyIHRhcml4aSBzYXFsYW5hZGkuJyxcclxuXHRcdFx0XHRcdHJlY2VpdmVkRW1wdHk6ICdRYWJ1bCBxaWxpbmdhbiBidXl1cnRtYSBoYWxpIHlv4oCYcS4nLFxyXG5cdFx0XHRcdFx0c2VsZWN0ZWRPcmRlcjogJ1RhbmxhbmdhbiBidXl1cnRtYScsXHJcblx0XHRcdFx0XHRyZXF1ZXN0TnVtYmVyOiAnQXJpemEgcmFxYW1pJyxcclxuXHRcdFx0XHRcdHN0cnVjdHVyZXM6ICdUYXJraWJpeSB0dXppbG1hbGFyJyxcclxuXHRcdFx0XHRcdHNvdXJjZTogJ01hbmJhJyxcclxuXHRcdFx0XHRcdHdhcmVob3VzZUxhYmVsOiAnVHV6aWxtYSBvbWJvcmknLFxyXG5cdFx0XHRcdFx0cGlja09yZGVyOiAnUWFidWwgcWlsaW5hZGlnYW4gYnV5dXJ0bWFuaSB0YW5sYW5nLicsXHJcblx0XHRcdFx0XHRyZWNlaXZlQnV0dG9uOiAnT21ib3JnYSBxYWJ1bCBxaWxpc2gnLFxyXG5cdFx0XHRcdFx0cmVjZWl2aW5nQnV0dG9uOiAnUWFidWwgcWlsaW5tb3FkYS4uLicsXHJcblx0XHRcdFx0XHRhbHJlYWR5UmVjZWl2ZWQ6ICdCdSBidXl1cnRtYSBhbGxhcWFjaG9uIG9tYm9yZ2EgcWFidWwgcWlsaW5nYW4uJyxcclxuXHRcdFx0XHRcdGFjY2Vzc0RlbmllZDogJ0J1IGJv4oCYbGltIHNpem5pbmcgcm9saW5naXogdWNodW4geW9waXEuJyxcclxuXHRcdFx0XHRcdGZpbHRlclBsYWNlaG9sZGVyOiAnQXJpemEsIHR1emlsbWEsIG1hbmJhIHlva2kgb21ib3IgYm/igJh5aWNoYSBmaWx0ZXInLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0Y29uc3QgW3JlY29yZHMsIHNldFJlY29yZHNdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW3JlY2VpdmVkUmVjb3Jkcywgc2V0UmVjZWl2ZWRSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFtzZWxlY3RlZFJlcXVlc3RJZCwgc2V0U2VsZWN0ZWRSZXF1ZXN0SWRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW3Nob3dSZWNlaXZlRm9ybSwgc2V0U2hvd1JlY2VpdmVGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblx0Y29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgncmVhZHknKVxyXG5cdGNvbnN0IFtyZWFkeVBhZ2UsIHNldFJlYWR5UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG5cdGNvbnN0IFtoaXN0b3J5UGFnZSwgc2V0SGlzdG9yeVBhZ2VdID0gdXNlU3RhdGUoMSlcclxuXHRjb25zdCBbcmVhZHlGaWx0ZXJUZXh0LCBzZXRSZWFkeUZpbHRlclRleHRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW2hpc3RvcnlGaWx0ZXJUZXh0LCBzZXRIaXN0b3J5RmlsdGVyVGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblx0Y29uc3QgY2FuVmlldyA9IFsnYWRtaW4nLCAndHV6aWxtYWxhciddLmluY2x1ZGVzKGN1cnJlbnRBZG1pbj8ucm9sZSlcclxuXHRjb25zdCBjYW5FZGl0ID0gWydhZG1pbicsICd0dXppbG1hbGFyJ10uaW5jbHVkZXMoY3VycmVudEFkbWluPy5yb2xlKVxyXG5cclxuXHRjb25zdCBhbGxSZWNvcmRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IFsuLi5yZWNvcmRzLCAuLi5yZWNlaXZlZFJlY29yZHNdLFxyXG5cdFx0W3JlY29yZHMsIHJlY2VpdmVkUmVjb3Jkc10sXHJcblx0KVxyXG5cclxuXHRjb25zdCBzZWxlY3RlZFJlY29yZCA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBhbGxSZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5pZCA9PT0gc2VsZWN0ZWRSZXF1ZXN0SWQpIHx8IG51bGwsXHJcblx0XHRbYWxsUmVjb3Jkcywgc2VsZWN0ZWRSZXF1ZXN0SWRdLFxyXG5cdClcclxuXHJcblx0Y29uc3QgZmlsdGVyUm93cyA9IChyb3dzLCBxdWVyeSkgPT4ge1xyXG5cdFx0Y29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5IHx8ICcnKVxyXG5cdFx0XHQudHJpbSgpXHJcblx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdFx0aWYgKCFub3JtYWxpemVkUXVlcnkpIHtcclxuXHRcdFx0cmV0dXJuIHJvd3NcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcm93cy5maWx0ZXIocmVjb3JkID0+IHtcclxuXHRcdFx0Y29uc3QgaXRlbXNUZXh0ID0gKHJlY29yZD8uaXRlbXMgfHwgW10pXHJcblx0XHRcdFx0Lm1hcChpdGVtID0+IGAke2l0ZW0/LnByb2R1Y3ROYW1lIHx8ICcnfSAke2l0ZW0/LmZlYXR1cmVzIHx8ICcnfWApXHJcblx0XHRcdFx0LmpvaW4oJyAnKVxyXG5cdFx0XHRjb25zdCBzZWFyY2hhYmxlVGV4dCA9IFtcclxuXHRcdFx0XHRyZWNvcmQ/LnJlcXVlc3ROdW1iZXIsXHJcblx0XHRcdFx0cmVjb3JkPy5zdGF0dXMsXHJcblx0XHRcdFx0cmVjb3JkPy5zZWxlY3RlZFVzZXJOYW1lcyxcclxuXHRcdFx0XHRyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUsXHJcblx0XHRcdFx0cmVjb3JkPy53YXJlaG91c2VEaXNwYXRjaERhdGE/LndhcmVob3VzZU5hbWUsXHJcblx0XHRcdFx0aXRlbXNUZXh0LFxyXG5cdFx0XHRdXHJcblx0XHRcdFx0LmpvaW4oJyAnKVxyXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdFx0XHRyZXR1cm4gc2VhcmNoYWJsZVRleHQuaW5jbHVkZXMobm9ybWFsaXplZFF1ZXJ5KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IGZpbHRlcmVkUmVhZHlSZWNvcmRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IGZpbHRlclJvd3MocmVjb3JkcywgcmVhZHlGaWx0ZXJUZXh0KSxcclxuXHRcdFtyZWNvcmRzLCByZWFkeUZpbHRlclRleHRdLFxyXG5cdClcclxuXHRjb25zdCBmaWx0ZXJlZEhpc3RvcnlSZWNvcmRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IGZpbHRlclJvd3MocmVjZWl2ZWRSZWNvcmRzLCBoaXN0b3J5RmlsdGVyVGV4dCksXHJcblx0XHRbcmVjZWl2ZWRSZWNvcmRzLCBoaXN0b3J5RmlsdGVyVGV4dF0sXHJcblx0KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFyZWNvcmRzLmxlbmd0aCAmJiByZWNlaXZlZFJlY29yZHMubGVuZ3RoICYmIGFjdGl2ZVRhYiAhPT0gJ2hpc3RvcnknKSB7XHJcblx0XHRcdHNldEFjdGl2ZVRhYignaGlzdG9yeScpXHJcblx0XHR9IGVsc2UgaWYgKFxyXG5cdFx0XHQhcmVjZWl2ZWRSZWNvcmRzLmxlbmd0aCAmJlxyXG5cdFx0XHRyZWNvcmRzLmxlbmd0aCAmJlxyXG5cdFx0XHRhY3RpdmVUYWIgIT09ICdyZWFkeSdcclxuXHRcdCkge1xyXG5cdFx0XHRzZXRBY3RpdmVUYWIoJ3JlYWR5JylcclxuXHRcdH1cclxuXHR9LCBbYWN0aXZlVGFiLCByZWNvcmRzLmxlbmd0aCwgcmVjZWl2ZWRSZWNvcmRzLmxlbmd0aF0pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB0b3RhbFJlYWR5UGFnZXMgPSBNYXRoLm1heChcclxuXHRcdFx0MSxcclxuXHRcdFx0TWF0aC5jZWlsKGZpbHRlcmVkUmVhZHlSZWNvcmRzLmxlbmd0aCAvIFBBR0VfU0laRSksXHJcblx0XHQpXHJcblx0XHRjb25zdCB0b3RhbEhpc3RvcnlQYWdlcyA9IE1hdGgubWF4KFxyXG5cdFx0XHQxLFxyXG5cdFx0XHRNYXRoLmNlaWwoZmlsdGVyZWRIaXN0b3J5UmVjb3Jkcy5sZW5ndGggLyBQQUdFX1NJWkUpLFxyXG5cdFx0KVxyXG5cclxuXHRcdHNldFJlYWR5UGFnZShjdXJyZW50ID0+IE1hdGgubWluKGN1cnJlbnQsIHRvdGFsUmVhZHlQYWdlcykpXHJcblx0XHRzZXRIaXN0b3J5UGFnZShjdXJyZW50ID0+IE1hdGgubWluKGN1cnJlbnQsIHRvdGFsSGlzdG9yeVBhZ2VzKSlcclxuXHR9LCBbZmlsdGVyZWRSZWFkeVJlY29yZHMubGVuZ3RoLCBmaWx0ZXJlZEhpc3RvcnlSZWNvcmRzLmxlbmd0aF0pXHJcblxyXG5cdGNvbnN0IGxvYWRXb3Jrc3BhY2UgPSBhc3luYyBwcmVmZXJyZWRSZXF1ZXN0SWQgPT4ge1xyXG5cdFx0c2V0TG9hZGluZyh0cnVlKVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnJlc291cmNlQWN0aW9uKHtcclxuXHRcdFx0XHRyZXNvdXJjZUlkOiAnUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlJyxcclxuXHRcdFx0XHRhY3Rpb25OYW1lOiAncmVjZWl2ZVdvcmtzcGFjZScsXHJcblx0XHRcdH0pXHJcblx0XHRcdGNvbnN0IG5leHRSZWNvcmRzID0gcmVzcG9uc2U/LmRhdGE/LnJlY29yZHMgfHwgW11cclxuXHRcdFx0Y29uc3QgbmV4dFJlY2VpdmVkUmVjb3JkcyA9IHJlc3BvbnNlPy5kYXRhPy5yZWNlaXZlZFJlY29yZHMgfHwgW11cclxuXHRcdFx0Y29uc3QgY29tYmluZWQgPSBbLi4ubmV4dFJlY29yZHMsIC4uLm5leHRSZWNlaXZlZFJlY29yZHNdXHJcblx0XHRcdGNvbnN0IG5leHRTZWxlY3RlZElkID1cclxuXHRcdFx0XHRwcmVmZXJyZWRSZXF1ZXN0SWQgJiZcclxuXHRcdFx0XHRjb21iaW5lZC5zb21lKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHByZWZlcnJlZFJlcXVlc3RJZClcclxuXHRcdFx0XHRcdD8gcHJlZmVycmVkUmVxdWVzdElkXHJcblx0XHRcdFx0XHQ6IHNlbGVjdGVkUmVxdWVzdElkICYmXHJcblx0XHRcdFx0XHRcdCAgY29tYmluZWQuc29tZShyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBzZWxlY3RlZFJlcXVlc3RJZClcclxuXHRcdFx0XHRcdFx0PyBzZWxlY3RlZFJlcXVlc3RJZFxyXG5cdFx0XHRcdFx0XHQ6ICcnXHJcblxyXG5cdFx0XHRzZXRSZWNvcmRzKG5leHRSZWNvcmRzKVxyXG5cdFx0XHRzZXRSZWNlaXZlZFJlY29yZHMobmV4dFJlY2VpdmVkUmVjb3JkcylcclxuXHRcdFx0c2V0U2VsZWN0ZWRSZXF1ZXN0SWQobmV4dFNlbGVjdGVkSWQpXHJcblxyXG5cdFx0XHRpZiAocHJlZmVycmVkUmVxdWVzdElkKSB7XHJcblx0XHRcdFx0c2V0U2hvd1JlY2VpdmVGb3JtKHRydWUpXHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldFJlY29yZHMoW10pXHJcblx0XHRcdHNldFJlY2VpdmVkUmVjb3JkcyhbXSlcclxuXHRcdFx0c2V0U2VsZWN0ZWRSZXF1ZXN0SWQoJycpXHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogZXh0cmFjdE1lc3NhZ2UoXHJcblx0XHRcdFx0XHRlcnJvcj8ucmVzcG9uc2U/LmRhdGEsXHJcblx0XHRcdFx0XHQnQnV5dXJ0bWFuaSBxYWJ1bCBxaWxpc2ggc2FoaWZhc2luaSB5dWtsYWIgYm/igJhsbWFkaScsXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBpbml0aWFsUmVxdWVzdElkID1cclxuXHRcdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcclxuXHRcdFx0XHQ/IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdyZWNvcmRJZCcpIHx8ICcnXHJcblx0XHRcdFx0OiAnJ1xyXG5cclxuXHRcdGxvYWRXb3Jrc3BhY2UoaW5pdGlhbFJlcXVlc3RJZClcclxuXHR9LCBbXSlcclxuXHJcblx0Y29uc3Qgb3BlblJlY29yZCA9IHJlY29yZCA9PiB7XHJcblx0XHRpZiAoIXJlY29yZD8uaWQgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmxvY2F0aW9uLmFzc2lnbihcclxuXHRcdFx0YC9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlP3JlY29yZElkPSR7cmVjb3JkLmlkfWAsXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuXHRcdHNldFNob3dSZWNlaXZlRm9ybShmYWxzZSlcclxuXHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKCcnKVxyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oJy9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlJylcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlY2VpdmUgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoIWNhbkVkaXQpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFzZWxlY3RlZFJlcXVlc3RJZCkge1xyXG5cdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2U6ICdBdnZhbCBxYWJ1bCBxaWxpbmFkaWdhbiBidXl1cnRtYW5pIHRhbmxhbmcnLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdH0pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHNldFNhdmluZyh0cnVlKVxyXG5cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnJlc291cmNlQWN0aW9uKHtcclxuXHRcdFx0XHRyZXNvdXJjZUlkOiAnUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlJyxcclxuXHRcdFx0XHRhY3Rpb25OYW1lOiAncmVjZWl2ZVdvcmtzcGFjZScsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdHJlcXVlc3RJZDogc2VsZWN0ZWRSZXF1ZXN0SWQsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdGlmIChyZXNwb25zZT8uZGF0YT8ubm90aWNlKSB7XHJcblx0XHRcdFx0YWRkTm90aWNlKHJlc3BvbnNlLmRhdGEubm90aWNlKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRhd2FpdCBsb2FkV29ya3NwYWNlKHNlbGVjdGVkUmVxdWVzdElkKVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOiBleHRyYWN0TWVzc2FnZShcclxuXHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YSxcclxuXHRcdFx0XHRcdCdCdXl1cnRtYW5pIG9tYm9yZ2EgcWFidWwgcWlsaWIgYm/igJhsbWFkaScsXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0c2V0U2F2aW5nKGZhbHNlKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVuZGVyVGFibGUgPSAoeyByb3dzLCBlbXB0eVRleHQsIHBhZ2UsIHNldFBhZ2UgfSkgPT4ge1xyXG5cdFx0aWYgKCFyb3dzLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gPFRleHQgY29sb3I9J2dyZXk2MCc+e2VtcHR5VGV4dH08L1RleHQ+XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdG90YWxQYWdlcyA9IE1hdGgubWF4KDEsIE1hdGguY2VpbChyb3dzLmxlbmd0aCAvIFBBR0VfU0laRSkpXHJcblx0XHRjb25zdCBzYWZlUGFnZSA9IE1hdGgubWluKHBhZ2UsIHRvdGFsUGFnZXMpXHJcblx0XHRjb25zdCBzdGFydEluZGV4ID0gKHNhZmVQYWdlIC0gMSkgKiBQQUdFX1NJWkVcclxuXHRcdGNvbnN0IHBhZ2luYXRlZFJvd3MgPSByb3dzLnNsaWNlKHN0YXJ0SW5kZXgsIHN0YXJ0SW5kZXggKyBQQUdFX1NJWkUpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJveD5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt0YWJsZVdyYXBTdHlsZX0+XHJcblx0XHRcdFx0XHQ8dGFibGUgc3R5bGU9e3RhYmxlU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PiM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PntwYWdlQ29weS5yZXF1ZXN0TnVtYmVyfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+e3BhZ2VDb3B5LnN0cnVjdHVyZXN9PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT57cGFnZUNvcHkuc291cmNlfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+e3BhZ2VDb3B5LndhcmVob3VzZUxhYmVsfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+U2FuYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdHtwYWdpbmF0ZWRSb3dzLm1hcCgocmVjb3JkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3Qgcm93RGF0ZSA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy5yZWNlaXZlZEF0IHx8XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy5kaXNwYXRjaGVkQXQgfHxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVjb3JkPy51cGRhdGVkQXQgfHxcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVjb3JkPy5jcmVhdGVkQXRcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3JlY29yZC5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuUmVjb3JkKHJlY29yZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3Jvd0ludGVyYWN0aXZlU3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT57c3RhcnRJbmRleCArIGluZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWNvcmQucmVxdWVzdE51bWJlciB8fCByZWNvcmQuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0neHMnIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkLnN0YXR1cyB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlY29yZC5zZWxlY3RlZFVzZXJOYW1lcyB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlY29yZD8uYnV5ZXJPcmRlckRhdGE/LnN1cHBsaWVyTmFtZSB8fCAnS2lyaXRpbG1hZ2FuJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy53YXJlaG91c2VOYW1lIHx8ICfigJQnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e2Zvcm1hdERhdGUocm93RGF0ZSl9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdHt0b3RhbFBhZ2VzID4gMSA/IChcclxuXHRcdFx0XHRcdDxUZXh0IG10PSd4bCcgdGV4dEFsaWduPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8UGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRcdHBhZ2U9e3NhZmVQYWdlfVxyXG5cdFx0XHRcdFx0XHRcdHBlclBhZ2U9e1BBR0VfU0laRX1cclxuXHRcdFx0XHRcdFx0XHR0b3RhbD17cm93cy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e25leHRQYWdlID0+IHNldFBhZ2UobmV4dFBhZ2UpfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmICghY2FuVmlldykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJveD5cclxuXHRcdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHRcdDxIMj57cGFnZUNvcHkudGl0bGV9PC9IMj5cclxuXHRcdFx0XHRcdDxNZXNzYWdlQm94IHZhcmlhbnQ9J2RhbmdlcicgbXQ9J3hsJz5cclxuXHRcdFx0XHRcdFx0PFRleHQ+e3BhZ2VDb3B5LmFjY2Vzc0RlbmllZH08L1RleHQ+XHJcblx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxCb3ggYmc9J3doaXRlJyBwPSd4eGwnIGJvcmRlclJhZGl1cz0neGwnPlxyXG5cdFx0XHRcdDxUZXh0IGNvbG9yPSdwcmltYXJ5MTAwJyBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRaYXhpcmEudXpcclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PEgyPntwYWdlQ29weS50aXRsZX08L0gyPlxyXG5cdFx0XHRcdDxUZXh0IG10PSdzbScgY29sb3I9J2dyZXk2MCc+XHJcblx0XHRcdFx0XHR7cGFnZUNvcHkuc3VidGl0bGV9XHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRzdHlsZT17eyAuLi5hY3Rpb25CYXJTdHlsZSwgbWFyZ2luVG9wOiAnMTZweCcsIG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2N1cnJlbnRBZG1pbj8ucm9sZSAhPT0gJ3R1emlsbWFsYXInID8gKFxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdFx0aHJlZj0nL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlJ1xyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtuYXZCdXR0b25TdHlsZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtwYWdlQ29weS50b0Rpc3BhdGNofVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRhcz0nYSdcclxuXHRcdFx0XHRcdFx0aHJlZj17XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudEFkbWluPy5yb2xlID09PSAndHV6aWxtYWxhcidcclxuXHRcdFx0XHRcdFx0XHRcdD8gJy9hZG1pbi9yZXNvdXJjZXMvTXlXYXJlaG91c2UnXHJcblx0XHRcdFx0XHRcdFx0XHQ6ICcvYWRtaW4vcmVzb3VyY2VzL1dhcmVob3VzZU92ZXJ2aWV3J1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17bmF2QnV0dG9uU3R5bGV9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtwYWdlQ29weS50b1dhcmVob3VzZXN9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0XHQ8VGV4dD57cGFnZUNvcHkubG9hZGluZ308L1RleHQ+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxNnB4JyB9fT5cclxuXHRcdFx0XHRcdFx0e3Nob3dSZWNlaXZlRm9ybSA/IG51bGwgOiAoXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3RhYnNXcmFwU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYigncmVhZHknKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17dGFiQnV0dG9uU3R5bGUoYWN0aXZlVGFiID09PSAncmVhZHknKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlQ29weS5yZWFkeVRpdGxlfSAoe2ZpbHRlcmVkUmVhZHlSZWNvcmRzLmxlbmd0aH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYignaGlzdG9yeScpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt0YWJCdXR0b25TdHlsZShhY3RpdmVUYWIgPT09ICdoaXN0b3J5Jyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkucmVjZWl2ZWRUaXRsZX0gKHtmaWx0ZXJlZEhpc3RvcnlSZWNvcmRzLmxlbmd0aH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0e2FjdGl2ZVRhYiA9PT0gJ3JlYWR5JyA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnJlYWR5VGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdncmV5NjAnPntwYWdlQ29weS5yZWFkeURlc2NyaXB0aW9ufTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cmVhZHlGaWx0ZXJUZXh0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0UmVhZHlGaWx0ZXJUZXh0KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0UmVhZHlQYWdlKDEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BhZ2VDb3B5LmZpbHRlclBsYWNlaG9sZGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgLi4uaW5wdXRTdHlsZSwgbWFyZ2luVG9wOiAnMTZweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggbXQ9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJUYWJsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3M6IGZpbHRlcmVkUmVhZHlSZWNvcmRzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlbXB0eVRleHQ6IHBhZ2VDb3B5LnJlYWR5RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2U6IHJlYWR5UGFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0UGFnZTogc2V0UmVhZHlQYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnJlY2VpdmVkVGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdncmV5NjAnPntwYWdlQ29weS5yZWNlaXZlZERlc2NyaXB0aW9ufTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aGlzdG9yeUZpbHRlclRleHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRIaXN0b3J5RmlsdGVyVGV4dChldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEhpc3RvcnlQYWdlKDEpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BhZ2VDb3B5LmZpbHRlclBsYWNlaG9sZGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgLi4uaW5wdXRTdHlsZSwgbWFyZ2luVG9wOiAnMTZweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggbXQ9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZW5kZXJUYWJsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvd3M6IGZpbHRlcmVkSGlzdG9yeVJlY29yZHMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVtcHR5VGV4dDogcGFnZUNvcHkucmVjZWl2ZWRFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZTogaGlzdG9yeVBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFBhZ2U6IHNldEhpc3RvcnlQYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHtzaG93UmVjZWl2ZUZvcm0gPyAoXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheT0nZmxleCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2FwPSdkZWZhdWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcD0nd3JhcCdcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkuc2VsZWN0ZWRPcmRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Um/igJh5eGF0Z2EgcWF5dGlzaFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE0cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdncmlkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbD57cGFnZUNvcHkucmVxdWVzdE51bWJlcn08L0xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzZWxlY3RlZFJlY29yZC5yZXF1ZXN0TnVtYmVyIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWw+e3BhZ2VDb3B5LnN0cnVjdHVyZXN9PC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWRSZWNvcmQuc2VsZWN0ZWRVc2VyTmFtZXMgfHwgJyd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbD57cGFnZUNvcHkuc291cmNlfTwvTGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWRSZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUgfHwgJydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMYWJlbD57cGFnZUNvcHkud2FyZWhvdXNlTGFiZWx9PC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVhZE9ubHlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZFJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8ud2FyZWhvdXNlTmFtZSB8fCAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17aW5wdXRTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRUb3ZhcmxhclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzEycHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7KHNlbGVjdGVkUmVjb3JkLml0ZW1zIHx8IFtdKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgJHtzZWxlY3RlZFJlY29yZC5pZH0tJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmJmZicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5wcm9kdWN0TmFtZSB8fCAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmZlYXR1cmVzIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmlucHV0U3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiAnODBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzaXplOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSknLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWFkT25seVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnVuaXQgfHwgJyd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e2lucHV0U3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1N0cmluZyhpdGVtLnF1YW50aXR5IHx8IDApfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZD8ud2FyZWhvdXNlRGlzcGF0Y2hEYXRhPy5yZWNlaXZlZEF0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE1lc3NhZ2VCb3ggdmFyaWFudD0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlQ29weS5hbHJlYWR5UmVjZWl2ZWR9eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Zm9ybWF0RGF0ZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkUmVjb3JkPy53YXJlaG91c2VEaXNwYXRjaERhdGE/LnJlY2VpdmVkQXQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9NZXNzYWdlQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBnYXA9J2RlZmF1bHQnIGZsZXhXcmFwPSd3cmFwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVSZWNlaXZlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXtzYXZpbmd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2F2aW5nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHBhZ2VDb3B5LnJlY2VpdmluZ0J1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBwYWdlQ29weS5yZWNlaXZlQnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZXNzYWdlQm94IHZhcmlhbnQ9J2luZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0PntwYWdlQ29weS5waWNrT3JkZXJ9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZVJlY2VpdmVXb3Jrc3BhY2VcclxuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEgyLCBNZXNzYWdlQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgQXBpQ2xpZW50LCB1c2VDdXJyZW50QWRtaW4sIHVzZU5vdGljZSwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcclxuXHJcbmNvbnN0IGNhcmRTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMThweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdGJvcmRlclJhZGl1czogJzE0cHgnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxufVxyXG5cclxuY29uc3Qgd2FyZWhvdXNlQ2FyZFN0eWxlID0gaXNTZWxlY3RlZCA9PiAoe1xyXG5cdHBhZGRpbmc6ICcxNnB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuXHRib3JkZXI6IGAxcHggc29saWQgJHtpc1NlbGVjdGVkID8gJyMzYjgyZjYnIDogJyNlNWU3ZWInfWAsXHJcblx0YmFja2dyb3VuZDogaXNTZWxlY3RlZCA/ICcjZWZmNmZmJyA6ICcjZmZmZmZmJyxcclxuXHRjdXJzb3I6ICdwb2ludGVyJyxcclxufSlcclxuXHJcbmNvbnN0IHRhYmxlV3JhcFN0eWxlID0ge1xyXG5cdG92ZXJmbG93WDogJ2F1dG8nLFxyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlU3R5bGUgPSB7XHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcclxuXHRtaW5XaWR0aDogJzg4MHB4JyxcclxufVxyXG5cclxuY29uc3QgdGFibGVIZWFkQ2VsbFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxMnB4IDE0cHgnLFxyXG5cdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdGZvbnRTaXplOiAnMTJweCcsXHJcblx0Zm9udFdlaWdodDogNzAwLFxyXG5cdGNvbG9yOiAnIzQ3NTU2OScsXHJcblx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxufVxyXG5cclxuY29uc3QgdGFibGVDZWxsU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRjb2xvcjogJyMwZjE3MmEnLFxyXG5cdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHR2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxufVxyXG5cclxuY29uc3QgYWN0aW9uQmFyU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdGZsZXhXcmFwOiAnd3JhcCcsXHJcblx0Z2FwOiAnMTZweCAxOHB4JyxcclxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxufVxyXG5cclxuY29uc3QgbmF2QnV0dG9uU3R5bGUgPSB7XHJcblx0bWluV2lkdGg6ICcxNzBweCcsXHJcblx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG59XHJcblxyXG5jb25zdCBmaWx0ZXJJbnB1dFN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0bWF4V2lkdGg6ICc0MjBweCcsXHJcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcblx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNjYmQ1ZTEnLFxyXG5cdGZvbnRTaXplOiAnMTRweCcsXHJcblx0Zm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxufVxyXG5cclxuY29uc3Qgc3RhdHNHcmlkU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdGdhcDogJzEycHgnLFxyXG5cdGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSknLFxyXG5cdG1hcmdpblRvcDogJzE2cHgnLFxyXG59XHJcblxyXG5jb25zdCBzdGF0Q2FyZFN0eWxlID0ge1xyXG5cdHBhZGRpbmc6ICcxNHB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2RiZTNmMCcsXHJcblx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG59XHJcblxyXG5jb25zdCBjbGlja2FibGVSb3dTdHlsZSA9IHtcclxuXHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHR0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjE1cyBlYXNlJyxcclxufVxyXG5cclxuY29uc3QgZ2V0V2FyZWhvdXNlSWRGcm9tTG9jYXRpb24gPSAoKSA9PiB7XHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRyZXR1cm4gJydcclxuXHR9XHJcblxyXG5cdHJldHVybiBTdHJpbmcoXHJcblx0XHRuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgnd2FyZWhvdXNlSWQnKSB8fCAnJyxcclxuXHQpLnRyaW0oKVxyXG59XHJcblxyXG5jb25zdCBzeW5jV2FyZWhvdXNlTG9jYXRpb24gPSB3YXJlaG91c2VJZCA9PiB7XHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblxyXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpXHJcblxyXG5cdGlmICh3YXJlaG91c2VJZCkge1xyXG5cdFx0dXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3dhcmVob3VzZUlkJywgd2FyZWhvdXNlSWQpXHJcblx0fSBlbHNlIHtcclxuXHRcdHVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCd3YXJlaG91c2VJZCcpXHJcblx0fVxyXG5cclxuXHR3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCBgJHt1cmwucGF0aG5hbWV9JHt1cmwuc2VhcmNofWApXHJcbn1cclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICfigJQnXHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXHJcblxyXG5cdGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhZCA9IG51bWJlciA9PiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0cmV0dXJuIGAke3BhZChkYXRlLmdldERhdGUoKSl9LiR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtwYWQoZGF0ZS5nZXRIb3VycygpKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCkpfWBcclxufVxyXG5cclxuY29uc3QgV2FyZWhvdXNlT3ZlcnZpZXcgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2N1cnJlbnRBZG1pbl0gPSB1c2VDdXJyZW50QWRtaW4oKVxyXG5cdGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXHJcblx0Y29uc3Qge1xyXG5cdFx0aTE4bjogeyBsYW5ndWFnZSB9LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblx0Y29uc3QgaXNNeVdhcmVob3VzZVBhZ2UgPVxyXG5cdFx0dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygnL2FkbWluL3Jlc291cmNlcy9NeVdhcmVob3VzZScpXHJcblx0Y29uc3QgcGFnZUNvcHkgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0aXRsZTogJ9Ch0LrQu9Cw0LTRiycsXHJcblx0XHRcdFx0XHRzdWJ0aXRsZTpcclxuXHRcdFx0XHRcdFx0J9Cf0YDQuCDQvtGC0LrRgNGL0YLQuNC4INGB0LrQu9Cw0LTQsCDQstGLINGB0YDQsNC30YMg0L/QtdGA0LXRhdC+0LTQuNGC0LUg0LLQvdGD0YLRgNGMINC4INCy0LjQtNC40YLQtSDQstGB0LUg0YLQvtCy0LDRgNGLLCDQutC+0YLQvtGA0YvQtSDQsdGL0LvQuCDRhNCw0LrRgtC40YfQtdGB0LrQuCDQv9GA0LjQvdGP0YLRiyDRgdGC0YDRg9C60YLRg9GA0L7QuS4nLFxyXG5cdFx0XHRcdFx0dG9EaXNwYXRjaDogJ9Ce0YLQv9GA0LDQstC60LAg0LfQsNC60LDQt9CwJyxcclxuXHRcdFx0XHRcdHRvUmVjZWl2ZTogJ9Cf0YDQuNGR0Lwg0LfQsNC60LDQt9CwJyxcclxuXHRcdFx0XHRcdHRvT3JkZXI6ICfQntGE0L7RgNC80LvQtdC90LjQtSDQt9Cw0LrQsNC30LAnLFxyXG5cdFx0XHRcdFx0dG9NeVdhcmVob3VzZTogJ9Cc0L7QuSDRgdC60LvQsNC0JyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6ICfQl9Cw0LPRgNGD0LfQutCwINGB0LrQu9Cw0LTQvtCyLi4uJyxcclxuXHRcdFx0XHRcdGxpc3RUaXRsZTogJ9Ch0LrQu9Cw0LTRiyDRgdGC0YDRg9C60YLRg9GAJyxcclxuXHRcdFx0XHRcdHNlYXJjaFBsYWNlaG9sZGVyOiAn0J/QvtC40YHQuiDQv9C+INC90LDQt9Cy0LDQvdC40Y4g0YHRgtGA0YPQutGC0YPRgNGLINC40LvQuCDQvtGC0LLQtdGC0YHRgtCy0LXQvdC90L7QvNGDJyxcclxuXHRcdFx0XHRcdGVtcHR5TGlzdDogJ9Cf0L7QtNGF0L7QtNGP0YnQuNC1INGB0LrQu9Cw0LTRiyDQvdC1INC90LDQudC00LXQvdGLLicsXHJcblx0XHRcdFx0XHRvcGVuSGludDpcclxuXHRcdFx0XHRcdFx0J9Cd0LDQttC80LjRgtC1INC90LAg0YHRgtGA0L7QutGDINGB0LrQu9Cw0LTQsCwg0YfRgtC+0LHRiyDRgdGA0LDQt9GDINC+0YLQutGA0YvRgtGMINC10LPQviDRgdC+0LTQtdGA0LbQuNC80L7QtS4nLFxyXG5cdFx0XHRcdFx0b3BlbkFjdGlvbjogJ9Ce0YLQutGA0YvRgtGMJyxcclxuXHRcdFx0XHRcdGJhY2tUb0xpc3Q6ICfQndCw0LfQsNC0INC6INGB0L/QuNGB0LrRgyDRgdC60LvQsNC00L7QsicsXHJcblx0XHRcdFx0XHRzZWxlY3RlZFRpdGxlOiAn0JLRgdC1INGC0L7QstCw0YDRiyDQstC90YPRgtGA0Lgg0YHQutC70LDQtNCwJyxcclxuXHRcdFx0XHRcdGxhc3RVcGRhdGVkOiAn0J/QvtGB0LvQtdC00L3QtdC1INC+0LHQvdC+0LLQu9C10L3QuNC1JyxcclxuXHRcdFx0XHRcdG5vSXRlbXM6ICfQndCwINGN0YLQvtC8INGB0LrQu9Cw0LTQtSDQv9C+0LrQsCDQvdC10YIg0L/RgNC40L3Rj9GC0YvRhSDRgtC+0LLQsNGA0L7Qsi4nLFxyXG5cdFx0XHRcdFx0aXRlbVNlYXJjaFBsYWNlaG9sZGVyOlxyXG5cdFx0XHRcdFx0XHQn0J/QvtC40YHQuiDQv9C+INGC0L7QstCw0YDRgywg0YXQsNGA0LDQutGC0LXRgNC40YHRgtC40LrQtSwg0LjRgdGC0L7Rh9C90LjQutGDINC40LvQuCDQt9Cw0Y/QstC60LUnLFxyXG5cdFx0XHRcdFx0ZmlsdGVyZWRJdGVtc0VtcHR5OiAn0J/QviDRjdGC0L7QvNGDINGE0LjQu9GM0YLRgNGDINGC0L7QstCw0YDRiyDQvdC1INC90LDQudC00LXQvdGLLicsXHJcblx0XHRcdFx0XHRwaWNrV2FyZWhvdXNlOiAn0JLRi9Cx0LXRgNC40YLQtSDRgdC60LvQsNC0LCDRh9GC0L7QsdGLINC+0YLQutGA0YvRgtGMINC10LPQviDRgdC+0LTQtdGA0LbQuNC80L7QtS4nLFxyXG5cdFx0XHRcdFx0YWNjZXNzRGVuaWVkOiAn0K3RgtC+0YIg0YDQsNC30LTQtdC7INC30LDQutGA0YvRgiDQtNC70Y8g0LLQsNGI0LXQuSDRgNC+0LvQuC4nLFxyXG5cdFx0XHRcdFx0bG9hZEVycm9yOiAn0J3QtSDRg9C00LDQu9C+0YHRjCDQt9Cw0LPRgNGD0LfQuNGC0Ywg0LTQsNC90L3Ri9C1INGB0LrQu9Cw0LTQvtCyJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICdPbWJvcmxhcicsXHJcblx0XHRcdFx0XHRzdWJ0aXRsZTpcclxuXHRcdFx0XHRcdFx0J09tYm9ybmkgb2Noc2FuZ2l6LCBpY2hpZ2EgZGFycm92IGtpcmliIGJhcmNoYSBxYWJ1bCBxaWxpbmdhbiB0b3Zhcmxhcm5pIGtv4oCYcmFzaXouJyxcclxuXHRcdFx0XHRcdHRvRGlzcGF0Y2g6ICdCdXl1cnRtYW5pIGpv4oCYbmF0aXNoJyxcclxuXHRcdFx0XHRcdHRvUmVjZWl2ZTogJ0J1eXVydG1hbmkgcWFidWwgcWlsaXNoJyxcclxuXHRcdFx0XHRcdHRvT3JkZXI6ICdCdXl1cnRtYSBxaWxpc2gnLFxyXG5cdFx0XHRcdFx0dG9NeVdhcmVob3VzZTogJ01lbmluZyBvbWJvcmltJyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6ICdPbWJvcmxhciB5dWtsYW5tb3FkYS4uLicsXHJcblx0XHRcdFx0XHRsaXN0VGl0bGU6ICdUYXJraWJpeSB0dXppbG1hIG9tYm9ybGFyaScsXHJcblx0XHRcdFx0XHRzZWFyY2hQbGFjZWhvbGRlcjogJ1R1emlsbWEgbm9taSB5b2tpIG1hc+KAmXVsIGJv4oCYeWljaGEgcWlkaXJpbmcnLFxyXG5cdFx0XHRcdFx0ZW1wdHlMaXN0OiAnTW9zIG9tYm9yIHRvcGlsbWFkaS4nLFxyXG5cdFx0XHRcdFx0b3BlbkhpbnQ6ICdRYXRvciB1c3RpZ2EgYm9zc2FuZ2l6LCBvbWJvciBpY2hpZ2EgZGFycm92IGtpcmFzaXouJyxcclxuXHRcdFx0XHRcdG9wZW5BY3Rpb246ICdPY2hpc2gnLFxyXG5cdFx0XHRcdFx0YmFja1RvTGlzdDogJ09tYm9ybGFyIHJv4oCYeXhhdGlnYSBxYXl0aXNoJyxcclxuXHRcdFx0XHRcdHNlbGVjdGVkVGl0bGU6ICdPbWJvciBpY2hpZGFnaSBiYXJjaGEgdG92YXJsYXInLFxyXG5cdFx0XHRcdFx0bGFzdFVwZGF0ZWQ6ICdPeGlyZ2kgeWFuZ2lsYW5pc2gnLFxyXG5cdFx0XHRcdFx0bm9JdGVtczogJ0J1IG9tYm9yZGEgaG96aXJjaGEgcWFidWwgcWlsaW5nYW4gdG92YXIgeW/igJhxLicsXHJcblx0XHRcdFx0XHRpdGVtU2VhcmNoUGxhY2Vob2xkZXI6XHJcblx0XHRcdFx0XHRcdCdUb3ZhciwgeHVzdXNpeWF0LCBtYW5iYSB5b2tpIGFyaXphIGJv4oCYeWljaGEgZmlsdGVyJyxcclxuXHRcdFx0XHRcdGZpbHRlcmVkSXRlbXNFbXB0eTogJ1VzaGJ1IGZpbHRlciBib+KAmHlpY2hhIHRvdmFyIHRvcGlsbWFkaS4nLFxyXG5cdFx0XHRcdFx0cGlja1dhcmVob3VzZTogJ0ljaGluaSBrb+KAmHJpc2ggdWNodW4gb21ib3JuaSBvY2hpbmcuJyxcclxuXHRcdFx0XHRcdGFjY2Vzc0RlbmllZDogJ0J1IGJv4oCYbGltIHNpem5pbmcgcm9saW5naXogdWNodW4geW9waXEuJyxcclxuXHRcdFx0XHRcdGxvYWRFcnJvcjogJ09tYm9ybGFyIG1h4oCZbHVtb3RpbmkgeXVrbGFiIGJv4oCYbG1hZGknLFxyXG5cdFx0XHRcdH1cclxuXHRpZiAoaXNNeVdhcmVob3VzZVBhZ2UpIHtcclxuXHRcdE9iamVjdC5hc3NpZ24ocGFnZUNvcHksIHtcclxuXHRcdFx0dGl0bGU6IGxhbmd1YWdlID09PSAncnUnID8gJ9Cc0L7QuSDRgdC60LvQsNC0JyA6ICdNZW5pbmcgb21ib3JpbScsXHJcblx0XHRcdHN1YnRpdGxlOlxyXG5cdFx0XHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdFx0XHQ/ICfQl9C00LXRgdGMINCy0Ysg0LLQuNC00LjRgtC1INCy0YHQtSDRgtC+0LLQsNGA0YssINC60L7RgtC+0YDRi9C1INC10YHRgtGMINC90LAg0YHQutC70LDQtNC1INCy0LDRiNC10Lkg0YHRgtGA0YPQutGC0YPRgNGLLidcclxuXHRcdFx0XHRcdDogJ0J1IHllcmRhIHR1emlsbWFuZ2l6IG9tYm9yaWRhIGJvciBiYXJjaGEgdG92YXJsYXJuaSB0b+KAmGxpcSBrb+KAmHJhc2l6LicsXHJcblx0XHRcdGxpc3RUaXRsZTogbGFuZ3VhZ2UgPT09ICdydScgPyAn0JzQvtC5INGB0LrQu9Cw0LQnIDogJ01lbmluZyBvbWJvcmltJyxcclxuXHRcdFx0c2VsZWN0ZWRUaXRsZTpcclxuXHRcdFx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHRcdFx0PyAn0JLRgdC1INGC0L7QstCw0YDRiyDQvdCwINC80L7RkdC8INGB0LrQu9Cw0LTQtSdcclxuXHRcdFx0XHRcdDogJ01lbmluZyBvbWJvcmltZGFnaSBiYXJjaGEgdG92YXJsYXInLFxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IFt3YXJlaG91c2VzLCBzZXRXYXJlaG91c2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFtzZWxlY3RlZFdhcmVob3VzZUlkLCBzZXRTZWxlY3RlZFdhcmVob3VzZUlkXSA9IHVzZVN0YXRlKCgpID0+XHJcblx0XHRnZXRXYXJlaG91c2VJZEZyb21Mb2NhdGlvbigpLFxyXG5cdClcclxuXHRjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbaXRlbVNlYXJjaFRleHQsIHNldEl0ZW1TZWFyY2hUZXh0XSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG5cdGNvbnN0IGNhblZpZXcgPSBbXHJcblx0XHQnYWRtaW4nLFxyXG5cdFx0J21vbml0b3JpbmcnLFxyXG5cdFx0J3NvdGliX29sdXZjaGknLFxyXG5cdFx0J3R1emlsbWFsYXInLFxyXG5cdF0uaW5jbHVkZXMoY3VycmVudEFkbWluPy5yb2xlKVxyXG5cclxuXHRjb25zdCBmaWx0ZXJlZFdhcmVob3VzZXMgPSB1c2VNZW1vKCgpID0+IHtcclxuXHRcdGNvbnN0IHF1ZXJ5ID0gU3RyaW5nKHNlYXJjaFRleHQgfHwgJycpXHJcblx0XHRcdC50cmltKClcclxuXHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHJcblx0XHRpZiAoIXF1ZXJ5KSB7XHJcblx0XHRcdHJldHVybiB3YXJlaG91c2VzXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHdhcmVob3VzZXMuZmlsdGVyKHdhcmVob3VzZSA9PlxyXG5cdFx0XHRgJHt3YXJlaG91c2U/Lm5hbWUgfHwgJyd9ICR7d2FyZWhvdXNlPy5kZXNjcmlwdGlvbiB8fCAnJ31gXHJcblx0XHRcdFx0LnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHQuaW5jbHVkZXMocXVlcnkpLFxyXG5cdFx0KVxyXG5cdH0sIFtzZWFyY2hUZXh0LCB3YXJlaG91c2VzXSlcclxuXHJcblx0Y29uc3Qgc2VsZWN0ZWRXYXJlaG91c2UgPSB1c2VNZW1vKFxyXG5cdFx0KCkgPT5cclxuXHRcdFx0d2FyZWhvdXNlcy5maW5kKHdhcmVob3VzZSA9PiB3YXJlaG91c2UuaWQgPT09IHNlbGVjdGVkV2FyZWhvdXNlSWQpIHx8XHJcblx0XHRcdG51bGwsXHJcblx0XHRbd2FyZWhvdXNlcywgc2VsZWN0ZWRXYXJlaG91c2VJZF0sXHJcblx0KVxyXG5cclxuXHRjb25zdCBmaWx0ZXJlZFNlbGVjdGVkSXRlbXMgPSB1c2VNZW1vKCgpID0+IHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gc2VsZWN0ZWRXYXJlaG91c2U/Lml0ZW1zIHx8IFtdXHJcblx0XHRjb25zdCBxdWVyeSA9IFN0cmluZyhpdGVtU2VhcmNoVGV4dCB8fCAnJylcclxuXHRcdFx0LnRyaW0oKVxyXG5cdFx0XHQudG9Mb3dlckNhc2UoKVxyXG5cclxuXHRcdGlmICghcXVlcnkpIHtcclxuXHRcdFx0cmV0dXJuIGl0ZW1zXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+XHJcblx0XHRcdFtcclxuXHRcdFx0XHRpdGVtPy5wcm9kdWN0TmFtZSxcclxuXHRcdFx0XHRpdGVtPy5mZWF0dXJlcyxcclxuXHRcdFx0XHRpdGVtPy5zdXBwbGllck5hbWUsXHJcblx0XHRcdFx0aXRlbT8ucmVxdWVzdE51bWJlcixcclxuXHRcdFx0XHRpdGVtPy51bml0LFxyXG5cdFx0XHRdXHJcblx0XHRcdFx0LmpvaW4oJyAnKVxyXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0LmluY2x1ZGVzKHF1ZXJ5KSxcclxuXHRcdClcclxuXHR9LCBbaXRlbVNlYXJjaFRleHQsIHNlbGVjdGVkV2FyZWhvdXNlXSlcclxuXHJcblx0Y29uc3Qgb3BlbldhcmVob3VzZSA9IHdhcmVob3VzZUlkID0+IHtcclxuXHRcdHNldFNlbGVjdGVkV2FyZWhvdXNlSWQod2FyZWhvdXNlSWQpXHJcblx0XHRzeW5jV2FyZWhvdXNlTG9jYXRpb24od2FyZWhvdXNlSWQpXHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZUJhY2tUb0xpc3QgPSAoKSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZFdhcmVob3VzZUlkKCcnKVxyXG5cdFx0c3luY1dhcmVob3VzZUxvY2F0aW9uKCcnKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbG9hZFdhcmVob3VzZXMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG5cdFx0XHRcdHJlc291cmNlSWQ6IGlzTXlXYXJlaG91c2VQYWdlID8gJ015V2FyZWhvdXNlJyA6ICdXYXJlaG91c2VPdmVydmlldycsXHJcblx0XHRcdFx0YWN0aW9uTmFtZTogJ3dhcmVob3VzZU92ZXJ2aWV3JyxcclxuXHRcdFx0fSlcclxuXHRcdFx0Y29uc3QgbmV4dFdhcmVob3VzZXMgPSByZXNwb25zZT8uZGF0YT8ud2FyZWhvdXNlcyB8fCBbXVxyXG5cdFx0XHRjb25zdCByZXF1ZXN0ZWRXYXJlaG91c2VJZCA9IGdldFdhcmVob3VzZUlkRnJvbUxvY2F0aW9uKClcclxuXHRcdFx0Y29uc3Qgc2hvdWxkQXV0b09wZW4gPVxyXG5cdFx0XHRcdGN1cnJlbnRBZG1pbj8ucm9sZSA9PT0gJ3R1emlsbWFsYXInIHx8IG5leHRXYXJlaG91c2VzLmxlbmd0aCA9PT0gMVxyXG5cdFx0XHRjb25zdCBkZWZhdWx0V2FyZWhvdXNlSWQgPSBzaG91bGRBdXRvT3BlblxyXG5cdFx0XHRcdD8gbmV4dFdhcmVob3VzZXNbMF0/LmlkIHx8ICcnXHJcblx0XHRcdFx0OiAnJ1xyXG5cdFx0XHRjb25zdCBuZXh0U2VsZWN0ZWRXYXJlaG91c2VJZCA9IHJlcXVlc3RlZFdhcmVob3VzZUlkIHx8IGRlZmF1bHRXYXJlaG91c2VJZFxyXG5cclxuXHRcdFx0c2V0V2FyZWhvdXNlcyhuZXh0V2FyZWhvdXNlcylcclxuXHRcdFx0c2V0U2VsZWN0ZWRXYXJlaG91c2VJZChjdXJyZW50SWQgPT4ge1xyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdGN1cnJlbnRJZCAmJlxyXG5cdFx0XHRcdFx0bmV4dFdhcmVob3VzZXMuc29tZSh3YXJlaG91c2UgPT4gd2FyZWhvdXNlLmlkID09PSBjdXJyZW50SWQpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gY3VycmVudElkXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gbmV4dFNlbGVjdGVkV2FyZWhvdXNlSWRcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdGlmIChuZXh0U2VsZWN0ZWRXYXJlaG91c2VJZCkge1xyXG5cdFx0XHRcdHN5bmNXYXJlaG91c2VMb2NhdGlvbihuZXh0U2VsZWN0ZWRXYXJlaG91c2VJZClcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0c2V0V2FyZWhvdXNlcyhbXSlcclxuXHRcdFx0c2V0U2VsZWN0ZWRXYXJlaG91c2VJZCgnJylcclxuXHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRtZXNzYWdlOiBlcnJvcj8ucmVzcG9uc2U/LmRhdGE/Lm5vdGljZT8ubWVzc2FnZSB8fCBwYWdlQ29weS5sb2FkRXJyb3IsXHJcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0fSlcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0bG9hZFdhcmVob3VzZXMoKVxyXG5cdH0sIFtdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0SXRlbVNlYXJjaFRleHQoJycpXHJcblx0fSwgW3NlbGVjdGVkV2FyZWhvdXNlSWRdKVxyXG5cclxuXHRpZiAoIWNhblZpZXcpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxCb3g+XHJcblx0XHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0XHQ8SDI+e3BhZ2VDb3B5LnRpdGxlfTwvSDI+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZUJveCB2YXJpYW50PSdkYW5nZXInIG10PSd4bCc+XHJcblx0XHRcdFx0XHRcdDxUZXh0PntwYWdlQ29weS5hY2Nlc3NEZW5pZWR9PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9NZXNzYWdlQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94PlxyXG5cdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHQ8VGV4dCBjb2xvcj0ncHJpbWFyeTEwMCcgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0WmF4aXJhLnV6XHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDxIMj57cGFnZUNvcHkudGl0bGV9PC9IMj5cclxuXHRcdFx0XHQ8VGV4dCBtdD0nc20nIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0e3BhZ2VDb3B5LnN1YnRpdGxlfVxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgLi4uYWN0aW9uQmFyU3R5bGUsIG1hcmdpblRvcDogJzE2cHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdGhyZWY9Jy9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VEaXNwYXRjaFdvcmtzcGFjZSdcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXtuYXZCdXR0b25TdHlsZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnRvRGlzcGF0Y2h9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdHtbJ2FkbWluJywgJ3R1emlsbWFsYXInXS5pbmNsdWRlcyhjdXJyZW50QWRtaW4/LnJvbGUpID8gKFxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdFx0aHJlZj0nL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZVJlY2VpdmVXb3Jrc3BhY2UnXHJcblx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e25hdkJ1dHRvblN0eWxlfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnRvUmVjZWl2ZX1cclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdGhyZWY9Jy9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VPcmRlcldvcmtzcGFjZSdcclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXtuYXZCdXR0b25TdHlsZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3BhZ2VDb3B5LnRvT3JkZXJ9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdHtbJ2FkbWluJywgJ3R1emlsbWFsYXInXS5pbmNsdWRlcyhjdXJyZW50QWRtaW4/LnJvbGUpICYmXHJcblx0XHRcdFx0XHQhaXNNeVdhcmVob3VzZVBhZ2UgPyAoXHJcblx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRhcz0nYSdcclxuXHRcdFx0XHRcdFx0XHRocmVmPScvYWRtaW4vcmVzb3VyY2VzL015V2FyZWhvdXNlJ1xyXG5cdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXtuYXZCdXR0b25TdHlsZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdHtwYWdlQ29weS50b015V2FyZWhvdXNlfVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHR7bG9hZGluZyA/IChcclxuXHRcdFx0XHRcdDxUZXh0PntwYWdlQ29weS5sb2FkaW5nfTwvVGV4dD5cclxuXHRcdFx0XHQpIDogc2VsZWN0ZWRXYXJlaG91c2UgPyAoXHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHRcdHtjdXJyZW50QWRtaW4/LnJvbGUgIT09ICd0dXppbG1hbGFyJyAmJiB3YXJlaG91c2VzLmxlbmd0aCA+IDEgPyAoXHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJ2ZpdC1jb250ZW50JyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlQmFja1RvTGlzdH1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHTihpAge3BhZ2VDb3B5LmJhY2tUb0xpc3R9XHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBmb250U2l6ZT0neGwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkV2FyZWhvdXNlLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IG10PSd4cycgY29sb3I9J2dyZXk2MCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRXYXJlaG91c2UuZGVzY3JpcHRpb24gfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbScgY29sb3I9J2dyZXk2MCc+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkubGFzdFVwZGF0ZWR9OnsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7Zm9ybWF0RGF0ZShzZWxlY3RlZFdhcmVob3VzZS51cGRhdGVkQXQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17c3RhdHNHcmlkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17c3RhdENhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdncmV5NjAnPntwYWdlQ29weS5yb3dzTGFiZWx9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBmb250U2l6ZT0neHhsJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRXYXJlaG91c2UuaXRlbUNvdW50IHx8IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17c3RhdENhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdncmV5NjAnPntwYWdlQ29weS50b3RhbExhYmVsfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9J3h4bCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkV2FyZWhvdXNlLnRvdGFsUXVhbnRpdHkgfHwgMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtzdGF0Q2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9J2dyZXk2MCc+e3BhZ2VDb3B5LnNoaXBtZW50c0xhYmVsfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgZm9udFNpemU9J3h4bCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkV2FyZWhvdXNlLnJlcXVlc3RDb3VudCB8fCAwfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkuc2VsZWN0ZWRUaXRsZX1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkV2FyZWhvdXNlLml0ZW1zPy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtU2VhcmNoVGV4dH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0SXRlbVNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGFnZUNvcHkuaXRlbVNlYXJjaFBsYWNlaG9sZGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IC4uLmZpbHRlcklucHV0U3R5bGUsIG1hcmdpblRvcDogJzhweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveCBtdD0nbGcnIHN0eWxlPXt0YWJsZVdyYXBTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRhYmxlIHN0eWxlPXt0YWJsZVN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT4jPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+VG92YXI8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5YdXN1c2l5YXRsYXJpPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+U29uaTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9Pk1hbmJhPC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+QXJpemE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5LZWxnYW4gc2FuYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZmlsdGVyZWRTZWxlY3RlZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17YCR7aXRlbS5yZXF1ZXN0SWR9LSR7aXRlbS5wcm9kdWN0TmFtZX0tJHtpbmRleH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PntpbmRleCArIDF9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5wcm9kdWN0TmFtZSB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0neHMnIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnVuaXQgfHwgJ2RvbmEnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLmZlYXR1cmVzIHx8ICfigJQnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PntpdGVtLnF1YW50aXR5IHx8IDB9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aXRlbS5zdXBwbGllck5hbWUgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtpdGVtLnJlcXVlc3ROdW1iZXIgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtmb3JtYXREYXRlKGl0ZW0ucmVjZWl2ZWRBdCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2ZpbHRlcmVkU2VsZWN0ZWRJdGVtcy5sZW5ndGggPyBudWxsIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxNZXNzYWdlQm94IHZhcmlhbnQ9J2luZm8nIG10PSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dD57cGFnZUNvcHkuZmlsdGVyZWRJdGVtc0VtcHR5fTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01lc3NhZ2VCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PE1lc3NhZ2VCb3ggdmFyaWFudD0naW5mbycgbXQ9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQ+e3BhZ2VDb3B5Lm5vSXRlbXN9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9NZXNzYWdlQm94PlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5Lmxpc3RUaXRsZX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBjb2xvcj0nZ3JleTYwJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0e3BhZ2VDb3B5Lm9wZW5IaW50fVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3NlYXJjaFRleHR9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNldFNlYXJjaFRleHQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGFnZUNvcHkuc2VhcmNoUGxhY2Vob2xkZXJ9XHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdC4uLmZpbHRlcklucHV0U3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICc0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTZweCcsXHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdHtmaWx0ZXJlZFdhcmVob3VzZXMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3RhYmxlV3JhcFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0YWJsZSBzdHlsZT17dGFibGVTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+IzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+e3BhZ2VDb3B5Lmxpc3RUaXRsZX08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PntwYWdlQ29weS5yb3dzTGFiZWx9PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT57cGFnZUNvcHkudG90YWxMYWJlbH08L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cGFnZUNvcHkuc2hpcG1lbnRzTGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PntwYWdlQ29weS5vcGVuQWN0aW9ufTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtmaWx0ZXJlZFdhcmVob3VzZXMubWFwKCh3YXJlaG91c2UsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXt3YXJlaG91c2UuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uY2xpY2thYmxlUm93U3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogaW5kZXggJSAyID8gJyNmY2ZkZmYnIDogJyNmZmZmZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuV2FyZWhvdXNlKHdhcmVob3VzZS5pZCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17ZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5ID09PSAnICcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wZW5XYXJlaG91c2Uod2FyZWhvdXNlLmlkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17MH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e2luZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJz57d2FyZWhvdXNlLm5hbWV9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IG10PSd4cycgY29sb3I9J2dyZXk2MCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7d2FyZWhvdXNlLmRlc2NyaXB0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dhcmVob3VzZS5pdGVtQ291bnQgfHwgMH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dhcmVob3VzZS50b3RhbFF1YW50aXR5IHx8IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt3YXJlaG91c2UucmVxdWVzdENvdW50IHx8IDB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGNvbG9yPSdwcmltYXJ5MTAwJyBmb250V2VpZ2h0PSdib2xkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlQ29weS5vcGVuQWN0aW9ufSDihpJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8TWVzc2FnZUJveCB2YXJpYW50PSdpbmZvJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0PntwYWdlQ29weS5lbXB0eUxpc3R9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvTWVzc2FnZUJveD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCl9XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXYXJlaG91c2VPdmVydmlld1xyXG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBMb2dpbiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9Mb2dpbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTG9naW4gPSBMb2dpblxuaW1wb3J0IFNpZGViYXJCcmFuZGluZyBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9TaWRlYmFyQnJhbmRpbmcnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlNpZGViYXJCcmFuZGluZyA9IFNpZGViYXJCcmFuZGluZ1xuaW1wb3J0IFRvcEJhciBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9Ub3BCYXInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlRvcEJhciA9IFRvcEJhclxuaW1wb3J0IFpheGlyYURhc2hib2FyZCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYURhc2hib2FyZCA9IFpheGlyYURhc2hib2FyZFxuaW1wb3J0IFpheGlyYVBsYWNlaG9sZGVyUGFnZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QbGFjZWhvbGRlclBhZ2UnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVBsYWNlaG9sZGVyUGFnZSA9IFpheGlyYVBsYWNlaG9sZGVyUGFnZVxuaW1wb3J0IFpheGlyYVB1cmNoYXNlVXNlcnNFZGl0IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlVXNlcnNFZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZVVzZXJzRWRpdCA9IFpheGlyYVB1cmNoYXNlVXNlcnNFZGl0XG5pbXBvcnQgWmF4aXJhUHVyY2hhc2VJdGVtc0VkaXQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VJdGVtc0VkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVB1cmNoYXNlSXRlbXNFZGl0ID0gWmF4aXJhUHVyY2hhc2VJdGVtc0VkaXRcbmltcG9ydCBaYXhpcmFQdXJjaGFzZURvd25sb2FkQWN0aW9uIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlRG93bmxvYWRBY3Rpb24nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVB1cmNoYXNlRG93bmxvYWRBY3Rpb24gPSBaYXhpcmFQdXJjaGFzZURvd25sb2FkQWN0aW9uXG5pbXBvcnQgWmF4aXJhUHVyY2hhc2VBcHByb3ZhbEFjdGlvbiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZUFwcHJvdmFsQWN0aW9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZUFwcHJvdmFsQWN0aW9uID0gWmF4aXJhUHVyY2hhc2VBcHByb3ZhbEFjdGlvblxuaW1wb3J0IFpheGlyYVB1cmNoYXNlUmVxdWVzdExpc3RWYWx1ZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVB1cmNoYXNlUmVxdWVzdExpc3RWYWx1ZSA9IFpheGlyYVB1cmNoYXNlUmVxdWVzdExpc3RWYWx1ZVxuaW1wb3J0IFpheGlyYVB1cmNoYXNlUmVxdWVzdFNob3cgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VSZXF1ZXN0U2hvdydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuWmF4aXJhUHVyY2hhc2VSZXF1ZXN0U2hvdyA9IFpheGlyYVB1cmNoYXNlUmVxdWVzdFNob3dcbmltcG9ydCBaYXhpcmFQdXJjaGFzZU9yZGVyV29ya3NwYWNlIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlT3JkZXJXb3Jrc3BhY2UnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVB1cmNoYXNlT3JkZXJXb3Jrc3BhY2UgPSBaYXhpcmFQdXJjaGFzZU9yZGVyV29ya3NwYWNlXG5pbXBvcnQgWmF4aXJhUHVyY2hhc2VEaXNwYXRjaFdvcmtzcGFjZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlID0gWmF4aXJhUHVyY2hhc2VEaXNwYXRjaFdvcmtzcGFjZVxuaW1wb3J0IFpheGlyYVB1cmNoYXNlUmVjZWl2ZVdvcmtzcGFjZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZVJlY2VpdmVXb3Jrc3BhY2UnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVB1cmNoYXNlUmVjZWl2ZVdvcmtzcGFjZSA9IFpheGlyYVB1cmNoYXNlUmVjZWl2ZVdvcmtzcGFjZVxuaW1wb3J0IFpheGlyYVdhcmVob3VzZU92ZXJ2aWV3IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1dhcmVob3VzZU92ZXJ2aWV3J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFXYXJlaG91c2VPdmVydmlldyA9IFpheGlyYVdhcmVob3VzZU92ZXJ2aWV3Il0sIm5hbWVzIjpbInNoZWxsU3R5bGUiLCJiYWNrZ3JvdW5kIiwiY2FyZFN0eWxlIiwiYm9yZGVyIiwiYmFja2Ryb3BGaWx0ZXIiLCJmaWVsZElucHV0U3R5bGUiLCJ3aWR0aCIsIm1pbkhlaWdodCIsInBhc3N3b3JkV3JhcFN0eWxlIiwicG9zaXRpb24iLCJwYXNzd29yZFRvZ2dsZVN0eWxlIiwidG9wIiwicmlnaHQiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJwYWRkaW5nIiwiRXllSWNvbiIsIm9wZW4iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiY3giLCJjeSIsInIiLCJyZXNvbHZlTWVzc2FnZSIsIm1lc3NhZ2UiLCJ0cmFuc2xhdGVNZXNzYWdlIiwic3BsaXQiLCJsZW5ndGgiLCJMb2dpbiIsInByb3BzIiwid2luZG93IiwiX19BUFBfU1RBVEVfXyIsImFjdGlvbiIsImVycm9yTWVzc2FnZSIsInRyYW5zbGF0ZUNvbXBvbmVudCIsInVzZVRyYW5zbGF0aW9uIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwidXNlU3RhdGUiLCJlbWFpbExhYmVsIiwicGFzc3dvcmRMYWJlbCIsInBhc3N3b3JkVG9nZ2xlTGFiZWwiLCJCb3giLCJ2YXJpYW50IiwicCIsInN0eWxlIiwiYXMiLCJtZXRob2QiLCJiZyIsImJveFNoYWRvdyIsIm1iIiwiVGV4dCIsImZvbnRXZWlnaHQiLCJIMiIsIm10IiwiTWVzc2FnZUJveCIsIm15IiwiRm9ybUdyb3VwIiwiTGFiZWwiLCJyZXF1aXJlZCIsIklucHV0IiwibmFtZSIsImF1dG9Gb2N1cyIsImF1dG9Db21wbGV0ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsInBhZGRpbmdSaWdodCIsIm9uQ2xpY2siLCJjdXJyZW50VmFsdWUiLCJ0aXRsZSIsIkJ1dHRvbiIsIlNpZGViYXJCcmFuZGluZyIsIkxpbmsiLCJ0byIsInB4IiwicHQiLCJwYiIsInRleHREZWNvcmF0aW9uIiwiZ2FwIiwiZmxleFNocmluayIsIkljb24iLCJpY29uIiwic2l6ZSIsImZsZXgiLCJmb250U2l6ZSIsIm9wYWNpdHkiLCJUb3BCYXIiLCJ0b2dnbGVTaWRlYmFyIiwiY3VycmVudEFkbWluIiwidXNlQ3VycmVudEFkbWluIiwicHJvZmlsZUxpbmsiLCJpZCIsImkxOG4iLCJsYW5ndWFnZSIsIm9wdGlvbnMiLCJzdXBwb3J0ZWRMbmdzIiwiY2hhbmdlTGFuZ3VhZ2UiLCJ0cmFuc2xhdGVCdXR0b24iLCJhdmFpbGFibGVMYW5ndWFnZXMiLCJ1c2VNZW1vIiwiZmlsdGVyIiwibGFuZyIsImJvcmRlckJvdHRvbSIsImZsZXhXcmFwIiwicHkiLCJyb3dHYXAiLCJjb2x1bW5HYXAiLCJEcm9wRG93biIsIkRyb3BEb3duVHJpZ2dlciIsImRlZmF1bHRWYWx1ZSIsIkRyb3BEb3duTWVudSIsIm1hcCIsIkRyb3BEb3duSXRlbSIsImtleSIsImhyZWYiLCJtaW5XaWR0aCIsIm1yIiwic2lkZWJhclBhZ2VzIiwibGFiZWwiLCJzaG9ydFV6Iiwic2hvcnRSdSIsInJlc291cmNlTGluayIsInBhZ2VNYXAiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsInBhZ2UiLCJEYXNoYm9hcmQiLCJ2aXNpYmxlUGFnZXMiLCJpbmNsdWRlcyIsInJvbGUiLCJ1c2VybmFtZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJQbGFjZWhvbGRlclBhZ2UiLCJwYWdlTmFtZSIsInVzZVBhcmFtcyIsInByb2ZpbGVTaG93TGluayIsInByb2ZpbGVFZGl0TGluayIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwib3JnYW5pemF0aW9uTmFtZSIsInBob25lTnVtYmVyIiwiYXBpIiwiQXBpQ2xpZW50IiwicGFyc2VTZWxlY3RlZFVzZXJzIiwidmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJpdGVtIiwiU3RyaW5nIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwicmVzb2x2ZVN0cnVjdHVyZUxhYmVsIiwidXNlciIsInBhcmFtcyIsImRpc3BsYXlOYW1lIiwicmVzb2x2ZUFwcHJvdmVyTGFiZWwiLCJmdWxsTmFtZSIsIkJvb2xlYW4iLCJqb2luIiwidHJpbSIsIml0ZW1TdHlsZSIsImNoZWNrZWQiLCJlcnJvclRleHRTdHlsZSIsInNlbGVjdFN0eWxlIiwiUHVyY2hhc2VVc2Vyc0VkaXQiLCJwcm9wZXJ0eSIsInJlY29yZCIsIm9uQ2hhbmdlIiwidXNlcnMiLCJzZXRVc2VycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidGV4dCIsImRlc2NyaXB0aW9uIiwiYXBwcm92ZXJMYWJlbCIsImFwcHJvdmVyRGVzY3JpcHRpb24iLCJhcHByb3ZlclBsYWNlaG9sZGVyIiwiZW1wdHkiLCJhcHByb3ZlckVtcHR5Iiwic2VsZWN0ZWRVc2VycyIsInBhdGgiLCJzZWxlY3RlZEFwcHJvdmVyIiwiYXBwcm92ZXIiLCJzZWxlY3RlZFVzZXJzRXJyb3IiLCJlcnJvcnMiLCJhcHByb3ZlckVycm9yIiwic3RydWN0dXJlVXNlcnMiLCJtb25pdG9yaW5nVXNlcnMiLCJ1c2VFZmZlY3QiLCJpc0FjdGl2ZSIsImxvYWRVc2VycyIsInJlc3BvbnNlIiwicmVzb3VyY2VBY3Rpb24iLCJyZXNvdXJjZUlkIiwiYWN0aW9uTmFtZSIsInBlclBhZ2UiLCJkYXRhIiwicmVjb3JkcyIsInRvZ2dsZVVzZXIiLCJ1c2VySWQiLCJuZXh0VXNlcnMiLCJzdHJpbmdpZnkiLCJzZWxlY3RBcHByb3ZlciIsImlzUmVxdWlyZWQiLCJldmVudCIsInRhcmdldCIsIlVOSVRfT1BUSU9OUyIsIkVNUFRZX0lURU0iLCJwcm9kdWN0TmFtZSIsImZlYXR1cmVzIiwidW5pdCIsInF1YW50aXR5IiwicGFyc2VJdGVtcyIsIlB1cmNoYXNlSXRlbXNFZGl0IiwicmVtb3ZlIiwiYWRkIiwiaXRlbXMiLCJ1cGRhdGVJdGVtcyIsIm5leHRJdGVtcyIsInVwZGF0ZUZpZWxkIiwiaW5kZXgiLCJmaWVsZCIsImN1cnJlbnRJbmRleCIsIk51bWJlciIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwiXyIsInJvd3MiLCJyZXNpemUiLCJtaW4iLCJQdXJjaGFzZURvd25sb2FkQWN0aW9uIiwiZm9ybWF0IiwiY3VzdG9tIiwiZXh0ZW5zaW9uIiwicmVjb3JkSWQiLCJkb3dubG9hZFVybCIsImJhY2tVcmwiLCJ0b1VwcGVyQ2FzZSIsImRvd25sb2FkQWdhaW4iLCJnb0JhY2siLCJ1bmRlZmluZWQiLCJpZnJhbWUiLCJkb2N1bWVudCIsInNyYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJERUNJU0lPTlMiLCJwYXJzZUhpc3RvcnkiLCJvcHRpb25TdHlsZSIsInNlbGVjdGVkIiwidGV4dGFyZWFTdHlsZSIsImZvbnRGYW1pbHkiLCJnZXREZWNpc2lvbk9wdGlvbk1ldGEiLCJkZWNpc2lvbiIsInRhc2RpcWxhbmRpIiwicmVzb2x2ZVN0YWdlTGFiZWwiLCJzdGFnZSIsInN0YWdlTW9uaXRvcmluZyIsInN0YWdlRmluaXNoZWQiLCJzdGFnZVN0cnVjdHVyZXMiLCJyZXNvbHZlSGlzdG9yeVN0YWdlIiwic3RhZ2VNb25pdG9yaW5nU2hvcnQiLCJzdGFnZUZpbmlzaGVkU2hvcnQiLCJzdGFnZVN0cnVjdHVyZXNTaG9ydCIsImZvcm1hdERhdGUiLCJkYXRlIiwiRGF0ZSIsImlzTmFOIiwiZ2V0VGltZSIsInBhZCIsIm51bWJlciIsInBhZFN0YXJ0IiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJQdXJjaGFzZUFwcHJvdmFsQWN0aW9uIiwicmVzb3VyY2UiLCJhZGROb3RpY2UiLCJ1c2VOb3RpY2UiLCJzZXREZWNpc2lvbiIsImNvbW1lbnQiLCJzZXRDb21tZW50Iiwic2F2aW5nIiwic2V0U2F2aW5nIiwic3VidGl0bGUiLCJzdGF0dXMiLCJzdW1tYXJ5Iiwibm9TdW1tYXJ5IiwiZGVjaXNpb25MYWJlbCIsImNvbW1lbnRMYWJlbCIsImNvbW1lbnRPcHRpb25hbCIsImNvbW1lbnRSZXF1aXJlZCIsImNvbW1lbnRSZXF1aXJlZEVycm9yIiwic3VibWl0IiwiYmFjayIsImhpc3RvcnlUaXRsZSIsInNhdmVFcnJvciIsImhpc3RvcnkiLCJhcHByb3ZhbEhpc3RvcnkiLCJzbGljZSIsInJldmVyc2UiLCJuZWVkc0NvbW1lbnQiLCJzdWJtaXREZWNpc2lvbiIsInJlY29yZEFjdGlvbiIsIm5vdGljZSIsImxvY2F0aW9uIiwicmVkaXJlY3RVcmwiLCJlcnJvciIsImN1cnJlbnRTdGFnZSIsImFwcHJvdmFsU3VtbWFyeSIsIm9wdGlvbiIsIm1ldGEiLCJkaXNhYmxlZCIsImVudHJ5IiwiZGVjaWRlZEF0IiwidXNlck5hbWUiLCJjb21wYWN0U3R5bGUiLCJtYXhXaWR0aCIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsImNvbW1lbnRTdHlsZSIsImxpbmVIZWlnaHQiLCJXZWJraXRCb3hPcmllbnQiLCJXZWJraXRMaW5lQ2xhbXAiLCJkZXRhaWxDYXJkU3R5bGUiLCJtYXJnaW4iLCJib3hTaXppbmciLCJub3RlQ2FyZFN0eWxlIiwid29yZEJyZWFrIiwic2VjdGlvblRpdGxlU3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJoZWxwZXJUZXh0U3R5bGUiLCJjaGlwV3JhcFN0eWxlIiwibWFyZ2luVG9wIiwiY2hpcFN0eWxlIiwidGFibGVXcmFwU3R5bGUiLCJvdmVyZmxvd1giLCJ0YWJsZVN0eWxlIiwiYm9yZGVyQ29sbGFwc2UiLCJ0YWJsZUhlYWRDZWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJ0YWJsZUNlbGxTdHlsZSIsInZlcnRpY2FsQWxpZ24iLCJzdGF0dXNCYWRnZUJhc2VTdHlsZSIsInBhcnNlQXJyYXkiLCJnZXRJdGVtc0NvdW50TGFiZWwiLCJjb3VudCIsImdldFNlbGVjdGVkVXNlcnNDb3VudExhYmVsIiwibm9ybWFsaXplVGV4dCIsInJlcGxhY2UiLCJub3JtYWxpemVEZXRhaWxlZFRleHQiLCJzcGxpdE5hbWVzIiwiZ2V0Q3VycmVudEN5Y2xlSGlzdG9yeSIsImVudHJpZXMiLCJsYXN0UmVzdWJtaXR0ZWRJbmRleCIsInRvTG93ZXJDYXNlIiwibGFzdEluZGV4T2YiLCJmb3JtYXREYXRlVGltZSIsImdldExvY2FsaXplZFZhbHVlIiwibm9ybWFsaXplZFZhbHVlIiwibGFiZWxzIiwidGFzZGlxbGFubW9xZGEiLCJ0YXNkaXFsYW5nYW4iLCJ0dXppbG1hbGFyIiwibW9uaXRvcmluZyIsInNvdGliX29saXNoIiwieWFrdW5sYW5kaSIsImdldFN0YXR1c1N0eWxlIiwiZ2V0QXBwcm92YWxTaG9ydExhYmVsIiwic3VmZml4IiwiZGlyZWN0TWF0Y2giLCJtYXRjaCIsInNlbGVjdGVkVXNlcnNDb3VudCIsInJldmlld2VkQ291bnQiLCJzdHJ1Y3R1cmVBcHByb3ZhbHMiLCJnZXRSZXF1ZXN0TnVtYmVyTGFiZWwiLCJyYXdEYXRlIiwiY3JlYXRlZEF0IiwiZmFsbGJhY2tEYXRlIiwidG9JU09TdHJpbmciLCJpZFBhcnQiLCJnZXREZWNpc2lvbk1ldGEiLCJub3JtYWxpemVkRGVjaXNpb24iLCJwZW5kaW5nIiwid2FpdGluZyIsInN5bWJvbCIsImdldEFwcHJvdmFsUm93cyIsInNlbGVjdGVkTmFtZXMiLCJzZWxlY3RlZFVzZXJOYW1lcyIsImN1cnJlbnRDeWNsZUhpc3RvcnkiLCJhcHByb3ZhbE1hcCIsIk1hcCIsImZvckVhY2giLCJzZXQiLCJiYXNlUm93cyIsImFwcHJvdmFsIiwiZ2V0IiwibGFzdEFwcHJvdmVyRW50cnkiLCJmaW5kIiwibm9ybWFsaXplZFN0YXR1cyIsImhhc1N0cnVjdHVyZVJlamVjdGlvbiIsInNvbWUiLCJhcHByb3ZlclN0YXRlIiwicHVzaCIsImFwcHJvdmVyTmFtZSIsInJlbmRlclNob3dWYWx1ZSIsInBvcHVsYXRlZCIsImxldHRlclNwYWNpbmciLCJyZXF1ZXN0TnVtYmVyIiwibmFtZXMiLCJjb2xTcGFuIiwicm93IiwiY3JlYXRlZEJ5IiwiUHVyY2hhc2VSZXF1ZXN0TGlzdFZhbHVlIiwid2hlcmUiLCJpc1Nob3ciLCJpdGVtc1N1bW1hcnkiLCJsb2NhbGl6ZWRWYWx1ZSIsInRvb2x0aXAiLCJwYXJzZUJ1eWVyT3JkZXJEYXRhIiwiZ2V0UmVxdWVzdE51bWJlciIsImdldExvY2FsaXplZFN0YXR1cyIsIm5vcm1hbGl6ZWQiLCJzdGF0dXNMYWJlbHMiLCJnZXRMb2NhbGl6ZWRTdGFnZSIsInN0YWdlTGFiZWxzIiwiZ2V0U3RhdHVzQmFkZ2VTdHlsZSIsImFwcHJvdmVyRW50cnkiLCJQdXJjaGFzZVJlcXVlc3RTaG93Iiwic3RydWN0dXJlTmFtZXMiLCJhcHByb3ZhbFJvd3MiLCJidXllck9yZGVyIiwiYnV5ZXJPcmRlckRhdGEiLCJidXllckRvY3VtZW50cyIsImRvY3VtZW50cyIsIm9yaWdpbmFsSXRlbXMiLCJzdGF0dXNTdHlsZSIsInN0YWdlU3R5bGUiLCJyZXF1ZXN0Tm8iLCJjcmVhdG9yIiwidXBkYXRlZEF0Iiwic3RydWN0dXJlcyIsImxhc3RDb21tZW50IiwidGFibGVBcHByb3ZhbCIsIm1hcmsiLCJjb21tZW50Q29sIiwidGltZSIsInByb2R1Y3QiLCJxdHkiLCJwcm9jdXJlbWVudCIsInN1cHBsaWVyIiwic2F2ZWRCeSIsImNoYW5nZU5vdGljZSIsInN1cHBsaWVyTmFtZSIsInNhdmVkQXQiLCJ1cmwiLCJyZWwiLCJmaWxlTmFtZSIsImNoYW5nZU5vdGUiLCJpbnB1dFN0eWxlIiwidGV4dEFyZWFTdHlsZSIsIm5ld0JhZGdlU3R5bGUiLCJxdWV1ZVR5cGVCYWRnZVN0eWxlIiwic3RhdHVzRG90U3R5bGUiLCJQQUdFX1NJWkUiLCJyb3dJbnRlcmFjdGl2ZVN0eWxlIiwidHJhbnNpdGlvbiIsImRldGFpbEdyaWRTdHlsZSIsImNyZWF0ZURvY3VtZW50Um93Iiwibm93IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwibWltZVR5cGUiLCJjb250ZW50IiwidG9EYXRhVXJsIiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsIm9uZXJyb3IiLCJFcnJvciIsInJlYWRBc0RhdGFVUkwiLCJHRU5FUklDX1ZBTElEQVRJT05fTk9USUNFIiwiZXh0cmFjdFdvcmtzcGFjZU1lc3NhZ2UiLCJmYWxsYmFja01lc3NhZ2UiLCJmaWVsZE1lc3NhZ2VzIiwidmFsdWVzIiwiYmFzZUVycm9yTWVzc2FnZSIsImJhc2VFcnJvciIsIm5vdGljZU1lc3NhZ2UiLCJtZXNzYWdlcyIsIlNldCIsIm5vcm1hbGl6ZU9yZGVyRG9jdW1lbnRzIiwiZ2V0Q2xpZW50VmFsaWRhdGlvbk1lc3NhZ2UiLCJyZXF1ZXN0SWQiLCJ2YWxpZEl0ZW1zIiwiUHVyY2hhc2VPcmRlcldvcmtzcGFjZSIsInNldFJlY29yZHMiLCJvcmRlcmVkUmVjb3JkcyIsInNldE9yZGVyZWRSZWNvcmRzIiwiYXZhaWxhYmxlVW5pdHMiLCJzZXRBdmFpbGFibGVVbml0cyIsInNlbGVjdGVkUmVxdWVzdElkIiwic2V0U2VsZWN0ZWRSZXF1ZXN0SWQiLCJzZXRJdGVtcyIsInNldFN1cHBsaWVyTmFtZSIsInNldERvY3VtZW50cyIsInNob3dDcmVhdGVGb3JtIiwic2V0U2hvd0NyZWF0ZUZvcm0iLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJjYW5WaWV3IiwiY2FuRWRpdCIsImFwcGx5U2VlblN0YXRlIiwibGlzdCIsImlzTmV3IiwibGFzdFZpZXdlZEF0IiwibGFzdFZpZXdlZEJ5IiwibGFzdFZpZXdlZFJvbGUiLCJtYXJrUmVjb3JkU2VlbiIsInRhcmdldFJlY29yZCIsImN1cnJlbnRSZWNvcmRzIiwib3BlblJlcXVlc3QiLCJhc3NpZ24iLCJhcHBseVJlY29yZCIsInNhdmVkSXRlbXMiLCJtYXgiLCJzYXZlZERvY3VtZW50cyIsImxvYWRXb3Jrc3BhY2UiLCJwcmVmZXJyZWRSZXF1ZXN0SWQiLCJuZXh0UmVjb3JkcyIsIm5leHRPcmRlcmVkUmVjb3JkcyIsIm5leHRVbml0cyIsInF1ZXVlUmVjb3JkcyIsInJlc29sdmVkUmVxdWVzdElkIiwicmVzb2x2ZWRSZWNvcmQiLCJpbml0aWFsUmVxdWVzdElkIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiY29tYmluZWRSZWNvcmRzIiwicmVjb3JkTWFwIiwiZ2V0VGltZXN0YW1wIiwibm90aWZpY2F0aW9uVXBkYXRlZEF0IiwiZnJvbSIsInNvcnQiLCJsZWZ0IiwiZmlsdGVyZWRSZWNvcmRzIiwicXVlcnkiLCJpdGVtVGV4dCIsInNlYXJjaGFibGVUZXh0IiwiYWxsUXVldWVSZWNvcmRzIiwic2VsZWN0ZWRSZWNvcmQiLCJzZWxlY3RlZFJlY29yZElzRGlzcGF0Y2hlZCIsIndhcmVob3VzZURpc3BhdGNoRGF0YSIsImRpc3BhdGNoZWRBdCIsImNhbkVkaXRTZWxlY3RlZFJlY29yZCIsInRvdGFsUGFnZXMiLCJjZWlsIiwiY3VycmVudCIsInVwZGF0ZUl0ZW0iLCJjdXJyZW50SXRlbXMiLCJ1cGRhdGVEb2N1bWVudCIsImN1cnJlbnREb2N1bWVudHMiLCJoYW5kbGVDbG9zZU5ld09yZGVyIiwiaGFuZGxlRmlsZUNoYW5nZSIsImZpbGVzIiwiYWRkRG9jdW1lbnRSb3ciLCJyZW1vdmVEb2N1bWVudFJvdyIsIm5leHREb2N1bWVudHMiLCJzYXZlT3JkZXIiLCJub3JtYWxpemVkRG9jdW1lbnRzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VOb3RpY2UiLCJyZXNwb25zZU1lc3NhZ2UiLCJyZW5kZXJRdWV1ZVRhYmxlIiwiZW1wdHlUZXh0Iiwic2FmZVBhZ2UiLCJzdGFydEluZGV4IiwicGFnaW5hdGVkUm93cyIsInJvd0RhdGUiLCJoYXNTYXZlZE9yZGVyIiwidHlwZU1ldGEiLCJkb3RDb2xvciIsImJvcmRlckNvbG9yIiwiZmxleERpcmVjdGlvbiIsIlBhZ2luYXRpb24iLCJ0b3RhbCIsIkZyYWdtZW50Iiwid2FyZWhvdXNlTmFtZSIsImFjdGlvbkJhclN0eWxlIiwibmF2QnV0dG9uU3R5bGUiLCJ0YWJzV3JhcFN0eWxlIiwicGFkZGluZ0JvdHRvbSIsInRhYkJ1dHRvblN0eWxlIiwiZXh0cmFjdE1lc3NhZ2UiLCJQdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlIiwicGFnZUNvcHkiLCJ0b09yZGVyIiwidG9SZWNlaXZlIiwidG9XYXJlaG91c2VzIiwicmVhZHlUaXRsZSIsInJlYWR5RGVzY3JpcHRpb24iLCJyZWFkeUVtcHR5Iiwic2VsZWN0QWN0aW9uIiwic2VsZWN0ZWRPcmRlciIsInNvdXJjZSIsIndhcmVob3VzZUxhYmVsIiwid2FyZWhvdXNlUGxhY2Vob2xkZXIiLCJwaWNrT3JkZXIiLCJzZW5kQnV0dG9uIiwic2VudEhpc3RvcnkiLCJzZW50RGVzY3JpcHRpb24iLCJzZW50RW1wdHkiLCJ3YXJlaG91c2VDb2x1bW4iLCJyZWFkT25seUluZm8iLCJhY2Nlc3NEZW5pZWQiLCJkZXRhaWxIaW50Iiwic2VudEluZm8iLCJmaWx0ZXJQbGFjZWhvbGRlciIsInNlbnRSZWNvcmRzIiwic2V0U2VudFJlY29yZHMiLCJ3YXJlaG91c2VzIiwic2V0V2FyZWhvdXNlcyIsInNlbGVjdGVkV2FyZWhvdXNlSWQiLCJzZXRTZWxlY3RlZFdhcmVob3VzZUlkIiwic2hvd0Rpc3BhdGNoRm9ybSIsInNldFNob3dEaXNwYXRjaEZvcm0iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJyZWFkeVBhZ2UiLCJzZXRSZWFkeVBhZ2UiLCJzZW50UGFnZSIsInNldFNlbnRQYWdlIiwicmVhZHlGaWx0ZXJUZXh0Iiwic2V0UmVhZHlGaWx0ZXJUZXh0Iiwic2VudEZpbHRlclRleHQiLCJzZXRTZW50RmlsdGVyVGV4dCIsImFsbFJlY29yZHMiLCJmaWx0ZXJSb3dzIiwibm9ybWFsaXplZFF1ZXJ5IiwiaXRlbXNUZXh0IiwiZmlsdGVyZWRSZWFkeVJlY29yZHMiLCJmaWx0ZXJlZFNlbnRSZWNvcmRzIiwidG90YWxSZWFkeVBhZ2VzIiwidG90YWxTZW50UGFnZXMiLCJuZXh0U2VudFJlY29yZHMiLCJuZXh0V2FyZWhvdXNlcyIsImNvbWJpbmVkIiwibmV4dFNlbGVjdGVkSWQiLCJuZXh0U2VsZWN0ZWRSZWNvcmQiLCJ3YXJlaG91c2VJZCIsIm9wZW5SZWNvcmQiLCJoYW5kbGVDbG9zZURpc3BhdGNoRm9ybSIsImhhbmRsZVNlbmQiLCJyZW5kZXJUYWJsZSIsInNob3dXYXJlaG91c2UiLCJzZXRQYWdlIiwic3VibWl0dGVkQXQiLCJuZXh0UGFnZSIsInJlYWRPbmx5Iiwid2FyZWhvdXNlIiwiUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlIiwidG9EaXNwYXRjaCIsInJlY2VpdmVkVGl0bGUiLCJyZWNlaXZlZERlc2NyaXB0aW9uIiwicmVjZWl2ZWRFbXB0eSIsInJlY2VpdmVCdXR0b24iLCJyZWNlaXZpbmdCdXR0b24iLCJhbHJlYWR5UmVjZWl2ZWQiLCJyZWNlaXZlZFJlY29yZHMiLCJzZXRSZWNlaXZlZFJlY29yZHMiLCJzaG93UmVjZWl2ZUZvcm0iLCJzZXRTaG93UmVjZWl2ZUZvcm0iLCJoaXN0b3J5UGFnZSIsInNldEhpc3RvcnlQYWdlIiwiaGlzdG9yeUZpbHRlclRleHQiLCJzZXRIaXN0b3J5RmlsdGVyVGV4dCIsImZpbHRlcmVkSGlzdG9yeVJlY29yZHMiLCJ0b3RhbEhpc3RvcnlQYWdlcyIsIm5leHRSZWNlaXZlZFJlY29yZHMiLCJoYW5kbGVDbG9zZSIsImhhbmRsZVJlY2VpdmUiLCJyZWNlaXZlZEF0IiwiZmlsdGVySW5wdXRTdHlsZSIsInN0YXRzR3JpZFN0eWxlIiwic3RhdENhcmRTdHlsZSIsImNsaWNrYWJsZVJvd1N0eWxlIiwiZ2V0V2FyZWhvdXNlSWRGcm9tTG9jYXRpb24iLCJzeW5jV2FyZWhvdXNlTG9jYXRpb24iLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJkZWxldGUiLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsIldhcmVob3VzZU92ZXJ2aWV3IiwiaXNNeVdhcmVob3VzZVBhZ2UiLCJ0b015V2FyZWhvdXNlIiwibGlzdFRpdGxlIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJlbXB0eUxpc3QiLCJvcGVuSGludCIsIm9wZW5BY3Rpb24iLCJiYWNrVG9MaXN0Iiwic2VsZWN0ZWRUaXRsZSIsImxhc3RVcGRhdGVkIiwibm9JdGVtcyIsIml0ZW1TZWFyY2hQbGFjZWhvbGRlciIsImZpbHRlcmVkSXRlbXNFbXB0eSIsInBpY2tXYXJlaG91c2UiLCJsb2FkRXJyb3IiLCJpdGVtU2VhcmNoVGV4dCIsInNldEl0ZW1TZWFyY2hUZXh0IiwiZmlsdGVyZWRXYXJlaG91c2VzIiwic2VsZWN0ZWRXYXJlaG91c2UiLCJmaWx0ZXJlZFNlbGVjdGVkSXRlbXMiLCJvcGVuV2FyZWhvdXNlIiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUJhY2tUb0xpc3QiLCJsb2FkV2FyZWhvdXNlcyIsInJlcXVlc3RlZFdhcmVob3VzZUlkIiwic2hvdWxkQXV0b09wZW4iLCJkZWZhdWx0V2FyZWhvdXNlSWQiLCJuZXh0U2VsZWN0ZWRXYXJlaG91c2VJZCIsImN1cnJlbnRJZCIsInJvd3NMYWJlbCIsIml0ZW1Db3VudCIsInRvdGFsTGFiZWwiLCJ0b3RhbFF1YW50aXR5Iiwic2hpcG1lbnRzTGFiZWwiLCJyZXF1ZXN0Q291bnQiLCJvbktleURvd24iLCJwcmV2ZW50RGVmYXVsdCIsInRhYkluZGV4IiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiWmF4aXJhRGFzaGJvYXJkIiwiWmF4aXJhUGxhY2Vob2xkZXJQYWdlIiwiWmF4aXJhUHVyY2hhc2VVc2Vyc0VkaXQiLCJaYXhpcmFQdXJjaGFzZUl0ZW1zRWRpdCIsIlpheGlyYVB1cmNoYXNlRG93bmxvYWRBY3Rpb24iLCJaYXhpcmFQdXJjaGFzZUFwcHJvdmFsQWN0aW9uIiwiWmF4aXJhUHVyY2hhc2VSZXF1ZXN0TGlzdFZhbHVlIiwiWmF4aXJhUHVyY2hhc2VSZXF1ZXN0U2hvdyIsIlpheGlyYVB1cmNoYXNlT3JkZXJXb3Jrc3BhY2UiLCJaYXhpcmFQdXJjaGFzZURpc3BhdGNoV29ya3NwYWNlIiwiWmF4aXJhUHVyY2hhc2VSZWNlaXZlV29ya3NwYWNlIiwiWmF4aXJhV2FyZWhvdXNlT3ZlcnZpZXciXSwibWFwcGluZ3MiOiI7OztDQWFBLE1BQU1BLFVBQVUsR0FBRztDQUNsQkMsRUFBQUEsVUFBVSxFQUFFO0NBQ2IsQ0FBQztDQUVELE1BQU1DLFdBQVMsR0FBRztDQUNqQkMsRUFBQUEsTUFBTSxFQUFFLG1CQUFtQjtDQUMzQkMsRUFBQUEsY0FBYyxFQUFFO0NBQ2pCLENBQUM7Q0FFRCxNQUFNQyxlQUFlLEdBQUc7Q0FDdkJDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0NBQ2JDLEVBQUFBLFNBQVMsRUFBRTtDQUNaLENBQUM7Q0FFRCxNQUFNQyxpQkFBaUIsR0FBRztDQUN6QkMsRUFBQUEsUUFBUSxFQUFFO0NBQ1gsQ0FBQztDQUVELE1BQU1DLG1CQUFtQixHQUFHO0NBQzNCRCxFQUFBQSxRQUFRLEVBQUUsVUFBVTtDQUNwQkUsRUFBQUEsR0FBRyxFQUFFLEtBQUs7Q0FDVkMsRUFBQUEsS0FBSyxFQUFFLEtBQUs7Q0FDWkMsRUFBQUEsU0FBUyxFQUFFLGtCQUFrQjtDQUM3QkMsRUFBQUEsT0FBTyxFQUFFLGFBQWE7Q0FDdEJDLEVBQUFBLFVBQVUsRUFBRSxRQUFRO0NBQ3BCQyxFQUFBQSxjQUFjLEVBQUUsUUFBUTtDQUN4QlYsRUFBQUEsS0FBSyxFQUFFLE1BQU07Q0FDYlcsRUFBQUEs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
