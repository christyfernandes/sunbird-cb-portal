import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigurationsService } from '@sunbird-cb/utils-v2'
import { Observable } from 'rxjs'

const baseUrl = `/scormapis`
const API_END_POINTS = {
  ADD_REGISTRATIONS: `${baseUrl}/api/v2/registrations`,
  GET_LAUNCH_LINK: (registrationId: string) => `${baseUrl}/api/v2/registrations/${registrationId}/launchLink`,
  GET_REG_PROGRESS: (registrationId: string) => `${baseUrl}/api/v2/registrations/${registrationId}?includeChildResults=true&includeRuntime=true&includeInteractionsAndObjectives=true`,
  GET_COURSES: `${baseUrl}/api/v2/courses`
}

@Injectable({
  providedIn: 'root'
})
export class SCORMExternalService {

  constructor(
    private http: HttpClient,
    public configSvc: ConfigurationsService
  ) {

  }

  addRegistrations(request: any): Observable<any> {
    return this.http.post<any>(API_END_POINTS.ADD_REGISTRATIONS, request, {
      headers: { engineTenantName: 'default', 'Content-Type': 'application/json' }
    })
  }
  getLaunchLink(registrationId: string): Observable<any> {
    return this.http.post<any>(API_END_POINTS.GET_LAUNCH_LINK(registrationId), {
      "expiry": 0,  
      "additionalValues": [
        {
          "item": "forceFrameset",
          "value": true
        }
      ]}, {
      headers: { engineTenantName: 'default', 'Content-Type': 'application/json' }
    })
  }

  getRegistrationProgress(registrationId: string): Observable<any> {
    return this.http.get<any>(API_END_POINTS.GET_REG_PROGRESS(registrationId), {
      headers: { engineTenantName: 'default' }
    })
  }

  getCourses(): Observable<any> {
    return this.http.get<any>(API_END_POINTS.GET_COURSES, {
      headers: { engineTenantName: 'default' }
    })
  }
}
