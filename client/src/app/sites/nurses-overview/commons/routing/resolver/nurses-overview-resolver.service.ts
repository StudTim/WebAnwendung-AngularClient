import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { INurseModel } from 'src/app/modules/nurses/common/model/i-nurse-model';
import { NursesRestService } from 'src/app/modules/nurses/common/service/nurses-rest.service';

@Injectable({
  providedIn: 'root'
})
export class NursesOverviewResolverService implements Resolve<INurseModel[]> {

  constructor(private nursesRestService: NursesRestService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): INurseModel[] | Observable<INurseModel[]> | Promise<INurseModel[]> {
    
    return this.nursesRestService.all();
  }
}
