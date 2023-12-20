import { SemanticICONS } from 'semantic-ui-react';
import { FormFiledTypes, InputFiled, TextareaFiled } from './formFields';

export interface Panel {
  title: string;
  icon: SemanticICONS;
  content: FormFiledTypes[];
}
export const FormStruct = class {
  panelList: Panel[];
  constructor() {}
  generateFormData() {
    return this.panelList.reduce((acc, panel) => {
      panel.content.forEach((content) => {
        Reflect.set(acc, content.key, content.value);
      });
      return acc;
    }, {});
  }
  updateContent(panelIndex: number, contentIndex: number, value: any) {
    this.panelList[panelIndex].content[contentIndex].value = value;
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  insertFormData(formData: any) {
    this.panelList.forEach((item) => {
      item.content.forEach((val) => {
        if (Reflect.has(formData, val.key)) {
          Reflect.set(val, 'value', formData[val.key]);
        }
      });
    });
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  resetFormData() {
    this.panelList.forEach((item) => {
      item.content.forEach((val) => {
        val.value = val.defaultValue;
      });
    });
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
};

export class BlogFilterForm extends FormStruct {
  constructor() {
    super();
    this.panelList = [
      {
        title: '筛选条件',
        icon: 'filter',
        content: [
          new InputFiled('用户名', 'name', '', '', false),
          new InputFiled('专栏', 'column', '', '', false),
          new InputFiled('类别', 'cat', '', '', false),
          new InputFiled('标签', 'label', '', '', false),
        ],
      },
    ];
  }
}
export class BlogForm extends FormStruct {
  constructor() {
    super();
    this.panelList = [
      {
        title: '基础信息',
        icon: 'info',
        content: [
          new InputFiled('标题', 'title', '', '', true),
          new InputFiled('作者', 'author', '', '', true),
          new InputFiled('专栏', 'column', '', '', true),
          new InputFiled('类别', 'cat', '', '', true),
          new InputFiled('标签', 'label', '', '', true),
          new InputFiled('摘要', 'summary', '', '', true),
          new InputFiled('封面', 'cover', '', '', true),
          new InputFiled('内容', 'content', '', '', true),
        ],
      },
    ];
  }
}
export class CategoryForm extends FormStruct {
  constructor() {
    super();
    this.panelList = [
      {
        title: '基础信息',
        icon: 'info',
        content: [
          new InputFiled('类别名称', 'categoryName', '', '', true),
          new TextareaFiled('描述', 'desc', '', '', false),
        ],
      },
    ];
  }
}

export class CategoryFilterForm extends FormStruct {
  constructor() {
    super();
    this.panelList = [
      {
        title: '筛选条件',
        icon: 'filter',
        content: [new InputFiled('类别名称', 'categoryName', '', '', false)],
      },
    ];
  }
}
