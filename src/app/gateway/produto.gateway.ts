import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProdutoModel } from "../model/produto.model";
import { Observable, firstValueFrom } from "rxjs";

@Injectable()
export class ProdutoGateway {

    constructor(private httpClient: HttpClient) {

    }

    async getProdutos(): Promise<ProdutoModel[]> {

        const headers = new HttpHeaders({
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJyb25zemNrYUBnbWFpbC5jb20iLCJpYXQiOjE2OTI0MDU1OTgsImV4cCI6MTY5MjQ5MTk5OH0.BVKbXg-SJaca1h1zPO_3mUFxebtqF_hdabvCWV9-fluMTyXXp0opBkUuFWy5zmug",
        });

        const observable: Observable<ProdutoModel[]> = this.httpClient.get<ProdutoModel[]>("http://localhost:8081/produtos", {
            headers
        });

        const data = await firstValueFrom<ProdutoModel[]>(observable);

        return data;

    }

}