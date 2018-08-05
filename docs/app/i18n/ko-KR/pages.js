export default {
  home: {
    title: '홈 페이지',
    slogan: '머티리얼 디자인과 Vue.js를 이용하여 멋진 앱을 개발하세요',
    material: '머티리얼 디자인',
    materialContent: '간단하고 가벼우면서 구글의 머티리얼 디자인 스펙을 정확하게 따릅니다.',
    compatible: '호환성',
    compatibleContent: '모든 화면에 맞고 모든 최신 웹 브라우저를 지원하는 앱을 개발하세요.',
    featured: '풍부한 기능',
    featuredContent: '사용하기 쉬운 API로 다이나믹 테마와 필요한 컴포넌트 등 모든 것을 활용하세요.',
    ecosystem: '에코시스템',
    viewProject: '프로젝트 보기',
    sponsors: '후원기업',
    backers: '후원자',
    sponsorsDescription: 'Vue Material은 어떠한 기업과도 연관되어 있지 않습니다. {0}가 개인적으로 만든 독립적인 프로젝트이고, 이제는 Vue.js에 가장 많이 사용되는 UI 라이브러리 중 하나가 되었습니다. 지금도 많은 사람들이 당신에게 좋은 기능을 지원할 수 있도록 활발히 개발하는 중입니다.',
    beAPatron: '이 프로젝트가 당신 혹은 당신의 기업에게 도움이 되었다면, Patreon을 통해 후원해주시는 것은 어떨까요?'
  },
  about: {
    title: '프로젝스 설명'
  },
  license: {
    title: '라이선스'
  },
  gettingStarted: {
    title: '시작하기',
    introduction: 'Vue Material은 Vue.js와 Material Design 스펙을 통합하기 위한 가장 좋은 방법입니다! 당신의 필요에 맞게 쉽게 설정할 수 있습니다. All you have to do is choose an installation method that suits your environment and follow it\'s instructions. 그럼 시작합시다!',
    installation: '설치하기',
    npmOrYarn: 'NPM 혹은 Yarn'
  },
  configuration: {
    title: '설정하기',
    viaVueGlobalObject: 'Vue 전역객체를 이용',
    inVueComponents: 'Vue 컴포넌트 내에서',
    options: '설정 옵션',
  },
  themes: {
    title: '테마'
  },
  themeConcepts: {
    title: '테마 - 테마란?',
    nav: '테마란?'
  },
  themePrebuilt: {
    title: '테마 - 기본 빌드',
    nav: '기본 빌드'
  },
  themeConfiguration: {
    title: '테마 - 설정하기',
    nav: '설정하기'
  },
  themeAdvanced: {
    title: '테마 - 고급 설정',
    nav: '고급 설정'
  },
  withRouter: {
    title: 'Vue Router와 함께 사용하기'
  },
  components: {
    title: '컴포넌트',
  },
  uiElements: {
    title: 'UI 엘리먼트',
  },
  elevation: {
    title: '높이 (Elevation)',
    description: '엘리먼트의 높이는 여러 표면 사이의 거리와 엘리먼트의 그림자의 깊이를 나타냅니다. 한 표면에서 다른 표면까지의 차이로 계산됩니다.'
  },
  button: {
    title: '버튼',
    description: '버튼은 사용자가 터치했을 때 실행될 기능을 표시합니다.'
  },
  app: {
    title: '앱',
    intro: {
      desc1: 'The following patterns apply the elevations in which content should scroll, how to size flexible space, and when to anchor specific elements.',
      desc2: 'When building applications there are some repeated behaviours regarding the structure of the app. Responsive drawers, flexible toolbars, scrolling... Any of these could repeat across complex applications. This documentation website, for example, needs some of them; and maybe you\'ll need them too. To solve those problems the {0} was created.',
      desc3: 'It contains all the behaviours you need to build complex application shells, that will be simple, responsive and it will integrate seamlessly with drawers, toolbars and content.',
      desc4: 'The {0} component supports {1}, {2} and {3}, which are aliases for {4}, {5} and {6} respectively. Look at the examples:'
    },
    regular: {
      title: 'Regular Toolbars',
      default: 'Default',
      desc1: 'This pattern can be used when you need a toolbar, a responsive drawer and content to be displayed following the Material Guidelines. This is the default behaviour.',
      desc2: 'The order of {0} children is irrelevant. The component will take care of this based on the props that you pass.'
    },
    fixed: {
      title: 'Fixed Toolbars',
      desc: 'Sometimes you may need a fixed toolbar, to make all options always available. You can also combine this with the "waterfall" effect.',
      fixedWaterfall: 'Fixed + Waterfall'
    },
    reveal: {
      title: 'Reveal after scroll',
      desc: 'When you have a large amount of content to be displayed, and you want to focus on the reading part, you can hide the toolbar temporarily and reveal it when scrolling.',
      reveal: 'Reveal'
    },
    flexible: {
      title: 'Flexible height and text size',
      desc: 'Maybe the focus of your page is the title, followed by the content itself. A page that shows the details of a single contact is a great example of this scenario. So you can use flexible behaviour to give higher piority to your content after scrolling.',
      flexible: 'Flexible'
    },
    lastRow: {
      title: 'The last toolbar row fixed',
      desc: 'When your page has some primary navigation buttons, such as tabs and others, you may want them to always be available. You can make the second row of your toolbar always visible, hiding the first one when it\'s not needed. As an example, the WhatsApp main page has this behaviour.',
      fixed: 'Navigation fixed'
    },
    overlap: {
      title: 'Flexible space with overlapping content',
      desc: 'If you want to give focus to the content cards, you may want to use the overlap. It\'s just an awesome effect!',
      content: 'Overlapping content'
    },
    apiApp: {
      desc: 'In these examples we have 3 distinct areas: Toolbar, Drawer and Content. You should create them using the following tags:',
      toolbar: 'Creates the toolbar accepting any options from the md-toolbar',
      drawer: 'Places the drawer panel, that also accepts any options from the md-drawer. You can have a left or right placed drawer. Placing multiple drawers is currently not supported.',
      content: 'Here you will add any content for your page.',
      alert: 'Any other tag passed as a direct child of the md-app tag will be ignored. The component will only look for these three tags and choose the right placement for them.',
      propsDesc: 'The following properties can be applied'
    },
    apiToolbar: {
      desc: 'It supports all options of {0}. Please refer to the {1} to check out the API.',
      page: 'Toolbar page'
    },
    apiDrawer: {
      desc: 'It supports all options of {0}. Please refer to the {1} to check out the API.',
      page: 'Drawer page'
    },
    apiContent: {
      desc: 'It supports all options of {0}. Please refer to the {1} to check out the API.',
      page: 'Content page'
    },
    props: {
      mdMode: 'Sets the toolbar mode. See below the detailed description of each mode.',
      mdModeFixed: 'Makes the toolbar fixed without any scrolling effect.',
      mdModeFixedLast: 'Keeps the second row of the toolbar fixed and always visible. This NEEDS two md-toolbar-row inside the Toolbar.',
      mdModeReveal: 'Hides the toolbar temporarily and shows it after the scroll. This is a good approach for mobile.',
      mdModeFlexible: 'Makes the height and the title size flexible to give the content a higher priority.',
      mdModeOverlap: 'Enables the overlapping content.',
      mdWaterfall: 'Enables the waterfall effect, that can be combined with any md-mode.',
      mdScrollbar: 'Enables the md-scrollbar class to the scrollable content. Read more about the Scrollbar documentation.'
    }
  },
  avatar: {
    title: 'Avatar',
    description: 'Avatars can be used to represent people. When used with a specific logo, avatars can also be used to represent a brand.'
  },
  badge: {
    title: 'Badge',
    description: 'Small status descriptors for UI elements.'
  },
  bottomBar: {
    title: 'Bottom Bar',
    description: 'Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.'
  },
  card: {
    title: 'Card',
    description: 'Cards may contain a photo, text, and a link about a single subject.'
  },
  chips: {
    title: 'Chips',
    description: 'Chips represent complex entities in small blocks, such as a contact.'
  },
  checkbox: {
    title: 'Checkbox',
    description: 'Checkboxes allow the user to select multiple options from a set.'
  },
  content: {
    title: 'Content',
    description: 'The Content surfaces that comprise applications are referred to in this spec as material, or sheets of material.'
  },
  emptyState: {
    title: 'Empty State',
    description: 'A list that doesn’t contain any items, or a search that doesn’t display any results, are examples of empty states.'
  },
  pickers: {
    title: 'Pickers',
  },
  progress: {
    title: 'Progress',
    description: 'Progress indicators are visual indications of an app loading content.'
  },
  progressBar: {
    title: 'Progress Bar',
    nav: 'Bar'
  },
  progressSpinner: {
    title: 'Progress Spinner',
    nav: 'Spinner'
  },
  autocomplete: {
    title: 'Autocomplete',
    description: 'Input text can be used with autocomplete to help users who have limited literacy or who write in a foreign language.'
  },
  datepicker: {
    title: 'Datepicker',
    nav: 'Date'
  },
  dialog: {
    title: 'Dialog'
  },
  divider: {
    title: 'Divider'
  },
  drawer: {
    title: 'Drawer'
  },
  form: {
    title: 'Forms'
  },
  icon: {
    title: 'Icon'
  },
  input: {
    title: 'Input & Textarea'
  },
  list: {
    title: 'List'
  },
  radio: {
    title: 'Radio'
  },
  select: {
    title: 'Select'
  },
  file: {
    title: 'File'
  },
  table: {
    title: 'Table'
  },
  menu: {
    title: 'Menu'
  },
  steppers: {
    title: 'Steppers'
  },
  switch: {
    title: 'Switch'
  },
  speedDial: {
    title: 'Speed Dial'
  },
  snackbar: {
    title: 'Snackbar'
  },
  subheader: {
    title: 'Subheader'
  },
  toolbar: {
    title: 'Toolbar'
  },
  tooltip: {
    title: 'Tooltip'
  },
  layout: {
    title: 'Layout'
  },
  scrollbar: {
    title: 'Scrollbar'
  },
  textSelection: {
    title: 'Text Selection'
  },
  typography: {
    title: 'Typography'
  },
  tabs: {
    title: 'Tabs'
  },
  error: {
    title: 'Not Found'
  }
}
