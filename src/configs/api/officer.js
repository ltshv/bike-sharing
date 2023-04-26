export const OFFICER_ITEM_CONFIG = [
  {
    id: 0,
    slug: "email",
    type: "email",
    isChangeable: false,
    placeholder: "Почта сотрудника",
    title: "Почта",
    isInForm: true,
    autoCompleteValue: "username",
    isForNew: true,
    isForSignIn: true,
    isForSignUp: true,
    isRequired: true,
  },
  {
    id: 1,
    slug: "firstName",
    type: "text",
    isChangeable: true,
    title: "Имя",
    placeholder: "Имя сотрудника",
    isInForm: true,
    autoCompleteValue: "off",
    isForNew: true,
    isForSignUp: true,
    isRequired: false,
  },
  {
    id: 3,
    slug: "lastName",
    type: "text",
    isChangeable: true,
    title: "Фамилия",
    placeholder: "Фамилия сотрудника",
    isInForm: true,
    autoCompleteValue: "off",
    isForNew: true,
    isForSignUp: true,
    isRequired: false,
  },
  {
    id: 4,
    slug: "old-password",
    type: "password",
    isChangeable: false,
    title: "Старый пароль",
    placeholder: "Старый пароль сотрудника",
    isInForm: false,
    autoCompleteValue: "current-password",
    isForNew: false,
    isForSignUp: false,
    isRequired: true,
  },
  {
    id: 56,
    slug: "new-password",
    type: "password",
    isChangeable: true,
    title: "Пароль",
    placeholder: "Пароль сотрудника",
    isInForm: false,
    autoCompleteValue: "new-password",
    isForSignUp: false,
    isRequired: true,
    isForNew: false,
  },
  {
    id: 5,
    slug: "password",
    type: "password",
    isChangeable: false,
    title: "Пароль",
    placeholder: "Пароль сотрудника",
    isInForm: false,
    autoCompleteValue: "new-password",
    isForNew: true,
    isForSignIn: true,
    isRequired: true,
    isForSignUp: true,
  },
  {
    id: 6,
    slug: "clientId",
    type: "text",
    isChangeable: false,
    title: "ID клиента",
    placeholder: "ID клиента сотрудника",
    isInForm: false,
    autoCompleteValue: "off",
    isForNew: false,
    isForSignUp: true,
    isRequired: true,
  },
  {
    id: 7,
    slug: "approved",
    type: "checkbox",
    isChangeable: true,
    title: "Одобрен",
    placeholder: "Статус одобренного",
    isInForm: true,
    autoCompleteValue: "false",
    isForNew: true,
    isRequired: false,
  },
];

export const officerFormItemsToShow = () => {
  return OFFICER_ITEM_CONFIG.filter((item) => item.isInForm === true);
};

export const officerformItemsToUpdate = () => {
  return OFFICER_ITEM_CONFIG.filter((item) => item.isChangeable === true);
};

export const officerFormItemsForNew = () => {
  return OFFICER_ITEM_CONFIG.filter((item) => item.isForNew === true);
};

export const officerFormItemsForSignIn = () => {
  return OFFICER_ITEM_CONFIG.filter((item) => item.isForSignIn === true);
}

export const officerFormItemsForSignUp = () => {
  return OFFICER_ITEM_CONFIG.filter((item) => item.isForSignUp === true);
}
