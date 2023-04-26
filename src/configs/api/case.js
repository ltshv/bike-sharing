export const REPORT_CASE_CONFIG = [
  {
    id: 0,
    title: "Статус",
    slug: "status",
    options: [
      { id: 0, slug: "new", title: "Новый" },
      { id: 1, slug: "in_progress", title: "В процессе" },
      { id: 1, slug: "done", title: "Завершено" },
    ],
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "select",
    isRequired: true,
    isForNew: false,
  },
  {
    id: 1,
    title: "Номер лицензии",
    slug: "licenseNumber",
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "text",
    isRequired: true,
    isForNew: true,
    placeholder: "Лицензия велосипеда",
  },
  {
    id: 3,
    title: "Тип велосипеда",
    slug: "type",
    options: [
      { id: 0, slug: "general", title: "Городской" },
      { id: 1, slug: "sport", title: "Спортивный" },
    ],
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "select",
    isRequired: true,
    isForNew: true,
    placeholder: "Выберите тип",
  },
  {
    id: 13,
    title: "Имя владельца",
    slug: "firstName",
    isPublic: true,
    isChangeable: true,
    onFrontend: false,
    type: "text",
    isRequired: false,
    isForNew: true,
    placeholder: "Введите имя",
  },
  {
    id: 14,
    title: "Фамилия владельца",
    slug: "lastName",
    isPublic: true,
    isChangeable: true,
    onFrontend: false,
    type: "text",
    isRequired: false,
    isForNew: true,
    placeholder: "Введите фамилию",
  },
  {
    id: 4,
    title: "ФИО владельца",
    slug: "ownerFullName",
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "text",
    isRequired: true,
    isForNew: true,
    placeholder: "Введите ФИО",
  },
  {
    id: 5,
    title: "ID клиента",
    slug: "clientId",
    isPublic: false,
    isChangeable: false,
    onFrontend: false,
    type: "text",
    isRequired: true,
    isForNew: false,
  },
  {
    id: 6,
    title: "Дата создания",
    slug: "createdAt",
    isPublic: false,
    isChangeable: false,
    onFrontend: true,
    type: "date",
    isRequired: true,
    isForNew: false,
  },
  {
    id: 7,
    title: "Дата обновления",
    slug: "updatedAt",
    isPublic: false,
    isChangeable: false,
    onFrontend: true,
    type: "date",
    isRequired: false,
    isForNew: false,
  },
  {
    id: 8,
    title: "Цвет велосипеда",
    slug: "color",
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "text",
    isRequired: false,
    isForNew: true,
    placeholder: "Напишите цвет",
  },
  {
    id: 9,
    title: "Дата кражи",
    slug: "date",
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "date",
    isRequired: false,
    isForNew: true,
    placeholder: "Дата пропажи",
  },
  {
    id: 10,
    title: "Ответственный",
    slug: "officer",
    isPublic: false,
    isChangeable: true,
    onFrontend: true,
    type: "select",
    isRequired: false,
    isForNew: true,
    placeholder: "ID сотрудника",
  },
  {
    id: 11,
    title: "Описание",
    slug: "description",
    isPublic: true,
    isChangeable: true,
    onFrontend: true,
    type: "text",
    isRequired: false,
    isForNew: true,
    placeholder: "Дополнительный комментарий",
  },
  {
    id: 12,
    title: "Заключение",
    slug: "resolution",
    isPublic: false,
    isChangeable: true,
    onFrontend: true,
    type: "text",
    isRequired: false,
    isForNew: false,
    placeholder: "Заключение о происшествии",
  },
];

export const caseItemsToShow = () => {
  return REPORT_CASE_CONFIG.filter((item) => item.onFrontend === true);
}

export const caseFormItemsToUpdate = (isForNew = Boolean()) => {
  
  const formItems = !isForNew ? REPORT_CASE_CONFIG.filter(
    (item) => item.isChangeable === true && item.onFrontend === true
  ) : REPORT_CASE_CONFIG.filter(
    (item) => item.isChangeable === true && item.onFrontend === true && item.isForNew === true);

  const nonSelectItems = formItems.filter(
    (item) => item.type !== "select" && item.slug !== "officer"
  );
  const selectItems = formItems.filter(
    (item) => item.type === "select" && item.slug !== "officer"
  );
  const officersItems = formItems.filter((item) => item.slug === "officer");
  
  const nonChangeableFormItems = REPORT_CASE_CONFIG.filter((item => item.isChangeable === false));

  return {formItems, nonSelectItems, selectItems, officersItems, nonChangeableFormItems}
};