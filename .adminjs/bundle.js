(function (designSystem, adminjs, react, reactRouterDom, reactRouter) {
	'use strict';

	const shellStyle = {
	  background: 'linear-gradient(135deg, #f8fbff 0%, #eef6ff 45%, #f8fafc 100%)'
	};
	const cardStyle$2 = {
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
	    style: cardStyle$2
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
	    gap: "default",
	    px: "lg",
	    py: "default"
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
	    gap: "default"
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
	    variant: "outlined"
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "User",
	    mr: "sm"
	  }), "Mening profilim"), /*#__PURE__*/React.createElement(designSystem.Box, {
	    width: "8px"
	  }), /*#__PURE__*/React.createElement(designSystem.Button, {
	    as: "a",
	    href: "/admin/logout",
	    variant: "outlined"
	  }, /*#__PURE__*/React.createElement(designSystem.Icon, {
	    icon: "LogOut",
	    mr: "sm"
	  }), "Chiqish")));
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
	sidebarPages.filter(page => page.id !== 'foydalanuvchilar' && page.id !== 'mening-profilim' && page.id !== 'xarid-uchun-ariza' && page.id !== 'arizalarni-tasdiqlash' && page.id !== 'buyurtma-qilish');

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

	const api$2 = new adminjs.ApiClient();
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
	        const response = await api$2.resourceAction({
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

	const api$1 = new adminjs.ApiClient();
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
	const formatDate$1 = value => {
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
	      const response = await api$1.recordAction({
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
	  }, resolveHistoryStage(entry.stage, text), " \xB7", ' ', formatDate$1(entry.decidedAt)), entry.comment ? /*#__PURE__*/React.createElement(designSystem.Text, {
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
	const tableWrapStyle$1 = {
	  width: '100%',
	  overflowX: 'auto',
	  marginTop: '8px'
	};
	const tableStyle$1 = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  fontSize: '13px'
	};
	const tableHeadCellStyle$1 = {
	  padding: '10px 12px',
	  textAlign: 'left',
	  background: '#f8fafc',
	  color: '#334155',
	  fontWeight: 700,
	  borderBottom: '1px solid #e5e7eb',
	  whiteSpace: 'nowrap'
	};
	const tableCellStyle$1 = {
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
	      style: tableWrapStyle$1
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$1
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Товар' : 'Tovar'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Характеристика' : 'Xususiyati'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Ед.' : 'Birligi'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Кол-во' : 'Soni'))), /*#__PURE__*/React.createElement("tbody", null, items.length ? items.map((item, index) => /*#__PURE__*/React.createElement("tr", {
	      key: `${item.productName}-${index}`
	    }, /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, index + 1), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, normalizeDetailedText(item.productName)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, normalizeDetailedText(item.features)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, normalizeDetailedText(item.unit)), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, normalizeDetailedText(item.quantity)))) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1,
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
	      style: tableWrapStyle$1
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle$1
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Роль' : 'Rol'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Название' : 'Nomi'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Знак' : 'Belgi'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Статус' : 'Holat'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Комментарий' : 'Izoh'), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle$1
	    }, language === 'ru' ? 'Время' : 'Vaqti'))), /*#__PURE__*/React.createElement("tbody", null, rows.map(row => /*#__PURE__*/React.createElement("tr", {
	      key: `${row.role}-${row.index}-${row.name}`
	    }, /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, row.index), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
	    }, row.role), /*#__PURE__*/React.createElement("td", {
	      style: {
	        ...tableCellStyle$1,
	        minWidth: '180px'
	      }
	    }, row.name), /*#__PURE__*/React.createElement("td", {
	      style: tableCellStyle$1
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
	      style: tableCellStyle$1
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
	        ...tableCellStyle$1,
	        minWidth: '220px',
	        whiteSpace: 'pre-wrap',
	        wordBreak: 'break-word'
	      }
	    }, row.comment), /*#__PURE__*/React.createElement("td", {
	      style: {
	        ...tableCellStyle$1,
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
	const cardStyle$1 = {
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
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.requestNo), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm",
	    fontWeight: "bold"
	  }, getRequestNumber(params, record))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$1
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
	    style: cardStyle$1
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
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.creator), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, normalizeText(createdBy)))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$1,
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
	      ...cardStyle$1,
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
	      ...cardStyle$1,
	      marginBottom: '16px',
	      whiteSpace: 'pre-wrap',
	      wordBreak: 'break-word'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "lg"
	  }, text.comment), /*#__PURE__*/React.createElement(designSystem.Text, null, normalizeText(params.comment))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$1,
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
	      ...cardStyle$1,
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
	      ...cardStyle$1,
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
	      ...cardStyle$1,
	      marginBottom: '16px',
	      background: '#fff7ed',
	      border: '1px solid #fdba74'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, text.changeNotice), /*#__PURE__*/React.createElement(designSystem.Text, null, buyerOrder.changeNote)) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      ...cardStyle$1,
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
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.createdAt), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, formatDateTime(params.createdAt))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.updatedAt), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, formatDateTime(params.updatedAt))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle$1
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, text.lastComment), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, normalizeText(params.lastComment))))));
	};

	const api = new adminjs.ApiClient();
	const inputStyle = {
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
	  ...inputStyle,
	  minHeight: '92px',
	  resize: 'vertical'
	};
	const cardStyle = {
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
	const tableWrapStyle = {
	  overflowX: 'auto',
	  border: '1px solid #e5e7eb',
	  borderRadius: '14px',
	  background: '#ffffff'
	};
	const tableStyle = {
	  width: '100%',
	  borderCollapse: 'collapse',
	  minWidth: '860px'
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
	      await api.recordAction({
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
	    setSelectedRequestId(record.id);
	    applyRecord(record);
	    setShowCreateForm(true);
	    await markRecordSeen(record.id);
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
	      const response = await api.resourceAction({
	        resourceId: 'PurchaseBuyerQueue',
	        actionName: 'buyerWorkspace'
	      });
	      const nextRecords = response?.data?.records || [];
	      const nextOrderedRecords = response?.data?.orderedRecords || [];
	      const nextUnits = response?.data?.availableUnits || ['dona'];
	      const queueRecords = [...nextRecords, ...nextOrderedRecords];
	      const resolvedRequestId = preferredRequestId && queueRecords.some(record => record.id === preferredRequestId) ? preferredRequestId : nextRecords[0]?.id || nextOrderedRecords[0]?.id || '';
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
	  const allQueueRecords = react.useMemo(() => [...records, ...orderedRecords], [records, orderedRecords]);
	  const selectedRecord = react.useMemo(() => allQueueRecords.find(record => record.id === selectedRequestId) || null, [allQueueRecords, selectedRequestId]);
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
	  const handleStartNewOrder = async () => {
	    if (!records.length) {
	      return;
	    }
	    const nextRequestId = selectedRequestId || records[0]?.id || '';
	    const nextRecord = records.find(record => record.id === nextRequestId) || null;
	    await openRequest(nextRecord);
	  };
	  const handleCloseNewOrder = () => {
	    setShowCreateForm(false);
	  };
	  const handleFileChange = async (index, event) => {
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
	    setDocuments(currentDocuments => [...currentDocuments, createDocumentRow()]);
	  };
	  const removeDocumentRow = index => {
	    setDocuments(currentDocuments => {
	      const nextDocuments = currentDocuments.filter((_, currentIndex) => currentIndex !== index);
	      return nextDocuments.length ? nextDocuments : [createDocumentRow()];
	    });
	  };
	  const saveOrder = async () => {
	    if (!canEdit) {
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
	      const response = await api.resourceAction({
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
	    emptyText,
	    actionLabel
	  }) => {
	    if (!rows.length) {
	      return /*#__PURE__*/React.createElement(designSystem.Text, {
	        color: "grey60"
	      }, emptyText);
	    }
	    return /*#__PURE__*/React.createElement(designSystem.Box, {
	      style: tableWrapStyle
	    }, /*#__PURE__*/React.createElement("table", {
	      style: tableStyle
	    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "#"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "Holat"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "Ariza"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "Tuzilmalar"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "Tovar / manba"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "Sana"), /*#__PURE__*/React.createElement("th", {
	      style: tableHeadCellStyle
	    }, "Amal"))), /*#__PURE__*/React.createElement("tbody", null, rows.map((record, index) => {
	      const rowDate = record?.buyerOrderData?.notificationUpdatedAt || record?.buyerOrderData?.savedAt || record?.updatedAt || record?.createdAt;
	      return /*#__PURE__*/React.createElement("tr", {
	        key: record.id,
	        style: selectedRequestId === record.id ? {
	          background: '#f8fbff'
	        } : undefined
	      }, /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, index + 1), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, record?.buyerOrderData?.isNew ? /*#__PURE__*/React.createElement(designSystem.Box, {
	        as: "span",
	        style: newBadgeStyle
	      }, "Yangi") : /*#__PURE__*/React.createElement(designSystem.Text, {
	        color: "grey60"
	      }, "Ko\u2018rilgan")), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, /*#__PURE__*/React.createElement(designSystem.Text, {
	        fontWeight: "bold"
	      }, record.requestNumber || record.id), /*#__PURE__*/React.createElement(designSystem.Text, {
	        mt: "xs",
	        color: "grey60"
	      }, record.status || '—')), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, record.selectedUserNames || '—'), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, /*#__PURE__*/React.createElement(designSystem.Text, null, record?.buyerOrderData?.supplierName ? `Manba: ${record.buyerOrderData.supplierName}` : `${record?.items?.length || 0} ta tovar`)), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, formatDate(rowDate)), /*#__PURE__*/React.createElement("td", {
	        style: tableCellStyle
	      }, /*#__PURE__*/React.createElement(designSystem.Button, {
	        type: "button",
	        size: "sm",
	        variant: selectedRequestId === record.id ? 'contained' : 'outlined',
	        onClick: () => openRequest(record)
	      }, selectedRequestId === record.id ? 'Ochiq' : actionLabel)));
	    }))));
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
	  }, "Zaxira.uz"), /*#__PURE__*/React.createElement(designSystem.H2, null, "Buyurtma qilish"), loading ? /*#__PURE__*/React.createElement(designSystem.Text, null, "Ma\u2019lumotlar yuklanmoqda...") : /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Box, null, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold"
	  }, "Yangi va navbatdagi arizalar"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "xs",
	    color: "grey60"
	  }, records.length ? `Jadvalda ${records.length} ta yangi yoki ko‘rilayotgan ariza bor.` : 'Hozircha yangi buyurtma uchun ariza yo‘q.')), records.length && canEdit ? /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    size: "sm",
	    onClick: handleStartNewOrder
	  }, "Birinchi yangi arizani ochish") : null), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderQueueTable({
	    rows: records,
	    emptyText: 'Yangi arizalar topilmadi.',
	    actionLabel: canEdit ? 'Batafsil' : 'Ko‘rish'
	  }))), showCreateForm ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: {
	      display: 'grid',
	      gap: '16px'
	    }
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
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
	  }, "Detailni yopish")))), selectedRecord ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: detailGridStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Ariza raqami"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord.requestNumber || '—')), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Holati"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord.status || '—')), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Tuzilmalar"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord.selectedUserNames || '—')), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    color: "grey100"
	  }, "Manba"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    mt: "sm"
	  }, selectedRecord?.buyerOrderData?.supplierName || 'Kiritilmagan'))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
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
	    style: inputStyle,
	    disabled: !canEdit,
	    placeholder: "Tovar nomi"
	  }), /*#__PURE__*/React.createElement("textarea", {
	    value: item.features || '',
	    onChange: event => updateItem(index, 'features', event.target.value),
	    style: textAreaStyle,
	    disabled: !canEdit,
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
	    style: inputStyle,
	    disabled: !canEdit
	  }, availableUnits.map(unit => /*#__PURE__*/React.createElement("option", {
	    key: unit,
	    value: unit
	  }, unit))), /*#__PURE__*/React.createElement("input", {
	    type: "number",
	    min: "1",
	    value: item.quantity ?? 1,
	    onChange: event => updateItem(index, 'quantity', event.target.value),
	    style: inputStyle,
	    disabled: !canEdit,
	    placeholder: "Soni"
	  }))))))), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Label, {
	    required: true
	  }, "Qayerdan olinmoqda"), /*#__PURE__*/React.createElement("input", {
	    type: "text",
	    value: supplierName,
	    onChange: event => setSupplierName(event.target.value),
	    style: {
	      ...inputStyle,
	      marginTop: '8px'
	    },
	    disabled: !canEdit,
	    placeholder: "Masalan: Artel servis, Texnomart, mahalliy bozordan"
	  })), /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
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
	    style: inputStyle,
	    disabled: !canEdit,
	    placeholder: "Hujjat nomi"
	  }), /*#__PURE__*/React.createElement("input", {
	    type: "file",
	    onChange: event => handleFileChange(index, event),
	    style: {
	      marginTop: '10px',
	      maxWidth: '100%'
	    },
	    disabled: !canEdit
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
	    onClick: addDocumentRow
	  }, "+ Hujjat qo\u2018shish")) : null), canEdit ? /*#__PURE__*/React.createElement(designSystem.Box, {
	    display: "flex",
	    gap: "default",
	    flexWrap: "wrap"
	  }, /*#__PURE__*/React.createElement(designSystem.Button, {
	    type: "button",
	    onClick: saveOrder,
	    disabled: saving
	  }, saving ? 'Saqlanmoqda...' : 'Saqlash')) : null) : /*#__PURE__*/React.createElement(designSystem.MessageBox, {
	    variant: "info"
	  }, /*#__PURE__*/React.createElement(designSystem.Text, null, "Jadvaldan ariza tanlang."))) : null, /*#__PURE__*/React.createElement(designSystem.Box, {
	    style: cardStyle
	  }, /*#__PURE__*/React.createElement(designSystem.Text, {
	    fontWeight: "bold",
	    mb: "sm"
	  }, "Saqlangan buyurtmalar"), /*#__PURE__*/React.createElement(designSystem.Text, {
	    color: "grey60"
	  }, "Yuborilgan yoki oldin saqlangan buyurtmalar alohida jadvalda ko\u2018rsatiladi."), /*#__PURE__*/React.createElement(designSystem.Box, {
	    mt: "lg"
	  }, renderQueueTable({
	    rows: orderedRecords,
	    emptyText: 'Saqlangan buyurtmalar hali yo‘q.',
	    actionLabel: 'Batafsil'
	  }))))));
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

})(AdminJSDesignSystem, AdminJS, React, ReactRouterDOM, ReactRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9Mb2dpbi5qc3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9TaWRlYmFyQnJhbmRpbmcuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvVG9wQmFyLmpzeCIsIi4uL3NyYy9hZG1pbi9wYWdlLWRhdGEuanMiLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9EYXNoYm9hcmQuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUGxhY2Vob2xkZXJQYWdlLmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlVXNlcnNFZGl0LmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlSXRlbXNFZGl0LmpzeCIsIi4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlRG93bmxvYWRBY3Rpb24uanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VBcHByb3ZhbEFjdGlvbi5qc3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VSZXF1ZXN0U2hvdy5qc3giLCIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZU9yZGVyV29ya3NwYWNlLmpzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0Qm94LFxyXG5cdEJ1dHRvbixcclxuXHRGb3JtR3JvdXAsXHJcblx0SDIsXHJcblx0SW5wdXQsXHJcblx0TGFiZWwsXHJcblx0TWVzc2FnZUJveCxcclxuXHRUZXh0LFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHNoZWxsU3R5bGUgPSB7XHJcblx0YmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGZiZmYgMCUsICNlZWY2ZmYgNDUlLCAjZjhmYWZjIDEwMCUpJyxcclxufVxyXG5cclxuY29uc3QgY2FyZFN0eWxlID0ge1xyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjZTJlOGYwJyxcclxuXHRiYWNrZHJvcEZpbHRlcjogJ2JsdXIoNnB4KScsXHJcbn1cclxuXHJcbmNvbnN0IGZpZWxkSW5wdXRTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdG1pbkhlaWdodDogJzQycHgnLFxyXG59XHJcblxyXG5jb25zdCBwYXNzd29yZFdyYXBTdHlsZSA9IHtcclxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxufVxyXG5cclxuY29uc3QgcGFzc3dvcmRUb2dnbGVTdHlsZSA9IHtcclxuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHR0b3A6ICc1MCUnLFxyXG5cdHJpZ2h0OiAnOHB4JyxcclxuXHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuXHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG5cdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHR3aWR0aDogJzM0cHgnLFxyXG5cdGhlaWdodDogJzM0cHgnLFxyXG5cdGJvcmRlcjogJ25vbmUnLFxyXG5cdGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcblx0Y29sb3I6ICcjNjQ3NDhiJyxcclxuXHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0Y3Vyc29yOiAncG9pbnRlcicsXHJcblx0cGFkZGluZzogMCxcclxufVxyXG5cclxuY29uc3QgRXllSWNvbiA9ICh7IG9wZW4gfSkgPT4gKFxyXG5cdDxzdmdcclxuXHRcdHdpZHRoPScxOCdcclxuXHRcdGhlaWdodD0nMTgnXHJcblx0XHR2aWV3Qm94PScwIDAgMTggMTgnXHJcblx0XHRmaWxsPSdub25lJ1xyXG5cdFx0eG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG5cdD5cclxuXHRcdDxwYXRoXHJcblx0XHRcdGQ9J00xLjUgOUMyLjcgNi40IDUuMyA0LjUgOSA0LjVDMTIuNyA0LjUgMTUuMyA2LjQgMTYuNSA5QzE1LjMgMTEuNiAxMi43IDEzLjUgOSAxMy41QzUuMyAxMy41IDIuNyAxMS42IDEuNSA5WidcclxuXHRcdFx0c3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcblx0XHRcdHN0cm9rZVdpZHRoPScxLjUnXHJcblx0XHRcdHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHRzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcblx0XHQvPlxyXG5cdFx0PGNpcmNsZSBjeD0nOScgY3k9JzknIHI9JzIuMicgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZVdpZHRoPScxLjUnIC8+XHJcblx0XHR7b3BlbiA/IG51bGwgOiAoXHJcblx0XHRcdDxwYXRoXHJcblx0XHRcdFx0ZD0nTTMgMTVMMTUgMydcclxuXHRcdFx0XHRzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuXHRcdFx0XHRzdHJva2VXaWR0aD0nMS41J1xyXG5cdFx0XHRcdHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG5cdFx0XHQvPlxyXG5cdFx0KX1cclxuXHQ8L3N2Zz5cclxuKVxyXG5cclxuY29uc3QgcmVzb2x2ZU1lc3NhZ2UgPSAobWVzc2FnZSwgdHJhbnNsYXRlTWVzc2FnZSkgPT4ge1xyXG5cdGlmICghbWVzc2FnZSkge1xyXG5cdFx0cmV0dXJuICcnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbWVzc2FnZS5zcGxpdCgnICcpLmxlbmd0aCA+IDEgPyBtZXNzYWdlIDogdHJhbnNsYXRlTWVzc2FnZShtZXNzYWdlKVxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHRjb25zdCBwcm9wcyA9IHdpbmRvdy5fX0FQUF9TVEFURV9fIHx8IHt9XHJcblx0Y29uc3QgeyBhY3Rpb24sIGVycm9yTWVzc2FnZTogbWVzc2FnZSB9ID0gcHJvcHNcclxuXHRjb25zdCB7IHRyYW5zbGF0ZUNvbXBvbmVudCwgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cdGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblx0Y29uc3QgZXJyb3JNZXNzYWdlID0gcmVzb2x2ZU1lc3NhZ2UobWVzc2FnZSwgdHJhbnNsYXRlTWVzc2FnZSlcclxuXHRjb25zdCBlbWFpbExhYmVsID0gdHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5wcm9wZXJ0aWVzLmVtYWlsJylcclxuXHRjb25zdCBwYXNzd29yZExhYmVsID0gdHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5wcm9wZXJ0aWVzLnBhc3N3b3JkJylcclxuXHRjb25zdCBwYXNzd29yZFRvZ2dsZUxhYmVsID0gdHJhbnNsYXRlQ29tcG9uZW50KFxyXG5cdFx0c2hvd1Bhc3N3b3JkID8gJ0xvZ2luLmhpZGVQYXNzd29yZCcgOiAnTG9naW4uc2hvd1Bhc3N3b3JkJyxcclxuXHQpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdHZhcmlhbnQ9J2dyZXknXHJcblx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ9J2NlbnRlcidcclxuXHRcdFx0bWluSGVpZ2h0PScxMDB2aCdcclxuXHRcdFx0cD0neGwnXHJcblx0XHRcdHN0eWxlPXtzaGVsbFN0eWxlfVxyXG5cdFx0PlxyXG5cdFx0XHQ8Qm94XHJcblx0XHRcdFx0YXM9J2Zvcm0nXHJcblx0XHRcdFx0YWN0aW9uPXthY3Rpb259XHJcblx0XHRcdFx0bWV0aG9kPSdQT1NUJ1xyXG5cdFx0XHRcdGJnPSd3aGl0ZSdcclxuXHRcdFx0XHRwPSd4MydcclxuXHRcdFx0XHR3aWR0aD17WycxMDAlJywgJzUyMHB4J119XHJcblx0XHRcdFx0Ym9yZGVyUmFkaXVzPSd4bCdcclxuXHRcdFx0XHRib3hTaGFkb3c9J2xvZ2luJ1xyXG5cdFx0XHRcdHN0eWxlPXtjYXJkU3R5bGV9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8Qm94IG1iPSd4bCc+XHJcblx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRhcz0nc3BhbidcclxuXHRcdFx0XHRcdFx0Y29sb3I9J3ByaW1hcnkxMDAnXHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9J2JvbGQnXHJcblx0XHRcdFx0XHRcdHA9J3NtJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZWZmNmZmJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0WmF4aXJhLnV6XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8SDIgbXQ9J2xnJz57dHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi53ZWxjb21lSGVhZGVyJyl9PC9IMj5cclxuXHRcdFx0XHRcdDxUZXh0IG10PSdkZWZhdWx0JyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdHt0cmFuc2xhdGVDb21wb25lbnQoJ0xvZ2luLndlbGNvbWVNZXNzYWdlJyl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdHtlcnJvck1lc3NhZ2UgPyAoXHJcblx0XHRcdFx0XHQ8TWVzc2FnZUJveCBteT0nbGcnIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gdmFyaWFudD0nZGFuZ2VyJyAvPlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHQ8Rm9ybUdyb3VwPlxyXG5cdFx0XHRcdFx0PExhYmVsIHJlcXVpcmVkPntlbWFpbExhYmVsfTwvTGFiZWw+XHJcblx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0bmFtZT0nZW1haWwnXHJcblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J3VzZXJuYW1lJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17ZW1haWxMYWJlbH1cclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0c3R5bGU9e2ZpZWxkSW5wdXRTdHlsZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Gb3JtR3JvdXA+XHJcblxyXG5cdFx0XHRcdDxGb3JtR3JvdXA+XHJcblx0XHRcdFx0XHQ8TGFiZWwgcmVxdWlyZWQ+e3Bhc3N3b3JkTGFiZWx9PC9MYWJlbD5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e3Bhc3N3b3JkV3JhcFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PElucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGFzc3dvcmRMYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J2N1cnJlbnQtcGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyAuLi5maWVsZElucHV0U3R5bGUsIHBhZGRpbmdSaWdodDogJzQ2cHgnIH19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKGN1cnJlbnRWYWx1ZSA9PiAhY3VycmVudFZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRzdHlsZT17cGFzc3dvcmRUb2dnbGVTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPXtwYXNzd29yZFRvZ2dsZUxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlPXtwYXNzd29yZFRvZ2dsZUxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdGFyaWEtcHJlc3NlZD17c2hvd1Bhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PEV5ZUljb24gb3Blbj17c2hvd1Bhc3N3b3JkfSAvPlxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvRm9ybUdyb3VwPlxyXG5cclxuXHRcdFx0XHQ8Qm94IG10PSd4bCc+XHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2NvbnRhaW5lZCdcclxuXHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ubG9naW5CdXR0b24nKX1cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIiwiaW1wb3J0IHsgQm94LCBJY29uLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jb25zdCBTaWRlYmFyQnJhbmRpbmcgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3hcclxuXHRcdFx0YXM9e0xpbmt9XHJcblx0XHRcdHRvPScvYWRtaW4nXHJcblx0XHRcdGRpc3BsYXk9J2Jsb2NrJ1xyXG5cdFx0XHRweD0nbGcnXHJcblx0XHRcdHB0PSdsZydcclxuXHRcdFx0cGI9J3hsJ1xyXG5cdFx0XHRzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19XHJcblx0XHQ+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRwPSdsZydcclxuXHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0Z2FwOiAnMTJweCcsXHJcblx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxNnB4JyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTYzZDdhIDAlLCAjMjU2M2ViIDEwMCUpJyxcclxuXHRcdFx0XHRcdGJveFNoYWRvdzogJzAgMTJweCAyOHB4IHJnYmEoMzcsIDk5LCAyMzUsIDAuMjIpJyxcclxuXHRcdFx0XHRcdHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHdpZHRoPSc0NHB4J1xyXG5cdFx0XHRcdFx0aGVpZ2h0PSc0NHB4J1xyXG5cdFx0XHRcdFx0ZGlzcGxheT0nZmxleCdcclxuXHRcdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PSdjZW50ZXInXHJcblx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRmbGV4U2hyaW5rOiAwLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNCknLFxyXG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyKScsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJY29uIGljb249J0FyY2hpdmUnIHNpemU9ezI0fSBjb2xvcj0nd2hpdGUnIC8+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggZmxleD0nMSc+XHJcblx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRhcz0nc3BhbidcclxuXHRcdFx0XHRcdFx0ZGlzcGxheT0nYmxvY2snXHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9JzkwMCdcclxuXHRcdFx0XHRcdFx0Zm9udFNpemU9J3hsJ1xyXG5cdFx0XHRcdFx0XHRjb2xvcj0nd2hpdGUnXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PFRleHRcclxuXHRcdFx0XHRcdFx0YXM9J3NwYW4nXHJcblx0XHRcdFx0XHRcdGRpc3BsYXk9J2Jsb2NrJ1xyXG5cdFx0XHRcdFx0XHRtdD0neHMnXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplPSdzbSdcclxuXHRcdFx0XHRcdFx0Y29sb3I9J3doaXRlJ1xyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBvcGFjaXR5OiAwLjgyIH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdE9tYm9yeG9uYSBuYXpvcmF0aVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckJyYW5kaW5nXHJcbiIsImltcG9ydCB7XHJcblx0Qm94LFxyXG5cdEJ1dHRvbixcclxuXHREcm9wRG93bixcclxuXHREcm9wRG93bkl0ZW0sXHJcblx0RHJvcERvd25NZW51LFxyXG5cdERyb3BEb3duVHJpZ2dlcixcclxuXHRJY29uLFxyXG59IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZUN1cnJlbnRBZG1pbiwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBUb3BCYXIgPSAoeyB0b2dnbGVTaWRlYmFyIH0pID0+IHtcclxuXHRjb25zdCBbY3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXHJcblx0Y29uc3QgcHJvZmlsZUxpbmsgPSBjdXJyZW50QWRtaW4/LmlkXHJcblx0XHQ/IGAvYWRtaW4vcmVzb3VyY2VzL1VzZXIvcmVjb3Jkcy8ke2N1cnJlbnRBZG1pbi5pZH0vc2hvd2BcclxuXHRcdDogJy9hZG1pbidcclxuXHRjb25zdCB7XHJcblx0XHRpMThuOiB7XHJcblx0XHRcdGxhbmd1YWdlLFxyXG5cdFx0XHRvcHRpb25zOiB7IHN1cHBvcnRlZExuZ3MgfSxcclxuXHRcdFx0Y2hhbmdlTGFuZ3VhZ2UsXHJcblx0XHR9LFxyXG5cdFx0dHJhbnNsYXRlQ29tcG9uZW50LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG5cdGNvbnN0IGF2YWlsYWJsZUxhbmd1YWdlcyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PlxyXG5cdFx0XHRzdXBwb3J0ZWRMbmdzID8gc3VwcG9ydGVkTG5ncy5maWx0ZXIobGFuZyA9PiBsYW5nICE9PSAnY2ltb2RlJykgOiBbXSxcclxuXHRcdFtzdXBwb3J0ZWRMbmdzXSxcclxuXHQpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94XHJcblx0XHRcdGJnPSd3aGl0ZSdcclxuXHRcdFx0Ym9yZGVyQm90dG9tPSdkZWZhdWx0J1xyXG5cdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRmbGV4V3JhcD0nd3JhcCdcclxuXHRcdFx0Z2FwPSdkZWZhdWx0J1xyXG5cdFx0XHRweD0nbGcnXHJcblx0XHRcdHB5PSdkZWZhdWx0J1xyXG5cdFx0PlxyXG5cdFx0XHQ8Qm94IGRpc3BsYXk9J2ZsZXgnIGFsaWduSXRlbXM9J2NlbnRlcicgZ2FwPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRweT0nc20nXHJcblx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxyXG5cdFx0XHRcdFx0ZGlzcGxheT17WydibG9jaycsICdibG9jaycsICdibG9jaycsICdibG9jaycsICdub25lJ119XHJcblx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxJY29uIGljb249J01lbnUnIHNpemU9ezI0fSAvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCb3ggZGlzcGxheT0nZmxleCcgYWxpZ25JdGVtcz0nY2VudGVyJyBmbGV4V3JhcD0nd3JhcCcgZ2FwPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHR7YXZhaWxhYmxlTGFuZ3VhZ2VzLmxlbmd0aCA+IDEgPyAoXHJcblx0XHRcdFx0XHQ8RHJvcERvd24+XHJcblx0XHRcdFx0XHRcdDxEcm9wRG93blRyaWdnZXI+XHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjb2xvcj0ndGV4dCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uPSdHbG9iZScgLz5cclxuXHRcdFx0XHRcdFx0XHRcdHt0cmFuc2xhdGVDb21wb25lbnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdGBMYW5ndWFnZVNlbGVjdG9yLmF2YWlsYWJsZUxhbmd1YWdlcy4ke2xhbmd1YWdlfWAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU6IGxhbmd1YWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9Ecm9wRG93blRyaWdnZXI+XHJcblx0XHRcdFx0XHRcdDxEcm9wRG93bk1lbnU+XHJcblx0XHRcdFx0XHRcdFx0e2F2YWlsYWJsZUxhbmd1YWdlcy5tYXAobGFuZyA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8RHJvcERvd25JdGVtIGtleT17bGFuZ30gb25DbGljaz17KCkgPT4gY2hhbmdlTGFuZ3VhZ2UobGFuZyl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7dHJhbnNsYXRlQ29tcG9uZW50KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGBMYW5ndWFnZVNlbGVjdG9yLmF2YWlsYWJsZUxhbmd1YWdlcy4ke2xhbmd9YCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU6IGxhbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvRHJvcERvd25JdGVtPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L0Ryb3BEb3duTWVudT5cclxuXHRcdFx0XHRcdDwvRHJvcERvd24+XHJcblx0XHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHRcdDxCdXR0b24gYXM9J2EnIGhyZWY9e3Byb2ZpbGVMaW5rfSB2YXJpYW50PSdvdXRsaW5lZCc+XHJcblx0XHRcdFx0XHQ8SWNvbiBpY29uPSdVc2VyJyBtcj0nc20nIC8+XHJcblx0XHRcdFx0XHRNZW5pbmcgcHJvZmlsaW1cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8Qm94IHdpZHRoPSc4cHgnIC8+XHJcblx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaHJlZj0nL2FkbWluL2xvZ291dCcgdmFyaWFudD0nb3V0bGluZWQnPlxyXG5cdFx0XHRcdFx0PEljb24gaWNvbj0nTG9nT3V0JyBtcj0nc20nIC8+XHJcblx0XHRcdFx0XHRDaGlxaXNoXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcclxuIiwiY29uc3Qgc2lkZWJhclBhZ2VzID0gW1xyXG5cdHtcclxuXHRcdGlkOiAnbWVuaW5nLXByb2ZpbGltJyxcclxuXHRcdGxhYmVsOiAnTWVuaW5nIHByb2ZpbGltJyxcclxuXHRcdGljb246ICdVc2VyJyxcclxuXHRcdHNob3J0VXo6ICdTaGF4c2l5IG1h4oCZbHVtb3RsYXJpbmdpem5pIGtv4oCYcmlzaCB2YSB0YWhyaXJsYXNoIHNhaGlmYXNpLicsXHJcblx0XHRzaG9ydFJ1OiAn0KHRgtGA0LDQvdC40YbQsCDQtNC70Y8g0L/RgNC+0YHQvNC+0YLRgNCwINC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LvQuNGH0L3Ri9GFINC00LDQvdC90YvRhS4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICd4YXJpZC11Y2h1bi1hcml6YScsXHJcblx0XHRsYWJlbDogJ1hhcmlkJyxcclxuXHRcdGljb246ICdTaG9wcGluZ0NhcnQnLFxyXG5cdFx0c2hvcnRVejpcclxuXHRcdFx0J0JpciBuZWNodGEgZm95ZGFsYW51dmNoaW5pIHRhbmxhYiwgaXpvaCB2YSB0b3ZhcmxhciBiaWxhbiBhcml6YSB5YXJhdGlzaCBib+KAmGxpbWkuJyxcclxuXHRcdHNob3J0UnU6XHJcblx0XHRcdCfQoNCw0LfQtNC10Lsg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0LfQsNGP0LLQutC4INGBINCy0YvQsdC+0YDQvtC8INC90LXRgdC60L7Qu9GM0LrQuNGFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5LCDQutC+0LzQvNC10L3RgtCw0YDQuNC10Lwg0Lgg0YLQvtCy0LDRgNCw0LzQuC4nLFxyXG5cdFx0cmVzb3VyY2VMaW5rOiAnL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZVJlcXVlc3QnLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdhcml6YWxhcm5pLXRhc2RpcWxhc2gnLFxyXG5cdFx0bGFiZWw6ICdBcml6YWxhcm5pIHRhc2RpcWxhc2gnLFxyXG5cdFx0aWNvbjogJ0NoZWNrQ2lyY2xlJyxcclxuXHRcdHNob3J0VXo6ICdLaXJpdGlsZ2FuIGFyaXphbGFybmkga2/igJhyaWIgY2hpcWlzaCBzYWhpZmFzaS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ch0YLRgNCw0L3QuNGG0LAg0LTQu9GPINC/0YDQvtGB0LzQvtGC0YDQsCDQuCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQt9Cw0Y/QstC+0LouJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnZm95ZGFsYW51dmNoaWxhcicsXHJcblx0XHRsYWJlbDogJ0ZveWRhbGFudXZjaGlsYXInLFxyXG5cdFx0aWNvbjogJ1VzZXInLFxyXG5cdFx0c2hvcnRVejogJ1RpemltIGZveWRhbGFudXZjaGlsYXJpIGJpbGFuIGlzaGxhc2ggYm/igJhsaW1pLicsXHJcblx0XHRzaG9ydFJ1OiAn0KDQsNC30LTQtdC7INC00LvRjyDRgNCw0LHQvtGC0Ysg0YEg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GP0LzQuCDRgdC40YHRgtC10LzRiy4nLFxyXG5cdFx0cmVzb3VyY2VMaW5rOiAnL2FkbWluL3Jlc291cmNlcy9Vc2VyJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnY2hpcWltLXFpbGlzaCcsXHJcblx0XHRsYWJlbDogJ0NoaXFpbSBxaWxpc2gnLFxyXG5cdFx0aWNvbjogJ1NlbmQnLFxyXG5cdFx0c2hvcnRVejogJ01haHN1bG90IGNoaXFpbWluaSByYXNtaXlsYXNodGlyaXNoIHNhaGlmYXNpLicsXHJcblx0XHRzaG9ydFJ1OiAn0KHRgtGA0LDQvdC40YbQsCDQvtGE0L7RgNC80LvQtdC90LjRjyDRgNCw0YHRhdC+0LTQsCDRgtC+0LLQsNGA0L7Qsi4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICd0cmFuc2ZlcicsXHJcblx0XHRsYWJlbDogJ1RyYW5zZmVyJyxcclxuXHRcdGljb246ICdSZXBlYXQnLFxyXG5cdFx0c2hvcnRVejogJ09tYm9ybGFyIG/igJhydGFzaWRhIGtv4oCYY2hpcmlzaCB1Y2h1biB0YXl5b3Igc2FoaWZhLicsXHJcblx0XHRzaG9ydFJ1OiAn0JPQvtGC0L7QstCw0Y8g0YHRgtGA0LDQvdC40YbQsCDQtNC70Y8g0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQvNC10LbQtNGDINGB0LrQu9Cw0LTQsNC80LguJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnb21ib3JsYXInLFxyXG5cdFx0bGFiZWw6ICdPbWJvcmxhcicsXHJcblx0XHRpY29uOiAnQXJjaGl2ZScsXHJcblx0XHRzaG9ydFV6OiAnQmFyY2hhIG9tYm9ybGFyIHJv4oCYeXhhdGkgdWNodW4gYm/igJhsaW0uJyxcclxuXHRcdHNob3J0UnU6ICfQoNCw0LfQtNC10Lsg0LTQu9GPINGB0L/QuNGB0LrQsCDQstGB0LXRhSDRgdC60LvQsNC00L7Qsi4nLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aWQ6ICdtZW5pbmctb21ib3JpbScsXHJcblx0XHRsYWJlbDogJ01lbmluZyBvbWJvcmltJyxcclxuXHRcdGljb246ICdQYWNrYWdlJyxcclxuXHRcdHNob3J0VXo6ICdTaGF4c2l5IG9tYm9yIG1h4oCZbHVtb3RsYXJpIHVjaHVuIHRheXlvciBzYWhpZmEuJyxcclxuXHRcdHNob3J0UnU6ICfQk9C+0YLQvtCy0LDRjyDRgdGC0YDQsNC90LjRhtCwINC00LvRjyDQtNCw0L3QvdGL0YUg0LzQvtC10LPQviDRgdC60LvQsNC00LAuJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnaW52ZW50YXJpemF0c2l5YScsXHJcblx0XHRsYWJlbDogJ0ludmVudGFyaXphdHNpeWEnLFxyXG5cdFx0aWNvbjogJ1Rvb2wnLFxyXG5cdFx0c2hvcnRVejogJ0ludmVudGFyaXphdHNpeWEgamFyYXlvbmkgdWNodW4gdGF5eW9yIGJv4oCYbGltLicsXHJcblx0XHRzaG9ydFJ1OiAn0JPQvtGC0L7QstGL0Lkg0YDQsNC30LTQtdC7INC00LvRjyDQuNC90LLQtdC90YLQsNGA0LjQt9Cw0YbQuNC4LicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2Jvc2hxYS1vbWJvcmxhcicsXHJcblx0XHRsYWJlbDogJ0Jvc2hxYSBvbWJvcmxhcicsXHJcblx0XHRpY29uOiAnTGF5ZXJzJyxcclxuXHRcdHNob3J0VXo6ICdCb3NocWEgb21ib3JsYXIgYmlsYW4gaXNobGFzaCBzYWhpZmFzaS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ch0YLRgNCw0L3QuNGG0LAg0LTQu9GPINGA0LDQsdC+0YLRiyDRgSDQtNGA0YPQs9C40LzQuCDRgdC60LvQsNC00LDQvNC4LicsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogJ2J1eXVydG1hLXFpbGlzaCcsXHJcblx0XHRsYWJlbDogJ0J1eXVydG1hIHFpbGlzaCcsXHJcblx0XHRpY29uOiAnU2hvcHBpbmdCYWcnLFxyXG5cdFx0c2hvcnRVejogJ1lhbmdpIGJ1eXVydG1hIHlhcmF0aXNoIHVjaHVuIHNhaGlmYS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ch0YLRgNCw0L3QuNGG0LAg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0L3QvtCy0L7Qs9C+INC30LDQutCw0LfQsC4nLFxyXG5cdFx0cmVzb3VyY2VMaW5rOiAnL2FkbWluL3Jlc291cmNlcy9QdXJjaGFzZU9yZGVyV29ya3NwYWNlJyxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiAnYnV5dXJ0bWFuaS1qb25hdGlzaCcsXHJcblx0XHRsYWJlbDogJ0J1eXVydG1hbmkgam/igJhuYXRpc2gnLFxyXG5cdFx0aWNvbjogJ1RydWNrJyxcclxuXHRcdHNob3J0VXo6ICdCdXl1cnRtYWxhcm5pIGpv4oCYbmF0aXNoIHVjaHVuIHRheXlvciBzYWhpZmEuJyxcclxuXHRcdHNob3J0UnU6ICfQk9C+0YLQvtCy0LDRjyDRgdGC0YDQsNC90LjRhtCwINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INC30LDQutCw0LfQvtCyLicsXHJcblx0fSxcclxuXVxyXG5cclxuY29uc3QgcGFnZU1hcCA9IE9iamVjdC5mcm9tRW50cmllcyhzaWRlYmFyUGFnZXMubWFwKHBhZ2UgPT4gW3BhZ2UuaWQsIHBhZ2VdKSlcclxuY29uc3QgY3VzdG9tU2lkZWJhclBhZ2VzID0gc2lkZWJhclBhZ2VzLmZpbHRlcihcclxuXHRwYWdlID0+XHJcblx0XHRwYWdlLmlkICE9PSAnZm95ZGFsYW51dmNoaWxhcicgJiZcclxuXHRcdHBhZ2UuaWQgIT09ICdtZW5pbmctcHJvZmlsaW0nICYmXHJcblx0XHRwYWdlLmlkICE9PSAneGFyaWQtdWNodW4tYXJpemEnICYmXHJcblx0XHRwYWdlLmlkICE9PSAnYXJpemFsYXJuaS10YXNkaXFsYXNoJyAmJlxyXG5cdFx0cGFnZS5pZCAhPT0gJ2J1eXVydG1hLXFpbGlzaCcsXHJcbilcclxuXHJcbmV4cG9ydCB7IGN1c3RvbVNpZGViYXJQYWdlcywgcGFnZU1hcCwgc2lkZWJhclBhZ2VzIH1cclxuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEgyLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlQ3VycmVudEFkbWluIH0gZnJvbSAnYWRtaW5qcydcclxuXHJcbmltcG9ydCB7IHNpZGViYXJQYWdlcyB9IGZyb20gJy4uL3BhZ2UtZGF0YS5qcydcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHRjb25zdCBbY3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXHJcblx0Y29uc3QgdmlzaWJsZVBhZ2VzID0gc2lkZWJhclBhZ2VzLmZpbHRlcihwYWdlID0+IHtcclxuXHRcdGlmIChwYWdlLmlkID09PSAnbWVuaW5nLXByb2ZpbGltJykge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdHBhZ2UuaWQgPT09ICdmb3lkYWxhbnV2Y2hpbGFyJyAmJlxyXG5cdFx0XHQhWydhZG1pbicsICdtb25pdG9yaW5nJ10uaW5jbHVkZXMoY3VycmVudEFkbWluPy5yb2xlKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0cGFnZS5pZCA9PT0gJ2J1eXVydG1hLXFpbGlzaCcgJiZcclxuXHRcdFx0IVsnYWRtaW4nLCAnbW9uaXRvcmluZycsICdzb3RpYl9vbHV2Y2hpJ10uaW5jbHVkZXMoY3VycmVudEFkbWluPy5yb2xlKVxyXG5cdFx0KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggdmFyaWFudD0nZ3JleSc+XHJcblx0XHRcdDxCb3ggYmc9J3doaXRlJyBwPSd4eGwnIGJvcmRlclJhZGl1cz0neGwnIGJveFNoYWRvdz0nY2FyZCc+XHJcblx0XHRcdFx0PFRleHQgY29sb3I9J3ByaW1hcnkxMDAnIGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8SDI+T21ib3J4b25hIG5hem9yYXRpIHVjaHVuIGFzb3NpeSBib+KAmGxpbWxhcjwvSDI+XHJcblx0XHRcdFx0PFRleHQgbXQ9J2RlZmF1bHQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRTaXogdGl6aW1nYXsnICd9XHJcblx0XHRcdFx0XHQ8c3Ryb25nPntjdXJyZW50QWRtaW4/LnRpdGxlIHx8IGN1cnJlbnRBZG1pbj8udXNlcm5hbWV9PC9zdHJvbmc+eycgJ31cclxuXHRcdFx0XHRcdHNpZmF0aWRhIGtpcmdhbnNpei4gUm9saW5naXo6IDxzdHJvbmc+e2N1cnJlbnRBZG1pbj8ucm9sZX08L3N0cm9uZz5cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdDxCb3ggZGlzcGxheT0nZmxleCcgZmxleFdyYXA9J3dyYXAnIGdhcD0nZGVmYXVsdCcgbWI9J3hsJz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0XHRcdGhyZWY9e2AvYWRtaW4vcmVzb3VyY2VzL1VzZXIvcmVjb3Jkcy8ke2N1cnJlbnRBZG1pbj8uaWR9L2VkaXRgfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRQcm9maWxuaSB0YWhyaXJsYXNoXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PSdncmlkJyBncmlkVGVtcGxhdGVDb2x1bW5zPXtbJzFmcicsICcxZnIgMWZyJ119IGdhcD0nbGcnPlxyXG5cdFx0XHRcdFx0e3Zpc2libGVQYWdlcy5tYXAocGFnZSA9PiAoXHJcblx0XHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0XHRrZXk9e3BhZ2UuaWR9XHJcblx0XHRcdFx0XHRcdFx0Ymc9J2ZpbHRlckJnJ1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcj0nMXB4IHNvbGlkICNFNUU3RUInXHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzPSd4bCdcclxuXHRcdFx0XHRcdFx0XHRwPSd4bCdcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFnZS5sYWJlbH1cclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9J2dyZXkxMDAnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHR7cGFnZS5zaG9ydFV6fVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRhcz0nYSdcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e3BhZ2UucmVzb3VyY2VMaW5rIHx8IGAvYWRtaW4vcGFnZXMvJHtwYWdlLmlkfWB9XHJcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRCb+KAmGxpbW5pIG9jaGlzaFxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBIMiwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZUN1cnJlbnRBZG1pbiB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmltcG9ydCB7IHBhZ2VNYXAgfSBmcm9tICcuLi9wYWdlLWRhdGEuanMnXHJcblxyXG5jb25zdCBQbGFjZWhvbGRlclBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBwYWdlTmFtZSB9ID0gdXNlUGFyYW1zKClcclxuXHRjb25zdCBbY3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXHJcblx0Y29uc3QgcGFnZSA9IHBhZ2VNYXBbcGFnZU5hbWVdIHx8IHtcclxuXHRcdGxhYmVsOiAnU2FoaWZhJyxcclxuXHRcdHNob3J0VXo6ICdCdSBzYWhpZmEgaG96aXJjaGEgdGF5eW9yIGhvbGF0ZGEgdHVyaWJkaS4nLFxyXG5cdFx0c2hvcnRSdTogJ9Ct0YLQsCDRgdGC0YDQsNC90LjRhtCwINC/0L7QutCwINC/0L7QtNCz0L7RgtC+0LLQu9C10L3QsCDQsiDRh9C10YDQvdC+0LLQvtC8INCy0LjQtNC1LicsXHJcblx0fVxyXG5cdGNvbnN0IHByb2ZpbGVTaG93TGluayA9IGN1cnJlbnRBZG1pbj8uaWRcclxuXHRcdD8gYC9hZG1pbi9yZXNvdXJjZXMvVXNlci9yZWNvcmRzLyR7Y3VycmVudEFkbWluLmlkfS9zaG93YFxyXG5cdFx0OiAnL2FkbWluJ1xyXG5cdGNvbnN0IHByb2ZpbGVFZGl0TGluayA9IGN1cnJlbnRBZG1pbj8uaWRcclxuXHRcdD8gYC9hZG1pbi9yZXNvdXJjZXMvVXNlci9yZWNvcmRzLyR7Y3VycmVudEFkbWluLmlkfS9lZGl0YFxyXG5cdFx0OiAnL2FkbWluJ1xyXG5cclxuXHRpZiAocGFnZU5hbWUgPT09ICdtZW5pbmctcHJvZmlsaW0nKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8Qm94IHZhcmlhbnQ9J2dyZXknPlxyXG5cdFx0XHRcdDxCb3ggYmc9J3doaXRlJyBwPSd4eGwnIGJvcmRlclJhZGl1cz0neGwnIGJveFNoYWRvdz0nY2FyZCc+XHJcblx0XHRcdFx0XHQ8VGV4dCBjb2xvcj0ncHJpbWFyeTEwMCcgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRaYXhpcmEudXpcclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxIMj5NZW5pbmcgcHJvZmlsaW08L0gyPlxyXG5cdFx0XHRcdFx0PFRleHQgbXQ9J2RlZmF1bHQnIG1iPSd4bCc+XHJcblx0XHRcdFx0XHRcdFNpeiBob3ppcnsnICd9XHJcblx0XHRcdFx0XHRcdDxzdHJvbmc+e2N1cnJlbnRBZG1pbj8udGl0bGUgfHwgY3VycmVudEFkbWluPy51c2VybmFtZX08L3N0cm9uZz57JyAnfVxyXG5cdFx0XHRcdFx0XHRwcm9maWxpZGEgdHVyaWJzaXouIEJ1IHNhaGlmYWRhIG1h4oCZbHVtb3RsYXJpbmdpem5pIGtv4oCYcmlzaGluZ2l6IHZhXHJcblx0XHRcdFx0XHRcdHRhaHJpcmxhc2hpbmdpeiBtdW1raW4uXHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdFx0PEJveCBkaXNwbGF5PSdncmlkJyBncmlkVGVtcGxhdGVDb2x1bW5zPXtbJzFmcicsICcxZnIgMWZyJ119IGdhcD0nbGcnPlxyXG5cdFx0XHRcdFx0XHQ8Qm94IHA9J3hsJyBiZz0nZmlsdGVyQmcnIGJvcmRlclJhZGl1cz0neGwnPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRGb3lkYWxhbnV2Y2hpIG5vbWlcclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQ+e2N1cnJlbnRBZG1pbj8udXNlcm5hbWV9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0PEJveCBwPSd4bCcgYmc9J2ZpbHRlckJnJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0SXNtIHZhIGZhbWlseWFcclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y3VycmVudEFkbWluPy5maXJzdE5hbWV9IHtjdXJyZW50QWRtaW4/Lmxhc3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDxCb3ggcD0neGwnIGJnPSdmaWx0ZXJCZycgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFR1emlsbWFcclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQ+e2N1cnJlbnRBZG1pbj8ub3JnYW5pemF0aW9uTmFtZX08L1RleHQ+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQ8Qm94IHA9J3hsJyBiZz0nZmlsdGVyQmcnIGJvcmRlclJhZGl1cz0neGwnPlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRUZWxlZm9uIHZhIHJvbFxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dD57Y3VycmVudEFkbWluPy5waG9uZU51bWJlcn08L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz5Sb2w6IHtjdXJyZW50QWRtaW4/LnJvbGV9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdDxCb3ggZGlzcGxheT0nZmxleCcgZmxleFdyYXA9J3dyYXAnIGdhcD0nZGVmYXVsdCcgbXQ9J3hsJz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaHJlZj17cHJvZmlsZUVkaXRMaW5rfT5cclxuXHRcdFx0XHRcdFx0XHRQcm9maWxuaSB0YWhyaXJsYXNoXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPScvYWRtaW4vbG9nb3V0JyB2YXJpYW50PSdvdXRsaW5lZCc+XHJcblx0XHRcdFx0XHRcdFx0Q2hpcWlzaFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdDxUZXh0IG10PSdsZycgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRFc2xhdG1hOiByb2wgbWF5ZG9uaSBmYXFhdCBhZG1pbmlzdHJhdG9yIHRvbW9uaWRhbiBv4oCYemdhcnRpcmlsYWRpLlxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IHZhcmlhbnQ9J2dyZXknPlxyXG5cdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJyBib3hTaGFkb3c9J2NhcmQnPlxyXG5cdFx0XHRcdDxUZXh0IGNvbG9yPSdwcmltYXJ5MTAwJyBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRaYXhpcmEudXpcclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PFRleHQgbWI9J2xnJz5cclxuXHRcdFx0XHRcdEtpcmlzaCBxaWxpbmdhbiBwcm9maWw6eycgJ31cclxuXHRcdFx0XHRcdDxzdHJvbmc+e2N1cnJlbnRBZG1pbj8udGl0bGUgfHwgY3VycmVudEFkbWluPy51c2VybmFtZX08L3N0cm9uZz5cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4V3JhcD0nd3JhcCcgZ2FwPSdkZWZhdWx0JyBtYj0neGwnPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaHJlZj17cHJvZmlsZVNob3dMaW5rfSB2YXJpYW50PSdvdXRsaW5lZCc+XHJcblx0XHRcdFx0XHRcdE1lbmluZyBwcm9maWxpbVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPXtwcm9maWxlRWRpdExpbmt9PlxyXG5cdFx0XHRcdFx0XHRQcm9maWxuaSB0YWhyaXJsYXNoXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDxCdXR0b24gYXM9J2EnIGhyZWY9Jy9hZG1pbi9sb2dvdXQnIHZhcmlhbnQ9J291dGxpbmVkJz5cclxuXHRcdFx0XHRcdFx0Q2hpcWlzaFxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PEgyPntwYWdlLmxhYmVsfTwvSDI+XHJcblx0XHRcdFx0PFRleHQgbXQ9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0QnUgYm/igJhsaW0gaG96aXJjaGEgdGF5eW9yIHNhaGlmYSBzaWZhdGlkYSBxb+KAmHNoaWxkaS4gS2V5aW5naSB2YXppZmFuaVxyXG5cdFx0XHRcdFx0YXl0Z2FuaW5naXpkYW4gc2/igJhuZyBheW5hbiBzaHUgeWVyZ2Ega2VyYWtsaSBpc2ggamFyYXlvbmkgdWxhbmFkaS5cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdDxCb3ggbXQ9J3hsJyBwPSd4bCcgYmc9J2ZpbHRlckJnJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdE/igJh6YmVrY2hhXHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dD57cGFnZS5zaG9ydFV6fTwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtdD0nbGcnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdNCg0YPRgdGB0LrQuNC5XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dD57cGFnZS5zaG9ydFJ1fTwvVGV4dD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYWNlaG9sZGVyUGFnZVxyXG4iLCJpbXBvcnQgeyBCb3gsIExhYmVsLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgQXBpQ2xpZW50LCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxyXG5cclxuY29uc3QgcGFyc2VTZWxlY3RlZFVzZXJzID0gdmFsdWUgPT4ge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlLm1hcChpdGVtID0+IFN0cmluZyhpdGVtKSlcclxuXHR9XHJcblxyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodmFsdWUpXHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWQpID8gcGFyc2VkLm1hcChpdGVtID0+IFN0cmluZyhpdGVtKSkgOiBbXVxyXG5cdH0gY2F0Y2gge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCByZXNvbHZlU3RydWN0dXJlTGFiZWwgPSB1c2VyID0+XHJcblx0dXNlcj8ucGFyYW1zPy5vcmdhbml6YXRpb25OYW1lIHx8XHJcblx0dXNlcj8ucGFyYW1zPy5kaXNwbGF5TmFtZSB8fFxyXG5cdHVzZXI/LnRpdGxlIHx8XHJcblx0J1R1emlsbWEgbm9taSBraXJpdGlsbWFnYW4nXHJcblxyXG5jb25zdCByZXNvbHZlQXBwcm92ZXJMYWJlbCA9IHVzZXIgPT4ge1xyXG5cdGNvbnN0IHVzZXJuYW1lID0gdXNlcj8ucGFyYW1zPy51c2VybmFtZSA/IGBAJHt1c2VyLnBhcmFtcy51c2VybmFtZX1gIDogJydcclxuXHRjb25zdCBmdWxsTmFtZSA9IFt1c2VyPy5wYXJhbXM/LmZpcnN0TmFtZSwgdXNlcj8ucGFyYW1zPy5sYXN0TmFtZV1cclxuXHRcdC5maWx0ZXIoQm9vbGVhbilcclxuXHRcdC5qb2luKCcgJylcclxuXHRcdC50cmltKClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFtmdWxsTmFtZSB8fCB1c2VyPy5wYXJhbXM/LmRpc3BsYXlOYW1lIHx8IHVzZXI/LnRpdGxlLCB1c2VybmFtZV1cclxuXHRcdFx0LmZpbHRlcihCb29sZWFuKVxyXG5cdFx0XHQuam9pbignIOKAlCAnKSB8fFxyXG5cdFx0dXNlcj8ucGFyYW1zPy51c2VybmFtZSB8fFxyXG5cdFx0J01vbml0b3JpbmcnXHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBpdGVtU3R5bGUgPSBjaGVja2VkID0+ICh7XHJcblx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdGdhcDogJzEwcHgnLFxyXG5cdHBhZGRpbmc6ICcxMnB4IDE0cHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzEycHgnLFxyXG5cdGJvcmRlcjogY2hlY2tlZCA/ICcxcHggc29saWQgIzI1NjNlYicgOiAnMXB4IHNvbGlkICNkYmUzZjAnLFxyXG5cdGJhY2tncm91bmQ6IGNoZWNrZWQgPyAnI2VmZjZmZicgOiAnI2ZmZmZmZicsXHJcblx0Y3Vyc29yOiAncG9pbnRlcicsXHJcbn0pXHJcblxyXG5jb25zdCBlcnJvclRleHRTdHlsZSA9IHtcclxuXHRjb2xvcjogJyNkYzI2MjYnLFxyXG5cdGZvbnRTaXplOiAnMTJweCcsXHJcbn1cclxuXHJcbmNvbnN0IHNlbGVjdFN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTJweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNkYmUzZjAnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxuXHRmb250U2l6ZTogJzE0cHgnLFxyXG59XHJcblxyXG5jb25zdCBQdXJjaGFzZVVzZXJzRWRpdCA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xyXG5cdGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXHJcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuXHRjb25zdCB7XHJcblx0XHRpMThuOiB7IGxhbmd1YWdlIH0sXHJcblx0fSA9IHVzZVRyYW5zbGF0aW9uKClcclxuXHJcblx0Y29uc3QgdGV4dCA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdGxhYmVsOiAn0KHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAn0JLRi9Cx0LXRgNC40YLQtSDQvtC00L3RgyDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC+INGB0YLRgNGD0LrRgtGD0YAuJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyTGFiZWw6ICfQodC+0LPQu9Cw0YHRg9GO0YnQuNC5INGA0YPQutC+0LLQvtC00LjRgtC10LvRjCcsXHJcblx0XHRcdFx0XHRhcHByb3ZlckRlc2NyaXB0aW9uOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNGD0LrQvtCy0L7QtNC40YLQtdC70Y8g0LjQtyDRgdC/0LjRgdC60LAuJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyUGxhY2Vob2xkZXI6ICfQktGL0LHQtdGA0LjRgtC1INGA0YPQutC+0LLQvtC00LjRgtC10LvRjycsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiAn0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUuLi4nLFxyXG5cdFx0XHRcdFx0ZW1wdHk6ICfQn9C+0LrQsCDQvdC10YIg0YHRgtGA0YPQutGC0YPRgCDQtNC70Y8g0LLRi9Cx0L7RgNCwLicsXHJcblx0XHRcdFx0XHRhcHByb3ZlckVtcHR5OiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4INGBINGA0L7Qu9GM0Y4gbW9uaXRvcmluZyDQv9C+0LrQsCDQvdC1INC90LDQudC00LXQvdGLLicsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdGxhYmVsOiAnVHV6aWxtYWxhcicsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J1R1emlsbWEgcm9saWRhZ2kgYmlyIHlva2kgYmlyIG5lY2h0YSBmb3lkYWxhbnV2Y2hpbmkgdGFubGFuZy4nLFxyXG5cdFx0XHRcdFx0YXBwcm92ZXJMYWJlbDogJ1Rhc2RpcWxvdmNoaSBib3NobGlxJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyRGVzY3JpcHRpb246ICdNb25pdG9yaW5nIHJvbGlkYWdpIGJvc2hsaXFuaSB0YW5sYW5nLicsXHJcblx0XHRcdFx0XHRhcHByb3ZlclBsYWNlaG9sZGVyOiAnQm9zaGxpcW5pIHRhbmxhbmcnLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogJ01h4oCZbHVtb3RsYXIgeXVrbGFubW9xZGEuLi4nLFxyXG5cdFx0XHRcdFx0ZW1wdHk6ICdIb3ppcmNoYSB0dXppbG1hIHJvbGlkYWdpIGZveWRhbGFudXZjaGkgdG9waWxtYWRpLicsXHJcblx0XHRcdFx0XHRhcHByb3ZlckVtcHR5OlxyXG5cdFx0XHRcdFx0XHQnSG96aXJjaGEgbW9uaXRvcmluZyByb2xpZGFnaSBmb3lkYWxhbnV2Y2hpIHRvcGlsbWFkaS4nLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0Y29uc3Qgc2VsZWN0ZWRVc2VycyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBwYXJzZVNlbGVjdGVkVXNlcnMocmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdKSxcclxuXHRcdFtwcm9wZXJ0eS5wYXRoLCByZWNvcmQucGFyYW1zXSxcclxuXHQpXHJcblx0Y29uc3Qgc2VsZWN0ZWRBcHByb3ZlciA9IFN0cmluZyhyZWNvcmQucGFyYW1zPy5hcHByb3ZlciB8fCAnJylcclxuXHRjb25zdCBzZWxlY3RlZFVzZXJzRXJyb3IgPSByZWNvcmQuZXJyb3JzPy5zZWxlY3RlZFVzZXJzPy5tZXNzYWdlXHJcblx0Y29uc3QgYXBwcm92ZXJFcnJvciA9IHJlY29yZC5lcnJvcnM/LmFwcHJvdmVyPy5tZXNzYWdlXHJcblxyXG5cdGNvbnN0IHN0cnVjdHVyZVVzZXJzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IHVzZXJzLmZpbHRlcih1c2VyID0+IHVzZXI/LnBhcmFtcz8ucm9sZSA9PT0gJ3R1emlsbWFsYXInKSxcclxuXHRcdFt1c2Vyc10sXHJcblx0KVxyXG5cclxuXHRjb25zdCBtb25pdG9yaW5nVXNlcnMgPSB1c2VNZW1vKFxyXG5cdFx0KCkgPT4gdXNlcnMuZmlsdGVyKHVzZXIgPT4gdXNlcj8ucGFyYW1zPy5yb2xlID09PSAnbW9uaXRvcmluZycpLFxyXG5cdFx0W3VzZXJzXSxcclxuXHQpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRsZXQgaXNBY3RpdmUgPSB0cnVlXHJcblxyXG5cdFx0Y29uc3QgbG9hZFVzZXJzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnJlc291cmNlQWN0aW9uKHtcclxuXHRcdFx0XHRcdHJlc291cmNlSWQ6ICdVc2VyJyxcclxuXHRcdFx0XHRcdGFjdGlvbk5hbWU6ICdwaWNrZXInLFxyXG5cdFx0XHRcdFx0cGFyYW1zOiB7IHBlclBhZ2U6IDUwMCB9LFxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdGlmIChpc0FjdGl2ZSkge1xyXG5cdFx0XHRcdFx0c2V0VXNlcnMocmVzcG9uc2UuZGF0YS5yZWNvcmRzIHx8IFtdKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCB7XHJcblx0XHRcdFx0aWYgKGlzQWN0aXZlKSB7XHJcblx0XHRcdFx0XHRzZXRVc2VycyhbXSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0aWYgKGlzQWN0aXZlKSB7XHJcblx0XHRcdFx0XHRzZXRMb2FkaW5nKGZhbHNlKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxvYWRVc2VycygpXHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0aXNBY3RpdmUgPSBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sIFtdKVxyXG5cclxuXHRjb25zdCB0b2dnbGVVc2VyID0gdXNlcklkID0+IHtcclxuXHRcdGNvbnN0IG5leHRVc2VycyA9IHNlbGVjdGVkVXNlcnMuaW5jbHVkZXModXNlcklkKVxyXG5cdFx0XHQ/IHNlbGVjdGVkVXNlcnMuZmlsdGVyKGlkID0+IGlkICE9PSB1c2VySWQpXHJcblx0XHRcdDogWy4uLnNlbGVjdGVkVXNlcnMsIHVzZXJJZF1cclxuXHJcblx0XHRvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBKU09OLnN0cmluZ2lmeShuZXh0VXNlcnMpKVxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2VsZWN0QXBwcm92ZXIgPSB1c2VySWQgPT4ge1xyXG5cdFx0b25DaGFuZ2UoJ2FwcHJvdmVyJywgU3RyaW5nKHVzZXJJZCkpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveD5cclxuXHRcdFx0PExhYmVsIHJlcXVpcmVkPXtwcm9wZXJ0eS5pc1JlcXVpcmVkfT5cclxuXHRcdFx0XHR7cHJvcGVydHkubGFiZWwgJiYgcHJvcGVydHkubGFiZWwgIT09IHByb3BlcnR5LnBhdGhcclxuXHRcdFx0XHRcdD8gcHJvcGVydHkubGFiZWxcclxuXHRcdFx0XHRcdDogdGV4dC5sYWJlbH1cclxuXHRcdFx0PC9MYWJlbD5cclxuXHRcdFx0PFRleHQgbWI9J2RlZmF1bHQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHR7dGV4dC5kZXNjcmlwdGlvbn1cclxuXHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzhweCcgfX0+XHJcblx0XHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0XHQ8VGV4dD57dGV4dC5sb2FkaW5nfTwvVGV4dD5cclxuXHRcdFx0XHQpIDogc3RydWN0dXJlVXNlcnMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0c3RydWN0dXJlVXNlcnMubWFwKHVzZXIgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB1c2VySWQgPSBTdHJpbmcodXNlci5pZClcclxuXHRcdFx0XHRcdFx0Y29uc3QgY2hlY2tlZCA9IHNlbGVjdGVkVXNlcnMuaW5jbHVkZXModXNlcklkKVxyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwga2V5PXt1c2VySWR9IHN0eWxlPXtpdGVtU3R5bGUoY2hlY2tlZCl9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2NoZWNrYm94J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtjaGVja2VkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4gdG9nZ2xlVXNlcih1c2VySWQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntyZXNvbHZlU3RydWN0dXJlTGFiZWwodXNlcil9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxUZXh0Pnt0ZXh0LmVtcHR5fTwvVGV4dD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdHtzZWxlY3RlZFVzZXJzRXJyb3IgPyAoXHJcblx0XHRcdFx0PFRleHQgbXQ9J3NtJyBzdHlsZT17ZXJyb3JUZXh0U3R5bGV9PlxyXG5cdFx0XHRcdFx0e3NlbGVjdGVkVXNlcnNFcnJvcn1cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0PEJveCBtdD0neGwnPlxyXG5cdFx0XHRcdDxMYWJlbCByZXF1aXJlZD57dGV4dC5hcHByb3ZlckxhYmVsfTwvTGFiZWw+XHJcblx0XHRcdFx0PFRleHQgbWI9J2RlZmF1bHQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdHt0ZXh0LmFwcHJvdmVyRGVzY3JpcHRpb259XHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHR7bG9hZGluZyA/IChcclxuXHRcdFx0XHRcdDxUZXh0Pnt0ZXh0LmxvYWRpbmd9PC9UZXh0PlxyXG5cdFx0XHRcdCkgOiBtb25pdG9yaW5nVXNlcnMubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17c2VsZWN0ZWRBcHByb3Zlcn1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+IHNlbGVjdEFwcHJvdmVyKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXtzZWxlY3RTdHlsZX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0nJz57dGV4dC5hcHByb3ZlclBsYWNlaG9sZGVyfTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHR7bW9uaXRvcmluZ1VzZXJzLm1hcCh1c2VyID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17dXNlci5pZH0gdmFsdWU9e1N0cmluZyh1c2VyLmlkKX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cmVzb2x2ZUFwcHJvdmVyTGFiZWwodXNlcil9XHJcblx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxUZXh0Pnt0ZXh0LmFwcHJvdmVyRW1wdHl9PC9UZXh0PlxyXG5cdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdHthcHByb3ZlckVycm9yID8gKFxyXG5cdFx0XHRcdFx0PFRleHQgbXQ9J3NtJyBzdHlsZT17ZXJyb3JUZXh0U3R5bGV9PlxyXG5cdFx0XHRcdFx0XHR7YXBwcm92ZXJFcnJvcn1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlVXNlcnNFZGl0XHJcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBMYWJlbCwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBVTklUX09QVElPTlMgPSBbXHJcblx0J2RvbmEnLFxyXG5cdCdrZycsXHJcblx0J2xpdHInLFxyXG5cdCdtZXRyJyxcclxuXHQncXV0aScsXHJcblx0J2tvbXBsZWt0JyxcclxuXHQnanVmdCcsXHJcblx0J3Bha2V0JyxcclxuXVxyXG5jb25zdCBFTVBUWV9JVEVNID0ge1xyXG5cdHByb2R1Y3ROYW1lOiAnJyxcclxuXHRmZWF0dXJlczogJycsXHJcblx0dW5pdDogJ2RvbmEnLFxyXG5cdHF1YW50aXR5OiAxLFxyXG59XHJcblxyXG5jb25zdCBwYXJzZUl0ZW1zID0gdmFsdWUgPT4ge1xyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiBbeyAuLi5FTVBUWV9JVEVNIH1dXHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh2YWx1ZSlcclxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgJiYgcGFyc2VkLmxlbmd0aCA/IHBhcnNlZCA6IFt7IC4uLkVNUFRZX0lURU0gfV1cclxuXHR9IGNhdGNoIHtcclxuXHRcdHJldHVybiBbeyAuLi5FTVBUWV9JVEVNIH1dXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBQdXJjaGFzZUl0ZW1zRWRpdCA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xyXG5cdGNvbnN0IHtcclxuXHRcdGkxOG46IHsgbGFuZ3VhZ2UgfSxcclxuXHR9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cdGNvbnN0IHRleHQgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHRsYWJlbDogJ9Ci0L7QstCw0YDRiycsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ9CS0Ysg0LzQvtC20LXRgtC1INC00L7QsdCw0LLQuNGC0Ywg0L3QtdC+0LPRgNCw0L3QuNGH0LXQvdC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRgtC+0LLQsNGA0L7Qsi4nLFxyXG5cdFx0XHRcdFx0aXRlbTogJ9Ci0L7QstCw0YAnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ9Cd0LDQt9Cy0LDQvdC40LUg0YLQvtCy0LDRgNCwJyxcclxuXHRcdFx0XHRcdGZlYXR1cmVzOiAn0KXQsNGA0LDQutGC0LXRgNC40YHRgtC40LrQuCcsXHJcblx0XHRcdFx0XHRxdWFudGl0eTogJ9Ca0L7Qu9C40YfQtdGB0YLQstC+JyxcclxuXHRcdFx0XHRcdHJlbW92ZTogJ9Cj0LTQsNC70LjRgtGMJyxcclxuXHRcdFx0XHRcdGFkZDogJysg0JTQvtCx0LDQstC40YLRjCDRgtC+0LLQsNGAJyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0bGFiZWw6ICdUb3ZhcmxhcicsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ1RvdmFybGFybmkgeG9obGFnYW5jaGEgcW/igJhzaGlzaGluZ2l6IG11bWtpbi4nLFxyXG5cdFx0XHRcdFx0aXRlbTogJ1RvdmFyJyxcclxuXHRcdFx0XHRcdG5hbWU6ICdUb3ZhciBub21pJyxcclxuXHRcdFx0XHRcdGZlYXR1cmVzOiAnWHVzdXNpeWF0bGFyaScsXHJcblx0XHRcdFx0XHRxdWFudGl0eTogJ1NvbmknLFxyXG5cdFx0XHRcdFx0cmVtb3ZlOiAnT2xpYiB0YXNobGFzaCcsXHJcblx0XHRcdFx0XHRhZGQ6ICcrIFRvdmFyIHFv4oCYc2hpc2gnLFxyXG5cdFx0XHRcdH1cclxuXHRjb25zdCBpdGVtcyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBwYXJzZUl0ZW1zKHJlY29yZC5wYXJhbXM/Lltwcm9wZXJ0eS5wYXRoXSksXHJcblx0XHRbcHJvcGVydHkucGF0aCwgcmVjb3JkLnBhcmFtc10sXHJcblx0KVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKCFyZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0pIHtcclxuXHRcdFx0b25DaGFuZ2UocHJvcGVydHkucGF0aCwgSlNPTi5zdHJpbmdpZnkoW3sgLi4uRU1QVFlfSVRFTSB9XSkpXHJcblx0XHR9XHJcblx0fSwgW29uQ2hhbmdlLCBwcm9wZXJ0eS5wYXRoLCByZWNvcmQucGFyYW1zXSlcclxuXHJcblx0Y29uc3QgdXBkYXRlSXRlbXMgPSBuZXh0SXRlbXMgPT4ge1xyXG5cdFx0b25DaGFuZ2UocHJvcGVydHkucGF0aCwgSlNPTi5zdHJpbmdpZnkobmV4dEl0ZW1zKSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHVwZGF0ZUZpZWxkID0gKGluZGV4LCBmaWVsZCwgdmFsdWUpID0+IHtcclxuXHRcdGNvbnN0IG5leHRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgY3VycmVudEluZGV4KSA9PlxyXG5cdFx0XHRjdXJyZW50SW5kZXggPT09IGluZGV4XHJcblx0XHRcdFx0PyB7XHJcblx0XHRcdFx0XHRcdC4uLml0ZW0sXHJcblx0XHRcdFx0XHRcdFtmaWVsZF06IGZpZWxkID09PSAncXVhbnRpdHknID8gTnVtYmVyKHZhbHVlIHx8IDApIDogdmFsdWUsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0OiBpdGVtLFxyXG5cdFx0KVxyXG5cclxuXHRcdHVwZGF0ZUl0ZW1zKG5leHRJdGVtcylcclxuXHR9XHJcblxyXG5cdGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcblx0XHR1cGRhdGVJdGVtcyhbLi4uaXRlbXMsIHsgLi4uRU1QVFlfSVRFTSB9XSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbW92ZUl0ZW0gPSBpbmRleCA9PiB7XHJcblx0XHRjb25zdCBuZXh0SXRlbXMgPSBpdGVtcy5maWx0ZXIoKF8sIGN1cnJlbnRJbmRleCkgPT4gY3VycmVudEluZGV4ICE9PSBpbmRleClcclxuXHRcdHVwZGF0ZUl0ZW1zKG5leHRJdGVtcy5sZW5ndGggPyBuZXh0SXRlbXMgOiBbeyAuLi5FTVBUWV9JVEVNIH1dKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3g+XHJcblx0XHRcdDxMYWJlbCByZXF1aXJlZD17cHJvcGVydHkuaXNSZXF1aXJlZH0+XHJcblx0XHRcdFx0e3Byb3BlcnR5LmxhYmVsICYmIHByb3BlcnR5LmxhYmVsICE9PSBwcm9wZXJ0eS5wYXRoXHJcblx0XHRcdFx0XHQ/IHByb3BlcnR5LmxhYmVsXHJcblx0XHRcdFx0XHQ6IHRleHQubGFiZWx9XHJcblx0XHRcdDwvTGFiZWw+XHJcblx0XHRcdDxUZXh0IG1iPSdkZWZhdWx0JyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0e3RleHQuZGVzY3JpcHRpb259XHJcblx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxNHB4JyB9fT5cclxuXHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRrZXk9e2Ake3Byb3BlcnR5LnBhdGh9LSR7aW5kZXh9YH1cclxuXHRcdFx0XHRcdFx0cD0nbGcnXHJcblx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNkYmUzZjAnLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzE0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYmZmJyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0Lml0ZW19ICN7aW5kZXggKyAxfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3RleHQubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnByb2R1Y3ROYW1lIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2V2ZW50ID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUZpZWxkKGluZGV4LCAncHJvZHVjdE5hbWUnLCBldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjY2JkNWUxJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRyb3dzPSc0J1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3RleHQuZmVhdHVyZXN9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5mZWF0dXJlcyB8fCAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGaWVsZChpbmRleCwgJ2ZlYXR1cmVzJywgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlc2l6ZTogJ3ZlcnRpY2FsJyxcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLnVuaXQgfHwgJ2RvbmEnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGaWVsZChpbmRleCwgJ3VuaXQnLCBldmVudC50YXJnZXQudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtVTklUX09QVElPTlMubWFwKHVuaXQgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXt1bml0fSB2YWx1ZT17dW5pdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dW5pdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW49JzEnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXt0ZXh0LnF1YW50aXR5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5xdWFudGl0eSA/PyAxfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVGaWVsZChpbmRleCwgJ3F1YW50aXR5JywgZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNjYmQ1ZTEnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IG10PSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPSdzbSdcclxuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J291dGxpbmVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpbmRleCl9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3RleHQucmVtb3ZlfVxyXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdDxCb3ggbXQ9J2xnJz5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17YWRkSXRlbX0+XHJcblx0XHRcdFx0XHR7dGV4dC5hZGR9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQm94PlxyXG5cdFx0PC9Cb3g+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZUl0ZW1zRWRpdFxyXG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSDIsIEljb24sIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHVyY2hhc2VEb3dubG9hZEFjdGlvbiA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IGFjdGlvbiwgcmVjb3JkIH0gPSBwcm9wc1xyXG5cdGNvbnN0IHtcclxuXHRcdGkxOG46IHsgbGFuZ3VhZ2UgfSxcclxuXHR9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuXHRjb25zdCBmb3JtYXQgPVxyXG5cdFx0YWN0aW9uPy5jdXN0b20/LmZvcm1hdCB8fCAoYWN0aW9uPy5uYW1lID09PSAnZG93bmxvYWRXb3JkJyA/ICd3b3JkJyA6ICdwZGYnKVxyXG5cdGNvbnN0IGV4dGVuc2lvbiA9IGZvcm1hdCA9PT0gJ3dvcmQnID8gJ2RvY3gnIDogJ3BkZidcclxuXHRjb25zdCByZWNvcmRJZCA9IHJlY29yZD8uaWRcclxuXHRjb25zdCBkb3dubG9hZFVybCA9IGAvYWRtaW4vcHVyY2hhc2UtcmVxdWVzdHMvJHtyZWNvcmRJZH0vZG93bmxvYWQvJHtmb3JtYXR9P2xhbmc9JHtsYW5ndWFnZSB8fCAndXonfWBcclxuXHRjb25zdCBiYWNrVXJsID0gYC9hZG1pbi9yZXNvdXJjZXMvUHVyY2hhc2VSZXF1ZXN0L3JlY29yZHMvJHtyZWNvcmRJZH0vc2hvd2BcclxuXHRjb25zdCB0ZXh0ID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0dGl0bGU6IGAke2V4dGVuc2lvbi50b1VwcGVyQ2FzZSgpfSDRhNCw0LnQuyDQv9C+0LTQs9C+0YLQsNCy0LvQuNCy0LDQtdGC0YHRj2AsXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpcclxuXHRcdFx0XHRcdFx0J9CX0LDQs9GA0YPQt9C60LAg0LTQvtC70LbQvdCwINC90LDRh9Cw0YLRjNGB0Y8g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguINCV0YHQu9C4INGN0YLQvtCz0L4g0L3QtSDQv9GA0L7QuNC30L7RiNC70L4sINC90LDQttC80LjRgtC1INC60L3QvtC/0LrRgyDQvdC40LbQtS4nLFxyXG5cdFx0XHRcdFx0ZG93bmxvYWRBZ2FpbjogYCR7ZXh0ZW5zaW9uLnRvVXBwZXJDYXNlKCl9INGB0LrQsNGH0LDRgtGMYCxcclxuXHRcdFx0XHRcdGdvQmFjazogJ9CS0LXRgNC90YPRgtGM0YHRjyDQuiDQt9Cw0Y/QstC60LUnLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHR0aXRsZTogYCR7ZXh0ZW5zaW9uLnRvVXBwZXJDYXNlKCl9IGZheWwgdGF5eW9ybGFubW9xZGFgLFxyXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246XHJcblx0XHRcdFx0XHRcdCdZdWtsYWIgb2xpc2ggYXZ0b21hdGlrIGJvc2hsYW5pc2hpIGtlcmFrLiBCb3NobGFubWFzYSwgcXV5aWRhZ2kgdHVnbWFuaSBib3NpbmcuJyxcclxuXHRcdFx0XHRcdGRvd25sb2FkQWdhaW46IGAke2V4dGVuc2lvbi50b1VwcGVyQ2FzZSgpfSB5dWtsYWIgb2xpc2hgLFxyXG5cdFx0XHRcdFx0Z29CYWNrOiAnQXJpemFnYSBxYXl0aXNoJyxcclxuXHRcdFx0XHR9XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoIXJlY29yZElkKSB7XHJcblx0XHRcdHJldHVybiB1bmRlZmluZWRcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxyXG5cdFx0aWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHRcdGlmcmFtZS5zcmMgPSBkb3dubG9hZFVybFxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpXHJcblxyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnMoaWZyYW1lKSkge1xyXG5cdFx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgW2Rvd25sb2FkVXJsLCByZWNvcmRJZF0pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Qm94IHZhcmlhbnQ9J2dyZXknPlxyXG5cdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJyBib3hTaGFkb3c9J2NhcmQnPlxyXG5cdFx0XHRcdDxUZXh0IGNvbG9yPSdwcmltYXJ5MTAwJyBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRaYXhpcmEudXpcclxuXHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PEgyPnt0ZXh0LnRpdGxlfTwvSDI+XHJcblx0XHRcdFx0PFRleHQgbXQ9J2RlZmF1bHQnIG1iPSd4bCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0e3RleHQuZGVzY3JpcHRpb259XHJcblx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHQ8Qm94IGRpc3BsYXk9J2ZsZXgnIGZsZXhXcmFwPSd3cmFwJyBnYXA9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBhcz0nYScgaHJlZj17ZG93bmxvYWRVcmx9PlxyXG5cdFx0XHRcdFx0XHQ8SWNvbiBpY29uPSdEb3dubG9hZCcgbXI9J3NtJyAvPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC5kb3dubG9hZEFnYWlufVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPXtiYWNrVXJsfSB2YXJpYW50PSdvdXRsaW5lZCc+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LmdvQmFja31cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdDwvQm94PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHVyY2hhc2VEb3dubG9hZEFjdGlvblxyXG4iLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSDIsIE1lc3NhZ2VCb3gsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyBBcGlDbGllbnQsIHVzZU5vdGljZSwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJ1xyXG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcbmNvbnN0IERFQ0lTSU9OUyA9IFsndGFzZGlxbGFuZGknLCAncWlzbWFuIHRhc2RpcWxhbmRpJywgJ3JhZCBldGlsZGknXVxyXG5cclxuY29uc3QgcGFyc2VIaXN0b3J5ID0gdmFsdWUgPT4ge1xyXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlXHJcblx0fVxyXG5cclxuXHRpZiAoIXZhbHVlKSB7XHJcblx0XHRyZXR1cm4gW11cclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHZhbHVlKVxyXG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZCA6IFtdXHJcblx0fSBjYXRjaCB7XHJcblx0XHRyZXR1cm4gW11cclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG9wdGlvblN0eWxlID0gc2VsZWN0ZWQgPT4gKHtcclxuXHRkaXNwbGF5OiAnZmxleCcsXHJcblx0YWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG5cdGdhcDogJzEwcHgnLFxyXG5cdHBhZGRpbmc6ICcxMnB4IDE0cHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzEycHgnLFxyXG5cdGJvcmRlcjogc2VsZWN0ZWQgPyAnMXB4IHNvbGlkICMyNTYzZWInIDogJzFweCBzb2xpZCAjZGJlM2YwJyxcclxuXHRiYWNrZ3JvdW5kOiBzZWxlY3RlZCA/ICcjZWZmNmZmJyA6ICcjZmZmZmZmJyxcclxuXHRjdXJzb3I6ICdwb2ludGVyJyxcclxufSlcclxuXHJcbmNvbnN0IHRleHRhcmVhU3R5bGUgPSB7XHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRtaW5IZWlnaHQ6ICcxMjBweCcsXHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0Ym9yZGVyUmFkaXVzOiAnMTJweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNjYmQ1ZTEnLFxyXG5cdHJlc2l6ZTogJ3ZlcnRpY2FsJyxcclxuXHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxufVxyXG5cclxuY29uc3QgZ2V0RGVjaXNpb25PcHRpb25NZXRhID0gKGRlY2lzaW9uLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IG9wdGlvbnMgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaToge1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ9Cf0L7QtNGC0LLQtdGA0LTQuNGC0YwnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAn4pyTJyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNkY2ZjZTcnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyMxNjY1MzQnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiB7XHJcblx0XHRcdFx0XHRcdGxhYmVsOiAn0KfQsNGB0YLQuNGH0L3QviDQv9C+0LTRgtCy0LXRgNC00LjRgtGMJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ+KXkCcsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZmVmM2M3JyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjYjQ1MzA5JyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQncmFkIGV0aWxkaSc6IHtcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICfQntGC0LrQu9C+0L3QuNGC0YwnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAn4pyVJyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmZWUyZTInLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyNiOTFjMWMnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZGk6IHtcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdUYXNkaXFsYXNoJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ+KckycsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZGNmY2U3JyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjMTY2NTM0JyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzoge1xyXG5cdFx0XHRcdFx0XHRsYWJlbDogJ1Fpc21hbiB0YXNkaXFsYXNoJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ+KXkCcsXHJcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZmVmM2M3JyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjYjQ1MzA5JyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQncmFkIGV0aWxkaSc6IHtcclxuXHRcdFx0XHRcdFx0bGFiZWw6ICdSYWQgZXRpc2gnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAn4pyVJyxcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmZWUyZTInLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyNiOTFjMWMnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRvcHRpb25zW2RlY2lzaW9uXSB8fCB7XHJcblx0XHRcdGxhYmVsOiBkZWNpc2lvbixcclxuXHRcdFx0aWNvbjogJ+KAoicsXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZTJlOGYwJyxcclxuXHRcdFx0Y29sb3I6ICcjNDc1NTY5JyxcclxuXHRcdH1cclxuXHQpXHJcbn1cclxuXHJcbmNvbnN0IHJlc29sdmVTdGFnZUxhYmVsID0gKHN0YWdlLCB0ZXh0KSA9PiB7XHJcblx0aWYgKHN0YWdlID09PSAnbW9uaXRvcmluZycpIHtcclxuXHRcdHJldHVybiB0ZXh0LnN0YWdlTW9uaXRvcmluZ1xyXG5cdH1cclxuXHJcblx0aWYgKHN0YWdlID09PSAneWFrdW5sYW5kaScpIHtcclxuXHRcdHJldHVybiB0ZXh0LnN0YWdlRmluaXNoZWRcclxuXHR9XHJcblxyXG5cdHJldHVybiB0ZXh0LnN0YWdlU3RydWN0dXJlc1xyXG59XHJcblxyXG5jb25zdCByZXNvbHZlSGlzdG9yeVN0YWdlID0gKHN0YWdlLCB0ZXh0KSA9PiB7XHJcblx0aWYgKHN0YWdlID09PSAnbW9uaXRvcmluZycpIHtcclxuXHRcdHJldHVybiB0ZXh0LnN0YWdlTW9uaXRvcmluZ1Nob3J0XHJcblx0fVxyXG5cclxuXHRpZiAoc3RhZ2UgPT09ICd5YWt1bmxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHRleHQuc3RhZ2VGaW5pc2hlZFNob3J0XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGV4dC5zdGFnZVN0cnVjdHVyZXNTaG9ydFxyXG59XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gdmFsdWUgPT4ge1xyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiAnLSdcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSlcclxuXHRpZiAoTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlXHJcblx0fVxyXG5cclxuXHRjb25zdCBwYWQgPSBudW1iZXIgPT4gU3RyaW5nKG51bWJlcikucGFkU3RhcnQoMiwgJzAnKVxyXG5cdHJldHVybiBgJHtwYWQoZGF0ZS5nZXREYXRlKCkpfS4ke3BhZChkYXRlLmdldE1vbnRoKCkgKyAxKX0uJHtkYXRlLmdldEZ1bGxZZWFyKCl9ICR7cGFkKGRhdGUuZ2V0SG91cnMoKSl9OiR7cGFkKGRhdGUuZ2V0TWludXRlcygpKX1gXHJcbn1cclxuXHJcbmNvbnN0IFB1cmNoYXNlQXBwcm92YWxBY3Rpb24gPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgeyBhY3Rpb24sIHJlY29yZCwgcmVzb3VyY2UgfSA9IHByb3BzXHJcblx0Y29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcclxuXHRjb25zdCBbZGVjaXNpb24sIHNldERlY2lzaW9uXSA9IHVzZVN0YXRlKCd0YXNkaXFsYW5kaScpXHJcblx0Y29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IHtcclxuXHRcdGkxOG46IHsgbGFuZ3VhZ2UgfSxcclxuXHR9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuXHRjb25zdCB0ZXh0ID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfQn9GA0LjQvdGP0YLRjCDRgNC10YjQtdC90LjQtSDQv9C+INC30LDRj9Cy0LrQtScsXHJcblx0XHRcdFx0XHRzdWJ0aXRsZTpcclxuXHRcdFx0XHRcdFx0J9Ce0LfQvdCw0LrQvtC80YzRgtC10YHRjCDRgSDQvNCw0YLQtdGA0LjQsNC70LDQvNC4INC30LDRj9Cy0LrQuCDQuCDQstGL0LHQtdGA0LjRgtC1INC40YLQvtCz0L7QstC+0LUg0YDQtdGI0LXQvdC40LUuJyxcclxuXHRcdFx0XHRcdHN0YXR1czogJ9Ch0YLQsNGC0YPRgScsXHJcblx0XHRcdFx0XHRzdGFnZTogJ9Ci0LXQutGD0YnQuNC5INGN0YLQsNC/JyxcclxuXHRcdFx0XHRcdHN1bW1hcnk6ICfQpdC+0LQg0YHQvtCz0LvQsNGB0L7QstCw0L3QuNGPJyxcclxuXHRcdFx0XHRcdG5vU3VtbWFyeTogJ9CY0YHRgtC+0YDQuNGPINGB0L7Qs9C70LDRgdC+0LLQsNC90LjRjyDQv9C+0LrQsCDQv9GD0YHRgtCwLicsXHJcblx0XHRcdFx0XHRkZWNpc2lvbkxhYmVsOiAn0JLRi9Cx0LXRgNC40YLQtSDRgNC10YjQtdC90LjQtScsXHJcblx0XHRcdFx0XHRjb21tZW50TGFiZWw6ICfQmtC+0LzQvNC10L3RgtCw0YDQuNC5JyxcclxuXHRcdFx0XHRcdGNvbW1lbnRPcHRpb25hbDpcclxuXHRcdFx0XHRcdFx0J9Cf0YDQuCDQv9C+0LvQvdC+0Lwg0L/QvtC00YLQstC10YDQttC00LXQvdC40Lgg0LrQvtC80LzQtdC90YLQsNGA0LjQuSDQvdC1INC+0LHRj9C30LDRgtC10LvQtdC9LicsXHJcblx0XHRcdFx0XHRjb21tZW50UmVxdWlyZWQ6XHJcblx0XHRcdFx0XHRcdCfQn9GA0Lgg0YfQsNGB0YLQuNGH0L3QvtC8INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC4INC4INC+0YLQutCw0LfQtSDQutC+0LzQvNC10L3RgtCw0YDQuNC5INC+0LHRj9C30LDRgtC10LvQtdC9LicsXHJcblx0XHRcdFx0XHRjb21tZW50UmVxdWlyZWRFcnJvcjpcclxuXHRcdFx0XHRcdFx0J9CU0LvRjyDRh9Cw0YHRgtC40YfQvdC+0LPQviDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQuCDQvtGC0LrQsNC30LAg0L3Rg9C20L3QviDRg9C60LDQt9Cw0YLRjCDQutC+0LzQvNC10L3RgtCw0YDQuNC5LicsXHJcblx0XHRcdFx0XHRzdWJtaXQ6ICfQn9C+0LTRgtCy0LXRgNC00LjRgtGMINGA0LXRiNC10L3QuNC1JyxcclxuXHRcdFx0XHRcdHNhdmluZzogJ9Ch0L7RhdGA0LDQvdGP0LXRgtGB0Y8uLi4nLFxyXG5cdFx0XHRcdFx0YmFjazogJ9CS0LXRgNC90YPRgtGM0YHRjyDQuiDQt9Cw0Y/QstC60LUnLFxyXG5cdFx0XHRcdFx0aGlzdG9yeVRpdGxlOiAn0JjRgdGC0L7RgNC40Y8g0YHQvtCz0LvQsNGB0L7QstCw0L3QuNGPJyxcclxuXHRcdFx0XHRcdHNhdmVFcnJvcjogJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0YHQvtGF0YDQsNC90LjRgtGMINGA0LXRiNC10L3QuNC1LicsXHJcblx0XHRcdFx0XHRzdGFnZVN0cnVjdHVyZXM6ICfQodC+0LPQu9Cw0YHQvtCy0LDQvdC40LUg0YHRgtGA0YPQutGC0YPRgCcsXHJcblx0XHRcdFx0XHRzdGFnZU1vbml0b3Jpbmc6ICfQodC+0LPQu9Cw0YHQvtCy0LDQvdC40LUg0YDRg9C60L7QstC+0LTQuNGC0LXQu9GPJyxcclxuXHRcdFx0XHRcdHN0YWdlRmluaXNoZWQ6ICfQn9GA0L7RhtC10YHRgSDQt9Cw0LLQtdGA0YjRkdC9JyxcclxuXHRcdFx0XHRcdHN0YWdlU3RydWN0dXJlc1Nob3J0OiAn0YHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdHN0YWdlTW9uaXRvcmluZ1Nob3J0OiAn0YDRg9C60L7QstC+0LTQuNGC0LXQu9GMJyxcclxuXHRcdFx0XHRcdHN0YWdlRmluaXNoZWRTaG9ydDogJ9C30LDQstC10YDRiNC10L3QvicsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAnUWFyb3JuaSB0YXNkaXFsYXNoJyxcclxuXHRcdFx0XHRcdHN1YnRpdGxlOlxyXG5cdFx0XHRcdFx0XHQnQXJpemEgbWF0ZXJpYWxsYXJpbmkga2/igJhyaWIgY2hpcWluZyB2YSB5YWt1bml5IHFhcm9ybmkgdGFubGFuZy4nLFxyXG5cdFx0XHRcdFx0c3RhdHVzOiAnSG9sYXRpJyxcclxuXHRcdFx0XHRcdHN0YWdlOiAnSm9yaXkgYm9zcWljaCcsXHJcblx0XHRcdFx0XHRzdW1tYXJ5OiAnVGFzZGlxbGFzaCBqYXJheW9uaScsXHJcblx0XHRcdFx0XHRub1N1bW1hcnk6ICdIb3ppcmNoYSB0YXNkaXFsYXNoIHRhcml4aSB5b+KAmHEuJyxcclxuXHRcdFx0XHRcdGRlY2lzaW9uTGFiZWw6ICdRYXJvciB0dXJpbmkgdGFubGFuZycsXHJcblx0XHRcdFx0XHRjb21tZW50TGFiZWw6ICdJem9oJyxcclxuXHRcdFx0XHRcdGNvbW1lbnRPcHRpb25hbDogJ1Rv4oCYbGlxIHRhc2RpcWxhc2hkYSBpem9oIHlvemlzaCBtYWpidXJpeSBlbWFzLicsXHJcblx0XHRcdFx0XHRjb21tZW50UmVxdWlyZWQ6XHJcblx0XHRcdFx0XHRcdCdRaXNtYW4gdGFzZGlxbGFzaCB2YSByYWQgZXRpc2hkYSBpem9oIGtpcml0aXNoIHNoYXJ0LicsXHJcblx0XHRcdFx0XHRjb21tZW50UmVxdWlyZWRFcnJvcjpcclxuXHRcdFx0XHRcdFx0J1Fpc21hbiB0YXNkaXFsYXNoIHlva2kgcmFkIGV0aXNoIHVjaHVuIGl6b2ggeW96aW5nLicsXHJcblx0XHRcdFx0XHRzdWJtaXQ6ICdRYXJvcm5pIHRhc2RpcWxhc2gnLFxyXG5cdFx0XHRcdFx0c2F2aW5nOiAnU2FxbGFubW9xZGEuLi4nLFxyXG5cdFx0XHRcdFx0YmFjazogJ0FyaXphZ2EgcWF5dGlzaCcsXHJcblx0XHRcdFx0XHRoaXN0b3J5VGl0bGU6ICdUYXNkaXFsYXNoIHRhcml4aScsXHJcblx0XHRcdFx0XHRzYXZlRXJyb3I6ICdRYXJvcm5pIHNhcWxhYiBib+KAmGxtYWRpLicsXHJcblx0XHRcdFx0XHRzdGFnZVN0cnVjdHVyZXM6ICdUdXppbG1hbGFyIHRhc2RpZ+KAmGknLFxyXG5cdFx0XHRcdFx0c3RhZ2VNb25pdG9yaW5nOiAnQm9zaGxpcSB0YXNkaWfigJhpJyxcclxuXHRcdFx0XHRcdHN0YWdlRmluaXNoZWQ6ICdKYXJheW9uIHlha3VubGFuZ2FuJyxcclxuXHRcdFx0XHRcdHN0YWdlU3RydWN0dXJlc1Nob3J0OiAndHV6aWxtYWxhcicsXHJcblx0XHRcdFx0XHRzdGFnZU1vbml0b3JpbmdTaG9ydDogJ2Jvc2hsaXEnLFxyXG5cdFx0XHRcdFx0c3RhZ2VGaW5pc2hlZFNob3J0OiAneWFrdW5sYW5kaScsXHJcblx0XHRcdFx0fVxyXG5cclxuXHRjb25zdCBoaXN0b3J5ID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IHBhcnNlSGlzdG9yeShyZWNvcmQ/LnBhcmFtcz8uYXBwcm92YWxIaXN0b3J5KS5zbGljZSgpLnJldmVyc2UoKSxcclxuXHRcdFtyZWNvcmQ/LnBhcmFtcz8uYXBwcm92YWxIaXN0b3J5XSxcclxuXHQpXHJcblx0Y29uc3QgbmVlZHNDb21tZW50ID0gZGVjaXNpb24gIT09ICd0YXNkaXFsYW5kaSdcclxuXHRjb25zdCBiYWNrVXJsID0gYC9hZG1pbi9yZXNvdXJjZXMvJHtyZXNvdXJjZT8uaWR9L3JlY29yZHMvJHtyZWNvcmQ/LmlkfS9zaG93YFxyXG5cclxuXHRjb25zdCBzdWJtaXREZWNpc2lvbiA9IGFzeW5jICgpID0+IHtcclxuXHRcdGlmIChuZWVkc0NvbW1lbnQgJiYgIWNvbW1lbnQudHJpbSgpKSB7XHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogdGV4dC5jb21tZW50UmVxdWlyZWRFcnJvcixcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRzZXRTYXZpbmcodHJ1ZSlcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5yZWNvcmRBY3Rpb24oe1xyXG5cdFx0XHRcdHJlc291cmNlSWQ6IHJlc291cmNlLmlkLFxyXG5cdFx0XHRcdHJlY29yZElkOiByZWNvcmQuaWQsXHJcblx0XHRcdFx0YWN0aW9uTmFtZTogYWN0aW9uLm5hbWUsXHJcblx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0ZGVjaXNpb24sXHJcblx0XHRcdFx0XHRjb21tZW50LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRpZiAocmVzcG9uc2U/LmRhdGE/Lm5vdGljZSkge1xyXG5cdFx0XHRcdGFkZE5vdGljZShyZXNwb25zZS5kYXRhLm5vdGljZSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZT8uZGF0YT8ucmVkaXJlY3RVcmwgfHwgYmFja1VybFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0c2V0U2F2aW5nKGZhbHNlKVxyXG5cdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IGVycm9yPy5yZXNwb25zZT8uZGF0YT8ubm90aWNlPy5tZXNzYWdlIHx8IHRleHQuc2F2ZUVycm9yLFxyXG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveCB2YXJpYW50PSdncmV5Jz5cclxuXHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCcgYm94U2hhZG93PSdjYXJkJz5cclxuXHRcdFx0XHQ8SDI+e3RleHQudGl0bGV9PC9IMj5cclxuXHRcdFx0XHQ8VGV4dCBtdD0nZGVmYXVsdCcgbWI9J3hsJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHR7dGV4dC5zdWJ0aXRsZX1cclxuXHRcdFx0XHQ8L1RleHQ+XHJcblxyXG5cdFx0XHRcdDxNZXNzYWdlQm94IHZhcmlhbnQ9J2luZm8nIG1iPSd4bCc+XHJcblx0XHRcdFx0XHQ8VGV4dD5cclxuXHRcdFx0XHRcdFx0PHN0cm9uZz57dGV4dC5zdGF0dXN9Ojwvc3Ryb25nPiB7cmVjb3JkPy5wYXJhbXM/LnN0YXR1cyB8fCAnLSd9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPnt0ZXh0LnN0YWdlfTo8L3N0cm9uZz57JyAnfVxyXG5cdFx0XHRcdFx0XHR7cmVzb2x2ZVN0YWdlTGFiZWwocmVjb3JkPy5wYXJhbXM/LmN1cnJlbnRTdGFnZSwgdGV4dCl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPnt0ZXh0LnN1bW1hcnl9Ojwvc3Ryb25nPnsnICd9XHJcblx0XHRcdFx0XHRcdHtyZWNvcmQ/LnBhcmFtcz8uYXBwcm92YWxTdW1tYXJ5IHx8IHRleHQubm9TdW1tYXJ5fVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDwvTWVzc2FnZUJveD5cclxuXHJcblx0XHRcdFx0PEJveD5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0e3RleHQuZGVjaXNpb25MYWJlbH1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHRcdHtERUNJU0lPTlMubWFwKG9wdGlvbiA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWQgPSBkZWNpc2lvbiA9PT0gb3B0aW9uXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWV0YSA9IGdldERlY2lzaW9uT3B0aW9uTWV0YShvcHRpb24sIGxhbmd1YWdlKVxyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGtleT17b3B0aW9ufSBzdHlsZT17b3B0aW9uU3R5bGUoc2VsZWN0ZWQpfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ncmFkaW8nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nZGVjaXNpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e29wdGlvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtzZWxlY3RlZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4gc2V0RGVjaXNpb24ob3B0aW9uKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzI0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBtZXRhLmJhY2tncm91bmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBtZXRhLmNvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA3MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttZXRhLmljb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnttZXRhLmxhYmVsfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3ggbXQ9J3hsJz5cclxuXHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LmNvbW1lbnRMYWJlbH1cclxuXHRcdFx0XHRcdFx0e25lZWRzQ29tbWVudCA/ICcgKicgOiAnJ31cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0IG1iPSdkZWZhdWx0JyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdHtuZWVkc0NvbW1lbnQgPyB0ZXh0LmNvbW1lbnRSZXF1aXJlZCA6IHRleHQuY29tbWVudE9wdGlvbmFsfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtjb21tZW50fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0Q29tbWVudChldmVudC50YXJnZXQudmFsdWUpfVxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17dGV4dC5jb21tZW50TGFiZWx9XHJcblx0XHRcdFx0XHRcdHN0eWxlPXt0ZXh0YXJlYVN0eWxlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBmbGV4V3JhcD0nd3JhcCcgZ2FwPSdkZWZhdWx0JyBtdD0neGwnPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtzdWJtaXREZWNpc2lvbn0gZGlzYWJsZWQ9e3NhdmluZ30+XHJcblx0XHRcdFx0XHRcdHtzYXZpbmcgPyB0ZXh0LnNhdmluZyA6IHRleHQuc3VibWl0fVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGFzPSdhJyBocmVmPXtiYWNrVXJsfSB2YXJpYW50PSdvdXRsaW5lZCc+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LmJhY2t9XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0e2hpc3RvcnkubGVuZ3RoID8gKFxyXG5cdFx0XHRcdFx0PEJveCBtdD0neHhsJz5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2RlZmF1bHQnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0Lmhpc3RvcnlUaXRsZX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzEwcHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdHtoaXN0b3J5Lm1hcCgoZW50cnksIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17YCR7ZW50cnkuZGVjaWRlZEF0IHx8ICdlbnRyeSd9LSR7aW5kZXh9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0cD0nbGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNlMmU4ZjAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2VudHJ5LnVzZXJOYW1lIHx8ICctJ30g4oCUIHtlbnRyeS5kZWNpc2lvbiB8fCAnLSd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jlc29sdmVIaXN0b3J5U3RhZ2UoZW50cnkuc3RhZ2UsIHRleHQpfSDCt3snICd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Zvcm1hdERhdGUoZW50cnkuZGVjaWRlZEF0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7ZW50cnkuY29tbWVudCA/IDxUZXh0IG10PSdzbSc+e2VudHJ5LmNvbW1lbnR9PC9UZXh0PiA6IG51bGx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlQXBwcm92YWxBY3Rpb25cclxuIiwiaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuXHJcbmNvbnN0IGNvbXBhY3RTdHlsZSA9IHtcclxuXHRkaXNwbGF5OiAnYmxvY2snLFxyXG5cdG1heFdpZHRoOiAnMjIwcHgnLFxyXG5cdG92ZXJmbG93OiAnaGlkZGVuJyxcclxuXHR0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcblx0d2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbn1cclxuXHJcbmNvbnN0IGNvbW1lbnRTdHlsZSA9IHtcclxuXHRkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxyXG5cdG1heFdpZHRoOiAnMzYwcHgnLFxyXG5cdG92ZXJmbG93OiAnaGlkZGVuJyxcclxuXHR0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcblx0d2hpdGVTcGFjZTogJ25vcm1hbCcsXHJcblx0bGluZUhlaWdodDogJzEuNCcsXHJcblx0V2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnLFxyXG5cdFdlYmtpdExpbmVDbGFtcDogMixcclxufVxyXG5cclxuY29uc3QgZGV0YWlsQ2FyZFN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICdibG9jaycsXHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRtYXhXaWR0aDogJ25vbmUnLFxyXG5cdG1pbldpZHRoOiAnMTAwJScsXHJcblx0cGFkZGluZzogJzE4cHggMjBweCcsXHJcblx0bWFyZ2luOiAnNnB4IDAgMTJweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdGJvcmRlclJhZGl1czogJzE0cHgnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxuXHRib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuXHRsaW5lSGVpZ2h0OiAnMS43JyxcclxuXHRib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KScsXHJcbn1cclxuXHJcbmNvbnN0IG5vdGVDYXJkU3R5bGUgPSB7XHJcblx0Li4uZGV0YWlsQ2FyZFN0eWxlLFxyXG5cdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHR3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxyXG5cdHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxyXG59XHJcblxyXG5jb25zdCBzZWN0aW9uVGl0bGVTdHlsZSA9IHtcclxuXHRmb250U2l6ZTogJzEzcHgnLFxyXG5cdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRjb2xvcjogJyMwZjE3MmEnLFxyXG5cdG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG59XHJcblxyXG5jb25zdCBoZWxwZXJUZXh0U3R5bGUgPSB7XHJcblx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRjb2xvcjogJyM2NDc0OGInLFxyXG59XHJcblxyXG5jb25zdCBjaGlwV3JhcFN0eWxlID0ge1xyXG5cdGRpc3BsYXk6ICdncmlkJyxcclxuXHRncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJyxcclxuXHRnYXA6ICcxMHB4JyxcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdG1hcmdpblRvcDogJzhweCcsXHJcbn1cclxuXHJcbmNvbnN0IGNoaXBTdHlsZSA9IHtcclxuXHRkaXNwbGF5OiAnZmxleCcsXHJcblx0YWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG5cdGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXHJcblx0d2lkdGg6ICcxMDAlJyxcclxuXHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2VmZjZmZicsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNiZmRiZmUnLFxyXG5cdGNvbG9yOiAnIzFkNGVkOCcsXHJcblx0Zm9udFNpemU6ICcxM3B4JyxcclxuXHRmb250V2VpZ2h0OiA2MDAsXHJcblx0bGluZUhlaWdodDogJzEuNScsXHJcblx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcblx0d2hpdGVTcGFjZTogJ25vcm1hbCcsXHJcblx0d29yZEJyZWFrOiAnYnJlYWstd29yZCcsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlV3JhcFN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0b3ZlcmZsb3dYOiAnYXV0bycsXHJcblx0bWFyZ2luVG9wOiAnOHB4JyxcclxufVxyXG5cclxuY29uc3QgdGFibGVTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLFxyXG5cdGZvbnRTaXplOiAnMTNweCcsXHJcbn1cclxuXHJcbmNvbnN0IHRhYmxlSGVhZENlbGxTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0Y29sb3I6ICcjMzM0MTU1JyxcclxuXHRmb250V2VpZ2h0OiA3MDAsXHJcblx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZUNlbGxTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0dmVydGljYWxBbGlnbjogJ3RvcCcsXHJcblx0Y29sb3I6ICcjMTExODI3JyxcclxufVxyXG5cclxuY29uc3Qgc3RhdHVzQmFkZ2VCYXNlU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0cGFkZGluZzogJzRweCAxMHB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRmb250V2VpZ2h0OiA3MDAsXHJcblx0bGluZUhlaWdodDogJzEuNCcsXHJcblx0bWF4V2lkdGg6ICdmaXQtY29udGVudCcsXHJcbn1cclxuXHJcbmNvbnN0IHBhcnNlSXRlbXMgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG5cclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh2YWx1ZSlcclxuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQgOiBbXVxyXG5cdH0gY2F0Y2gge1xyXG5cdFx0cmV0dXJuIFtdXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBwYXJzZUFycmF5ID0gdmFsdWUgPT4ge1xyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodmFsdWUpXHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWQpID8gcGFyc2VkIDogW11cclxuXHR9IGNhdGNoIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZ2V0SXRlbXNDb3VudExhYmVsID0gKGNvdW50LCBsYW5ndWFnZSkgPT4ge1xyXG5cdGlmIChsYW5ndWFnZSA9PT0gJ3J1Jykge1xyXG5cdFx0cmV0dXJuIGAke2NvdW50fSAke2NvdW50ID09PSAxID8gJ9Cy0LjQtCDRgtC+0LLQsNGA0LAnIDogY291bnQgPCA1ID8gJ9Cy0LjQtNCwINGC0L7QstCw0YDQsCcgOiAn0LLQuNC00L7QsiDRgtC+0LLQsNGA0LAnfWBcclxuXHR9XHJcblxyXG5cdHJldHVybiBgJHtjb3VudH0gdGEgdHVyZGFnaSB0b3ZhcmBcclxufVxyXG5cclxuY29uc3QgZ2V0U2VsZWN0ZWRVc2Vyc0NvdW50TGFiZWwgPSAoY291bnQsIGxhbmd1YWdlKSA9PiB7XHJcblx0aWYgKGxhbmd1YWdlID09PSAncnUnKSB7XHJcblx0XHRyZXR1cm4gYCR7Y291bnR9ICR7Y291bnQgPT09IDEgPyAn0YHRgtGA0YPQutGC0YPRgNCwJyA6IGNvdW50IDwgNSA/ICfRgdGC0YDRg9C60YLRg9GA0YsnIDogJ9GB0YLRgNGD0LrRgtGD0YAnfWBcclxuXHR9XHJcblxyXG5cdHJldHVybiBgJHtjb3VudH0gdGEgdHV6aWxtYWBcclxufVxyXG5cclxuY29uc3Qgbm9ybWFsaXplVGV4dCA9IHZhbHVlID0+XHJcblx0U3RyaW5nKHZhbHVlIHx8ICctJylcclxuXHRcdC5yZXBsYWNlKC9cXHMrL2csICcgJylcclxuXHRcdC50cmltKCkgfHwgJy0nXHJcblxyXG5jb25zdCBub3JtYWxpemVEZXRhaWxlZFRleHQgPSB2YWx1ZSA9PiBTdHJpbmcodmFsdWUgfHwgJycpLnRyaW0oKSB8fCAn4oCUJ1xyXG5cclxuY29uc3Qgc3BsaXROYW1lcyA9IHZhbHVlID0+XHJcblx0U3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdFx0LnNwbGl0KCcsJylcclxuXHRcdC5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSlcclxuXHRcdC5maWx0ZXIoQm9vbGVhbilcclxuXHJcbmNvbnN0IGdldEN1cnJlbnRDeWNsZUhpc3RvcnkgPSBoaXN0b3J5ID0+IHtcclxuXHRjb25zdCBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShoaXN0b3J5KSA/IGhpc3RvcnkgOiBbXVxyXG5cdGNvbnN0IGxhc3RSZXN1Ym1pdHRlZEluZGV4ID0gZW50cmllc1xyXG5cdFx0Lm1hcChpdGVtID0+IFN0cmluZyhpdGVtPy5zdGFnZSB8fCAnJykudG9Mb3dlckNhc2UoKSlcclxuXHRcdC5sYXN0SW5kZXhPZigncmVzdWJtaXR0ZWQnKVxyXG5cclxuXHRyZXR1cm4gbGFzdFJlc3VibWl0dGVkSW5kZXggPj0gMFxyXG5cdFx0PyBlbnRyaWVzLnNsaWNlKGxhc3RSZXN1Ym1pdHRlZEluZGV4ICsgMSlcclxuXHRcdDogZW50cmllc1xyXG59XHJcblxyXG5jb25zdCBmb3JtYXREYXRlVGltZSA9IHZhbHVlID0+IHtcclxuXHRpZiAoIXZhbHVlKSB7XHJcblx0XHRyZXR1cm4gJ+KAlCdcclxuXHR9XHJcblxyXG5cdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSlcclxuXHJcblx0aWYgKE51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSkpIHtcclxuXHRcdHJldHVybiBub3JtYWxpemVEZXRhaWxlZFRleHQodmFsdWUpXHJcblx0fVxyXG5cclxuXHRjb25zdCBwYWQgPSBudW1iZXIgPT4gU3RyaW5nKG51bWJlcikucGFkU3RhcnQoMiwgJzAnKVxyXG5cdHJldHVybiBgJHtwYWQoZGF0ZS5nZXREYXRlKCkpfS4ke3BhZChkYXRlLmdldE1vbnRoKCkgKyAxKX0uJHtkYXRlLmdldEZ1bGxZZWFyKCl9ICR7cGFkKGRhdGUuZ2V0SG91cnMoKSl9OiR7cGFkKGRhdGUuZ2V0TWludXRlcygpKX1gXHJcbn1cclxuXHJcbmNvbnN0IGdldExvY2FsaXplZFZhbHVlID0gKHBhdGgsIHZhbHVlLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJylcclxuXHRcdC50cmltKClcclxuXHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdGlmIChwYXRoID09PSAnc3RhdHVzJykge1xyXG5cdFx0Y29uc3QgbGFiZWxzID1cclxuXHRcdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0J2tv4oCYcmlsbW9xZGEnOiAn0J3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LgnLFxyXG5cdFx0XHRcdFx0XHQndHV6aWxtYWxhciB0YXNkaWfigJhpZGEnOiAn0J3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LgnLFxyXG5cdFx0XHRcdFx0XHR0YXNkaXFsYW5tb3FkYTogJ9Cd0LAg0YPRgtCy0LXRgNC20LTQtdC90LjQuCcsXHJcblx0XHRcdFx0XHRcdCdib3NobGlxIHRhc2RpZ+KAmGlkYSc6ICfQndCwINGD0YLQstC10YDQttC00LXQvdC40LgnLFxyXG5cdFx0XHRcdFx0XHR0YXNkaXFsYW5nYW46ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4nLFxyXG5cdFx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiAn0KfQsNGB0YLQuNGH0L3QviDQv9C+0LTRgtCy0LXRgNC20LTQtdC90L4nLFxyXG5cdFx0XHRcdFx0XHQnc290aWIgb2xpc2gga2VyYWsnOiAn0KLRgNC10LHRg9C10YLRgdGPINC30LDQutGD0L/QutCwJyxcclxuXHRcdFx0XHRcdFx0J3NvdGliIG9saW5tb3FkYSc6ICfQkiDQt9Cw0LrRg9C/0LrQtScsXHJcblx0XHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ9Ce0YLQutCw0LfQsNC90L4nLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDoge1xyXG5cdFx0XHRcdFx0XHQna2/igJhyaWxtb3FkYSc6ICdLb+KAmHJpbG1vcWRhJyxcclxuXHRcdFx0XHRcdFx0J3R1emlsbWFsYXIgdGFzZGln4oCYaWRhJzogJ0tv4oCYcmlsbW9xZGEnLFxyXG5cdFx0XHRcdFx0XHR0YXNkaXFsYW5tb3FkYTogJ1Rhc2RpcWxhbm1vcWRhJyxcclxuXHRcdFx0XHRcdFx0J2Jvc2hsaXEgdGFzZGln4oCYaWRhJzogJ1Rhc2RpcWxhbm1vcWRhJyxcclxuXHRcdFx0XHRcdFx0dGFzZGlxbGFuZ2FuOiAnVGFzZGlxbGFuZ2FuJyxcclxuXHRcdFx0XHRcdFx0dGFzZGlxbGFuZGk6ICdUYXNkaXFsYW5nYW4nLFxyXG5cdFx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzogJ1Fpc21hbiB0YXNkaXFsYW5kaScsXHJcblx0XHRcdFx0XHRcdCdzb3RpYiBvbGlzaCBrZXJhayc6ICdTb3RpYiBvbGlzaCBrZXJhaycsXHJcblx0XHRcdFx0XHRcdCdzb3RpYiBvbGlubW9xZGEnOiAnU290aWIgb2xpbm1vcWRhJyxcclxuXHRcdFx0XHRcdFx0J3JhZCBldGlsZGknOiAnUmFkIGV0aWxkaScsXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGxhYmVsc1tub3JtYWxpemVkVmFsdWVdIHx8IHZhbHVlXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2N1cnJlbnRTdGFnZScpIHtcclxuXHRcdGNvbnN0IGxhYmVscyA9XHJcblx0XHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdFx0PyB7XHJcblx0XHRcdFx0XHRcdHR1emlsbWFsYXI6ICfQodGC0YDRg9C60YLRg9GA0YsnLFxyXG5cdFx0XHRcdFx0XHRtb25pdG9yaW5nOiAn0KDRg9C60L7QstC+0LTQuNGC0LXQu9GMJyxcclxuXHRcdFx0XHRcdFx0c290aWJfb2xpc2g6ICfQl9Cw0LrRg9C/0LrQsCcsXHJcblx0XHRcdFx0XHRcdHlha3VubGFuZGk6ICfQl9Cw0LLQtdGA0YjQtdC90L4nLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDoge1xyXG5cdFx0XHRcdFx0XHR0dXppbG1hbGFyOiAnVHV6aWxtYScsXHJcblx0XHRcdFx0XHRcdG1vbml0b3Jpbmc6ICdCb3NobGlxJyxcclxuXHRcdFx0XHRcdFx0c290aWJfb2xpc2g6ICdTb3RpYiBvbGlzaCcsXHJcblx0XHRcdFx0XHRcdHlha3VubGFuZGk6ICdZYWt1bmxhbmRpJyxcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbGFiZWxzW25vcm1hbGl6ZWRWYWx1ZV0gfHwgdmFsdWVcclxuXHR9XHJcblxyXG5cdHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5jb25zdCBnZXRTdGF0dXNTdHlsZSA9IChwYXRoLCB2YWx1ZSkgPT4ge1xyXG5cdGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJylcclxuXHRcdC50cmltKClcclxuXHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdGlmIChwYXRoID09PSAnY3VycmVudFN0YWdlJykge1xyXG5cdFx0aWYgKG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ21vbml0b3JpbmcnKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsXHJcblx0XHRcdFx0YmFja2dyb3VuZDogJyNlZGU5ZmUnLFxyXG5cdFx0XHRcdGNvbG9yOiAnIzZkMjhkOScsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobm9ybWFsaXplZFZhbHVlID09PSAnc290aWJfb2xpc2gnKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsXHJcblx0XHRcdFx0YmFja2dyb3VuZDogJyNkYmVhZmUnLFxyXG5cdFx0XHRcdGNvbG9yOiAnIzFkNGVkOCcsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAobm9ybWFsaXplZFZhbHVlID09PSAneWFrdW5sYW5kaScpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSxcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2U1ZTdlYicsXHJcblx0XHRcdFx0Y29sb3I6ICcjMzc0MTUxJyxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7IC4uLnN0YXR1c0JhZGdlQmFzZVN0eWxlLCBiYWNrZ3JvdW5kOiAnI2RiZWFmZScsIGNvbG9yOiAnIzFkNGVkOCcgfVxyXG5cdH1cclxuXHJcblx0aWYgKFsndGFzZGlxbGFuZ2FuJywgJ3Rhc2RpcWxhbmRpJ10uaW5jbHVkZXMobm9ybWFsaXplZFZhbHVlKSkge1xyXG5cdFx0cmV0dXJuIHsgLi4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsIGJhY2tncm91bmQ6ICcjZGNmY2U3JywgY29sb3I6ICcjMTY2NTM0JyB9XHJcblx0fVxyXG5cclxuXHRpZiAobm9ybWFsaXplZFZhbHVlID09PSAncWlzbWFuIHRhc2RpcWxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHsgLi4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsIGJhY2tncm91bmQ6ICcjZmVmM2M3JywgY29sb3I6ICcjYjQ1MzA5JyB9XHJcblx0fVxyXG5cclxuXHRpZiAobm9ybWFsaXplZFZhbHVlID09PSAnc290aWIgb2xpc2gga2VyYWsnKSB7XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSwgYmFja2dyb3VuZDogJyNkYmVhZmUnLCBjb2xvcjogJyMxZDRlZDgnIH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkVmFsdWUgPT09ICdzb3RpYiBvbGlubW9xZGEnKSB7XHJcblx0XHRyZXR1cm4geyAuLi5zdGF0dXNCYWRnZUJhc2VTdHlsZSwgYmFja2dyb3VuZDogJyNlZGU5ZmUnLCBjb2xvcjogJyM2ZDI4ZDknIH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkVmFsdWUgPT09ICdyYWQgZXRpbGRpJykge1xyXG5cdFx0cmV0dXJuIHsgLi4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsIGJhY2tncm91bmQ6ICcjZmVlMmUyJywgY29sb3I6ICcjYjkxYzFjJyB9XHJcblx0fVxyXG5cclxuXHRpZiAoWyd0YXNkaXFsYW5tb3FkYScsICdib3NobGlxIHRhc2RpZ+KAmGlkYSddLmluY2x1ZGVzKG5vcm1hbGl6ZWRWYWx1ZSkpIHtcclxuXHRcdHJldHVybiB7IC4uLnN0YXR1c0JhZGdlQmFzZVN0eWxlLCBiYWNrZ3JvdW5kOiAnI2VkZTlmZScsIGNvbG9yOiAnIzZkMjhkOScgfVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHsgLi4uc3RhdHVzQmFkZ2VCYXNlU3R5bGUsIGJhY2tncm91bmQ6ICcjZGJlYWZlJywgY29sb3I6ICcjMWQ0ZWQ4JyB9XHJcbn1cclxuXHJcbmNvbnN0IGdldEFwcHJvdmFsU2hvcnRMYWJlbCA9ICh2YWx1ZSwgcGFyYW1zLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IHN1ZmZpeCA9IGxhbmd1YWdlID09PSAncnUnID8gJ9GI0YIuJyA6ICd0YSdcclxuXHRjb25zdCB0ZXh0ID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdGNvbnN0IGRpcmVjdE1hdGNoID0gdGV4dC5tYXRjaCgvKFxcZCspXFxzKlxcL1xccyooXFxkKykvKVxyXG5cclxuXHRpZiAoZGlyZWN0TWF0Y2gpIHtcclxuXHRcdHJldHVybiBgJHtkaXJlY3RNYXRjaFsxXX0vJHtkaXJlY3RNYXRjaFsyXX0gJHtzdWZmaXh9YFxyXG5cdH1cclxuXHJcblx0Y29uc3Qgc2VsZWN0ZWRVc2Vyc0NvdW50ID0gcGFyc2VBcnJheShwYXJhbXMuc2VsZWN0ZWRVc2VycykubGVuZ3RoXHJcblx0Y29uc3QgcmV2aWV3ZWRDb3VudCA9IHBhcnNlQXJyYXkocGFyYW1zLnN0cnVjdHVyZUFwcHJvdmFscykuZmlsdGVyKFxyXG5cdFx0aXRlbSA9PiBpdGVtPy5kZWNpc2lvbixcclxuXHQpLmxlbmd0aFxyXG5cclxuXHRpZiAoc2VsZWN0ZWRVc2Vyc0NvdW50KSB7XHJcblx0XHRyZXR1cm4gYCR7cmV2aWV3ZWRDb3VudH0vJHtzZWxlY3RlZFVzZXJzQ291bnR9ICR7c3VmZml4fWBcclxuXHR9XHJcblxyXG5cdHJldHVybiB2YWx1ZVxyXG59XHJcblxyXG5jb25zdCBnZXRSZXF1ZXN0TnVtYmVyTGFiZWwgPSAodmFsdWUsIHBhcmFtcywgcmVjb3JkKSA9PiB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJhd0RhdGUgPSBTdHJpbmcocGFyYW1zLmNyZWF0ZWRBdCB8fCAnJylcclxuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXHJcblx0XHQuc2xpY2UoMCwgMTIpXHJcblx0Y29uc3QgZmFsbGJhY2tEYXRlID1cclxuXHRcdHJhd0RhdGUgfHwgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcRC9nLCAnJykuc2xpY2UoMCwgMTIpXHJcblx0Y29uc3QgaWRQYXJ0ID1cclxuXHRcdFN0cmluZyhyZWNvcmQ/LmlkIHx8ICcnKVxyXG5cdFx0XHQuc2xpY2UoLTQpXHJcblx0XHRcdC50b1VwcGVyQ2FzZSgpIHx8ICcwMDAwJ1xyXG5cdHJldHVybiBgWFItJHtmYWxsYmFja0RhdGV9LSR7aWRQYXJ0fWBcclxufVxyXG5cclxuY29uc3QgZ2V0RGVjaXNpb25NZXRhID0gKGRlY2lzaW9uLCBsYW5ndWFnZSkgPT4ge1xyXG5cdGNvbnN0IG5vcm1hbGl6ZWREZWNpc2lvbiA9IFN0cmluZyhkZWNpc2lvbiB8fCAnJylcclxuXHRcdC50cmltKClcclxuXHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdGNvbnN0IGxhYmVscyA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzogJ9Cn0LDRgdGC0LjRh9C90L4g0L/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ9Ce0YLQutCw0LfQsNC90L4nLFxyXG5cdFx0XHRcdFx0cGVuZGluZzogJ9Ce0LbQuNC00LDQtdGC0YHRjycsXHJcblx0XHRcdFx0XHR3YWl0aW5nOiAn0J7Rh9C10YDQtdC00Ywg0L3QtSDQv9C+0LTQvtGI0LvQsCcsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ1Rhc2RpcWxhbmdhbicsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ1Rhc2RpcWxhbmRpJyxcclxuXHRcdFx0XHRcdCdxaXNtYW4gdGFzZGlxbGFuZGknOiAnUWlzbWFuIHRhc2RpcWxhbmRpJyxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ1JhZCBldGlsZGknLFxyXG5cdFx0XHRcdFx0cGVuZGluZzogJ0t1dGlsbW9xZGEnLFxyXG5cdFx0XHRcdFx0d2FpdGluZzogJ05hdmJhdGkga2VsbWFnYW4nLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0aWYgKFsndGFzZGlxbGFuZ2FuJywgJ3Rhc2RpcWxhbmRpJ10uaW5jbHVkZXMobm9ybWFsaXplZERlY2lzaW9uKSkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWw6IGxhYmVsc1tub3JtYWxpemVkRGVjaXNpb25dLFxyXG5cdFx0XHRzeW1ib2w6ICfinJMnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2RjZmNlNycsXHJcblx0XHRcdGNvbG9yOiAnIzE2NjUzNCcsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAobm9ybWFsaXplZERlY2lzaW9uID09PSAncWlzbWFuIHRhc2RpcWxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGFiZWw6IGxhYmVsc1tub3JtYWxpemVkRGVjaXNpb25dLFxyXG5cdFx0XHRzeW1ib2w6ICfinJMnLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2ZlZjNjNycsXHJcblx0XHRcdGNvbG9yOiAnI2I0NTMwOScsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAobm9ybWFsaXplZERlY2lzaW9uID09PSAncmFkIGV0aWxkaScpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGxhYmVsOiBsYWJlbHNbbm9ybWFsaXplZERlY2lzaW9uXSxcclxuXHRcdFx0c3ltYm9sOiAn4pyVJyxcclxuXHRcdFx0YmFja2dyb3VuZDogJyNmZWUyZTInLFxyXG5cdFx0XHRjb2xvcjogJyNiOTFjMWMnLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKG5vcm1hbGl6ZWREZWNpc2lvbiA9PT0gJ3dhaXRpbmcnKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRsYWJlbDogbGFiZWxzLndhaXRpbmcsXHJcblx0XHRcdHN5bWJvbDogJ+KAoicsXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZjFmNWY5JyxcclxuXHRcdFx0Y29sb3I6ICcjNDc1NTY5JyxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRsYWJlbDogbGFiZWxzLnBlbmRpbmcsXHJcblx0XHRzeW1ib2w6ICfigKYnLFxyXG5cdFx0YmFja2dyb3VuZDogJyNkYmVhZmUnLFxyXG5cdFx0Y29sb3I6ICcjMWQ0ZWQ4JyxcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IGdldEFwcHJvdmFsUm93cyA9IChwYXJhbXMsIGxhbmd1YWdlKSA9PiB7XHJcblx0Y29uc3Qgc2VsZWN0ZWRVc2VycyA9IHBhcnNlQXJyYXkocGFyYW1zLnNlbGVjdGVkVXNlcnMpLm1hcChpdGVtID0+XHJcblx0XHRTdHJpbmcoaXRlbSksXHJcblx0KVxyXG5cdGNvbnN0IHNlbGVjdGVkTmFtZXMgPSBzcGxpdE5hbWVzKHBhcmFtcy5zZWxlY3RlZFVzZXJOYW1lcylcclxuXHRjb25zdCBzdHJ1Y3R1cmVBcHByb3ZhbHMgPSBwYXJzZUFycmF5KHBhcmFtcy5zdHJ1Y3R1cmVBcHByb3ZhbHMpXHJcblx0Y29uc3QgYXBwcm92YWxIaXN0b3J5ID0gcGFyc2VBcnJheShwYXJhbXMuYXBwcm92YWxIaXN0b3J5KVxyXG5cdGNvbnN0IGN1cnJlbnRDeWNsZUhpc3RvcnkgPSBnZXRDdXJyZW50Q3ljbGVIaXN0b3J5KGFwcHJvdmFsSGlzdG9yeSlcclxuXHRjb25zdCBhcHByb3ZhbE1hcCA9IG5ldyBNYXAoKVxyXG5cclxuXHRzdHJ1Y3R1cmVBcHByb3ZhbHMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdGNvbnN0IGtleSA9IFN0cmluZyhpdGVtPy51c2VySWQgfHwgYGlkeC0ke2luZGV4fWApXHJcblx0XHRhcHByb3ZhbE1hcC5zZXQoa2V5LCBpdGVtKVxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IGJhc2VSb3dzID0gKHNlbGVjdGVkVXNlcnMubGVuZ3RoID8gc2VsZWN0ZWRVc2VycyA6IHNlbGVjdGVkTmFtZXMpLm1hcChcclxuXHRcdChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRjb25zdCB1c2VySWQgPSBzZWxlY3RlZFVzZXJzW2luZGV4XSB8fCBgaWR4LSR7aW5kZXh9YFxyXG5cdFx0XHRjb25zdCBhcHByb3ZhbCA9XHJcblx0XHRcdFx0YXBwcm92YWxNYXAuZ2V0KHVzZXJJZCkgfHxcclxuXHRcdFx0XHQoc2VsZWN0ZWRVc2Vycy5sZW5ndGggPyBudWxsIDogc3RydWN0dXJlQXBwcm92YWxzW2luZGV4XSlcclxuXHRcdFx0Y29uc3QgbmFtZSA9IGFwcHJvdmFsPy51c2VyTmFtZVxyXG5cdFx0XHRcdD8gbm9ybWFsaXplRGV0YWlsZWRUZXh0KGFwcHJvdmFsLnVzZXJOYW1lKVxyXG5cdFx0XHRcdDogc2VsZWN0ZWROYW1lc1tpbmRleF0gfHwgbm9ybWFsaXplRGV0YWlsZWRUZXh0KGl0ZW0pXHJcblx0XHRcdGNvbnN0IG1ldGEgPSBnZXREZWNpc2lvbk1ldGEoYXBwcm92YWw/LmRlY2lzaW9uIHx8ICdwZW5kaW5nJywgbGFuZ3VhZ2UpXHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGluZGV4OiBpbmRleCArIDEsXHJcblx0XHRcdFx0cm9sZTogbGFuZ3VhZ2UgPT09ICdydScgPyAn0KHRgtGA0YPQutGC0YPRgNCwJyA6ICdUdXppbG1hJyxcclxuXHRcdFx0XHRuYW1lLFxyXG5cdFx0XHRcdG1ldGEsXHJcblx0XHRcdFx0Y29tbWVudDogbm9ybWFsaXplRGV0YWlsZWRUZXh0KGFwcHJvdmFsPy5jb21tZW50KSxcclxuXHRcdFx0XHRkYXRlOiBmb3JtYXREYXRlVGltZShhcHByb3ZhbD8uZGVjaWRlZEF0KSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHQpXHJcblxyXG5cdGNvbnN0IGxhc3RBcHByb3ZlckVudHJ5ID0gWy4uLmN1cnJlbnRDeWNsZUhpc3RvcnldXHJcblx0XHQucmV2ZXJzZSgpXHJcblx0XHQuZmluZChcclxuXHRcdFx0aXRlbSA9PlxyXG5cdFx0XHRcdFN0cmluZyhpdGVtPy5zdGFnZSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ21vbml0b3JpbmcnIHx8XHJcblx0XHRcdFx0U3RyaW5nKGl0ZW0/LnJvbGUgfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdtb25pdG9yaW5nJyxcclxuXHRcdClcclxuXHJcblx0Y29uc3Qgbm9ybWFsaXplZFN0YXR1cyA9IFN0cmluZyhwYXJhbXMuc3RhdHVzIHx8ICcnKS50b0xvd2VyQ2FzZSgpXHJcblx0Y29uc3QgaGFzU3RydWN0dXJlUmVqZWN0aW9uID0gc3RydWN0dXJlQXBwcm92YWxzLnNvbWUoXHJcblx0XHRpdGVtID0+IFN0cmluZyhpdGVtPy5kZWNpc2lvbiB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3JhZCBldGlsZGknLFxyXG5cdClcclxuXHRsZXQgYXBwcm92ZXJTdGF0ZSA9ICd3YWl0aW5nJ1xyXG5cdGlmIChsYXN0QXBwcm92ZXJFbnRyeT8uZGVjaXNpb24pIHtcclxuXHRcdGFwcHJvdmVyU3RhdGUgPSBsYXN0QXBwcm92ZXJFbnRyeS5kZWNpc2lvblxyXG5cdH0gZWxzZSBpZiAoXHJcblx0XHRbJ3Rhc2RpcWxhbmdhbicsICd0YXNkaXFsYW5kaScsICdxaXNtYW4gdGFzZGlxbGFuZGknXS5pbmNsdWRlcyhcclxuXHRcdFx0bm9ybWFsaXplZFN0YXR1cyxcclxuXHRcdClcclxuXHQpIHtcclxuXHRcdGFwcHJvdmVyU3RhdGUgPSBub3JtYWxpemVkU3RhdHVzXHJcblx0fSBlbHNlIGlmIChub3JtYWxpemVkU3RhdHVzID09PSAncmFkIGV0aWxkaScgJiYgIWhhc1N0cnVjdHVyZVJlamVjdGlvbikge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9IG5vcm1hbGl6ZWRTdGF0dXNcclxuXHR9IGVsc2UgaWYgKFxyXG5cdFx0U3RyaW5nKHBhcmFtcy5jdXJyZW50U3RhZ2UgfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdtb25pdG9yaW5nJyB8fFxyXG5cdFx0bm9ybWFsaXplZFN0YXR1cyA9PT0gJ3Rhc2RpcWxhbm1vcWRhJ1xyXG5cdCkge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9ICdwZW5kaW5nJ1xyXG5cdH1cclxuXHJcblx0YmFzZVJvd3MucHVzaCh7XHJcblx0XHRpbmRleDogYmFzZVJvd3MubGVuZ3RoICsgMSxcclxuXHRcdHJvbGU6IGxhbmd1YWdlID09PSAncnUnID8gJ9Cg0YPQutC+0LLQvtC00LjRgtC10LvRjCcgOiAnQm9zaGxpcScsXHJcblx0XHRuYW1lOiBub3JtYWxpemVEZXRhaWxlZFRleHQocGFyYW1zLmFwcHJvdmVyTmFtZSksXHJcblx0XHRtZXRhOiBnZXREZWNpc2lvbk1ldGEoYXBwcm92ZXJTdGF0ZSwgbGFuZ3VhZ2UpLFxyXG5cdFx0Y29tbWVudDogbm9ybWFsaXplRGV0YWlsZWRUZXh0KGxhc3RBcHByb3ZlckVudHJ5Py5jb21tZW50KSxcclxuXHRcdGRhdGU6IGZvcm1hdERhdGVUaW1lKGxhc3RBcHByb3ZlckVudHJ5Py5kZWNpZGVkQXQpLFxyXG5cdH0pXHJcblxyXG5cdHJldHVybiBiYXNlUm93c1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJTaG93VmFsdWUgPSAoeyBwYXRoLCBwYXJhbXMsIHBvcHVsYXRlZCwgcmVjb3JkLCBsYW5ndWFnZSB9KSA9PiB7XHJcblx0aWYgKHBhdGggPT09ICdyZXF1ZXN0TnVtYmVyJykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdHN0eWxlPXt7IC4uLmRldGFpbENhcmRTdHlsZSwgZm9udFdlaWdodDogNzAwLCBsZXR0ZXJTcGFjaW5nOiAnMC4wNGVtJyB9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e2dldFJlcXVlc3ROdW1iZXJMYWJlbChwYXJhbXMucmVxdWVzdE51bWJlciwgcGFyYW1zLCByZWNvcmQpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnc2VsZWN0ZWRVc2VyTmFtZXMnKSB7XHJcblx0XHRjb25zdCBuYW1lcyA9IHNwbGl0TmFtZXMocGFyYW1zLnNlbGVjdGVkVXNlck5hbWVzKVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e2RldGFpbENhcmRTdHlsZX0+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17c2VjdGlvblRpdGxlU3R5bGV9PlxyXG5cdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9CS0YvQsdGA0LDQvdC90YvQtSDRgdGC0YDRg9C60YLRg9GA0YsnIDogJ1RhbmxhbmdhbiB0dXppbG1hbGFyJ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IC4uLmhlbHBlclRleHRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcblx0XHRcdFx0XHR7Z2V0U2VsZWN0ZWRVc2Vyc0NvdW50TGFiZWwobmFtZXMubGVuZ3RoLCBsYW5ndWFnZSl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17Y2hpcFdyYXBTdHlsZX0+XHJcblx0XHRcdFx0XHR7bmFtZXMubGVuZ3RoXHJcblx0XHRcdFx0XHRcdD8gbmFtZXMubWFwKG5hbWUgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4ga2V5PXtuYW1lfSBzdHlsZT17Y2hpcFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdFx0OiAn4oCUJ31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2FwcHJvdmVyTmFtZScpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgc3R5bGU9e2RldGFpbENhcmRTdHlsZX0+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAsIGNvbG9yOiAnIzBmMTcyYScgfX0+XHJcblx0XHRcdFx0XHR7bm9ybWFsaXplRGV0YWlsZWRUZXh0KHBhcmFtcy5hcHByb3Zlck5hbWUpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgLi4uaGVscGVyVGV4dFN0eWxlLCBtYXJnaW5Ub3A6ICc2cHgnIH19PlxyXG5cdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdFx0XHRcdD8gJ9Cg0YPQutC+0LLQvtC00LjRgtC10LvRjCAvINC80L7QvdC40YLQvtGA0LjQvdCzJ1xyXG5cdFx0XHRcdFx0XHQ6ICdCb3NobGlxIC8gbW9uaXRvcmluZyd9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0aWYgKHBhdGggPT09ICdjb21tZW50JyB8fCBwYXRoID09PSAnbGFzdENvbW1lbnQnKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IHN0eWxlPXtub3RlQ2FyZFN0eWxlfT57bm9ybWFsaXplRGV0YWlsZWRUZXh0KHBhcmFtc1twYXRoXSl9PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2l0ZW1zU3VtbWFyeScpIHtcclxuXHRcdGNvbnN0IGl0ZW1zID0gcGFyc2VJdGVtcyhwYXJhbXMuaXRlbXMpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17ZGV0YWlsQ2FyZFN0eWxlfT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzZWN0aW9uVGl0bGVTdHlsZX0+XHJcblx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JTQtdGC0LDQu9C4INGC0L7QstCw0YDQvtCyJyA6ICdUb3ZhciB0YWZzaWxvdGknfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3RhYmxlV3JhcFN0eWxlfT5cclxuXHRcdFx0XHRcdDx0YWJsZSBzdHlsZT17dGFibGVTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+IzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQotC+0LLQsNGAJyA6ICdUb3Zhcid9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0KXQsNGA0LDQutGC0LXRgNC40YHRgtC40LrQsCcgOiAnWHVzdXNpeWF0aSd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JXQtC4nIDogJ0JpcmxpZ2knfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2xhbmd1YWdlID09PSAncnUnID8gJ9Ca0L7Quy3QstC+JyA6ICdTb25pJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdHtpdGVtcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2Ake2l0ZW0ucHJvZHVjdE5hbWV9LSR7aW5kZXh9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e2luZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZURldGFpbGVkVGV4dChpdGVtLnByb2R1Y3ROYW1lKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZURldGFpbGVkVGV4dChpdGVtLmZlYXR1cmVzKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZURldGFpbGVkVGV4dChpdGVtLnVuaXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplRGV0YWlsZWRUZXh0KGl0ZW0ucXVhbnRpdHkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9IGNvbFNwYW49ezV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyAn0KLQvtCy0LDRgNGLINC90LUg0YPQutCw0LfQsNC90YsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdUb3ZhciBraXJpdGlsbWFnYW4nfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2FwcHJvdmFsU3VtbWFyeScpIHtcclxuXHRcdGNvbnN0IHJvd3MgPSBnZXRBcHByb3ZhbFJvd3MocGFyYW1zLCBsYW5ndWFnZSlcclxuXHRcdGNvbnN0IHN1bW1hcnkgPSBnZXRBcHByb3ZhbFNob3J0TGFiZWwoXHJcblx0XHRcdHBhcmFtcy5hcHByb3ZhbFN1bW1hcnksXHJcblx0XHRcdHBhcmFtcyxcclxuXHRcdFx0bGFuZ3VhZ2UsXHJcblx0XHQpXHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBzdHlsZT17ZGV0YWlsQ2FyZFN0eWxlfT5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXtzZWN0aW9uVGl0bGVTdHlsZX0+XHJcblx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0KLQsNCx0LvQuNGG0LAg0YHQvtCz0LvQsNGB0L7QstCw0L3QuNGPJyA6ICdUYXNkaXFsYXNoIGphZHZhbGknfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgLi4uaGVscGVyVGV4dFN0eWxlLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQktGL0L/QvtC70L3QtdC90L4nIDogJ0tv4oCYcmliIGNoaXFpbGdhbid9OiB7c3VtbWFyeX1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt0YWJsZVdyYXBTdHlsZX0+XHJcblx0XHRcdFx0XHQ8dGFibGUgc3R5bGU9e3RhYmxlU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PiM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0KDQvtC70YwnIDogJ1JvbCd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0J3QsNC30LLQsNC90LjQtScgOiAnTm9taSd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7bGFuZ3VhZ2UgPT09ICdydScgPyAn0JfQvdCw0LonIDogJ0JlbGdpJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQodGC0LDRgtGD0YEnIDogJ0hvbGF0J31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQmtC+0LzQvNC10L3RgtCw0YDQuNC5JyA6ICdJem9oJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQktGA0LXQvNGPJyA6ICdWYXF0aSd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHR7cm93cy5tYXAocm93ID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2Ake3Jvdy5yb2xlfS0ke3Jvdy5pbmRleH0tJHtyb3cubmFtZX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e3Jvdy5pbmRleH08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT57cm93LnJvbGV9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt7IC4uLnRhYmxlQ2VsbFN0eWxlLCBtaW5XaWR0aDogJzE4MHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogJzI0cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICcyNHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByb3cubWV0YS5iYWNrZ3JvdW5kLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogcm93Lm1ldGEuY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDgwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5tZXRhLnN5bWJvbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzRweCA5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICc5OTlweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHJvdy5tZXRhLmJhY2tncm91bmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiByb3cubWV0YS5jb2xvcixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogNzAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3Jvdy5tZXRhLmxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLnRhYmxlQ2VsbFN0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluV2lkdGg6ICcyMjBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiAncHJlLXdyYXAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d29yZEJyZWFrOiAnYnJlYWstd29yZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cuY29tbWVudH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt7IC4uLnRhYmxlQ2VsbFN0eWxlLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93LmRhdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2NyZWF0ZWRCeScpIHtcclxuXHRcdGNvbnN0IHVzZXJuYW1lID1cclxuXHRcdFx0cG9wdWxhdGVkLmNyZWF0ZWRCeT8ucGFyYW1zPy51c2VybmFtZSB8fFxyXG5cdFx0XHRub3JtYWxpemVEZXRhaWxlZFRleHQocGFyYW1zLmNyZWF0ZWRCeSlcclxuXHRcdHJldHVybiA8ZGl2IHN0eWxlPXtkZXRhaWxDYXJkU3R5bGV9Pnt1c2VybmFtZX08L2Rpdj5cclxuXHR9XHJcblxyXG5cdGlmIChbJ2NyZWF0ZWRBdCcsICd1cGRhdGVkQXQnXS5pbmNsdWRlcyhwYXRoKSkge1xyXG5cdFx0cmV0dXJuIDxkaXYgc3R5bGU9e2RldGFpbENhcmRTdHlsZX0+e2Zvcm1hdERhdGVUaW1lKHBhcmFtc1twYXRoXSl9PC9kaXY+XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17ZGV0YWlsQ2FyZFN0eWxlfT57bm9ybWFsaXplRGV0YWlsZWRUZXh0KHBhcmFtc1twYXRoXSl9PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5jb25zdCBQdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUgPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCB3aGVyZSB9ID0gcHJvcHNcclxuXHRjb25zdCB7XHJcblx0XHRpMThuOiB7IGxhbmd1YWdlIH0sXHJcblx0fSA9IHVzZVRyYW5zbGF0aW9uKClcclxuXHJcblx0Y29uc3QgcGF0aCA9IHByb3BlcnR5Py5wYXRoXHJcblx0Y29uc3QgcGFyYW1zID0gcmVjb3JkPy5wYXJhbXMgfHwge31cclxuXHRjb25zdCBwb3B1bGF0ZWQgPSByZWNvcmQ/LnBvcHVsYXRlZCB8fCB7fVxyXG5cdGNvbnN0IGlzU2hvdyA9IHdoZXJlID09PSAnc2hvdydcclxuXHJcblx0bGV0IHZhbHVlID0gcGFyYW1zW3BhdGhdXHJcblx0bGV0IHRpdGxlID0gdmFsdWVcclxuXHRsZXQgc3R5bGUgPSBjb21wYWN0U3R5bGVcclxuXHJcblx0aWYgKFsnY29tbWVudCcsICdsYXN0Q29tbWVudCddLmluY2x1ZGVzKHBhdGgpKSB7XHJcblx0XHRzdHlsZSA9IGNvbW1lbnRTdHlsZVxyXG5cdH1cclxuXHJcblx0aWYgKHBhdGggPT09ICdzZWxlY3RlZFVzZXJOYW1lcycpIHtcclxuXHRcdGNvbnN0IHNlbGVjdGVkVXNlcnNDb3VudCA9IHBhcnNlQXJyYXkocGFyYW1zLnNlbGVjdGVkVXNlcnMpLmxlbmd0aFxyXG5cdFx0dmFsdWUgPSBpc1Nob3dcclxuXHRcdFx0PyBwYXJhbXMuc2VsZWN0ZWRVc2VyTmFtZXNcclxuXHRcdFx0OiBnZXRTZWxlY3RlZFVzZXJzQ291bnRMYWJlbChzZWxlY3RlZFVzZXJzQ291bnQsIGxhbmd1YWdlKVxyXG5cdFx0dGl0bGUgPSBwYXJhbXMuc2VsZWN0ZWRVc2VyTmFtZXMgfHwgdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnaXRlbXNTdW1tYXJ5Jykge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSBwYXJzZUl0ZW1zKHBhcmFtcy5pdGVtcylcclxuXHRcdHZhbHVlID0gaXNTaG93XHJcblx0XHRcdD8gcGFyYW1zLml0ZW1zU3VtbWFyeVxyXG5cdFx0XHQ6IGdldEl0ZW1zQ291bnRMYWJlbChpdGVtcy5sZW5ndGgsIGxhbmd1YWdlKVxyXG5cdFx0dGl0bGUgPSBwYXJhbXMuaXRlbXNTdW1tYXJ5IHx8IHZhbHVlXHJcblx0fVxyXG5cclxuXHRpZiAocGF0aCA9PT0gJ2FwcHJvdmFsU3VtbWFyeScpIHtcclxuXHRcdHZhbHVlID0gZ2V0QXBwcm92YWxTaG9ydExhYmVsKHBhcmFtcy5hcHByb3ZhbFN1bW1hcnksIHBhcmFtcywgbGFuZ3VhZ2UpXHJcblx0XHR0aXRsZSA9IHBhcmFtcy5hcHByb3ZhbFN1bW1hcnkgfHwgdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAncmVxdWVzdE51bWJlcicpIHtcclxuXHRcdHZhbHVlID0gZ2V0UmVxdWVzdE51bWJlckxhYmVsKHZhbHVlLCBwYXJhbXMsIHJlY29yZClcclxuXHRcdHRpdGxlID0gdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChwYXRoID09PSAnY3JlYXRlZEJ5Jykge1xyXG5cdFx0dmFsdWUgPSBwb3B1bGF0ZWQuY3JlYXRlZEJ5Py5wYXJhbXM/LnVzZXJuYW1lIHx8IHBhcmFtcy5jcmVhdGVkQnlcclxuXHRcdHRpdGxlID0gdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChbJ2NyZWF0ZWRBdCcsICd1cGRhdGVkQXQnXS5pbmNsdWRlcyhwYXRoKSkge1xyXG5cdFx0dmFsdWUgPSBmb3JtYXREYXRlVGltZSh2YWx1ZSlcclxuXHRcdHRpdGxlID0gdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmIChbJ3N0YXR1cycsICdjdXJyZW50U3RhZ2UnXS5pbmNsdWRlcyhwYXRoKSkge1xyXG5cdFx0Y29uc3QgbG9jYWxpemVkVmFsdWUgPSBub3JtYWxpemVUZXh0KFxyXG5cdFx0XHRnZXRMb2NhbGl6ZWRWYWx1ZShwYXRoLCB2YWx1ZSwgbGFuZ3VhZ2UpLFxyXG5cdFx0KVxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFRleHQgc3R5bGU9e2dldFN0YXR1c1N0eWxlKHBhdGgsIHZhbHVlKX0gdGl0bGU9e2xvY2FsaXplZFZhbHVlfT5cclxuXHRcdFx0XHR7bG9jYWxpemVkVmFsdWV9XHJcblx0XHRcdDwvVGV4dD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmIChpc1Nob3cpIHtcclxuXHRcdHJldHVybiByZW5kZXJTaG93VmFsdWUoeyBwYXRoLCBwYXJhbXMsIHBvcHVsYXRlZCwgcmVjb3JkLCBsYW5ndWFnZSB9KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgdGV4dCA9IG5vcm1hbGl6ZVRleHQodmFsdWUpXHJcblx0Y29uc3QgdG9vbHRpcCA9IG5vcm1hbGl6ZVRleHQodGl0bGUgfHwgdmFsdWUpXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8VGV4dCBzdHlsZT17c3R5bGV9IHRpdGxlPXt0b29sdGlwfT5cclxuXHRcdFx0e3RleHR9XHJcblx0XHQ8L1RleHQ+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWVcclxuIiwiaW1wb3J0IHsgQm94LCBIMiwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcydcclxuXHJcbmNvbnN0IHBhcnNlQXJyYXkgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxuXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodmFsdWUpXHJcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShwYXJzZWQpID8gcGFyc2VkIDogW11cclxuXHR9IGNhdGNoIHtcclxuXHRcdHJldHVybiBbXVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgcGFyc2VJdGVtcyA9IHZhbHVlID0+XHJcblx0cGFyc2VBcnJheSh2YWx1ZSkubWFwKGl0ZW0gPT4gKHtcclxuXHRcdHByb2R1Y3ROYW1lOiBTdHJpbmcoaXRlbT8ucHJvZHVjdE5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdGZlYXR1cmVzOiBTdHJpbmcoaXRlbT8uZmVhdHVyZXMgfHwgJycpLnRyaW0oKSxcclxuXHRcdHVuaXQ6IFN0cmluZyhpdGVtPy51bml0IHx8ICcnKS50cmltKCksXHJcblx0XHRxdWFudGl0eTogU3RyaW5nKGl0ZW0/LnF1YW50aXR5IHx8ICcnKS50cmltKCksXHJcblx0fSkpXHJcblxyXG5jb25zdCBwYXJzZUJ1eWVyT3JkZXJEYXRhID0gdmFsdWUgPT4ge1xyXG5cdGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG5cdFx0cmV0dXJuIHZhbHVlXHJcblx0fVxyXG5cclxuXHRpZiAoIXZhbHVlKSB7XHJcblx0XHRyZXR1cm4ge31cclxuXHR9XHJcblxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHZhbHVlKVxyXG5cdFx0cmV0dXJuIHBhcnNlZCAmJiB0eXBlb2YgcGFyc2VkID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShwYXJzZWQpXHJcblx0XHRcdD8gcGFyc2VkXHJcblx0XHRcdDoge31cclxuXHR9IGNhdGNoIHtcclxuXHRcdHJldHVybiB7fVxyXG5cdH1cclxufVxyXG5cclxuY29uc3Qgc3BsaXROYW1lcyA9IHZhbHVlID0+XHJcblx0U3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdFx0LnNwbGl0KCcsJylcclxuXHRcdC5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSlcclxuXHRcdC5maWx0ZXIoQm9vbGVhbilcclxuXHJcbmNvbnN0IGdldEN1cnJlbnRDeWNsZUhpc3RvcnkgPSBoaXN0b3J5ID0+IHtcclxuXHRjb25zdCBlbnRyaWVzID0gQXJyYXkuaXNBcnJheShoaXN0b3J5KSA/IGhpc3RvcnkgOiBbXVxyXG5cdGNvbnN0IGxhc3RSZXN1Ym1pdHRlZEluZGV4ID0gZW50cmllc1xyXG5cdFx0Lm1hcChpdGVtID0+IFN0cmluZyhpdGVtPy5zdGFnZSB8fCAnJykudG9Mb3dlckNhc2UoKSlcclxuXHRcdC5sYXN0SW5kZXhPZigncmVzdWJtaXR0ZWQnKVxyXG5cclxuXHRyZXR1cm4gbGFzdFJlc3VibWl0dGVkSW5kZXggPj0gMFxyXG5cdFx0PyBlbnRyaWVzLnNsaWNlKGxhc3RSZXN1Ym1pdHRlZEluZGV4ICsgMSlcclxuXHRcdDogZW50cmllc1xyXG59XHJcblxyXG5jb25zdCBub3JtYWxpemVUZXh0ID0gdmFsdWUgPT4gU3RyaW5nKHZhbHVlIHx8ICcnKS50cmltKCkgfHwgJ+KAlCdcclxuXHJcbmNvbnN0IGZvcm1hdERhdGVUaW1lID0gdmFsdWUgPT4ge1xyXG5cdGlmICghdmFsdWUpIHtcclxuXHRcdHJldHVybiAn4oCUJ1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKVxyXG5cdGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcblx0XHRyZXR1cm4gbm9ybWFsaXplVGV4dCh2YWx1ZSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhZCA9IG51bWJlciA9PiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0cmV0dXJuIGAke3BhZChkYXRlLmdldERhdGUoKSl9LiR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtwYWQoZGF0ZS5nZXRIb3VycygpKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCkpfWBcclxufVxyXG5cclxuY29uc3QgZ2V0UmVxdWVzdE51bWJlciA9IChwYXJhbXMsIHJlY29yZCkgPT4ge1xyXG5cdGlmIChwYXJhbXMucmVxdWVzdE51bWJlcikge1xyXG5cdFx0cmV0dXJuIHBhcmFtcy5yZXF1ZXN0TnVtYmVyXHJcblx0fVxyXG5cclxuXHRjb25zdCByYXdEYXRlID0gU3RyaW5nKHBhcmFtcy5jcmVhdGVkQXQgfHwgJycpXHJcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxyXG5cdFx0LnNsaWNlKDAsIDEyKVxyXG5cdGNvbnN0IGZhbGxiYWNrRGF0ZSA9XHJcblx0XHRyYXdEYXRlIHx8IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXEQvZywgJycpLnNsaWNlKDAsIDEyKVxyXG5cdGNvbnN0IGlkUGFydCA9IFN0cmluZyhyZWNvcmQ/LmlkIHx8ICcnKVxyXG5cdFx0LnNsaWNlKC00KVxyXG5cdFx0LnRvVXBwZXJDYXNlKClcclxuXHRyZXR1cm4gYFhSLSR7ZmFsbGJhY2tEYXRlfS0ke2lkUGFydCB8fCAnMDAwMCd9YFxyXG59XHJcblxyXG5jb25zdCBnZXRMb2NhbGl6ZWRTdGF0dXMgPSAodmFsdWUsIGxhbmd1YWdlKSA9PiB7XHJcblx0Y29uc3Qgbm9ybWFsaXplZCA9IFN0cmluZyh2YWx1ZSB8fCAnJylcclxuXHRcdC50cmltKClcclxuXHRcdC50b0xvd2VyQ2FzZSgpXHJcblxyXG5cdGNvbnN0IHN0YXR1c0xhYmVscyA9XHJcblx0XHRsYW5ndWFnZSA9PT0gJ3J1J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdCdrb+KAmHJpbG1vcWRhJzogJ9Cd0LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC4JyxcclxuXHRcdFx0XHRcdCd0dXppbG1hbGFyIHRhc2RpZ+KAmGlkYSc6ICfQndCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQuCcsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5tb3FkYTogJ9Cd0LAg0YPRgtCy0LXRgNC20LTQtdC90LjQuCcsXHJcblx0XHRcdFx0XHQnYm9zaGxpcSB0YXNkaWfigJhpZGEnOiAn0J3QsCDRg9GC0LLQtdGA0LbQtNC10L3QuNC4JyxcclxuXHRcdFx0XHRcdHRhc2RpcWxhbmdhbjogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5kaTogJ9Cf0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzogJ9Cn0LDRgdGC0LjRh9C90L4g0L/QvtC00YLQstC10YDQttC00LXQvdC+JyxcclxuXHRcdFx0XHRcdCdzb3RpYiBvbGlzaCBrZXJhayc6ICfQotGA0LXQsdGD0LXRgtGB0Y8g0LfQsNC60YPQv9C60LAnLFxyXG5cdFx0XHRcdFx0J3NvdGliIG9saW5tb3FkYSc6ICfQkiDQt9Cw0LrRg9C/0LrQtScsXHJcblx0XHRcdFx0XHQncmFkIGV0aWxkaSc6ICfQntGC0LrQsNC30LDQvdC+JyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0J2tv4oCYcmlsbW9xZGEnOiAnS2/igJhyaWxtb3FkYScsXHJcblx0XHRcdFx0XHQndHV6aWxtYWxhciB0YXNkaWfigJhpZGEnOiAnS2/igJhyaWxtb3FkYScsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5tb3FkYTogJ1Rhc2RpcWxhbm1vcWRhJyxcclxuXHRcdFx0XHRcdCdib3NobGlxIHRhc2RpZ+KAmGlkYSc6ICdUYXNkaXFsYW5tb3FkYScsXHJcblx0XHRcdFx0XHR0YXNkaXFsYW5nYW46ICdUYXNkaXFsYW5nYW4nLFxyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZGk6ICdUYXNkaXFsYW5nYW4nLFxyXG5cdFx0XHRcdFx0J3Fpc21hbiB0YXNkaXFsYW5kaSc6ICdRaXNtYW4gdGFzZGlxbGFuZGknLFxyXG5cdFx0XHRcdFx0J3NvdGliIG9saXNoIGtlcmFrJzogJ1NvdGliIG9saXNoIGtlcmFrJyxcclxuXHRcdFx0XHRcdCdzb3RpYiBvbGlubW9xZGEnOiAnU290aWIgb2xpbm1vcWRhJyxcclxuXHRcdFx0XHRcdCdyYWQgZXRpbGRpJzogJ1JhZCBldGlsZGknLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0cmV0dXJuIHN0YXR1c0xhYmVsc1tub3JtYWxpemVkXSB8fCBub3JtYWxpemVUZXh0KHZhbHVlKVxyXG59XHJcblxyXG5jb25zdCBnZXRMb2NhbGl6ZWRTdGFnZSA9ICh2YWx1ZSwgbGFuZ3VhZ2UpID0+IHtcclxuXHRjb25zdCBub3JtYWxpemVkID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnRvTG93ZXJDYXNlKClcclxuXHJcblx0Y29uc3Qgc3RhZ2VMYWJlbHMgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0dXppbG1hbGFyOiAn0KHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdG1vbml0b3Jpbmc6ICfQoNGD0LrQvtCy0L7QtNC40YLQtdC70YwnLFxyXG5cdFx0XHRcdFx0c290aWJfb2xpc2g6ICfQl9Cw0LrRg9C/0LrQsCcsXHJcblx0XHRcdFx0XHR5YWt1bmxhbmRpOiAn0JfQsNCy0LXRgNGI0LXQvdC+JyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0dHV6aWxtYWxhcjogJ1R1emlsbWFsYXInLFxyXG5cdFx0XHRcdFx0bW9uaXRvcmluZzogJ0Jvc2hsaXEnLFxyXG5cdFx0XHRcdFx0c290aWJfb2xpc2g6ICdTb3RpYiBvbGlzaCcsXHJcblx0XHRcdFx0XHR5YWt1bmxhbmRpOiAnWWFrdW5sYW5kaScsXHJcblx0XHRcdFx0fVxyXG5cclxuXHRyZXR1cm4gc3RhZ2VMYWJlbHNbbm9ybWFsaXplZF0gfHwgbm9ybWFsaXplVGV4dCh2YWx1ZSlcclxufVxyXG5cclxuY29uc3QgZ2V0U3RhdHVzQmFkZ2VTdHlsZSA9IHZhbHVlID0+IHtcclxuXHRjb25zdCBzdGF0dXMgPSBTdHJpbmcodmFsdWUgfHwgJycpXHJcblx0XHQudHJpbSgpXHJcblx0XHQudG9Mb3dlckNhc2UoKVxyXG5cclxuXHRpZiAoWyd0YXNkaXFsYW5nYW4nLCAndGFzZGlxbGFuZGknXS5pbmNsdWRlcyhzdGF0dXMpKSB7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kOiAnI2RjZmNlNycsIGNvbG9yOiAnIzE2NjUzNCcgfVxyXG5cdH1cclxuXHJcblx0aWYgKHN0YXR1cyA9PT0gJ3Fpc21hbiB0YXNkaXFsYW5kaScpIHtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmQ6ICcjZmVmM2M3JywgY29sb3I6ICcjYjQ1MzA5JyB9XHJcblx0fVxyXG5cclxuXHRpZiAoc3RhdHVzID09PSAnc290aWIgb2xpc2gga2VyYWsnKSB7XHJcblx0XHRyZXR1cm4geyBiYWNrZ3JvdW5kOiAnI2RiZWFmZScsIGNvbG9yOiAnIzFkNGVkOCcgfVxyXG5cdH1cclxuXHJcblx0aWYgKHN0YXR1cyA9PT0gJ3NvdGliIG9saW5tb3FkYScpIHtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmQ6ICcjZWRlOWZlJywgY29sb3I6ICcjNmQyOGQ5JyB9XHJcblx0fVxyXG5cclxuXHRpZiAoc3RhdHVzID09PSAncmFkIGV0aWxkaScpIHtcclxuXHRcdHJldHVybiB7IGJhY2tncm91bmQ6ICcjZmVlMmUyJywgY29sb3I6ICcjYjkxYzFjJyB9XHJcblx0fVxyXG5cclxuXHRpZiAoWyd0YXNkaXFsYW5tb3FkYScsICdib3NobGlxIHRhc2RpZ+KAmGlkYScsICdtb25pdG9yaW5nJ10uaW5jbHVkZXMoc3RhdHVzKSkge1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZDogJyNlZGU5ZmUnLCBjb2xvcjogJyM2ZDI4ZDknIH1cclxuXHR9XHJcblxyXG5cdGlmIChzdGF0dXMgPT09ICd5YWt1bmxhbmRpJykge1xyXG5cdFx0cmV0dXJuIHsgYmFja2dyb3VuZDogJyNlNWU3ZWInLCBjb2xvcjogJyMzNzQxNTEnIH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7IGJhY2tncm91bmQ6ICcjZGJlYWZlJywgY29sb3I6ICcjMWQ0ZWQ4JyB9XHJcbn1cclxuXHJcbmNvbnN0IGdldERlY2lzaW9uTWV0YSA9IChkZWNpc2lvbiwgbGFuZ3VhZ2UpID0+IHtcclxuXHRjb25zdCBub3JtYWxpemVkID0gU3RyaW5nKGRlY2lzaW9uIHx8ICcnKVxyXG5cdFx0LnRyaW0oKVxyXG5cdFx0LnRvTG93ZXJDYXNlKClcclxuXHRjb25zdCBsYWJlbHMgPVxyXG5cdFx0bGFuZ3VhZ2UgPT09ICdydSdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHR0YXNkaXFsYW5nYW46ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4nLFxyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZGk6ICfQn9C+0LTRgtCy0LXRgNC20LTQtdC90L4nLFxyXG5cdFx0XHRcdFx0J3Fpc21hbiB0YXNkaXFsYW5kaSc6ICfQp9Cw0YHRgtC40YfQvdC+INC/0L7QtNGC0LLQtdGA0LbQtNC10L3QvicsXHJcblx0XHRcdFx0XHQncmFkIGV0aWxkaSc6ICfQntGC0LrQsNC30LDQvdC+JyxcclxuXHRcdFx0XHRcdHBlbmRpbmc6ICfQntC20LjQtNCw0LXRgtGB0Y8nLFxyXG5cdFx0XHRcdFx0d2FpdGluZzogJ9Ce0YfQtdGA0LXQtNGMINC90LUg0L/QvtC00L7RiNC70LAnLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHR0YXNkaXFsYW5nYW46ICdUYXNkaXFsYW5nYW4nLFxyXG5cdFx0XHRcdFx0dGFzZGlxbGFuZGk6ICdUYXNkaXFsYW5kaScsXHJcblx0XHRcdFx0XHQncWlzbWFuIHRhc2RpcWxhbmRpJzogJ1Fpc21hbiB0YXNkaXFsYW5kaScsXHJcblx0XHRcdFx0XHQncmFkIGV0aWxkaSc6ICdSYWQgZXRpbGRpJyxcclxuXHRcdFx0XHRcdHBlbmRpbmc6ICdLdXRpbG1vcWRhJyxcclxuXHRcdFx0XHRcdHdhaXRpbmc6ICdOYXZiYXRpIGtlbG1hZ2FuJyxcclxuXHRcdFx0XHR9XHJcblxyXG5cdGlmIChbJ3Rhc2RpcWxhbmdhbicsICd0YXNkaXFsYW5kaSddLmluY2x1ZGVzKG5vcm1hbGl6ZWQpKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzeW1ib2w6ICfinJMnLFxyXG5cdFx0XHRsYWJlbDogbGFiZWxzW25vcm1hbGl6ZWRdLFxyXG5cdFx0XHRiYWNrZ3JvdW5kOiAnI2RjZmNlNycsXHJcblx0XHRcdGNvbG9yOiAnIzE2NjUzNCcsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAobm9ybWFsaXplZCA9PT0gJ3Fpc21hbiB0YXNkaXFsYW5kaScpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHN5bWJvbDogJ+KckycsXHJcblx0XHRcdGxhYmVsOiBsYWJlbHNbbm9ybWFsaXplZF0sXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZmVmM2M3JyxcclxuXHRcdFx0Y29sb3I6ICcjYjQ1MzA5JyxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkID09PSAncmFkIGV0aWxkaScpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHN5bWJvbDogJ+KclScsXHJcblx0XHRcdGxhYmVsOiBsYWJlbHNbbm9ybWFsaXplZF0sXHJcblx0XHRcdGJhY2tncm91bmQ6ICcjZmVlMmUyJyxcclxuXHRcdFx0Y29sb3I6ICcjYjkxYzFjJyxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmIChub3JtYWxpemVkID09PSAnd2FpdGluZycpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHN5bWJvbDogJ+KAoicsXHJcblx0XHRcdGxhYmVsOiBsYWJlbHMud2FpdGluZyxcclxuXHRcdFx0YmFja2dyb3VuZDogJyNmMWY1ZjknLFxyXG5cdFx0XHRjb2xvcjogJyM0NzU1NjknLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHN5bWJvbDogJ+KApicsXHJcblx0XHRsYWJlbDogbGFiZWxzLnBlbmRpbmcsXHJcblx0XHRiYWNrZ3JvdW5kOiAnI2RiZWFmZScsXHJcblx0XHRjb2xvcjogJyMxZDRlZDgnLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgZ2V0QXBwcm92YWxSb3dzID0gKHBhcmFtcywgbGFuZ3VhZ2UpID0+IHtcclxuXHRjb25zdCBzZWxlY3RlZFVzZXJzID0gcGFyc2VBcnJheShwYXJhbXMuc2VsZWN0ZWRVc2VycykubWFwKGl0ZW0gPT5cclxuXHRcdFN0cmluZyhpdGVtKSxcclxuXHQpXHJcblx0Y29uc3Qgc2VsZWN0ZWROYW1lcyA9IHNwbGl0TmFtZXMocGFyYW1zLnNlbGVjdGVkVXNlck5hbWVzKVxyXG5cdGNvbnN0IHN0cnVjdHVyZUFwcHJvdmFscyA9IHBhcnNlQXJyYXkocGFyYW1zLnN0cnVjdHVyZUFwcHJvdmFscylcclxuXHRjb25zdCBhcHByb3ZhbEhpc3RvcnkgPSBwYXJzZUFycmF5KHBhcmFtcy5hcHByb3ZhbEhpc3RvcnkpXHJcblx0Y29uc3QgY3VycmVudEN5Y2xlSGlzdG9yeSA9IGdldEN1cnJlbnRDeWNsZUhpc3RvcnkoYXBwcm92YWxIaXN0b3J5KVxyXG5cdGNvbnN0IGFwcHJvdmFsTWFwID0gbmV3IE1hcCgpXHJcblxyXG5cdHN0cnVjdHVyZUFwcHJvdmFscy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG5cdFx0YXBwcm92YWxNYXAuc2V0KFN0cmluZyhpdGVtPy51c2VySWQgfHwgYGlkeC0ke2luZGV4fWApLCBpdGVtKVxyXG5cdH0pXHJcblxyXG5cdGNvbnN0IHJvd3MgPSAoc2VsZWN0ZWRVc2Vycy5sZW5ndGggPyBzZWxlY3RlZFVzZXJzIDogc2VsZWN0ZWROYW1lcykubWFwKFxyXG5cdFx0KGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdGNvbnN0IHVzZXJJZCA9IHNlbGVjdGVkVXNlcnNbaW5kZXhdIHx8IGBpZHgtJHtpbmRleH1gXHJcblx0XHRcdGNvbnN0IGFwcHJvdmFsID1cclxuXHRcdFx0XHRhcHByb3ZhbE1hcC5nZXQodXNlcklkKSB8fFxyXG5cdFx0XHRcdChzZWxlY3RlZFVzZXJzLmxlbmd0aCA/IG51bGwgOiBzdHJ1Y3R1cmVBcHByb3ZhbHNbaW5kZXhdKVxyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpbmRleDogaW5kZXggKyAxLFxyXG5cdFx0XHRcdHJvbGU6IGxhbmd1YWdlID09PSAncnUnID8gJ9Ch0YLRgNGD0LrRgtGD0YDQsCcgOiAnVHV6aWxtYScsXHJcblx0XHRcdFx0bmFtZTogYXBwcm92YWw/LnVzZXJOYW1lXHJcblx0XHRcdFx0XHQ/IG5vcm1hbGl6ZVRleHQoYXBwcm92YWwudXNlck5hbWUpXHJcblx0XHRcdFx0XHQ6IHNlbGVjdGVkTmFtZXNbaW5kZXhdIHx8IG5vcm1hbGl6ZVRleHQoaXRlbSksXHJcblx0XHRcdFx0bWV0YTogZ2V0RGVjaXNpb25NZXRhKGFwcHJvdmFsPy5kZWNpc2lvbiB8fCAncGVuZGluZycsIGxhbmd1YWdlKSxcclxuXHRcdFx0XHRjb21tZW50OiBub3JtYWxpemVUZXh0KGFwcHJvdmFsPy5jb21tZW50KSxcclxuXHRcdFx0XHRkYXRlOiBmb3JtYXREYXRlVGltZShhcHByb3ZhbD8uZGVjaWRlZEF0KSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHQpXHJcblxyXG5cdGNvbnN0IGFwcHJvdmVyRW50cnkgPSBbLi4uY3VycmVudEN5Y2xlSGlzdG9yeV1cclxuXHRcdC5yZXZlcnNlKClcclxuXHRcdC5maW5kKFxyXG5cdFx0XHRpdGVtID0+XHJcblx0XHRcdFx0U3RyaW5nKGl0ZW0/LnN0YWdlIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAnbW9uaXRvcmluZycgfHxcclxuXHRcdFx0XHRTdHJpbmcoaXRlbT8ucm9sZSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ21vbml0b3JpbmcnLFxyXG5cdFx0KVxyXG5cclxuXHRjb25zdCBub3JtYWxpemVkU3RhdHVzID0gU3RyaW5nKHBhcmFtcy5zdGF0dXMgfHwgJycpLnRvTG93ZXJDYXNlKClcclxuXHRjb25zdCBoYXNTdHJ1Y3R1cmVSZWplY3Rpb24gPSBzdHJ1Y3R1cmVBcHByb3ZhbHMuc29tZShcclxuXHRcdGl0ZW0gPT4gU3RyaW5nKGl0ZW0/LmRlY2lzaW9uIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAncmFkIGV0aWxkaScsXHJcblx0KVxyXG5cdGxldCBhcHByb3ZlclN0YXRlID0gJ3dhaXRpbmcnXHJcblx0aWYgKGFwcHJvdmVyRW50cnk/LmRlY2lzaW9uKSB7XHJcblx0XHRhcHByb3ZlclN0YXRlID0gYXBwcm92ZXJFbnRyeS5kZWNpc2lvblxyXG5cdH0gZWxzZSBpZiAoXHJcblx0XHRbJ3Rhc2RpcWxhbmdhbicsICd0YXNkaXFsYW5kaScsICdxaXNtYW4gdGFzZGlxbGFuZGknXS5pbmNsdWRlcyhcclxuXHRcdFx0bm9ybWFsaXplZFN0YXR1cyxcclxuXHRcdClcclxuXHQpIHtcclxuXHRcdGFwcHJvdmVyU3RhdGUgPSBub3JtYWxpemVkU3RhdHVzXHJcblx0fSBlbHNlIGlmIChub3JtYWxpemVkU3RhdHVzID09PSAncmFkIGV0aWxkaScgJiYgIWhhc1N0cnVjdHVyZVJlamVjdGlvbikge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9IG5vcm1hbGl6ZWRTdGF0dXNcclxuXHR9IGVsc2UgaWYgKFxyXG5cdFx0U3RyaW5nKHBhcmFtcy5jdXJyZW50U3RhZ2UgfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICdtb25pdG9yaW5nJyB8fFxyXG5cdFx0bm9ybWFsaXplZFN0YXR1cyA9PT0gJ3Rhc2RpcWxhbm1vcWRhJ1xyXG5cdCkge1xyXG5cdFx0YXBwcm92ZXJTdGF0ZSA9ICdwZW5kaW5nJ1xyXG5cdH1cclxuXHJcblx0cm93cy5wdXNoKHtcclxuXHRcdGluZGV4OiByb3dzLmxlbmd0aCArIDEsXHJcblx0XHRyb2xlOiBsYW5ndWFnZSA9PT0gJ3J1JyA/ICfQoNGD0LrQvtCy0L7QtNC40YLQtdC70YwnIDogJ0Jvc2hsaXEnLFxyXG5cdFx0bmFtZTogbm9ybWFsaXplVGV4dChwYXJhbXMuYXBwcm92ZXJOYW1lKSxcclxuXHRcdG1ldGE6IGdldERlY2lzaW9uTWV0YShhcHByb3ZlclN0YXRlLCBsYW5ndWFnZSksXHJcblx0XHRjb21tZW50OiBub3JtYWxpemVUZXh0KGFwcHJvdmVyRW50cnk/LmNvbW1lbnQpLFxyXG5cdFx0ZGF0ZTogZm9ybWF0RGF0ZVRpbWUoYXBwcm92ZXJFbnRyeT8uZGVjaWRlZEF0KSxcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gcm93c1xyXG59XHJcblxyXG5jb25zdCBjYXJkU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzE4cHggMjBweCcsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdGJvcmRlclJhZGl1czogJzE0cHgnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxuXHRib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgxNSwgMjMsIDQyLCAwLjA0KScsXHJcbn1cclxuXHJcbmNvbnN0IFB1cmNoYXNlUmVxdWVzdFNob3cgPSBwcm9wcyA9PiB7XHJcblx0Y29uc3QgeyByZWNvcmQgfSA9IHByb3BzXHJcblx0Y29uc3Qge1xyXG5cdFx0aTE4bjogeyBsYW5ndWFnZSB9LFxyXG5cdH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG5cdGNvbnN0IHBhcmFtcyA9IHJlY29yZD8ucGFyYW1zIHx8IHt9XHJcblx0Y29uc3QgY3JlYXRlZEJ5ID1cclxuXHRcdHJlY29yZD8ucG9wdWxhdGVkPy5jcmVhdGVkQnk/LnBhcmFtcz8udXNlcm5hbWUgfHwgcGFyYW1zLmNyZWF0ZWRCeVxyXG5cdGNvbnN0IGl0ZW1zID0gcGFyc2VJdGVtcyhwYXJhbXMuaXRlbXMpXHJcblx0Y29uc3Qgc3RydWN0dXJlTmFtZXMgPSBzcGxpdE5hbWVzKHBhcmFtcy5zZWxlY3RlZFVzZXJOYW1lcylcclxuXHRjb25zdCBhcHByb3ZhbFJvd3MgPSBnZXRBcHByb3ZhbFJvd3MocGFyYW1zLCBsYW5ndWFnZSlcclxuXHRjb25zdCBidXllck9yZGVyID0gcGFyc2VCdXllck9yZGVyRGF0YShwYXJhbXMuYnV5ZXJPcmRlckRhdGEpXHJcblx0Y29uc3QgYnV5ZXJEb2N1bWVudHMgPSBwYXJzZUFycmF5KGJ1eWVyT3JkZXIuZG9jdW1lbnRzKVxyXG5cdGNvbnN0IG9yaWdpbmFsSXRlbXMgPSBwYXJzZUl0ZW1zKGJ1eWVyT3JkZXIub3JpZ2luYWxJdGVtcylcclxuXHRjb25zdCBzdGF0dXNTdHlsZSA9IGdldFN0YXR1c0JhZGdlU3R5bGUocGFyYW1zLnN0YXR1cylcclxuXHRjb25zdCBzdGFnZVN0eWxlID0gZ2V0U3RhdHVzQmFkZ2VTdHlsZShwYXJhbXMuY3VycmVudFN0YWdlKVxyXG5cclxuXHRjb25zdCB0ZXh0ID1cclxuXHRcdGxhbmd1YWdlID09PSAncnUnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfQn9C+0LTRgNC+0LHQvdC+0YHRgtC4INC30LDRj9Cy0LrQuCcsXHJcblx0XHRcdFx0XHRyZXF1ZXN0Tm86ICfQndC+0LzQtdGAINC30LDRj9Cy0LrQuCcsXHJcblx0XHRcdFx0XHRzdGF0dXM6ICfQodGC0LDRgtGD0YEnLFxyXG5cdFx0XHRcdFx0c3RhZ2U6ICfQrdGC0LDQvycsXHJcblx0XHRcdFx0XHRjcmVhdG9yOiAn0KHQvtC30LTQsNC7INC30LDRj9Cy0LrRgycsXHJcblx0XHRcdFx0XHRjcmVhdGVkQXQ6ICfQlNCw0YLQsCDRgdC+0LfQtNCw0L3QuNGPJyxcclxuXHRcdFx0XHRcdHVwZGF0ZWRBdDogJ9CU0LDRgtCwINC+0LHQvdC+0LLQu9C10L3QuNGPJyxcclxuXHRcdFx0XHRcdHN0cnVjdHVyZXM6ICfQktGL0LHRgNCw0L3QvdGL0LUg0YHRgtGA0YPQutGC0YPRgNGLJyxcclxuXHRcdFx0XHRcdGFwcHJvdmVyOiAn0KDRg9C60L7QstC+0LTQuNGC0LXQu9GMIC8g0LzQvtC90LjRgtC+0YDQuNC90LMnLFxyXG5cdFx0XHRcdFx0Y29tbWVudDogJ9Ca0L7QvNC80LXQvdGC0LDRgNC40Lkg0Log0LfQsNGP0LLQutC1JyxcclxuXHRcdFx0XHRcdGxhc3RDb21tZW50OiAn0J/QvtGB0LvQtdC00L3QuNC5INC60L7QvNC80LXQvdGC0LDRgNC40LknLFxyXG5cdFx0XHRcdFx0aXRlbXM6ICfQlNC10YLQsNC70Lgg0YLQvtCy0LDRgNC+0LInLFxyXG5cdFx0XHRcdFx0dGFibGVBcHByb3ZhbDogJ9Ci0LDQsdC70LjRhtCwINGB0L7Qs9C70LDRgdC+0LLQsNC90LjRjycsXHJcblx0XHRcdFx0XHRyb2xlOiAn0KDQvtC70YwnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ9Cd0LDQt9Cy0LDQvdC40LUnLFxyXG5cdFx0XHRcdFx0bWFyazogJ9CX0L3QsNC6JyxcclxuXHRcdFx0XHRcdGRlY2lzaW9uOiAn0KDQtdGI0LXQvdC40LUnLFxyXG5cdFx0XHRcdFx0Y29tbWVudENvbDogJ9Ca0L7QvNC80LXQvdGC0LDRgNC40LknLFxyXG5cdFx0XHRcdFx0dGltZTogJ9CS0YDQtdC80Y8nLFxyXG5cdFx0XHRcdFx0cHJvZHVjdDogJ9Ci0L7QstCw0YAnLFxyXG5cdFx0XHRcdFx0ZmVhdHVyZXM6ICfQpdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutCwJyxcclxuXHRcdFx0XHRcdHVuaXQ6ICfQldC0LicsXHJcblx0XHRcdFx0XHRxdHk6ICfQmtC+0Lst0LLQvicsXHJcblx0XHRcdFx0XHRwcm9jdXJlbWVudDogJ9CU0LDQvdC90YvQtSDQt9Cw0LrRg9C/0LrQuCcsXHJcblx0XHRcdFx0XHRzdXBwbGllcjogJ9Ce0YLQutGD0LTQsCDQt9Cw0LrRg9C/0LDQtdGC0YHRjycsXHJcblx0XHRcdFx0XHRkb2N1bWVudHM6ICfQlNC+0LrRg9C80LXQvdGC0YsnLFxyXG5cdFx0XHRcdFx0c2F2ZWRCeTogJ9Cf0L7RgdC70LXQtNC90LXQtSDRgdC+0YXRgNCw0L3QtdC90LjQtScsXHJcblx0XHRcdFx0XHRvcmlnaW5hbEl0ZW1zOiAn0J/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90YvQtSDRgtC+0LLQsNGA0YsnLFxyXG5cdFx0XHRcdFx0Y2hhbmdlTm90aWNlOiAn0KPQstC10LTQvtC80LvQtdC90LjQtSDQvtCxINC40LfQvNC10L3QtdC90LjQuCcsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdHRpdGxlOiAnQXJpemEgdGFmc2lsb3RpJyxcclxuXHRcdFx0XHRcdHJlcXVlc3RObzogJ0FyaXphIHJhcWFtaScsXHJcblx0XHRcdFx0XHRzdGF0dXM6ICdIb2xhdGknLFxyXG5cdFx0XHRcdFx0c3RhZ2U6ICdCb3NxaWNoaScsXHJcblx0XHRcdFx0XHRjcmVhdG9yOiAnQXJpemFuaSB5YXJhdGdhbicsXHJcblx0XHRcdFx0XHRjcmVhdGVkQXQ6ICdZYXJhdGlsZ2FuIHNhbmEnLFxyXG5cdFx0XHRcdFx0dXBkYXRlZEF0OiAnWWFuZ2lsYW5nYW4gc2FuYScsXHJcblx0XHRcdFx0XHRzdHJ1Y3R1cmVzOiAnVGFubGFuZ2FuIHR1emlsbWFsYXInLFxyXG5cdFx0XHRcdFx0YXBwcm92ZXI6ICdCb3NobGlxIC8gbW9uaXRvcmluZycsXHJcblx0XHRcdFx0XHRjb21tZW50OiAnQXJpemEgaXpvaGknLFxyXG5cdFx0XHRcdFx0bGFzdENvbW1lbnQ6ICdPeGlyZ2kgaXpvaCcsXHJcblx0XHRcdFx0XHRpdGVtczogJ1RvdmFyIHRhZnNpbG90aScsXHJcblx0XHRcdFx0XHR0YWJsZUFwcHJvdmFsOiAnVGFzZGlxbGFzaCBqYWR2YWxpJyxcclxuXHRcdFx0XHRcdHJvbGU6ICdSb2wnLFxyXG5cdFx0XHRcdFx0bmFtZTogJ05vbWknLFxyXG5cdFx0XHRcdFx0bWFyazogJ0JlbGdpJyxcclxuXHRcdFx0XHRcdGRlY2lzaW9uOiAnUWFyb3InLFxyXG5cdFx0XHRcdFx0Y29tbWVudENvbDogJ0l6b2gnLFxyXG5cdFx0XHRcdFx0dGltZTogJ1ZhcXRpJyxcclxuXHRcdFx0XHRcdHByb2R1Y3Q6ICdUb3ZhcicsXHJcblx0XHRcdFx0XHRmZWF0dXJlczogJ1h1c3VzaXlhdGknLFxyXG5cdFx0XHRcdFx0dW5pdDogJ0JpcmxpZ2knLFxyXG5cdFx0XHRcdFx0cXR5OiAnU29uaScsXHJcblx0XHRcdFx0XHRwcm9jdXJlbWVudDogJ0J1eXVydG1hIG1h4oCZbHVtb3RsYXJpJyxcclxuXHRcdFx0XHRcdHN1cHBsaWVyOiAnUWF5ZXJkYW4gb2xpbm1vcWRhJyxcclxuXHRcdFx0XHRcdGRvY3VtZW50czogJ0h1amphdGxhcicsXHJcblx0XHRcdFx0XHRzYXZlZEJ5OiAnT3hpcmdpIHNhcWxvdmNoaScsXHJcblx0XHRcdFx0XHRvcmlnaW5hbEl0ZW1zOiAnRXNraSB0b3ZhciBtYeKAmWx1bW90bGFyaScsXHJcblx0XHRcdFx0XHRjaGFuZ2VOb3RpY2U6ICdP4oCYemdhcmlzaCBoYXFpZGEgeGFiYXInLFxyXG5cdFx0XHRcdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxCb3ggdmFyaWFudD0nZ3JleSc+XHJcblx0XHRcdDxCb3hcclxuXHRcdFx0XHRiZz0nd2hpdGUnXHJcblx0XHRcdFx0cD0neHhsJ1xyXG5cdFx0XHRcdGJvcmRlclJhZGl1cz0neGwnXHJcblx0XHRcdFx0Ym94U2hhZG93PSdjYXJkJ1xyXG5cdFx0XHRcdHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxIMiBtYj0neGwnPnt0ZXh0LnRpdGxlfTwvSDI+XHJcblxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdncmlkJyxcclxuXHRcdFx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKScsXHJcblx0XHRcdFx0XHRcdGdhcDogJzEycHgnLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxOHB4JyxcclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0LnJlcXVlc3ROb31cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nIGZvbnRXZWlnaHQ9J2JvbGQnPlxyXG5cdFx0XHRcdFx0XHRcdHtnZXRSZXF1ZXN0TnVtYmVyKHBhcmFtcywgcmVjb3JkKX1cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQuc3RhdHVzfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnN0YXR1c1N0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6ICc4cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzZweCAxMHB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6IDcwMCxcclxuXHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e2dldExvY2FsaXplZFN0YXR1cyhwYXJhbXMuc3RhdHVzLCBsYW5ndWFnZSl9XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0LnN0YWdlfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnN0YWdlU3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzhweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnNnB4IDEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnOTk5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogNzAwLFxyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7Z2V0TG9jYWxpemVkU3RhZ2UocGFyYW1zLmN1cnJlbnRTdGFnZSwgbGFuZ3VhZ2UpfVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC5jcmVhdG9yfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+e25vcm1hbGl6ZVRleHQoY3JlYXRlZEJ5KX08L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBzdHlsZT17eyAuLi5jYXJkU3R5bGUsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0e3RleHQuc3RydWN0dXJlc31cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdFx0Z3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKScsXHJcblx0XHRcdFx0XHRcdFx0Z2FwOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtzdHJ1Y3R1cmVOYW1lcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0c3RydWN0dXJlTmFtZXMubWFwKG5hbWUgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNlZmY2ZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjYmZkYmZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e25hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0PuKAlDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt7IC4uLmNhcmRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdHt0ZXh0LmFwcHJvdmVyfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PFRleHQgbXQ9J3NtJyBmb250V2VpZ2h0PSdib2xkJz5cclxuXHRcdFx0XHRcdFx0e25vcm1hbGl6ZVRleHQocGFyYW1zLmFwcHJvdmVyTmFtZSl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdC4uLmNhcmRTdHlsZSxcclxuXHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTZweCcsXHJcblx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXHJcblx0XHRcdFx0XHRcdHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nbGcnPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC5jb21tZW50fVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0PFRleHQ+e25vcm1hbGl6ZVRleHQocGFyYW1zLmNvbW1lbnQpfTwvVGV4dD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveCBzdHlsZT17eyAuLi5jYXJkU3R5bGUsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0e3RleHQuaXRlbXN9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG92ZXJmbG93WDogJ2F1dG8nIH19PlxyXG5cdFx0XHRcdFx0XHQ8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XHJcblx0XHRcdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0I1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQucHJvZHVjdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LmZlYXR1cmVzfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQudW5pdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LnF0eX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHR7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtgJHtpdGVtLnByb2R1Y3ROYW1lfS0ke2luZGV4fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2luZGV4ICsgMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZVRleHQoaXRlbS5wcm9kdWN0TmFtZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGl0ZW0uZmVhdHVyZXMpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChpdGVtLnVuaXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChpdGVtLnF1YW50aXR5KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHR7b3JpZ2luYWxJdGVtcy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IC4uLmNhcmRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQub3JpZ2luYWxJdGVtc31cclxuXHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIG92ZXJmbG93WDogJ2F1dG8nIH19PlxyXG5cdFx0XHRcdFx0XHRcdDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0I1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5wcm9kdWN0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5mZWF0dXJlc31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQudW5pdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQucXR5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7b3JpZ2luYWxJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17YG9yaWdpbmFsLSR7aXRlbS5wcm9kdWN0TmFtZX0tJHtpbmRleH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2luZGV4ICsgMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub3JtYWxpemVUZXh0KGl0ZW0ucHJvZHVjdE5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZVRleHQoaXRlbS5mZWF0dXJlcyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChpdGVtLnVuaXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25vcm1hbGl6ZVRleHQoaXRlbS5xdWFudGl0eSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHQ8Qm94IHN0eWxlPXt7IC4uLmNhcmRTdHlsZSwgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nbGcnPlxyXG5cdFx0XHRcdFx0XHR7dGV4dC5wcm9jdXJlbWVudH1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0PlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPnt0ZXh0LnN1cHBsaWVyfTo8L3N0cm9uZz57JyAnfVxyXG5cdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChidXllck9yZGVyLnN1cHBsaWVyTmFtZSl9XHJcblx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHQ8c3Ryb25nPnt0ZXh0LnNhdmVkQnl9Ojwvc3Ryb25nPiB7bm9ybWFsaXplVGV4dChidXllck9yZGVyLnNhdmVkQnkpfXsnICd9XHJcblx0XHRcdFx0XHRcdHtidXllck9yZGVyLnNhdmVkQXRcclxuXHRcdFx0XHRcdFx0XHQ/IGAoJHtmb3JtYXREYXRlVGltZShidXllck9yZGVyLnNhdmVkQXQpfSlgXHJcblx0XHRcdFx0XHRcdFx0OiAnJ31cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHQ8Qm94IG10PSdsZyc+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQuZG9jdW1lbnRzfVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdHtidXllckRvY3VtZW50cy5sZW5ndGggPyAoXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzhweCcgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7YnV5ZXJEb2N1bWVudHMubWFwKChkb2N1bWVudCwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Ake2RvY3VtZW50Py51cmwgfHwgZG9jdW1lbnQ/Lm5hbWUgfHwgJ2RvYyd9LSR7aW5kZXh9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtkb2N1bWVudD8udXJsIHx8ICcjJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9J19ibGFuaydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWw9J25vcmVmZXJyZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bm9ybWFsaXplVGV4dChkb2N1bWVudD8ubmFtZSB8fCBkb2N1bWVudD8uZmlsZU5hbWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8VGV4dD7igJQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0e2J1eWVyT3JkZXIuY2hhbmdlTm90ZSA/IChcclxuXHRcdFx0XHRcdDxCb3hcclxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHQuLi5jYXJkU3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAnMTZweCcsXHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmZmY3ZWQnLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjZmRiYTc0JyxcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC5jaGFuZ2VOb3RpY2V9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PFRleHQ+e2J1eWVyT3JkZXIuY2hhbmdlTm90ZX08L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQpIDogbnVsbH1cclxuXHJcblx0XHRcdFx0PEJveCBzdHlsZT17eyAuLi5jYXJkU3R5bGUsIG1hcmdpbkJvdHRvbTogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0e3RleHQudGFibGVBcHByb3ZhbH1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgb3ZlcmZsb3dYOiAnYXV0bycgfX0+XHJcblx0XHRcdFx0XHRcdDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cclxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQjXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5yb2xlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjZjhmYWZjJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RleHQubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0Lm1hcmt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC5kZWNpc2lvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2U1ZTdlYicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0ZXh0LmNvbW1lbnRDb2x9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0aFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0QWxpZ246ICdsZWZ0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZhZmMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGV4dC50aW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0XHRcdHthcHByb3ZhbFJvd3MubWFwKHJvdyA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2Ake3Jvdy5yb2xlfS0ke3Jvdy5pbmRleH0tJHtyb3cubmFtZX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cuaW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cucm9sZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluV2lkdGg6ICcxODBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMjRweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAnMjRweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByb3cubWV0YS5iYWNrZ3JvdW5kLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiByb3cubWV0YS5jb2xvcixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA4MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cubWV0YS5zeW1ib2x9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzRweCA5cHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiByb3cubWV0YS5iYWNrZ3JvdW5kLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiByb3cubWV0YS5jb2xvcixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiA3MDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyb3cubWV0YS5sYWJlbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZzogJzEwcHggMTJweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluV2lkdGg6ICcyMjBweCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdvcmRCcmVhazogJ2JyZWFrLXdvcmQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93LmNvbW1lbnR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcxMHB4IDEycHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cm93LmRhdGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdFx0XHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJyxcclxuXHRcdFx0XHRcdFx0Z2FwOiAnMTJweCcsXHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIGNvbG9yPSdncmV5MTAwJz5cclxuXHRcdFx0XHRcdFx0XHR7dGV4dC5jcmVhdGVkQXR9XHJcblx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz57Zm9ybWF0RGF0ZVRpbWUocGFyYW1zLmNyZWF0ZWRBdCl9PC9UZXh0PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0e3RleHQudXBkYXRlZEF0fVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+e2Zvcm1hdERhdGVUaW1lKHBhcmFtcy51cGRhdGVkQXQpfTwvVGV4dD5cclxuXHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdHt0ZXh0Lmxhc3RDb21tZW50fVxyXG5cdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdDxUZXh0IG10PSdzbSc+e25vcm1hbGl6ZVRleHQocGFyYW1zLmxhc3RDb21tZW50KX08L1RleHQ+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlUmVxdWVzdFNob3dcclxuIiwiaW1wb3J0IHtcclxuXHRCb3gsXHJcblx0QnV0dG9uLFxyXG5cdEgyLFxyXG5cdExhYmVsLFxyXG5cdE1lc3NhZ2VCb3gsXHJcblx0VGV4dCxcclxufSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyBBcGlDbGllbnQsIHVzZUN1cnJlbnRBZG1pbiwgdXNlTm90aWNlIH0gZnJvbSAnYWRtaW5qcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcblxyXG5jb25zdCBpbnB1dFN0eWxlID0ge1xyXG5cdHdpZHRoOiAnMTAwJScsXHJcblx0bWF4V2lkdGg6ICcxMDAlJyxcclxuXHRib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuXHRwYWRkaW5nOiAnMTBweCAxMnB4JyxcclxuXHRib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuXHRib3JkZXI6ICcxcHggc29saWQgI2NiZDVlMScsXHJcblx0Zm9udFNpemU6ICcxNHB4JyxcclxuXHRmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcblx0YmFja2dyb3VuZDogJyNmZmZmZmYnLFxyXG59XHJcblxyXG5jb25zdCB0ZXh0QXJlYVN0eWxlID0ge1xyXG5cdC4uLmlucHV0U3R5bGUsXHJcblx0bWluSGVpZ2h0OiAnOTJweCcsXHJcblx0cmVzaXplOiAndmVydGljYWwnLFxyXG59XHJcblxyXG5jb25zdCBjYXJkU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzE4cHgnLFxyXG5cdGJvcmRlcjogJzFweCBzb2xpZCAjZTVlN2ViJyxcclxuXHRib3JkZXJSYWRpdXM6ICcxNHB4JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2ZmZmZmZicsXHJcbn1cclxuXHJcbmNvbnN0IG5ld0JhZGdlU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuXHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRwYWRkaW5nOiAnMnB4IDEwcHgnLFxyXG5cdGJvcmRlclJhZGl1czogJzk5OXB4JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2RjZmNlNycsXHJcblx0Y29sb3I6ICcjMTY2NTM0JyxcclxuXHRmb250U2l6ZTogJzEycHgnLFxyXG5cdGZvbnRXZWlnaHQ6IDcwMCxcclxufVxyXG5cclxuY29uc3QgdGFibGVXcmFwU3R5bGUgPSB7XHJcblx0b3ZlcmZsb3dYOiAnYXV0bycsXHJcblx0Ym9yZGVyOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdGJvcmRlclJhZGl1czogJzE0cHgnLFxyXG5cdGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcclxufVxyXG5cclxuY29uc3QgdGFibGVTdHlsZSA9IHtcclxuXHR3aWR0aDogJzEwMCUnLFxyXG5cdGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLFxyXG5cdG1pbldpZHRoOiAnODYwcHgnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZUhlYWRDZWxsU3R5bGUgPSB7XHJcblx0cGFkZGluZzogJzEycHggMTRweCcsXHJcblx0dGV4dEFsaWduOiAnbGVmdCcsXHJcblx0Zm9udFNpemU6ICcxMnB4JyxcclxuXHRmb250V2VpZ2h0OiA3MDAsXHJcblx0Y29sb3I6ICcjNDc1NTY5JyxcclxuXHRiYWNrZ3JvdW5kOiAnI2Y4ZmFmYycsXHJcblx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlNWU3ZWInLFxyXG5cdHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG59XHJcblxyXG5jb25zdCB0YWJsZUNlbGxTdHlsZSA9IHtcclxuXHRwYWRkaW5nOiAnMTJweCAxNHB4JyxcclxuXHRmb250U2l6ZTogJzE0cHgnLFxyXG5cdGNvbG9yOiAnIzBmMTcyYScsXHJcblx0Ym9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxyXG5cdHZlcnRpY2FsQWxpZ246ICd0b3AnLFxyXG59XHJcblxyXG5jb25zdCBkZXRhaWxHcmlkU3R5bGUgPSB7XHJcblx0ZGlzcGxheTogJ2dyaWQnLFxyXG5cdGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLFxyXG5cdGdhcDogJzEycHgnLFxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEb2N1bWVudFJvdyA9IGRvY3VtZW50ID0+ICh7XHJcblx0aWQ6XHJcblx0XHRTdHJpbmcoZG9jdW1lbnQ/LmlkIHx8ICcnKS50cmltKCkgfHxcclxuXHRcdGBkb2MtJHtEYXRlLm5vdygpfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDgpfWAsXHJcblx0bmFtZTogU3RyaW5nKGRvY3VtZW50Py5uYW1lIHx8ICcnKS50cmltKCksXHJcblx0ZmlsZU5hbWU6IFN0cmluZyhkb2N1bWVudD8uZmlsZU5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHR1cmw6IFN0cmluZyhkb2N1bWVudD8udXJsIHx8ICcnKS50cmltKCksXHJcblx0bWltZVR5cGU6IFN0cmluZyhkb2N1bWVudD8ubWltZVR5cGUgfHwgJycpLnRyaW0oKSxcclxuXHRjb250ZW50OiAnJyxcclxufSlcclxuXHJcbmNvbnN0IHRvRGF0YVVybCA9IGZpbGUgPT5cclxuXHRuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXHJcblx0XHRyZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShTdHJpbmcocmVhZGVyLnJlc3VsdCB8fCAnJykpXHJcblx0XHRyZWFkZXIub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ0ZheWxuaSBv4oCYcWliIGJv4oCYbG1hZGknKSlcclxuXHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcblx0fSlcclxuXHJcbmNvbnN0IGZvcm1hdERhdGUgPSB2YWx1ZSA9PiB7XHJcblx0aWYgKCF2YWx1ZSkge1xyXG5cdFx0cmV0dXJuICfigJQnXHJcblx0fVxyXG5cclxuXHRjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXHJcblxyXG5cdGlmIChOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XHJcblx0XHRyZXR1cm4gdmFsdWVcclxuXHR9XHJcblxyXG5cdGNvbnN0IHBhZCA9IG51bWJlciA9PiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpXHJcblx0cmV0dXJuIGAke3BhZChkYXRlLmdldERhdGUoKSl9LiR7cGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX0gJHtwYWQoZGF0ZS5nZXRIb3VycygpKX06JHtwYWQoZGF0ZS5nZXRNaW51dGVzKCkpfWBcclxufVxyXG5cclxuY29uc3QgR0VORVJJQ19WQUxJREFUSU9OX05PVElDRSA9ICd0aGVyZVdlcmVWYWxpZGF0aW9uRXJyb3JzJ1xyXG5cclxuY29uc3QgZXh0cmFjdFdvcmtzcGFjZU1lc3NhZ2UgPSAoZGF0YSwgZmFsbGJhY2tNZXNzYWdlID0gJycpID0+IHtcclxuXHRjb25zdCBmaWVsZE1lc3NhZ2VzID0gT2JqZWN0LnZhbHVlcyhkYXRhPy5yZWNvcmQ/LmVycm9ycyB8fCB7fSlcclxuXHRcdC5tYXAoZXJyb3IgPT4gU3RyaW5nKGVycm9yPy5tZXNzYWdlIHx8ICcnKS50cmltKCkpXHJcblx0XHQuZmlsdGVyKEJvb2xlYW4pXHJcblx0Y29uc3QgYmFzZUVycm9yTWVzc2FnZSA9IFN0cmluZyhkYXRhPy5yZWNvcmQ/LmJhc2VFcnJvcj8ubWVzc2FnZSB8fCAnJykudHJpbSgpXHJcblx0Y29uc3Qgbm90aWNlTWVzc2FnZSA9IFN0cmluZyhkYXRhPy5ub3RpY2U/Lm1lc3NhZ2UgfHwgJycpLnRyaW0oKVxyXG5cdGNvbnN0IG1lc3NhZ2VzID0gW1xyXG5cdFx0Li4ubmV3IFNldChbYmFzZUVycm9yTWVzc2FnZSwgLi4uZmllbGRNZXNzYWdlc10uZmlsdGVyKEJvb2xlYW4pKSxcclxuXHRdXHJcblxyXG5cdGlmIChtZXNzYWdlcy5sZW5ndGgpIHtcclxuXHRcdHJldHVybiBtZXNzYWdlcy5qb2luKCcuICcpXHJcblx0fVxyXG5cclxuXHRpZiAobm90aWNlTWVzc2FnZSAmJiBub3RpY2VNZXNzYWdlICE9PSBHRU5FUklDX1ZBTElEQVRJT05fTk9USUNFKSB7XHJcblx0XHRyZXR1cm4gbm90aWNlTWVzc2FnZVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbGxiYWNrTWVzc2FnZVxyXG59XHJcblxyXG5jb25zdCBub3JtYWxpemVPcmRlckRvY3VtZW50cyA9IGRvY3VtZW50cyA9PlxyXG5cdGRvY3VtZW50c1xyXG5cdFx0Lm1hcChkb2N1bWVudCA9PiAoe1xyXG5cdFx0XHRuYW1lOiBTdHJpbmcoZG9jdW1lbnQ/Lm5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdFx0ZmlsZU5hbWU6IFN0cmluZyhkb2N1bWVudD8uZmlsZU5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdFx0dXJsOiBTdHJpbmcoZG9jdW1lbnQ/LnVybCB8fCAnJykudHJpbSgpLFxyXG5cdFx0XHRtaW1lVHlwZTogU3RyaW5nKGRvY3VtZW50Py5taW1lVHlwZSB8fCAnJykudHJpbSgpLFxyXG5cdFx0XHRjb250ZW50OiBTdHJpbmcoZG9jdW1lbnQ/LmNvbnRlbnQgfHwgJycpLnRyaW0oKSxcclxuXHRcdH0pKVxyXG5cdFx0LmZpbHRlcihcclxuXHRcdFx0ZG9jdW1lbnQgPT5cclxuXHRcdFx0XHRkb2N1bWVudC5uYW1lIHx8IGRvY3VtZW50LmZpbGVOYW1lIHx8IGRvY3VtZW50LnVybCB8fCBkb2N1bWVudC5jb250ZW50LFxyXG5cdFx0KVxyXG5cclxuY29uc3QgZ2V0Q2xpZW50VmFsaWRhdGlvbk1lc3NhZ2UgPSAoe1xyXG5cdHJlcXVlc3RJZCxcclxuXHRzdXBwbGllck5hbWUsXHJcblx0aXRlbXMsXHJcblx0ZG9jdW1lbnRzLFxyXG59KSA9PiB7XHJcblx0aWYgKCFTdHJpbmcocmVxdWVzdElkIHx8ICcnKS50cmltKCkpIHtcclxuXHRcdHJldHVybiAnQXZ2YWwgYXJpemEgSUQgc2luaSB0YW5sYW5nJ1xyXG5cdH1cclxuXHJcblx0aWYgKCFTdHJpbmcoc3VwcGxpZXJOYW1lIHx8ICcnKS50cmltKCkpIHtcclxuXHRcdHJldHVybiAnUWF5ZXJkYW4gb2xpbmF5b3RnYW5pbmkga2lyaXRpbmcnXHJcblx0fVxyXG5cclxuXHRjb25zdCB2YWxpZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT5cclxuXHRcdFN0cmluZyhpdGVtPy5wcm9kdWN0TmFtZSB8fCAnJykudHJpbSgpLFxyXG5cdClcclxuXHJcblx0aWYgKCF2YWxpZEl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0cmV0dXJuICdLYW1pZGEgYml0dGEgdG92YXIgbm9taW5pIGtpcml0aW5nJ1xyXG5cdH1cclxuXHJcblx0aWYgKGRvY3VtZW50cy5zb21lKGRvY3VtZW50ID0+ICFTdHJpbmcoZG9jdW1lbnQ/Lm5hbWUgfHwgJycpLnRyaW0oKSkpIHtcclxuXHRcdHJldHVybiAnSGFyIGJpciBodWpqYXRnYSBub20ga2lyaXRpbmcnXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gJydcclxufVxyXG5cclxuY29uc3QgUHVyY2hhc2VPcmRlcldvcmtzcGFjZSA9ICgpID0+IHtcclxuXHRjb25zdCBbY3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXHJcblx0Y29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcclxuXHRjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZShbXSlcclxuXHRjb25zdCBbb3JkZXJlZFJlY29yZHMsIHNldE9yZGVyZWRSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFthdmFpbGFibGVVbml0cywgc2V0QXZhaWxhYmxlVW5pdHNdID0gdXNlU3RhdGUoWydkb25hJ10pXHJcblx0Y29uc3QgW3NlbGVjdGVkUmVxdWVzdElkLCBzZXRTZWxlY3RlZFJlcXVlc3RJZF0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cdGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG5cdGNvbnN0IFtzdXBwbGllck5hbWUsIHNldFN1cHBsaWVyTmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuXHRjb25zdCBbZG9jdW1lbnRzLCBzZXREb2N1bWVudHNdID0gdXNlU3RhdGUoW2NyZWF0ZURvY3VtZW50Um93KCldKVxyXG5cdGNvbnN0IFtzaG93Q3JlYXRlRm9ybSwgc2V0U2hvd0NyZWF0ZUZvcm1dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cdGNvbnN0IGNhblZpZXcgPSBbJ2FkbWluJywgJ21vbml0b3JpbmcnLCAnc290aWJfb2x1dmNoaSddLmluY2x1ZGVzKFxyXG5cdFx0Y3VycmVudEFkbWluPy5yb2xlLFxyXG5cdClcclxuXHRjb25zdCBjYW5FZGl0ID0gWydhZG1pbicsICdzb3RpYl9vbHV2Y2hpJ10uaW5jbHVkZXMoY3VycmVudEFkbWluPy5yb2xlKVxyXG5cclxuXHRjb25zdCBhcHBseVNlZW5TdGF0ZSA9IChsaXN0LCByZXF1ZXN0SWQpID0+XHJcblx0XHRsaXN0Lm1hcChyZWNvcmQgPT5cclxuXHRcdFx0cmVjb3JkLmlkID09PSByZXF1ZXN0SWRcclxuXHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0Li4ucmVjb3JkLFxyXG5cdFx0XHRcdFx0XHRidXllck9yZGVyRGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdC4uLihyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhIHx8IHt9KSxcclxuXHRcdFx0XHRcdFx0XHRpc05ldzogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0bGFzdFZpZXdlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcblx0XHRcdFx0XHRcdFx0bGFzdFZpZXdlZEJ5OlxyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEFkbWluPy50aXRsZSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudEFkbWluPy5vcmdhbml6YXRpb25OYW1lIHx8XHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50QWRtaW4/LnVzZXJuYW1lIHx8XHJcblx0XHRcdFx0XHRcdFx0XHQnJyxcclxuXHRcdFx0XHRcdFx0XHRsYXN0Vmlld2VkUm9sZTogY3VycmVudEFkbWluPy5yb2xlIHx8ICcnLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdDogcmVjb3JkLFxyXG5cdFx0KVxyXG5cclxuXHRjb25zdCBtYXJrUmVjb3JkU2VlbiA9IGFzeW5jIHJlcXVlc3RJZCA9PiB7XHJcblx0XHRpZiAoIWNhbkVkaXQgfHwgIXJlcXVlc3RJZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB0YXJnZXRSZWNvcmQgPSBbLi4ucmVjb3JkcywgLi4ub3JkZXJlZFJlY29yZHNdLmZpbmQoXHJcblx0XHRcdHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHJlcXVlc3RJZCxcclxuXHRcdClcclxuXHJcblx0XHRpZiAodGFyZ2V0UmVjb3JkICYmICF0YXJnZXRSZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5pc05ldykge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBhcGkucmVjb3JkQWN0aW9uKHtcclxuXHRcdFx0XHRyZXNvdXJjZUlkOiAnUHVyY2hhc2VCdXllclF1ZXVlJyxcclxuXHRcdFx0XHRyZWNvcmRJZDogcmVxdWVzdElkLFxyXG5cdFx0XHRcdGFjdGlvbk5hbWU6ICdtYXJrQnV5ZXJOb3RpZmljYXRpb25TZWVuJyxcclxuXHRcdFx0XHRkYXRhOiB7fSxcclxuXHRcdFx0fSlcclxuXHRcdFx0c2V0UmVjb3JkcyhjdXJyZW50UmVjb3JkcyA9PiBhcHBseVNlZW5TdGF0ZShjdXJyZW50UmVjb3JkcywgcmVxdWVzdElkKSlcclxuXHRcdFx0c2V0T3JkZXJlZFJlY29yZHMoY3VycmVudFJlY29yZHMgPT5cclxuXHRcdFx0XHRhcHBseVNlZW5TdGF0ZShjdXJyZW50UmVjb3JkcywgcmVxdWVzdElkKSxcclxuXHRcdFx0KVxyXG5cdFx0fSBjYXRjaCB7XHJcblx0XHRcdC8vIG5vLW9wOiBiYWRnZSBpcyBpbmZvcm1hdGlvbmFsIGFuZCBzaG91bGQgbm90IGludGVycnVwdCB0aGUgd29ya2Zsb3dcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IG9wZW5SZXF1ZXN0ID0gYXN5bmMgcmVjb3JkID0+IHtcclxuXHRcdGlmICghcmVjb3JkPy5pZCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRzZXRTZWxlY3RlZFJlcXVlc3RJZChyZWNvcmQuaWQpXHJcblx0XHRhcHBseVJlY29yZChyZWNvcmQpXHJcblx0XHRzZXRTaG93Q3JlYXRlRm9ybSh0cnVlKVxyXG5cdFx0YXdhaXQgbWFya1JlY29yZFNlZW4ocmVjb3JkLmlkKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgYXBwbHlSZWNvcmQgPSByZWNvcmQgPT4ge1xyXG5cdFx0aWYgKCFyZWNvcmQpIHtcclxuXHRcdFx0c2V0SXRlbXMoW10pXHJcblx0XHRcdHNldFN1cHBsaWVyTmFtZSgnJylcclxuXHRcdFx0c2V0RG9jdW1lbnRzKFtjcmVhdGVEb2N1bWVudFJvdygpXSlcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc2F2ZWRJdGVtcyA9IEFycmF5LmlzQXJyYXkocmVjb3JkPy5idXllck9yZGVyRGF0YT8uaXRlbXMpXHJcblx0XHRcdD8gcmVjb3JkLmJ1eWVyT3JkZXJEYXRhLml0ZW1zXHJcblx0XHRcdDogW11cclxuXHRcdGNvbnN0IG5leHRJdGVtcyA9IChzYXZlZEl0ZW1zLmxlbmd0aCA/IHNhdmVkSXRlbXMgOiByZWNvcmQuaXRlbXMgfHwgW10pLm1hcChcclxuXHRcdFx0aXRlbSA9PiAoe1xyXG5cdFx0XHRcdHByb2R1Y3ROYW1lOiBTdHJpbmcoaXRlbT8ucHJvZHVjdE5hbWUgfHwgJycpLnRyaW0oKSxcclxuXHRcdFx0XHRmZWF0dXJlczogU3RyaW5nKGl0ZW0/LmZlYXR1cmVzIHx8ICcnKS50cmltKCksXHJcblx0XHRcdFx0dW5pdDogU3RyaW5nKGl0ZW0/LnVuaXQgfHwgYXZhaWxhYmxlVW5pdHNbMF0gfHwgJ2RvbmEnKS50cmltKCksXHJcblx0XHRcdFx0cXVhbnRpdHk6IE1hdGgubWF4KDEsIE51bWJlcihpdGVtPy5xdWFudGl0eSB8fCAxKSksXHJcblx0XHRcdH0pLFxyXG5cdFx0KVxyXG5cclxuXHRcdGNvbnN0IHNhdmVkRG9jdW1lbnRzID0gQXJyYXkuaXNBcnJheShyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5kb2N1bWVudHMpXHJcblx0XHRcdD8gcmVjb3JkLmJ1eWVyT3JkZXJEYXRhLmRvY3VtZW50c1xyXG5cdFx0XHQ6IFtdXHJcblxyXG5cdFx0c2V0SXRlbXMobmV4dEl0ZW1zKVxyXG5cdFx0c2V0U3VwcGxpZXJOYW1lKFN0cmluZyhyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWUgfHwgJycpLnRyaW0oKSlcclxuXHRcdHNldERvY3VtZW50cyhcclxuXHRcdFx0c2F2ZWREb2N1bWVudHMubGVuZ3RoXHJcblx0XHRcdFx0PyBzYXZlZERvY3VtZW50cy5tYXAoZG9jdW1lbnQgPT4gY3JlYXRlRG9jdW1lbnRSb3coZG9jdW1lbnQpKVxyXG5cdFx0XHRcdDogW2NyZWF0ZURvY3VtZW50Um93KCldLFxyXG5cdFx0KVxyXG5cdH1cclxuXHJcblx0Y29uc3QgbG9hZFdvcmtzcGFjZSA9IGFzeW5jIHByZWZlcnJlZFJlcXVlc3RJZCA9PiB7XHJcblx0XHRzZXRMb2FkaW5nKHRydWUpXHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG5cdFx0XHRcdHJlc291cmNlSWQ6ICdQdXJjaGFzZUJ1eWVyUXVldWUnLFxyXG5cdFx0XHRcdGFjdGlvbk5hbWU6ICdidXllcldvcmtzcGFjZScsXHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHRjb25zdCBuZXh0UmVjb3JkcyA9IHJlc3BvbnNlPy5kYXRhPy5yZWNvcmRzIHx8IFtdXHJcblx0XHRcdGNvbnN0IG5leHRPcmRlcmVkUmVjb3JkcyA9IHJlc3BvbnNlPy5kYXRhPy5vcmRlcmVkUmVjb3JkcyB8fCBbXVxyXG5cdFx0XHRjb25zdCBuZXh0VW5pdHMgPSByZXNwb25zZT8uZGF0YT8uYXZhaWxhYmxlVW5pdHMgfHwgWydkb25hJ11cclxuXHRcdFx0Y29uc3QgcXVldWVSZWNvcmRzID0gWy4uLm5leHRSZWNvcmRzLCAuLi5uZXh0T3JkZXJlZFJlY29yZHNdXHJcblx0XHRcdGNvbnN0IHJlc29sdmVkUmVxdWVzdElkID1cclxuXHRcdFx0XHRwcmVmZXJyZWRSZXF1ZXN0SWQgJiZcclxuXHRcdFx0XHRxdWV1ZVJlY29yZHMuc29tZShyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBwcmVmZXJyZWRSZXF1ZXN0SWQpXHJcblx0XHRcdFx0XHQ/IHByZWZlcnJlZFJlcXVlc3RJZFxyXG5cdFx0XHRcdFx0OiBuZXh0UmVjb3Jkc1swXT8uaWQgfHwgbmV4dE9yZGVyZWRSZWNvcmRzWzBdPy5pZCB8fCAnJ1xyXG5cclxuXHRcdFx0c2V0QXZhaWxhYmxlVW5pdHMobmV4dFVuaXRzKVxyXG5cdFx0XHRzZXRSZWNvcmRzKG5leHRSZWNvcmRzKVxyXG5cdFx0XHRzZXRPcmRlcmVkUmVjb3JkcyhuZXh0T3JkZXJlZFJlY29yZHMpXHJcblx0XHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKHJlc29sdmVkUmVxdWVzdElkKVxyXG5cclxuXHRcdFx0aWYgKHByZWZlcnJlZFJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdHNldFNob3dDcmVhdGVGb3JtKHRydWUpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChyZXNvbHZlZFJlcXVlc3RJZCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlc29sdmVkUmVjb3JkID1cclxuXHRcdFx0XHRcdHF1ZXVlUmVjb3Jkcy5maW5kKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHJlc29sdmVkUmVxdWVzdElkKSB8fCBudWxsXHJcblx0XHRcdFx0YXBwbHlSZWNvcmQocmVzb2x2ZWRSZWNvcmQpXHJcblxyXG5cdFx0XHRcdGlmIChwcmVmZXJyZWRSZXF1ZXN0SWQgJiYgcmVzb2x2ZWRSZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5pc05ldykge1xyXG5cdFx0XHRcdFx0dm9pZCBtYXJrUmVjb3JkU2VlbihyZXNvbHZlZFJlcXVlc3RJZClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXBwbHlSZWNvcmQobnVsbClcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0c2V0UmVjb3JkcyhbXSlcclxuXHRcdFx0c2V0T3JkZXJlZFJlY29yZHMoW10pXHJcblx0XHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKCcnKVxyXG5cdFx0XHRhcHBseVJlY29yZChudWxsKVxyXG5cdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IGV4dHJhY3RXb3Jrc3BhY2VNZXNzYWdlKFxyXG5cdFx0XHRcdFx0ZXJyb3I/LnJlc3BvbnNlPy5kYXRhLFxyXG5cdFx0XHRcdFx0J0J1eXVydG1hIHNhaGlmYXNpIG1h4oCZbHVtb3RsYXJpbmkgeXVrbGFiIGJv4oCYbG1hZGknLFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0fSlcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgaW5pdGlhbFJlcXVlc3RJZCA9XHJcblx0XHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXHJcblx0XHRcdFx0PyBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldCgncmVjb3JkSWQnKSB8fCAnJ1xyXG5cdFx0XHRcdDogJydcclxuXHJcblx0XHRsb2FkV29ya3NwYWNlKGluaXRpYWxSZXF1ZXN0SWQpXHJcblx0fSwgW10pXHJcblxyXG5cdGNvbnN0IGFsbFF1ZXVlUmVjb3JkcyA9IHVzZU1lbW8oXHJcblx0XHQoKSA9PiBbLi4ucmVjb3JkcywgLi4ub3JkZXJlZFJlY29yZHNdLFxyXG5cdFx0W3JlY29yZHMsIG9yZGVyZWRSZWNvcmRzXSxcclxuXHQpXHJcblxyXG5cdGNvbnN0IHNlbGVjdGVkUmVjb3JkID0gdXNlTWVtbyhcclxuXHRcdCgpID0+XHJcblx0XHRcdGFsbFF1ZXVlUmVjb3Jkcy5maW5kKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHNlbGVjdGVkUmVxdWVzdElkKSB8fCBudWxsLFxyXG5cdFx0W2FsbFF1ZXVlUmVjb3Jkcywgc2VsZWN0ZWRSZXF1ZXN0SWRdLFxyXG5cdClcclxuXHJcblx0Y29uc3QgdXBkYXRlSXRlbSA9IChpbmRleCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcblx0XHRzZXRJdGVtcyhjdXJyZW50SXRlbXMgPT5cclxuXHRcdFx0Y3VycmVudEl0ZW1zLm1hcCgoaXRlbSwgY3VycmVudEluZGV4KSA9PlxyXG5cdFx0XHRcdGN1cnJlbnRJbmRleCA9PT0gaW5kZXhcclxuXHRcdFx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0XHRcdC4uLml0ZW0sXHJcblx0XHRcdFx0XHRcdFx0W2ZpZWxkXTpcclxuXHRcdFx0XHRcdFx0XHRcdGZpZWxkID09PSAncXVhbnRpdHknID8gTWF0aC5tYXgoMSwgTnVtYmVyKHZhbHVlIHx8IDEpKSA6IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQ6IGl0ZW0sXHJcblx0XHRcdCksXHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRjb25zdCB1cGRhdGVEb2N1bWVudCA9IChpbmRleCwgZmllbGQsIHZhbHVlKSA9PiB7XHJcblx0XHRzZXREb2N1bWVudHMoY3VycmVudERvY3VtZW50cyA9PlxyXG5cdFx0XHRjdXJyZW50RG9jdW1lbnRzLm1hcCgoZG9jdW1lbnQsIGN1cnJlbnRJbmRleCkgPT5cclxuXHRcdFx0XHRjdXJyZW50SW5kZXggPT09IGluZGV4XHJcblx0XHRcdFx0XHQ/IHtcclxuXHRcdFx0XHRcdFx0XHQuLi5kb2N1bWVudCxcclxuXHRcdFx0XHRcdFx0XHRbZmllbGRdOiB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0OiBkb2N1bWVudCxcclxuXHRcdFx0KSxcclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNlbGVjdFJlcXVlc3QgPSBhc3luYyBldmVudCA9PiB7XHJcblx0XHRjb25zdCBuZXh0UmVxdWVzdElkID0gU3RyaW5nKGV2ZW50LnRhcmdldC52YWx1ZSB8fCAnJylcclxuXHRcdGNvbnN0IG5leHRSZWNvcmQgPVxyXG5cdFx0XHRyZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5pZCA9PT0gbmV4dFJlcXVlc3RJZCkgfHwgbnVsbFxyXG5cclxuXHRcdHNldFNlbGVjdGVkUmVxdWVzdElkKG5leHRSZXF1ZXN0SWQpXHJcblx0XHRhcHBseVJlY29yZChuZXh0UmVjb3JkKVxyXG5cdFx0YXdhaXQgbWFya1JlY29yZFNlZW4obmV4dFJlcXVlc3RJZClcclxuXHR9XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN0YXJ0TmV3T3JkZXIgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoIXJlY29yZHMubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IG5leHRSZXF1ZXN0SWQgPSBzZWxlY3RlZFJlcXVlc3RJZCB8fCByZWNvcmRzWzBdPy5pZCB8fCAnJ1xyXG5cdFx0Y29uc3QgbmV4dFJlY29yZCA9XHJcblx0XHRcdHJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBuZXh0UmVxdWVzdElkKSB8fCBudWxsXHJcblx0XHRhd2FpdCBvcGVuUmVxdWVzdChuZXh0UmVjb3JkKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xvc2VOZXdPcmRlciA9ICgpID0+IHtcclxuXHRcdHNldFNob3dDcmVhdGVGb3JtKGZhbHNlKVxyXG5cdH1cclxuXHJcblx0Y29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jIChpbmRleCwgZXZlbnQpID0+IHtcclxuXHRcdGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXVxyXG5cclxuXHRcdGlmICghZmlsZSkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCBjb250ZW50ID0gYXdhaXQgdG9EYXRhVXJsKGZpbGUpXHJcblx0XHRcdHNldERvY3VtZW50cyhjdXJyZW50RG9jdW1lbnRzID0+XHJcblx0XHRcdFx0Y3VycmVudERvY3VtZW50cy5tYXAoKGRvY3VtZW50LCBjdXJyZW50SW5kZXgpID0+XHJcblx0XHRcdFx0XHRjdXJyZW50SW5kZXggPT09IGluZGV4XHJcblx0XHRcdFx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Li4uZG9jdW1lbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxlTmFtZTogZmlsZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWltZVR5cGU6IGZpbGUudHlwZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQ6IGRvY3VtZW50LFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdClcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCAnRmF5bG5pIHl1a2xhc2hkYSB4YXRvbGlrIGJv4oCYbGRpJyxcclxuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29uc3QgYWRkRG9jdW1lbnRSb3cgPSAoKSA9PiB7XHJcblx0XHRzZXREb2N1bWVudHMoY3VycmVudERvY3VtZW50cyA9PiBbLi4uY3VycmVudERvY3VtZW50cywgY3JlYXRlRG9jdW1lbnRSb3coKV0pXHJcblx0fVxyXG5cclxuXHRjb25zdCByZW1vdmVEb2N1bWVudFJvdyA9IGluZGV4ID0+IHtcclxuXHRcdHNldERvY3VtZW50cyhjdXJyZW50RG9jdW1lbnRzID0+IHtcclxuXHRcdFx0Y29uc3QgbmV4dERvY3VtZW50cyA9IGN1cnJlbnREb2N1bWVudHMuZmlsdGVyKFxyXG5cdFx0XHRcdChfLCBjdXJyZW50SW5kZXgpID0+IGN1cnJlbnRJbmRleCAhPT0gaW5kZXgsXHJcblx0XHRcdClcclxuXHRcdFx0cmV0dXJuIG5leHREb2N1bWVudHMubGVuZ3RoID8gbmV4dERvY3VtZW50cyA6IFtjcmVhdGVEb2N1bWVudFJvdygpXVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNhdmVPcmRlciA9IGFzeW5jICgpID0+IHtcclxuXHRcdGlmICghY2FuRWRpdCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBub3JtYWxpemVkRG9jdW1lbnRzID0gbm9ybWFsaXplT3JkZXJEb2N1bWVudHMoZG9jdW1lbnRzKVxyXG5cdFx0Y29uc3QgdmFsaWRhdGlvbk1lc3NhZ2UgPSBnZXRDbGllbnRWYWxpZGF0aW9uTWVzc2FnZSh7XHJcblx0XHRcdHJlcXVlc3RJZDogc2VsZWN0ZWRSZXF1ZXN0SWQsXHJcblx0XHRcdHN1cHBsaWVyTmFtZSxcclxuXHRcdFx0aXRlbXMsXHJcblx0XHRcdGRvY3VtZW50czogbm9ybWFsaXplZERvY3VtZW50cyxcclxuXHRcdH0pXHJcblxyXG5cdFx0aWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XHJcblx0XHRcdGFkZE5vdGljZSh7XHJcblx0XHRcdFx0bWVzc2FnZTogdmFsaWRhdGlvbk1lc3NhZ2UsXHJcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0c2V0U2F2aW5nKHRydWUpXHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG5cdFx0XHRcdHJlc291cmNlSWQ6ICdQdXJjaGFzZUJ1eWVyUXVldWUnLFxyXG5cdFx0XHRcdGFjdGlvbk5hbWU6ICdidXllcldvcmtzcGFjZScsXHJcblx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdHJlcXVlc3RJZDogc2VsZWN0ZWRSZXF1ZXN0SWQsXHJcblx0XHRcdFx0XHRzdXBwbGllck5hbWU6IHN1cHBsaWVyTmFtZS50cmltKCksXHJcblx0XHRcdFx0XHRpdGVtcyxcclxuXHRcdFx0XHRcdGRvY3VtZW50czogbm9ybWFsaXplZERvY3VtZW50cyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KVxyXG5cclxuXHRcdFx0Y29uc3QgcmVzcG9uc2VOb3RpY2UgPSByZXNwb25zZT8uZGF0YT8ubm90aWNlXHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlTWVzc2FnZSA9IGV4dHJhY3RXb3Jrc3BhY2VNZXNzYWdlKHJlc3BvbnNlPy5kYXRhKVxyXG5cclxuXHRcdFx0aWYgKHJlc3BvbnNlTm90aWNlPy50eXBlID09PSAnZXJyb3InKSB7XHJcblx0XHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRcdC4uLnJlc3BvbnNlTm90aWNlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTpcclxuXHRcdFx0XHRcdFx0cmVzcG9uc2VNZXNzYWdlIHx8XHJcblx0XHRcdFx0XHRcdCdCdXl1cnRtYSBtYeKAmWx1bW90bGFyaW5pIHRla3NoaXJpYiwgcWF5dGEgc2FxbGFuZycsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHJlc3BvbnNlTm90aWNlKSB7XHJcblx0XHRcdFx0YWRkTm90aWNlKHtcclxuXHRcdFx0XHRcdC4uLnJlc3BvbnNlTm90aWNlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogcmVzcG9uc2VNZXNzYWdlIHx8IHJlc3BvbnNlTm90aWNlLm1lc3NhZ2UsXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2V0U2hvd0NyZWF0ZUZvcm0oZmFsc2UpXHJcblx0XHRcdGF3YWl0IGxvYWRXb3Jrc3BhY2UoJycpXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRhZGROb3RpY2Uoe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IGV4dHJhY3RXb3Jrc3BhY2VNZXNzYWdlKFxyXG5cdFx0XHRcdFx0ZXJyb3I/LnJlc3BvbnNlPy5kYXRhLFxyXG5cdFx0XHRcdFx0J0J1eXVydG1hIG1h4oCZbHVtb3RsYXJpbmkgc2FxbGFiIGJv4oCYbG1hZGknLFxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcclxuXHRcdFx0fSlcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdHNldFNhdmluZyhmYWxzZSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlbmRlclF1ZXVlVGFibGUgPSAoeyByb3dzLCBlbXB0eVRleHQsIGFjdGlvbkxhYmVsIH0pID0+IHtcclxuXHRcdGlmICghcm93cy5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuIDxUZXh0IGNvbG9yPSdncmV5NjAnPntlbXB0eVRleHR9PC9UZXh0PlxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxCb3ggc3R5bGU9e3RhYmxlV3JhcFN0eWxlfT5cclxuXHRcdFx0XHQ8dGFibGUgc3R5bGU9e3RhYmxlU3R5bGV9PlxyXG5cdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PiM8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5Ib2xhdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PkFyaXphPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+VHV6aWxtYWxhcjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPXt0YWJsZUhlYWRDZWxsU3R5bGV9PlRvdmFyIC8gbWFuYmE8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aCBzdHlsZT17dGFibGVIZWFkQ2VsbFN0eWxlfT5TYW5hPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggc3R5bGU9e3RhYmxlSGVhZENlbGxTdHlsZX0+QW1hbDwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHR7cm93cy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCByb3dEYXRlID1cclxuXHRcdFx0XHRcdFx0XHRcdHJlY29yZD8uYnV5ZXJPcmRlckRhdGE/Lm5vdGlmaWNhdGlvblVwZGF0ZWRBdCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVjb3JkPy5idXllck9yZGVyRGF0YT8uc2F2ZWRBdCB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVjb3JkPy51cGRhdGVkQXQgfHxcclxuXHRcdFx0XHRcdFx0XHRcdHJlY29yZD8uY3JlYXRlZEF0XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHJcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtyZWNvcmQuaWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZFJlcXVlc3RJZCA9PT0gcmVjb3JkLmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHsgYmFja2dyb3VuZDogJyNmOGZiZmYnIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogdW5kZWZpbmVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+e2luZGV4ICsgMX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkPy5idXllck9yZGVyRGF0YT8uaXNOZXcgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGFzPSdzcGFuJyBzdHlsZT17bmV3QmFkZ2VTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFlhbmdpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9J2dyZXk2MCc+S2/igJhyaWxnYW48L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPXt0YWJsZUNlbGxTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkLnJlcXVlc3ROdW1iZXIgfHwgcmVjb3JkLmlkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0neHMnIGNvbG9yPSdncmV5NjAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlY29yZC5zdGF0dXMgfHwgJ+KAlCd9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3JkLnNlbGVjdGVkVXNlck5hbWVzIHx8ICfigJQnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQgc3R5bGU9e3RhYmxlQ2VsbFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtyZWNvcmQ/LmJ1eWVyT3JkZXJEYXRhPy5zdXBwbGllck5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBgTWFuYmE6ICR7cmVjb3JkLmJ1eWVyT3JkZXJEYXRhLnN1cHBsaWVyTmFtZX1gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogYCR7cmVjb3JkPy5pdGVtcz8ubGVuZ3RoIHx8IDB9IHRhIHRvdmFyYH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9Pntmb3JtYXREYXRlKHJvd0RhdGUpfTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT17dGFibGVDZWxsU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD17XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkUmVxdWVzdElkID09PSByZWNvcmQuaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdjb250YWluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvcGVuUmVxdWVzdChyZWNvcmQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlcXVlc3RJZCA9PT0gcmVjb3JkLmlkID8gJ09jaGlxJyA6IGFjdGlvbkxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L0JveD5cclxuXHRcdClcclxuXHR9XHJcblxyXG5cdGlmICghY2FuVmlldykge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJveD5cclxuXHRcdFx0XHQ8Qm94IGJnPSd3aGl0ZScgcD0neHhsJyBib3JkZXJSYWRpdXM9J3hsJz5cclxuXHRcdFx0XHRcdDxIMj5CdXl1cnRtYSBxaWxpc2g8L0gyPlxyXG5cdFx0XHRcdFx0PE1lc3NhZ2VCb3ggdmFyaWFudD0nZGFuZ2VyJyBtdD0neGwnPlxyXG5cdFx0XHRcdFx0XHQ8VGV4dD5CdSBib+KAmGxpbSBzaXpuaW5nIHJvbGluZ2l6IHVjaHVuIHlvcGlxLjwvVGV4dD5cclxuXHRcdFx0XHRcdDwvTWVzc2FnZUJveD5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJveD5cclxuXHRcdFx0PEJveCBiZz0nd2hpdGUnIHA9J3h4bCcgYm9yZGVyUmFkaXVzPSd4bCc+XHJcblx0XHRcdFx0PFRleHQgY29sb3I9J3ByaW1hcnkxMDAnIGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFpheGlyYS51elxyXG5cdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHQ8SDI+QnV5dXJ0bWEgcWlsaXNoPC9IMj5cclxuXHJcblx0XHRcdFx0e2xvYWRpbmcgPyAoXHJcblx0XHRcdFx0XHQ8VGV4dD5NYeKAmWx1bW90bGFyIHl1a2xhbm1vcWRhLi4uPC9UZXh0PlxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8Qm94IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJywgZ2FwOiAnMTZweCcgfX0+XHJcblx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheT0nZmxleCdcclxuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Z2FwPSdkZWZhdWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0ZmxleFdyYXA9J3dyYXAnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCc+WWFuZ2kgdmEgbmF2YmF0ZGFnaSBhcml6YWxhcjwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3hzJyBjb2xvcj0nZ3JleTYwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVjb3Jkcy5sZW5ndGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gYEphZHZhbGRhICR7cmVjb3Jkcy5sZW5ndGh9IHRhIHlhbmdpIHlva2kga2/igJhyaWxheW90Z2FuIGFyaXphIGJvci5gXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdIb3ppcmNoYSB5YW5naSBidXl1cnRtYSB1Y2h1biBhcml6YSB5b+KAmHEuJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0e3JlY29yZHMubGVuZ3RoICYmIGNhbkVkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nYnV0dG9uJyBzaXplPSdzbScgb25DbGljaz17aGFuZGxlU3RhcnROZXdPcmRlcn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QmlyaW5jaGkgeWFuZ2kgYXJpemFuaSBvY2hpc2hcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveCBtdD0nbGcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclF1ZXVlVGFibGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3dzOiByZWNvcmRzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbXB0eVRleHQ6ICdZYW5naSBhcml6YWxhciB0b3BpbG1hZGkuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uTGFiZWw6IGNhbkVkaXQgPyAnQmF0YWZzaWwnIDogJ0tv4oCYcmlzaCcsXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHR7c2hvd0NyZWF0ZUZvcm0gPyAoXHJcblx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE2cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGdhcD0nZGVmYXVsdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbGV4V3JhcD0nd3JhcCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJz5UYW5sYW5nYW4gYXJpemEgZGV0YWxpPC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3hzJyBjb2xvcj0nZ3JleTYwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG92YXJsYXIsIG1hbmJhIHZhIGh1amphdGxhciBzaHUgYmxvayBpY2hpZGEgYW5pcVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrb+KAmHJpbmFkaS5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBnYXA9J2RlZmF1bHQnIGZsZXhXcmFwPSd3cmFwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZD8uYnV5ZXJPcmRlckRhdGE/LmlzTmV3ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IGFzPSdzcGFuJyBzdHlsZT17bmV3QmFkZ2VTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0WWFuZ2lcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmV3T3JkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdERldGFpbG5pIHlvcGlzaFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGVkUmVjb3JkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2RldGFpbEdyaWRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QXJpemEgcmFxYW1pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWRSZWNvcmQucmVxdWVzdE51bWJlciB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SG9sYXRpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgbXQ9J3NtJz57c2VsZWN0ZWRSZWNvcmQuc3RhdHVzIHx8ICfigJQnfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgY29sb3I9J2dyZXkxMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFR1emlsbWFsYXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZC5zZWxlY3RlZFVzZXJOYW1lcyB8fCAn4oCUJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBjb2xvcj0nZ3JleTEwMCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0TWFuYmFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZFJlY29yZD8uYnV5ZXJPcmRlckRhdGE/LnN1cHBsaWVyTmFtZSB8fFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J0tpcml0aWxtYWdhbid9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nYm9sZCcgbWI9J2xnJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VG92YXIgaGFxaWRhIG1h4oCZbHVtb3RsYXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxNHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2Ake3NlbGVjdGVkUmVxdWVzdElkfS1pdGVtLSR7aW5kZXh9YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHA9J2xnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNkYmUzZjAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZiZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBmb250V2VpZ2h0PSdib2xkJyBtYj0nZGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRvdmFyICN7aW5kZXggKyAxfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBnYXA6ICcxMHB4JyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS5wcm9kdWN0TmFtZSB8fCAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZUl0ZW0oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQncHJvZHVjdE5hbWUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshY2FuRWRpdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nVG92YXIgbm9taSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtpdGVtLmZlYXR1cmVzIHx8ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXBkYXRlSXRlbShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdmZWF0dXJlcycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3RleHRBcmVhU3R5bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFjYW5FZGl0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdYdXN1c2l5YXRsYXJpJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncmlkVGVtcGxhdGVDb2x1bW5zOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTYwcHgsIDFmcikpJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGdhcDogJzEwcHgnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17aXRlbS51bml0IHx8ICdkb25hJ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVJdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd1bml0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFjYW5FZGl0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthdmFpbGFibGVVbml0cy5tYXAodW5pdCA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24ga2V5PXt1bml0fSB2YWx1ZT17dW5pdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3VuaXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zZWxlY3Q+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nbnVtYmVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPScxJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2l0ZW0ucXVhbnRpdHkgPz8gMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cGRhdGVJdGVtKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGluZGV4LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdxdWFudGl0eScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17aW5wdXRTdHlsZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshY2FuRWRpdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdTb25pJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRTdHlsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGFiZWwgcmVxdWlyZWQ+UWF5ZXJkYW4gb2xpbm1vcWRhPC9MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17c3VwcGxpZXJOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4gc2V0U3VwcGxpZXJOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IC4uLmlucHV0U3R5bGUsIG1hcmdpblRvcDogJzhweCcgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyFjYW5FZGl0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nTWFzYWxhbjogQXJ0ZWwgc2VydmlzLCBUZXhub21hcnQsIG1haGFsbGl5IGJvem9yZGFuJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZFN0eWxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdsZyc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEh1amphdGxhclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdhcDogJzE0cHgnIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZG9jdW1lbnRzLm1hcCgoZG9jdW1lbnQsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtkb2N1bWVudC5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHA9J2xnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNkYmUzZjAnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6ICcxMnB4JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogJyNmOGZiZmYnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2RvY3VtZW50Lm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZURvY3VtZW50KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC50YXJnZXQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtpbnB1dFN0eWxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17IWNhbkVkaXR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdIdWpqYXQgbm9taSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2ZpbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PiBoYW5kbGVGaWxlQ2hhbmdlKGluZGV4LCBldmVudCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnLCBtYXhXaWR0aDogJzEwMCUnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXshY2FuRWRpdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2RvY3VtZW50LmZpbGVOYW1lID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBtdD0nc20nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRhbmxhbmdhbiBmYXlsOiB7ZG9jdW1lbnQuZmlsZU5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtkb2N1bWVudC51cmwgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxCb3ggbXQ9J3NtJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17ZG9jdW1lbnQudXJsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PSdfYmxhbmsnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZWw9J25vcmVmZXJyZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0T2xkaW5naSB5dWtsYW5nYW4gaHVqamF0bmkgb2NoaXNoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94IG10PSdkZWZhdWx0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gcmVtb3ZlRG9jdW1lbnRSb3coaW5kZXgpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFFhdG9ybmkgb2xpYiB0YXNobGFzaFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Qm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXQ9J2xnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2FwPSdkZWZhdWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZsZXhXcmFwPSd3cmFwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nYnV0dG9uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXthZGREb2N1bWVudFJvd31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQrIEh1amphdCBxb+KAmHNoaXNoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveCBkaXNwbGF5PSdmbGV4JyBnYXA9J2RlZmF1bHQnIGZsZXhXcmFwPSd3cmFwJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtzYXZlT3JkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3NhdmluZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzYXZpbmcgPyAnU2FxbGFubW9xZGEuLi4nIDogJ1NhcWxhc2gnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxNZXNzYWdlQm94IHZhcmlhbnQ9J2luZm8nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0PkphZHZhbGRhbiBhcml6YSB0YW5sYW5nLjwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9NZXNzYWdlQm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0KSA6IG51bGx9XHJcblxyXG5cdFx0XHRcdFx0XHQ8Qm94IHN0eWxlPXtjYXJkU3R5bGV9PlxyXG5cdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRXZWlnaHQ9J2JvbGQnIG1iPSdzbSc+XHJcblx0XHRcdFx0XHRcdFx0XHRTYXFsYW5nYW4gYnV5dXJ0bWFsYXJcclxuXHRcdFx0XHRcdFx0XHQ8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgY29sb3I9J2dyZXk2MCc+XHJcblx0XHRcdFx0XHRcdFx0XHRZdWJvcmlsZ2FuIHlva2kgb2xkaW4gc2FxbGFuZ2FuIGJ1eXVydG1hbGFyIGFsb2hpZGEgamFkdmFsZGFcclxuXHRcdFx0XHRcdFx0XHRcdGtv4oCYcnNhdGlsYWRpLlxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PEJveCBtdD0nbGcnPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3JlbmRlclF1ZXVlVGFibGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyb3dzOiBvcmRlcmVkUmVjb3JkcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZW1wdHlUZXh0OiAnU2FxbGFuZ2FuIGJ1eXVydG1hbGFyIGhhbGkgeW/igJhxLicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbkxhYmVsOiAnQmF0YWZzaWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9Cb3g+XHJcblx0XHQ8L0JveD5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cmNoYXNlT3JkZXJXb3Jrc3BhY2VcclxuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvTG9naW4nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkxvZ2luID0gTG9naW5cbmltcG9ydCBTaWRlYmFyQnJhbmRpbmcgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvU2lkZWJhckJyYW5kaW5nJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TaWRlYmFyQnJhbmRpbmcgPSBTaWRlYmFyQnJhbmRpbmdcbmltcG9ydCBUb3BCYXIgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvVG9wQmFyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Ub3BCYXIgPSBUb3BCYXJcbmltcG9ydCBaYXhpcmFEYXNoYm9hcmQgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFEYXNoYm9hcmQgPSBaYXhpcmFEYXNoYm9hcmRcbmltcG9ydCBaYXhpcmFQbGFjZWhvbGRlclBhZ2UgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUGxhY2Vob2xkZXJQYWdlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQbGFjZWhvbGRlclBhZ2UgPSBaYXhpcmFQbGFjZWhvbGRlclBhZ2VcbmltcG9ydCBaYXhpcmFQdXJjaGFzZVVzZXJzRWRpdCBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZVVzZXJzRWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuWmF4aXJhUHVyY2hhc2VVc2Vyc0VkaXQgPSBaYXhpcmFQdXJjaGFzZVVzZXJzRWRpdFxuaW1wb3J0IFpheGlyYVB1cmNoYXNlSXRlbXNFZGl0IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlSXRlbXNFZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZUl0ZW1zRWRpdCA9IFpheGlyYVB1cmNoYXNlSXRlbXNFZGl0XG5pbXBvcnQgWmF4aXJhUHVyY2hhc2VEb3dubG9hZEFjdGlvbiBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZURvd25sb2FkQWN0aW9uJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZURvd25sb2FkQWN0aW9uID0gWmF4aXJhUHVyY2hhc2VEb3dubG9hZEFjdGlvblxuaW1wb3J0IFpheGlyYVB1cmNoYXNlQXBwcm92YWxBY3Rpb24gZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VBcHByb3ZhbEFjdGlvbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuWmF4aXJhUHVyY2hhc2VBcHByb3ZhbEFjdGlvbiA9IFpheGlyYVB1cmNoYXNlQXBwcm92YWxBY3Rpb25cbmltcG9ydCBaYXhpcmFQdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUgZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvUHVyY2hhc2VSZXF1ZXN0TGlzdFZhbHVlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUgPSBaYXhpcmFQdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWVcbmltcG9ydCBaYXhpcmFQdXJjaGFzZVJlcXVlc3RTaG93IGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1B1cmNoYXNlUmVxdWVzdFNob3cnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlpheGlyYVB1cmNoYXNlUmVxdWVzdFNob3cgPSBaYXhpcmFQdXJjaGFzZVJlcXVlc3RTaG93XG5pbXBvcnQgWmF4aXJhUHVyY2hhc2VPcmRlcldvcmtzcGFjZSBmcm9tICcuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9QdXJjaGFzZU9yZGVyV29ya3NwYWNlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5aYXhpcmFQdXJjaGFzZU9yZGVyV29ya3NwYWNlID0gWmF4aXJhUHVyY2hhc2VPcmRlcldvcmtzcGFjZSJdLCJuYW1lcyI6WyJzaGVsbFN0eWxlIiwiYmFja2dyb3VuZCIsImNhcmRTdHlsZSIsImJvcmRlciIsImJhY2tkcm9wRmlsdGVyIiwiZmllbGRJbnB1dFN0eWxlIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJwYXNzd29yZFdyYXBTdHlsZSIsInBvc2l0aW9uIiwicGFzc3dvcmRUb2dnbGVTdHlsZSIsInRvcCIsInJpZ2h0IiwidHJhbnNmb3JtIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwicGFkZGluZyIsIkV5ZUljb24iLCJvcGVuIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImQiLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImN4IiwiY3kiLCJyIiwicmVzb2x2ZU1lc3NhZ2UiLCJtZXNzYWdlIiwidHJhbnNsYXRlTWVzc2FnZSIsInNwbGl0IiwibGVuZ3RoIiwiTG9naW4iLCJwcm9wcyIsIndpbmRvdyIsIl9fQVBQX1NUQVRFX18iLCJhY3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJ0cmFuc2xhdGVDb21wb25lbnQiLCJ1c2VUcmFuc2xhdGlvbiIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsInVzZVN0YXRlIiwiZW1haWxMYWJlbCIsInBhc3N3b3JkTGFiZWwiLCJwYXNzd29yZFRvZ2dsZUxhYmVsIiwiQm94IiwidmFyaWFudCIsInAiLCJzdHlsZSIsImFzIiwibWV0aG9kIiwiYmciLCJib3hTaGFkb3ciLCJtYiIsIlRleHQiLCJmb250V2VpZ2h0IiwiSDIiLCJtdCIsIk1lc3NhZ2VCb3giLCJteSIsIkZvcm1Hcm91cCIsIkxhYmVsIiwicmVxdWlyZWQiLCJJbnB1dCIsIm5hbWUiLCJhdXRvRm9jdXMiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJwYWRkaW5nUmlnaHQiLCJvbkNsaWNrIiwiY3VycmVudFZhbHVlIiwidGl0bGUiLCJCdXR0b24iLCJTaWRlYmFyQnJhbmRpbmciLCJMaW5rIiwidG8iLCJweCIsInB0IiwicGIiLCJ0ZXh0RGVjb3JhdGlvbiIsImdhcCIsImZsZXhTaHJpbmsiLCJJY29uIiwiaWNvbiIsInNpemUiLCJmbGV4IiwiZm9udFNpemUiLCJvcGFjaXR5IiwiVG9wQmFyIiwidG9nZ2xlU2lkZWJhciIsImN1cnJlbnRBZG1pbiIsInVzZUN1cnJlbnRBZG1pbiIsInByb2ZpbGVMaW5rIiwiaWQiLCJpMThuIiwibGFuZ3VhZ2UiLCJvcHRpb25zIiwic3VwcG9ydGVkTG5ncyIsImNoYW5nZUxhbmd1YWdlIiwiYXZhaWxhYmxlTGFuZ3VhZ2VzIiwidXNlTWVtbyIsImZpbHRlciIsImxhbmciLCJib3JkZXJCb3R0b20iLCJmbGV4V3JhcCIsInB5IiwiRHJvcERvd24iLCJEcm9wRG93blRyaWdnZXIiLCJkZWZhdWx0VmFsdWUiLCJEcm9wRG93bk1lbnUiLCJtYXAiLCJEcm9wRG93bkl0ZW0iLCJrZXkiLCJocmVmIiwibXIiLCJzaWRlYmFyUGFnZXMiLCJsYWJlbCIsInNob3J0VXoiLCJzaG9ydFJ1IiwicmVzb3VyY2VMaW5rIiwicGFnZU1hcCIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwicGFnZSIsIkRhc2hib2FyZCIsInZpc2libGVQYWdlcyIsImluY2x1ZGVzIiwicm9sZSIsInVzZXJuYW1lIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIlBsYWNlaG9sZGVyUGFnZSIsInBhZ2VOYW1lIiwidXNlUGFyYW1zIiwicHJvZmlsZVNob3dMaW5rIiwicHJvZmlsZUVkaXRMaW5rIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJvcmdhbml6YXRpb25OYW1lIiwicGhvbmVOdW1iZXIiLCJhcGkiLCJBcGlDbGllbnQiLCJwYXJzZVNlbGVjdGVkVXNlcnMiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW0iLCJTdHJpbmciLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJyZXNvbHZlU3RydWN0dXJlTGFiZWwiLCJ1c2VyIiwicGFyYW1zIiwiZGlzcGxheU5hbWUiLCJyZXNvbHZlQXBwcm92ZXJMYWJlbCIsImZ1bGxOYW1lIiwiQm9vbGVhbiIsImpvaW4iLCJ0cmltIiwiaXRlbVN0eWxlIiwiY2hlY2tlZCIsImVycm9yVGV4dFN0eWxlIiwic2VsZWN0U3R5bGUiLCJQdXJjaGFzZVVzZXJzRWRpdCIsInByb3BlcnR5IiwicmVjb3JkIiwib25DaGFuZ2UiLCJ1c2VycyIsInNldFVzZXJzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJhcHByb3ZlckxhYmVsIiwiYXBwcm92ZXJEZXNjcmlwdGlvbiIsImFwcHJvdmVyUGxhY2Vob2xkZXIiLCJlbXB0eSIsImFwcHJvdmVyRW1wdHkiLCJzZWxlY3RlZFVzZXJzIiwicGF0aCIsInNlbGVjdGVkQXBwcm92ZXIiLCJhcHByb3ZlciIsInNlbGVjdGVkVXNlcnNFcnJvciIsImVycm9ycyIsImFwcHJvdmVyRXJyb3IiLCJzdHJ1Y3R1cmVVc2VycyIsIm1vbml0b3JpbmdVc2VycyIsInVzZUVmZmVjdCIsImlzQWN0aXZlIiwibG9hZFVzZXJzIiwicmVzcG9uc2UiLCJyZXNvdXJjZUFjdGlvbiIsInJlc291cmNlSWQiLCJhY3Rpb25OYW1lIiwicGVyUGFnZSIsImRhdGEiLCJyZWNvcmRzIiwidG9nZ2xlVXNlciIsInVzZXJJZCIsIm5leHRVc2VycyIsInN0cmluZ2lmeSIsInNlbGVjdEFwcHJvdmVyIiwiaXNSZXF1aXJlZCIsImV2ZW50IiwidGFyZ2V0IiwiVU5JVF9PUFRJT05TIiwiRU1QVFlfSVRFTSIsInByb2R1Y3ROYW1lIiwiZmVhdHVyZXMiLCJ1bml0IiwicXVhbnRpdHkiLCJwYXJzZUl0ZW1zIiwiUHVyY2hhc2VJdGVtc0VkaXQiLCJyZW1vdmUiLCJhZGQiLCJpdGVtcyIsInVwZGF0ZUl0ZW1zIiwibmV4dEl0ZW1zIiwidXBkYXRlRmllbGQiLCJpbmRleCIsImZpZWxkIiwiY3VycmVudEluZGV4IiwiTnVtYmVyIiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJfIiwicm93cyIsInJlc2l6ZSIsIm1pbiIsIlB1cmNoYXNlRG93bmxvYWRBY3Rpb24iLCJmb3JtYXQiLCJjdXN0b20iLCJleHRlbnNpb24iLCJyZWNvcmRJZCIsImRvd25sb2FkVXJsIiwiYmFja1VybCIsInRvVXBwZXJDYXNlIiwiZG93bmxvYWRBZ2FpbiIsImdvQmFjayIsInVuZGVmaW5lZCIsImlmcmFtZSIsImRvY3VtZW50Iiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY29udGFpbnMiLCJyZW1vdmVDaGlsZCIsIkRFQ0lTSU9OUyIsInBhcnNlSGlzdG9yeSIsIm9wdGlvblN0eWxlIiwic2VsZWN0ZWQiLCJ0ZXh0YXJlYVN0eWxlIiwiZm9udEZhbWlseSIsImdldERlY2lzaW9uT3B0aW9uTWV0YSIsImRlY2lzaW9uIiwidGFzZGlxbGFuZGkiLCJyZXNvbHZlU3RhZ2VMYWJlbCIsInN0YWdlIiwic3RhZ2VNb25pdG9yaW5nIiwic3RhZ2VGaW5pc2hlZCIsInN0YWdlU3RydWN0dXJlcyIsInJlc29sdmVIaXN0b3J5U3RhZ2UiLCJzdGFnZU1vbml0b3JpbmdTaG9ydCIsInN0YWdlRmluaXNoZWRTaG9ydCIsInN0YWdlU3RydWN0dXJlc1Nob3J0IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJEYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwicGFkIiwibnVtYmVyIiwicGFkU3RhcnQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsIlB1cmNoYXNlQXBwcm92YWxBY3Rpb24iLCJyZXNvdXJjZSIsImFkZE5vdGljZSIsInVzZU5vdGljZSIsInNldERlY2lzaW9uIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJzdWJ0aXRsZSIsInN0YXR1cyIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJkZWNpc2lvbkxhYmVsIiwiY29tbWVudExhYmVsIiwiY29tbWVudE9wdGlvbmFsIiwiY29tbWVudFJlcXVpcmVkIiwiY29tbWVudFJlcXVpcmVkRXJyb3IiLCJzdWJtaXQiLCJiYWNrIiwiaGlzdG9yeVRpdGxlIiwic2F2ZUVycm9yIiwiaGlzdG9yeSIsImFwcHJvdmFsSGlzdG9yeSIsInNsaWNlIiwicmV2ZXJzZSIsIm5lZWRzQ29tbWVudCIsInN1Ym1pdERlY2lzaW9uIiwicmVjb3JkQWN0aW9uIiwibm90aWNlIiwibG9jYXRpb24iLCJyZWRpcmVjdFVybCIsImVycm9yIiwiY3VycmVudFN0YWdlIiwiYXBwcm92YWxTdW1tYXJ5Iiwib3B0aW9uIiwibWV0YSIsImRpc2FibGVkIiwiZW50cnkiLCJkZWNpZGVkQXQiLCJ1c2VyTmFtZSIsImNvbXBhY3RTdHlsZSIsIm1heFdpZHRoIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiY29tbWVudFN0eWxlIiwibGluZUhlaWdodCIsIldlYmtpdEJveE9yaWVudCIsIldlYmtpdExpbmVDbGFtcCIsImRldGFpbENhcmRTdHlsZSIsIm1pbldpZHRoIiwibWFyZ2luIiwiYm94U2l6aW5nIiwibm90ZUNhcmRTdHlsZSIsIndvcmRCcmVhayIsInNlY3Rpb25UaXRsZVN0eWxlIiwibWFyZ2luQm90dG9tIiwiaGVscGVyVGV4dFN0eWxlIiwiY2hpcFdyYXBTdHlsZSIsIm1hcmdpblRvcCIsImNoaXBTdHlsZSIsInRhYmxlV3JhcFN0eWxlIiwib3ZlcmZsb3dYIiwidGFibGVTdHlsZSIsImJvcmRlckNvbGxhcHNlIiwidGFibGVIZWFkQ2VsbFN0eWxlIiwidGV4dEFsaWduIiwidGFibGVDZWxsU3R5bGUiLCJ2ZXJ0aWNhbEFsaWduIiwic3RhdHVzQmFkZ2VCYXNlU3R5bGUiLCJwYXJzZUFycmF5IiwiZ2V0SXRlbXNDb3VudExhYmVsIiwiY291bnQiLCJnZXRTZWxlY3RlZFVzZXJzQ291bnRMYWJlbCIsIm5vcm1hbGl6ZVRleHQiLCJyZXBsYWNlIiwibm9ybWFsaXplRGV0YWlsZWRUZXh0Iiwic3BsaXROYW1lcyIsImdldEN1cnJlbnRDeWNsZUhpc3RvcnkiLCJlbnRyaWVzIiwibGFzdFJlc3VibWl0dGVkSW5kZXgiLCJ0b0xvd2VyQ2FzZSIsImxhc3RJbmRleE9mIiwiZm9ybWF0RGF0ZVRpbWUiLCJnZXRMb2NhbGl6ZWRWYWx1ZSIsIm5vcm1hbGl6ZWRWYWx1ZSIsImxhYmVscyIsInRhc2RpcWxhbm1vcWRhIiwidGFzZGlxbGFuZ2FuIiwidHV6aWxtYWxhciIsIm1vbml0b3JpbmciLCJzb3RpYl9vbGlzaCIsInlha3VubGFuZGkiLCJnZXRTdGF0dXNTdHlsZSIsImdldEFwcHJvdmFsU2hvcnRMYWJlbCIsInN1ZmZpeCIsImRpcmVjdE1hdGNoIiwibWF0Y2giLCJzZWxlY3RlZFVzZXJzQ291bnQiLCJyZXZpZXdlZENvdW50Iiwic3RydWN0dXJlQXBwcm92YWxzIiwiZ2V0UmVxdWVzdE51bWJlckxhYmVsIiwicmF3RGF0ZSIsImNyZWF0ZWRBdCIsImZhbGxiYWNrRGF0ZSIsInRvSVNPU3RyaW5nIiwiaWRQYXJ0IiwiZ2V0RGVjaXNpb25NZXRhIiwibm9ybWFsaXplZERlY2lzaW9uIiwicGVuZGluZyIsIndhaXRpbmciLCJzeW1ib2wiLCJnZXRBcHByb3ZhbFJvd3MiLCJzZWxlY3RlZE5hbWVzIiwic2VsZWN0ZWRVc2VyTmFtZXMiLCJjdXJyZW50Q3ljbGVIaXN0b3J5IiwiYXBwcm92YWxNYXAiLCJNYXAiLCJmb3JFYWNoIiwic2V0IiwiYmFzZVJvd3MiLCJhcHByb3ZhbCIsImdldCIsImxhc3RBcHByb3ZlckVudHJ5IiwiZmluZCIsIm5vcm1hbGl6ZWRTdGF0dXMiLCJoYXNTdHJ1Y3R1cmVSZWplY3Rpb24iLCJzb21lIiwiYXBwcm92ZXJTdGF0ZSIsInB1c2giLCJhcHByb3Zlck5hbWUiLCJyZW5kZXJTaG93VmFsdWUiLCJwb3B1bGF0ZWQiLCJsZXR0ZXJTcGFjaW5nIiwicmVxdWVzdE51bWJlciIsIm5hbWVzIiwiY29sU3BhbiIsInJvdyIsImNyZWF0ZWRCeSIsIlB1cmNoYXNlUmVxdWVzdExpc3RWYWx1ZSIsIndoZXJlIiwiaXNTaG93IiwiaXRlbXNTdW1tYXJ5IiwibG9jYWxpemVkVmFsdWUiLCJ0b29sdGlwIiwicGFyc2VCdXllck9yZGVyRGF0YSIsImdldFJlcXVlc3ROdW1iZXIiLCJnZXRMb2NhbGl6ZWRTdGF0dXMiLCJub3JtYWxpemVkIiwic3RhdHVzTGFiZWxzIiwiZ2V0TG9jYWxpemVkU3RhZ2UiLCJzdGFnZUxhYmVscyIsImdldFN0YXR1c0JhZGdlU3R5bGUiLCJhcHByb3ZlckVudHJ5IiwiUHVyY2hhc2VSZXF1ZXN0U2hvdyIsInN0cnVjdHVyZU5hbWVzIiwiYXBwcm92YWxSb3dzIiwiYnV5ZXJPcmRlciIsImJ1eWVyT3JkZXJEYXRhIiwiYnV5ZXJEb2N1bWVudHMiLCJkb2N1bWVudHMiLCJvcmlnaW5hbEl0ZW1zIiwic3RhdHVzU3R5bGUiLCJzdGFnZVN0eWxlIiwicmVxdWVzdE5vIiwiY3JlYXRvciIsInVwZGF0ZWRBdCIsInN0cnVjdHVyZXMiLCJsYXN0Q29tbWVudCIsInRhYmxlQXBwcm92YWwiLCJtYXJrIiwiY29tbWVudENvbCIsInRpbWUiLCJwcm9kdWN0IiwicXR5IiwicHJvY3VyZW1lbnQiLCJzdXBwbGllciIsInNhdmVkQnkiLCJjaGFuZ2VOb3RpY2UiLCJzdXBwbGllck5hbWUiLCJzYXZlZEF0IiwidXJsIiwicmVsIiwiZmlsZU5hbWUiLCJjaGFuZ2VOb3RlIiwiaW5wdXRTdHlsZSIsInRleHRBcmVhU3R5bGUiLCJuZXdCYWRnZVN0eWxlIiwiZGV0YWlsR3JpZFN0eWxlIiwiY3JlYXRlRG9jdW1lbnRSb3ciLCJub3ciLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJtaW1lVHlwZSIsImNvbnRlbnQiLCJ0b0RhdGFVcmwiLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwicmVzdWx0Iiwib25lcnJvciIsIkVycm9yIiwicmVhZEFzRGF0YVVSTCIsIkdFTkVSSUNfVkFMSURBVElPTl9OT1RJQ0UiLCJleHRyYWN0V29ya3NwYWNlTWVzc2FnZSIsImZhbGxiYWNrTWVzc2FnZSIsImZpZWxkTWVzc2FnZXMiLCJ2YWx1ZXMiLCJiYXNlRXJyb3JNZXNzYWdlIiwiYmFzZUVycm9yIiwibm90aWNlTWVzc2FnZSIsIm1lc3NhZ2VzIiwiU2V0Iiwibm9ybWFsaXplT3JkZXJEb2N1bWVudHMiLCJnZXRDbGllbnRWYWxpZGF0aW9uTWVzc2FnZSIsInJlcXVlc3RJZCIsInZhbGlkSXRlbXMiLCJQdXJjaGFzZU9yZGVyV29ya3NwYWNlIiwic2V0UmVjb3JkcyIsIm9yZGVyZWRSZWNvcmRzIiwic2V0T3JkZXJlZFJlY29yZHMiLCJhdmFpbGFibGVVbml0cyIsInNldEF2YWlsYWJsZVVuaXRzIiwic2VsZWN0ZWRSZXF1ZXN0SWQiLCJzZXRTZWxlY3RlZFJlcXVlc3RJZCIsInNldEl0ZW1zIiwic2V0U3VwcGxpZXJOYW1lIiwic2V0RG9jdW1lbnRzIiwic2hvd0NyZWF0ZUZvcm0iLCJzZXRTaG93Q3JlYXRlRm9ybSIsImNhblZpZXciLCJjYW5FZGl0IiwiYXBwbHlTZWVuU3RhdGUiLCJsaXN0IiwiaXNOZXciLCJsYXN0Vmlld2VkQXQiLCJsYXN0Vmlld2VkQnkiLCJsYXN0Vmlld2VkUm9sZSIsIm1hcmtSZWNvcmRTZWVuIiwidGFyZ2V0UmVjb3JkIiwiY3VycmVudFJlY29yZHMiLCJvcGVuUmVxdWVzdCIsImFwcGx5UmVjb3JkIiwic2F2ZWRJdGVtcyIsIm1heCIsInNhdmVkRG9jdW1lbnRzIiwibG9hZFdvcmtzcGFjZSIsInByZWZlcnJlZFJlcXVlc3RJZCIsIm5leHRSZWNvcmRzIiwibmV4dE9yZGVyZWRSZWNvcmRzIiwibmV4dFVuaXRzIiwicXVldWVSZWNvcmRzIiwicmVzb2x2ZWRSZXF1ZXN0SWQiLCJyZXNvbHZlZFJlY29yZCIsImluaXRpYWxSZXF1ZXN0SWQiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJhbGxRdWV1ZVJlY29yZHMiLCJzZWxlY3RlZFJlY29yZCIsInVwZGF0ZUl0ZW0iLCJjdXJyZW50SXRlbXMiLCJ1cGRhdGVEb2N1bWVudCIsImN1cnJlbnREb2N1bWVudHMiLCJoYW5kbGVTdGFydE5ld09yZGVyIiwibmV4dFJlcXVlc3RJZCIsIm5leHRSZWNvcmQiLCJoYW5kbGVDbG9zZU5ld09yZGVyIiwiaGFuZGxlRmlsZUNoYW5nZSIsImZpbGVzIiwiYWRkRG9jdW1lbnRSb3ciLCJyZW1vdmVEb2N1bWVudFJvdyIsIm5leHREb2N1bWVudHMiLCJzYXZlT3JkZXIiLCJub3JtYWxpemVkRG9jdW1lbnRzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VOb3RpY2UiLCJyZXNwb25zZU1lc3NhZ2UiLCJyZW5kZXJRdWV1ZVRhYmxlIiwiZW1wdHlUZXh0IiwiYWN0aW9uTGFiZWwiLCJyb3dEYXRlIiwibm90aWZpY2F0aW9uVXBkYXRlZEF0IiwiRnJhZ21lbnQiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJaYXhpcmFEYXNoYm9hcmQiLCJaYXhpcmFQbGFjZWhvbGRlclBhZ2UiLCJaYXhpcmFQdXJjaGFzZVVzZXJzRWRpdCIsIlpheGlyYVB1cmNoYXNlSXRlbXNFZGl0IiwiWmF4aXJhUHVyY2hhc2VEb3dubG9hZEFjdGlvbiIsIlpheGlyYVB1cmNoYXNlQXBwcm92YWxBY3Rpb24iLCJaYXhpcmFQdXJjaGFzZVJlcXVlc3RMaXN0VmFsdWUiLCJaYXhpcmFQdXJjaGFzZVJlcXVlc3RTaG93IiwiWmF4aXJhUHVyY2hhc2VPcmRlcldvcmtzcGFjZSJdLCJtYXBwaW5ncyI6Ijs7O0NBYUEsTUFBTUEsVUFBVSxHQUFHO0NBQ2xCQyxFQUFBQSxVQUFVLEVBQUU7Q0FDYixDQUFDO0NBRUQsTUFBTUMsV0FBUyxHQUFHO0NBQ2pCQyxFQUFBQSxNQUFNLEVBQUUsbUJBQW1CO0NBQzNCQyxFQUFBQSxjQUFjLEVBQUU7Q0FDakIsQ0FBQztDQUVELE1BQU1DLGVBQWUsR0FBRztDQUN2QkMsRUFBQUEsS0FBSyxFQUFFLE1BQU07Q0FDYkMsRUFBQUEsU0FBUyxFQUFFO0NBQ1osQ0FBQztDQUVELE1BQU1DLGlCQUFpQixHQUFHO0NBQ3pCQyxFQUFBQSxRQUFRLEVBQUU7Q0FDWCxDQUFDO0NBRUQsTUFBTUMsbUJBQW1CLEdBQUc7Q0FDM0JELEVBQUFBLFFBQVEsRUFBRSxVQUFVO0NBQ3BCRSxFQUFBQSxHQUFHLEVBQUUsS0FBSztDQUNWQyxFQUFBQSxLQUFLLEVBQUUsS0FBSztDQUNaQyxFQUFBQSxTQUFTLEVBQUUsa0JBQWtCO0NBQzdCQyxFQUFBQSxPQUFPLEVBQUUsYUFBYTtDQUN0QkMsRUFBQUEsVUFBVSxFQUFFLFFBQVE7Q0FDcEJDLEVBQUFBLGNBQWMsRUFBRSxRQUFRO0NBQ3hCVixFQUFBQSxLQUFLLEVBQUUsTUFBTTtDQUNiVyxFQUFBQSxNQUFNLEVBQUUsTUFBTTtDQUNkZCxFQUFBQSxNQUFNLEVBQUUsTUFBTTtDQUNkRixFQUFBQSxVQUFVLEVBQUUsYUFBYTtDQUN6QmlCLEVBQUFBLEtBQUssRUFBRSxTQUFTO0NBQ2hCQyxFQUFBQSxZQUFZLEVBQUUsT0FBTztDQUNyQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7Q0FDakJDLEVBQUFBLE9BQU8sRUFBRTtDQUNW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
