module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Minas js",
      description: "Melhor evento de javascript em Minas Gerais",
      date: "28 de Abril ",
      // If your event is free, just comment this line
      price: "R$ 65,00",
      venue: "Auditório Phoenix Fumec",
      address: "R. Cobre, 200",
      city: "Belo Horizonte",
      state: "Minas Gerais"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://loja.tampa.works/produto/minasjs-conf-2018"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },*/

    // Site info
    site: {
      theme: "yellow-swan",
      url: "https://minasjs.com",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      /*'schedule',*/
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      /*schedule: "Schedule",*/
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },
    schedule: [
      {
        name: "Wharley Ornelas",
        photo: "https://s.gravatar.com/avatar/72c61b31e3ffe7eee15504ae7e26f011?s=140",
        bio: "Wharley é fullstack developer na Taller, um apaixonado por Javascript porém, casado com Nextjs e amante do Apollo.",
        company: "Taller",
        link: {
          href: "http://twitter.com/Wharleyornelas",
          text: "@Wharleyornelas"
        },
        presentation: {
          title: "Nextjs & Apollo",
        }
      }, {
        name: "Thalita Pinheiro",
        photo: "themes/yellow-swan/img/thalita.png",
        bio: "Consultora de desenvolvimento de software na ThoughtWorks, formada em SI. Curiosa e empolgada com o mundo JavaScript. Feminista defensora e incentivadora do aumento da representatividade feminina na área de TI. #empoderamento",
        company: "ThoughtWorks  ",
        link: {
          href: "http://twitter.com/ThalitaPinheiro",
          text: "@ThalitaPinheiro"
        },
        presentation: {
          title: "Talk a definir",
        }
      }, {
        name: "Fernanda Araújo",
        photo: "themes/yellow-swan/img/fernanda.png",
        bio: "Formada em Engenharia da Computação é consultora em desenvolvimento de software na ThoughtWorks.",
        company: "ThoughtWorks",
        presentation: {
          title: "Talk a definir",
        },
      },{
        name: "Laryssa Magalhães",
        photo: "themes/yellow-swan/img/laryssa.jpg",
        bio: "Front end developer na Studio Sol, cursa Ánalise e Desenvolvimento de Sistemas é apaixonada por Harry Potter e Video Games.",
        company: "Studio Sol",
        link: {
          href: "https://medium.com/@larymagal",
          text: "@lary_magal"
        },
        presentation: {
          title: "Diversidade na Tecnologia",
        },
      }],
    // The entire schedule
    /*schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bill Gates",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Microsoft",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],*/

    // List of Sponsors
    sponsors: [{
      name: "TampaWorks",
      logo: "themes/yellow-swan/img/tampa.svg",
      url: "https://tampa.works"
    }],

    // List of Partners
    partners: [{
      name: "Fumec",
      logo: "themes/yellow-swan/img/fumec.png",
      url: "http://http://www.fumec.br/"
    }, {
      name: "Lais",
      logo: "themes/yellow-swan/img/lais.png",
      url: "http://www.fumec.br/lais/"
    }],

    // Theme path
    getTheme: function () {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function () {
      return this.site.url;
    }
  }
};