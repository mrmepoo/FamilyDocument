import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrl} from '../../base/constant/apiUrl';

@Injectable()
export class JoinedTokenSaleDetailService {

  apiUrl = ApiUrl.baseUrl + ApiUrl.joinedTokenSaleDetail;

  constructor(private http: HttpClient) {

  }

  getAll(rq) {
    return this.http.get(this.apiUrl + '/all');
  }

}
