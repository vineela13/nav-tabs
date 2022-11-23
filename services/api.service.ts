//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.17.0.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({providedIn:'root'})
export class Client {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://energie-app-api.azurewebsites.net";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    addEnergyScore(body: AddMonthlyEnergyRequest | undefined): Observable<ResponseMessage> {
        let url_ = this.baseUrl + "/api/User/AddEnergyScore";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processAddEnergyScore(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddEnergyScore(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ResponseMessage>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ResponseMessage>;
        }));
    }

    protected processAddEnergyScore(response: HttpResponseBase): Observable<ResponseMessage> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ResponseMessage.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ResponseMessage>(null as any);
    }

    /**
     * @return Success
     */
    userEnergyScore(): Observable<EnergyScoreList> {
        let url_ = this.baseUrl + "/api/User/UserEnergyScore";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUserEnergyScore(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUserEnergyScore(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<EnergyScoreList>;
                }
            } else
                return _observableThrow(response_) as any as Observable<EnergyScoreList>;
        }));
    }

    protected processUserEnergyScore(response: HttpResponseBase): Observable<EnergyScoreList> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = EnergyScoreList.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<EnergyScoreList>(null as any);
    }

    /**
     * @return Success
     */
    getUserEnergyAverage(): Observable<EnergyScoreAverage> {
        let url_ = this.baseUrl + "/api/User/GetUserEnergyAverage";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetUserEnergyAverage(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetUserEnergyAverage(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<EnergyScoreAverage>;
                }
            } else
                return _observableThrow(response_) as any as Observable<EnergyScoreAverage>;
        }));
    }

    protected processGetUserEnergyAverage(response: HttpResponseBase): Observable<EnergyScoreAverage> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = EnergyScoreAverage.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<EnergyScoreAverage>(null as any);
    }

    /**
     * @return Success
     */
    getEnergyScoreForUser(): Observable<ListEnergyScore> {
        let url_ = this.baseUrl + "/api/User/GetEnergyScoreForUser";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetEnergyScoreForUser(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetEnergyScoreForUser(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<ListEnergyScore>;
                }
            } else
                return _observableThrow(response_) as any as Observable<ListEnergyScore>;
        }));
    }

    protected processGetEnergyScoreForUser(response: HttpResponseBase): Observable<ListEnergyScore> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ListEnergyScore.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ListEnergyScore>(null as any);
    }
}

export class AddMonthlyEnergyRequest implements IAddMonthlyEnergyRequest {
    energyScore!: number;

    constructor(data?: IAddMonthlyEnergyRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.energyScore = _data["energyScore"];
        }
    }

    static fromJS(data: any): AddMonthlyEnergyRequest {
        data = typeof data === 'object' ? data : {};
        let result = new AddMonthlyEnergyRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["energyScore"] = this.energyScore;
        return data;
    }
}

export interface IAddMonthlyEnergyRequest {
    energyScore: number;
}

export class Company implements ICompany {
    readonly id?: number;
    readonly name!: string;

