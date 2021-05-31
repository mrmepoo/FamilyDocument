import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiUrl} from '../../base/constant/apiUrl';

@Injectable()
export class TokenSaleTypeService {

  apiUrl = ApiUrl.baseUrl + ApiUrl.tokenSaleType;

  constructor(private http: HttpClient) {

  }

  getAll(rq) {
    return this.http.get(this.apiUrl + '/all');
  }
}
