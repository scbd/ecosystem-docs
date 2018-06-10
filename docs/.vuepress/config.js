module.exports = {
  base:'/ecosystem-docs/',
  title: 'Design Ecosystem',
  description: 'Design System for the Secretariat of the Convention on Biological Diversity',
  themeConfig: {
    editLinks: true,
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: 'The Proposal', link: '/proposal/' },
      { text: 'Ecosystem', link: '/' },
      { text: 'Communication', link: '/communication/' },
      { text: 'Natural Selection', link: '/natural-selection/' },
      {
        text: 'Composition',
        items: [
          { text: 'Concept', link: '/composition/' },
          { text: 'Particles', link: '/composition/particles/concept' },
          { text: 'Elements',  link: '/composition/elements/concept' },
          { text: 'Molecules', link: '/composition/molecules/concept' },
          { text: 'Organisms', link: '/composition/organisms/concept' },
        ]
      },
      { text: 'Mimicry', link: '/mimicry/' },
    ],

    locales: {
      '/': {
        label:        'English',
        selectText:   'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated:  'Last Updated',
        title:        'Design Ecosystem',
        description:  'Design System for the Secretariat of the Convention on Biological Diversity',
        sidebar: {
          '/composition/particles/': genSidebarConfigParticles('Particles'),
          '/composition/elements/' : genSidebarConfigElements('Elements'),
          '/composition/molecules/': genSidebarConfigMolecules('Molecules'),
          '/composition/organisms/': genSidebarConfigOrganisms('Organisms'),
        }
      },

// Simbiosis
// Comunicación
// Seleccion natural
// Composición
// Mimetismo
      '/es/': {
        label: 'Español',
        selectText: 'Idiomas',
        editLinkText: 'Edita esta página en GitHub',
        lastUpdated: 'Última actualización',
        title: 'Ecosistema de diseño',
        description: 'Sistema de diseño para la Secretaría del Convenio sobre la Diversidad Biológica',
        sidebar: {
          '/composition/': genSidebarConfigParticles('Composición')
        }
      },
      // Symbioses
      // الاتصالات
      // الانتقاء الطبيعي
      // تكوين
      // تقليد
  //
      '/ar/':{
        label: 'عربى ',
        selectText:'اللغات ',
        editLinkText:'عدل هذه الصفحة على جيثب ',
        lastUpdated:'آخر تحديث ',
        title: 'تصميم النظام البيئي ',
        description: 'نظام التصميم لأمانة اتفاقية التنوع البيولوجي ',
        sidebar: {
          '/composition/': genSidebarConfigParticles(' تكوين')
        }
      },

// Symbioses
// la communication
// Sélection naturelle
// Composition
// Mimétisme
      '/fr/': {
        label: 'Français',
        selectText: 'Langues',
        editLinkText: 'Modifier cette page sur GitHub',
        lastUpdated: 'Dernière mise à jour',
        title: 'Écosystème de conception',
        description: 'Système de conception pour le Secrétariat de la Convention sur la diversité biologique',
        sidebar: {
          '/composition/': genSidebarConfigParticles('Composition')
        }
      },

// 共生
// 通訊
// 自然選擇
// 組成
// 模仿
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        title: '设计生态系统',
        description: '生物多样性公约”秘书处设计系统',
        sidebar: {
          '/composition/': genSidebarConfigParticles('組成')
        }
      },
// симбиозах
// связь
// Естественный отбор
// Состав
// мимикрия
      '/ru/': {
        label: 'русский',
        selectText: 'Языки',
        editLinkText: 'Редактировать эту страницу на GitHub',
        lastUpdated: 'Последнее обновление',
        title: 'Проектная экосистема',
        description: 'Система проектирования для секретариата Конвенции о биологическом разнообразии',
        sidebar: {
          '/composition/': genSidebarConfigParticles('Состав')
        }
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title: 'Design Ecosystem',
      description: 'Design System for the Secretariat of the Convention on Biological Diversity'
    },
    '/es/': {
      lang: 'es',
      title: 'Ecosistema de diseño',
      description: 'Sistema de diseño para la Secretaría del Convenio sobre la Diversidad Biológica'
    }
    ,
    '/ar/': {
      lang: 'ar',
      title: 'تصميم النظام البيئي ',
      description: 'نظام التصميم لأمانة اتفاقية التنوع البيولوجي '
    }
    ,
    '/fr/': {
      lang: 'fr',
      title: 'Écosystème de conception',
      description: 'Système de conception pour le Secrétariat de la Convention sur la diversité biologique'
    }
    ,
    '/zh/': {
      lang: 'zh-CN',
      title: '设计生态系统',
      description: '生物多样性公约”秘书处设计系统'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Проектная экосистема',
      description: 'Система проектирования для секретариата Конвенции о биологическом разнообразии'
    }
  }
}

function genSidebarConfigParticles (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'concept',
        'tokens',
        'style',
        'icons',
      ]
    }
  ]
}
function genSidebarConfigElements (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'concept',
      ]
    }
  ]
}
function genSidebarConfigMolecules (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'concept',
        'add-to-calendar',
        'calendar'
      ]
    }
  ]
}
function genSidebarConfigOrganisms (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'concept',
      ]
    }
  ]
}
