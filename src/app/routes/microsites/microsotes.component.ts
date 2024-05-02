import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ws-microsotes',
  templateUrl: './microsotes.component.html',
  styleUrls: ['./microsotes.component.scss'],
})
export class MicrosotesComponent implements OnInit {
  sectionList = [
    {
      'active': true,
      'enabled': true,
      'title': '',
      'key': 'sectionTopBanner',
      'order': 2,
      'column': [
        {
          "active": true,
          "enabled": true,
          "key": "topSection",
          "title": "",
          "colspan": 12,
          "background": 'banner-metrics',
          "data":  {
            logo: "/assets/instances/eagle/app_logos/KarmayogiBharat_Logo_Horizontal.svg",
            title: "Department Of Education",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            sliderData: {
              styleData : {
                "bannerMetaClass": "inline-meta",
                "bannerMeta": "visible",
                "bannerMetaAlign": "right",
                "navigationArrows": "hidden",
                "borderRadius": "0",
                "customHeight": "424px",
                
                "responsive": {
                  "bannerMetaClass": "inline-meta",
                  "customHeight": "232px",
                  "bannerMetaAlign": "right",
                  "navigationArrows": "visible",
                  "dots": "hidden",
                  "arrowsPlacement": "middle-inline"
                }
              },
              sliders: [
                {
                  "active": true,
                  "banners": {
                    "l": "assets/instances/eagle/banners/orgs/new-banner/6/l.png",
                    "m": "assets/instances/eagle/banners/orgs/new-banner/6/m.png",
                    "s": "assets/instances/eagle/banners/orgs/new-banner/6/s.png",
                    "xl": "assets/instances/eagle/banners/orgs/new-banner/6/l.png",
                    "xs": "assets/instances/eagle/banners/orgs/new-banner/6/s.png",
                    "xxl": "assets/instances/eagle/banners/orgs/new-banner/6/l.png"
                  },
                  "redirectUrl": "/app/curatedCollections/do_1137524714202480641252",
                  "queryParams": {
                    "tab": "Learn",
                    "q": "Salesforce",
                    "lang": "en",
                    "f": "{}"
                  },
                  "title": "",
                },
                {
                  "active": true,
                  "banners": {
                    "l": "assets/instances/eagle/banners/orgs/new-banner/4/l.png",
                    "m": "assets/instances/eagle/banners/orgs/new-banner/4/m.png",
                    "s": "assets/instances/eagle/banners/orgs/new-banner/4/s.png",
                    "xl": "assets/instances/eagle/banners/orgs/new-banner/4/l.png",
                    "xs": "assets/instances/eagle/banners/orgs/new-banner/4/s.png",
                    "xxl": "assets/instances/eagle/banners/orgs/new-banner/4/l.png"
                  },
                  "redirectUrl": "/app/organisation/dopt",
                  "queryParams": {
                    "tab": "Learn",
                    "q": "Salesforce",
                    "lang": "en",
                    "f": "{}"
                  },
                  "title": "",
                },
                {
                  "active": true,
                  "banners": {
                    "l": "assets/instances/eagle/banners/orgs/new-banner/2/l.png",
                    "m": "assets/instances/eagle/banners/orgs/new-banner/2/m.png",
                    "s": "assets/instances/eagle/banners/orgs/new-banner/2/s.png",
                    "xl": "assets/instances/eagle/banners/orgs/new-banner/2/l.png",
                    "xs": "assets/instances/eagle/banners/orgs/new-banner/2/s.png",
                    "xxl": "assets/instances/eagle/banners/orgs/new-banner/2/l.png"
                  },
                  "redirectUrl": "/app/globalsearch",
                  "queryParams": {
                    "tab": "Learn",
                    "q": "Salesforce",
                    "lang": "en",
                    "f": "{}"
                  },
                  "title": "",
                }
              ]
            },
            metrics: {
              "background": 'banner-metrics',
              data:[
                {
                  icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041344797859840128/artifact/do_114041344797859840128_1714031463360_star.svg",
                  iconColor: 'white',
                  header: '4.1',
                  headercolor: 'white',
                  description: 'Average Course Rating',
                  descriptionColor: 'black',
                  linebreak: true,
                  background: 'banner-metrics',
                },
                {
                  icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041337110372352127/artifact/do_114041337110372352127_1714030607449_shape.svg",
                  iconColor: 'white',
                  header: '1234',
                  headercolor: 'white',
                  description: 'Content Available',
                  descriptionColor: 'black',
                  linebreak: true,
                  background: 'banner-metrics',
                },
                {
                  icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041373226573824131/artifact/do_114041373226573824131_1714034836835_group_add.svg",
                  iconColor: 'white',
                  header: '7890',
                  headercolor: 'white',
                  description: 'Enrolments So Far',
                  descriptionColor: 'black',
                  linebreak: true,
                  background: 'banner-metrics',
                },
                {
                  icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041378634399744134/artifact/do_114041378634399744134_1714035498087_combined-shape.svg",
                  iconColor: 'white',
                  header: '5678',
                  headercolor: 'white',
                  description: 'Certificates Issued So Far',
                  descriptionColor: 'black',
                  linebreak: false,
                  background: 'banner-metrics',
                },
              ]
            },
          }
        }
      ],
    },
    {
      "active": true,
      "enabled": true,
      "title": "Infrastructure Details",
      "navigation": true,
      "key": "sectionInfrastructure",
      "order": 8,
      "column": [
        {
          "active": true,
          "enabled": true,
          "key": "infra",
          "background": 'infra-background',
          "title": "",
          "colspan": 12,
          "data": {
            "detaulTitle": "Know The",
            "myTitle": "Infrastructure Details.",
            "description": "Infrastructure is integral to creating a conducive and enriching learning environment.",
            "dataColSpan": 2,
            "background": 'infra-background',
            "metrics": [
              {
                icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041375850471424132/artifact/do_114041375850471424132_1714035157784_group.svg",
                iconColor: 'white',
                header: '41',
                headercolor: 'white',
                description: 'Available Classrooms',
                descriptionColor: 'white custom-opacity',
                linebreak: false,
                background: 'tranparent',
              },
              {
                icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041377520844800133/artifact/do_114041377520844800133_1714035357308_computer.svg",
                iconColor: 'white',
                header: '1234',
                headercolor: 'white',
                description: 'Functioning Computer Labs',
                descriptionColor: 'white custom-opacity',
                linebreak: false,
                background: 'tranparent',
              },
              {
                icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041379912810496135/artifact/do_114041379912810496135_1714035650285_auto_stories.svg",
                iconColor: 'white',
                header: '7890',
                headercolor: 'white',
                description: 'Functioning Libraries',
                descriptionColor: 'white custom-opacity',
                linebreak: false,
                background: 'tranparent',
              },
              {
                icon: "https://portal.karmayogi.nic.in/content-store/content/do_114041366180069376130/artifact/do_114041366180069376130_1714033990328_podium.svg",
                iconColor: 'white',
                header: '5678',
                headercolor: 'white',
                description: 'Auditoriums',
                descriptionColor: 'white custom-opacity',
                linebreak: false,
                background: 'tranparent',
              },
            ],
            sliderData: {
              styleData : {
                "borderRadius": "12px",
                "customHeight": "344px",
                "bannerMeta": "visible",
                "responsive": {
                  "customHeight": "232px",
                  "bannerMetaAlign": "left",
                  "navigationArrows": "visible",
                  "arrowsPlacement": "bottom-right",
                }
              },
              sliders: [
                {
                  'active': true,
                  'banners': {
                    'l': 'assets/instances/eagle/banners/orgs/new-banner/6/l.png',
                    'm': 'assets/instances/eagle/banners/orgs/new-banner/6/m.png',
                    's': 'assets/instances/eagle/banners/orgs/new-banner/6/s.png',
                    'xl': 'assets/instances/eagle/banners/orgs/new-banner/6/l.png',
                    'xs': 'assets/instances/eagle/banners/orgs/new-banner/6/s.png',
                    'xxl': 'assets/instances/eagle/banners/orgs/new-banner/6/l.png',
                  },
                  'redirectUrl': '/app/curatedCollections/do_1137524714202480641252',
                  'queryParams': {
                    'tab': 'Learn',
                    'q': 'Salesforce',
                    'lang': 'en',
                    'f': '{}',
                  },
                  'title': '',
                },
                {
                  'active': true,
                  'banners': {
                    'l': 'assets/instances/eagle/banners/orgs/new-banner/4/l.png',
                    'm': 'assets/instances/eagle/banners/orgs/new-banner/4/m.png',
                    's': 'assets/instances/eagle/banners/orgs/new-banner/4/s.png',
                    'xl': 'assets/instances/eagle/banners/orgs/new-banner/4/l.png',
                    'xs': 'assets/instances/eagle/banners/orgs/new-banner/4/s.png',
                    'xxl': 'assets/instances/eagle/banners/orgs/new-banner/4/l.png',
                  },
                  'redirectUrl': '/app/organisation/dopt',
                  'queryParams': {
                    'tab': 'Learn',
                    'q': 'Salesforce',
                    'lang': 'en',
                    'f': '{}',
                  },
                  'title': '',
                },
                {
                  'active': true,
                  'banners': {
                    'l': 'assets/instances/eagle/banners/orgs/new-banner/2/l.png',
                    'm': 'assets/instances/eagle/banners/orgs/new-banner/2/m.png',
                    's': 'assets/instances/eagle/banners/orgs/new-banner/2/s.png',
                    'xl': 'assets/instances/eagle/banners/orgs/new-banner/2/l.png',
                    'xs': 'assets/instances/eagle/banners/orgs/new-banner/2/s.png',
                    'xxl': 'assets/instances/eagle/banners/orgs/new-banner/2/l.png',
                  },
                  'redirectUrl': '/app/globalsearch',
                  'queryParams': {
                    'tab': 'Learn',
                    'q': 'Salesforce',
                    'lang': 'en',
                    'f': '{}',
                  },
                  'title': '',
                },
              ]
            }
          }
        }
      ]
    },
    {
      "active": true,
      "enabled": true,
      "title": "Top Contents",
      "navigation": true,
      "key": "sectionPopularCourses",
      "order": 4,
      "column": [
        {
          'active': true,
          'enabled': true,
          'key': 'contentStrip',
          'title': 'Popular courses',
          'data':  {
            'order': 4,
            'strips': [
              {
                'active': true,
                'key': 'recentlyAdded',
                'logo': 'school',
                'title': 'Recently Added',
                'stripTitleLink': {
                  'link': '',
                  'icon': '',
                },
                'sliderConfig': {
                  'showNavs': true,
                  'showDots': true,
                  'maxWidgets': 12,
                },
                'stripBackground': '',
                'titleDescription': 'Recently Added',
                'stripConfig': {
                  'cardSubType': 'card-portrait-lib',
                },
                'viewMoreUrl': {
                  'path': '/app/seeAll',
                  'viewMoreText': 'Show all',
                  'queryParams': {
                    'key': 'recentlyAdded',
                  },
                  'loaderConfig': {
                    'cardSubType': 'card-portrait-lib-skeleton',
                  },
                  'stripConfig': {
                    'cardSubType': 'card-portrait-lib',
                  },
                },
                'loader': true,
                'loaderConfig': {
                  'cardSubType': 'card-portrait-lib-skeleton',
                },
                'tabs': [
                ],
                'filters': [],
                'request': {
                  'searchV6': {
                    'request': {
                      'filters': [
                        {
                          'primaryCategory': [
                            'Course',
                          ],
                          'contentType': [
                            'Course',
                          ],
                        },
                      ],
                      'query': '',
                      'sort_by': {
                        'lastUpdatedOn': 'desc',
                      },
                      'fields': [
                        'name',
                        'appIcon',
                        'instructions',
                        'description',
                        'purpose',
                        'mimeType',
                        'gradeLevel',
                        'identifier',
                        'medium',
                        'pkgVersion',
                        'board',
                        'subject',
                        'resourceType',
                        'primaryCategory',
                        'contentType',
                        'channel',
                        'organisation',
                        'trackable',
                        'license',
                        'posterImage',
                        'idealScreenSize',
                        'learningMode',
                        'creatorLogo',
                        'duration',
                        'avgRating',
                      ],
                    },
                  },
                },
              },

            ],
          },
        },
      ],
    },
    {
      "active": true,
      "enabled": false,
      "title": "",
      "key": "sectionCompetency",
      "order": 6,
      "column": [
        {
          'active': true,
          'enabled': true,
          'key': 'competency',
          'title': '',
          'colspan': 12,
          'data':  '',
        },
      ],
    }    
  ]

  constructor() { }

  ngOnInit() {
  }

  scrollToSection(name:  string) {  
    let section: HTMLElement | any
    section = document.getElementById(name)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}