    constructor(data?: ICompany) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).name = _data["name"];
        }
    }

    static fromJS(data: any): Company {
        data = typeof data === 'object' ? data : {};
        let result = new Company();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface ICompany {
    id?: number;
    name: string;
}

export class CompanyDepartment implements ICompanyDepartment {
    readonly id?: number;
    readonly name?: string | undefined;
    companyId?: number | undefined;
    company?: Company;

    constructor(data?: ICompanyDepartment) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).name = _data["name"];
            this.companyId = _data["companyId"];
            this.company = _data["company"] ? Company.fromJS(_data["company"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CompanyDepartment {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyDepartment();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["companyId"] = this.companyId;
        data["company"] = this.company ? this.company.toJSON() : <any>undefined;
        return data;
    }
}

export interface ICompanyDepartment {
    id?: number;
    name?: string | undefined;
    companyId?: number | undefined;
    company?: Company;
}

export class CompanyUser implements ICompanyUser {
    readonly id?: number;
    readonly userName?: string | undefined;
    readonly email?: string | undefined;
    readonly departmentID?: number | undefined;
    companyDepartment?: CompanyDepartment;

    constructor(data?: ICompanyUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).userName = _data["userName"];
            (<any>this).email = _data["email"];
            (<any>this).departmentID = _data["departmentID"];
            this.companyDepartment = _data["companyDepartment"] ? CompanyDepartment.fromJS(_data["companyDepartment"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CompanyUser {
        data = typeof data === 'object' ? data : {};
        let result = new CompanyUser();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["userName"] = this.userName;
        data["email"] = this.email;
        data["departmentID"] = this.departmentID;
        data["companyDepartment"] = this.companyDepartment ? this.companyDepartment.toJSON() : <any>undefined;
        return data;
    }
}

export interface ICompanyUser {
    id?: number;
    userName?: string | undefined;
    email?: string | undefined;
    departmentID?: number | undefined;
    companyDepartment?: CompanyDepartment;
}

export class EnergieScore implements IEnergieScore {
    readonly id?: number;
    readonly score?: number;
    readonly monthId?: number;
    month?: Month;
    readonly year?: number;
    readonly companyUserID?: number | undefined;
    companyUser?: CompanyUser;

    constructor(data?: IEnergieScore) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            (<any>this).id = _data["id"];
            (<any>this).score = _data["score"];
            (<any>this).monthId = _data["monthId"];
            this.month = _data["month"] ? Month.fromJS(_data["month"]) : <any>undefined;
            (<any>this).year = _data["year"];
            (<any>this).companyUserID = _data["companyUserID"];
            this.companyUser = _data["companyUser"] ? CompanyUser.fromJS(_data["companyUser"]) : <any>undefined;
        }
    }

    static fromJS(data: any): EnergieScore {
        data = typeof data === 'object' ? data : {};
        let result = new EnergieScore();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["score"] = this.score;
        data["monthId"] = this.monthId;
        data["month"] = this.month ? this.month.toJSON() : <any>undefined;
        data["year"] = this.year;
        data["companyUserID"] = this.companyUserID;
        data["companyUser"] = this.companyUser ? this.companyUser.toJSON() : <any>undefined;
        return data;
    }
}

export interface IEnergieScore {
    id?: number;
    score?: number;
    monthId?: number;
    month?: Month;
    year?: number;
    companyUserID?: number | undefined;
    companyUser?: CompanyUser;
}

export class EnergyScore implements IEnergyScore {
    score?: number;
    month?: string | undefined;

    constructor(data?: IEnergyScore) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.score = _data["score"];
            this.month = _data["month"];
        }
    }

    static fromJS(data: any): EnergyScore {
        data = typeof data === 'object' ? data : {};
        let result = new EnergyScore();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["score"] = this.score;
        data["month"] = this.month;
        return data;
    }
}

export interface IEnergyScore {
    score?: number;
    month?: string | undefined;
}

export class EnergyScoreAverage implements IEnergyScoreAverage {
    averageUserScore?: number;

    constructor(data?: IEnergyScoreAverage) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.averageUserScore = _data["averageUserScore"];
        }
    }

    static fromJS(data: any): EnergyScoreAverage {
        data = typeof data === 'object' ? data : {};
        let result = new EnergyScoreAverage();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["averageUserScore"] = this.averageUserScore;
        return data;
    }
}

export interface IEnergyScoreAverage {
    averageUserScore?: number;
}

export class EnergyScoreList implements IEnergyScoreList {
    energieScores?: EnergieScore[] | undefined;

    constructor(data?: IEnergyScoreList) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["energieScores"])) {
                this.energieScores = [] as any;
                for (let item of _data["energieScores"])
                    this.energieScores!.push(EnergieScore.fromJS(item));
            }
        }
    }

    static fromJS(data: any): EnergyScoreList {
        data = typeof data === 'object' ? data : {};
        let result = new EnergyScoreList();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.energieScores)) {
            data["energieScores"] = [];
            for (let item of this.energieScores)
                data["energieScores"].push(item.toJSON());
        }
        return data;
    }
}

export interface IEnergyScoreList {
    energieScores?: EnergieScore[] | undefined;
}

export class ListEnergyScore implements IListEnergyScore {
    energyScores?: EnergyScore[] | undefined;

    constructor(data?: IListEnergyScore) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["energyScores"])) {
                this.energyScores = [] as any;
                for (let item of _data["energyScores"])
                    this.energyScores!.push(EnergyScore.fromJS(item));
            }
        }
    }

    static fromJS(data: any): ListEnergyScore {
        data = typeof data === 'object' ? data : {};
        let result = new ListEnergyScore();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.energyScores)) {
            data["energyScores"] = [];
            for (let item of this.energyScores)
                data["energyScores"].push(item.toJSON());
        }
        return data;
    }
}

export interface IListEnergyScore {
    energyScores?: EnergyScore[] | undefined;
}

export class Month implements IMonth {
    id?: number;
    name!: string;

    constructor(data?: IMonth) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): Month {
        data = typeof data === 'object' ? data : {};
        let result = new Month();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        return data;
    }
}

export interface IMonth {
    id?: number;
    name: string;
}

export class ResponseMessage implements IResponseMessage {
    response?: string | undefined;

    constructor(data?: IResponseMessage) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.response = _data["response"];
        }
    }

    static fromJS(data: any): ResponseMessage {
        data = typeof data === 'object' ? data : {};
        let result = new ResponseMessage();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["response"] = this.response;
        return data;
    }
}

export interface IResponseMessage {
    response?: string | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}