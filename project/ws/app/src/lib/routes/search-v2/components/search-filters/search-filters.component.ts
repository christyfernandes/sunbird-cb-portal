import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { Subscription } from 'rxjs'
import { GbSearchService } from '../../services/gb-search.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'ws-app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
})
export class SearchFiltersComponent implements OnInit, OnDestroy {
  @Input() newfacets!: any
  @Input() urlparamFilters!: any
  @Output() appliedFilter = new EventEmitter<any>()
  filterForm: FormGroup | undefined
  filteroptions: any = []
  userFilters: any = []
  myFilterArray: any = []
  private subscription: Subscription = new Subscription

  constructor(private searchSrvc: GbSearchService, private activated: ActivatedRoute) { }

  ngOnInit() {
    this.newfacets.forEach((nf: any) => {
      if (nf.name === 'mimeType') {
        const values: any = []
        nf.values.forEach((nfv: any) => {
          const nv = {
            count: '',
            name: '',
          }
          if (nfv.name !== 'video/mp4' && nfv.name !== 'video/x-youtube'  && nfv.name !== 'application/json' &&
          nfv.name !== 'application/x-mpegURL' && nfv.name !== 'application/quiz' && nfv.name !== 'image/jpeg' &&
          nfv.name !== 'image/png') {
            values.push(nfv)
          } else {
            if (nfv.name === 'video/mp4' || nfv.name === 'video/x-youtube' || nfv.name === 'application/x-mpegURL') {
              nv.name = 'Video'
              const indx = values.filter((x: any) => x.name === nv.name)
              if (indx.length === 0) {
                values.push(nv)
              }
            }
            if (nfv.name === 'application/json' || nfv.name === 'application/quiz') {
              nv.name = 'Assessment'
              const indx = values.filter((x: any) => x.name === nv.name)
              if (indx.length === 0) {
                values.push(nv)
              }
            }
            if (nfv.name === 'image/jpeg' || nfv.name === 'image/png') {
              nv.name = 'Image'
              const indx = values.filter((x: any) => x.name === nv.name)
              if (indx.length === 0) {
                values.push(nv)
              }
            }
          }
        })
        nf.values = values
      }
      if (nf.name === 'contentType') {
        nf.values = [{
          count: '',
          name: 'resource',
        },
        {
          count: '',
          name: 'course',
        }]
      }
    })
    this.filteroptions = this.newfacets
    this.activated.queryParamMap.subscribe(queryParams => {
      if (queryParams.has('f')) {
        const sfilters = JSON.parse(queryParams.get('f') || '{}')
        const fil = {
          name: sfilters.contentType[0].toLowerCase(),
          count: '',
          ischecked: true,
        }
        this.filteroptions.forEach((fas: any) => {
          fas.values.forEach((fasv: any) => {
            if (fas.name === 'contentType') {
              if (fasv.name === fil.name) {
                fasv.ischecked = true
              }
            } else {
              fasv.ischecked = false
            }
          })
        })
        this.modifyUserFilters(fil, 'contentType')
      }
    })
    // if (this.urlparamFilters) {
    //   this.filteroptions.forEach((fas: any) => {
    //     fas.values.forEach((fasv: any) => {
    //       if (this.urlparamFilters && fas.name === this.urlparamFilters.mainType) {
    //           if (fasv.name === this.urlparamFilters.name) {
    //             fasv.ischecked = true
    //           }
    //       } else {
    //         fasv.ischecked = false
    //       }
    //     })
    //   })
    // }
    // this.filteroptions = [
    //   {
    //     name: 'Provider',
    //     values: [
    //       {
    //         count: 5,
    //         name: 'iGot Learning',
    //       },
    //       {
    //         count: 5,
    //         name: 'J-pal',
    //       },
    //       {
    //         count: 5,
    //         name: 'Udemy',
    //       },
    //       {
    //         count: 5,
    //         name: 'LBSNAA',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'primaryCategory',
    //     values: [
    //       {
    //         count: 5,
    //         name: 'Course',
    //       },
    //       {
    //         count: 5,
    //         name: 'Module',
    //       },
    //       {
    //         count: 5,
    //         name: 'learning resource',
    //         subvalues: [
    //           {
    //             count: 5,
    //             name: 'Video',
    //           },
    //           {
    //             count: 5,
    //             name: 'PDF',
    //           },
    //           {
    //             count: 5,
    //             name: 'Audio',
    //           },
    //           {
    //             count: 5,
    //             name: 'Assessment',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Content cost',
    //     values: [
    //       {
    //         count: 5,
    //         name: 'Free',
    //       },
    //       {
    //         count: 5,
    //         name: 'Paid',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Topics',
    //     values: [
    //       {
    //         count: 5,
    //         name: 'Business of healthcare',
    //       },
    //       {
    //         count: 5,
    //         name: 'Healthcare',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Learning Levels',
    //     values: [
    //       {
    //         count: 5,
    //         name: 'Beginner',
    //       },
    //       {
    //         count: 5,
    //         name: 'Intermediate',
    //       },
    //       {
    //         count: 5,
    //         name: 'Advanced',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Competency type',
    //     values: [
    //       {
    //         count: 5,
    //         name: 'Behavioural',
    //       },
    //       {
    //         count: 5,
    //         name: 'Domain',
    //       },
    //       {
    //         count: 5,
    //         name: 'Functional',
    //       },
    //     ],
    //   },
    //   {
    //     name: 'Completion time',
    //     values: [
    //       {
    //         count: 5,
    //         name: '30 min to 1 hr',
    //       },
    //       {
    //         count: 5,
    //         name: '2 hrs to 5 hrs',
    //       },
    //       {
    //         count: 5,
    //         name: '5hrs and more',
    //       },
    //     ],
    //   },
    // ]

    this.filterForm = new FormGroup({
      filters: new FormControl(''),
    })
    this.subscription = this.searchSrvc.notifyObservable$.subscribe((res: any) => {
      const fil = {
        name: res.name,
        count: res.count,
        ischecked: false,
      }
      if (this.userFilters.length === 0) {
        this.userFilters.push(fil)
      }
      this.modifyUserFilters(fil, res.mainType)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  getFilterName(fil: any) {
    return this.userFilters.filter((x: any) => x.name === fil.name)
  }

  modifyUserFilters(fil: any, mainparentType: any) {
    const indx = this.getFilterName(fil)
    if (indx.length > 0) {
      this.userFilters.forEach((fs: any, index: number) => {
        if (fs.name === fil.name) {
          this.userFilters.splice(index, 1)
        }
      })
      this.myFilterArray.forEach((fs: any, index: number) => {
        if (fs.name === fil.name) {
          this.myFilterArray.splice(index, 1)
        }
      })
      this.filteroptions.forEach((fas: any) => {
        if (fas.name === mainparentType) {
          fas.values.forEach((fasv: any) => {
            if (fasv.name === fil.name) {
              fasv.ischecked = false
            }
          })
        }
      })
      this.appliedFilter.emit(this.myFilterArray)
    } else {
      this.userFilters.push(fil)

      const reqfilter = {
        mainType: mainparentType,
        name: fil.name,
        count: fil.count,
        ischecked: true,
      }
      this.filteroptions.forEach((fas: any) => {
        if (fas.name === mainparentType) {
          fas.values.forEach((fasv: any) => {
            if (fasv.name === fil.name) {
              fasv.ischecked = true
            }
          })
        }
      })
      this.myFilterArray.push(reqfilter)
      this.appliedFilter.emit(this.myFilterArray)
    }
  }
}