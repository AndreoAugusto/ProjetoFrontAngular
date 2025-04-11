import { MatSnackBar } from "@angular/material/snack-bar";
import { Fornecedor } from "./fornecedor.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FornecedorServide {

    baseUrl = "http://localhost:8080/Fornecedor"

    constructor(private snackbar: MatSnackBar, private http: HttpClient) {  }

    showMessege(msg: string): void  {
        this.snackbar.open(msg, 'X',{
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        })
    }

    create(fornecedor: Fornecedor): Observable<Fornecedor>  {
        return this.http.post<Fornecedor>(this.baseUrl, fornecedor)
    }

    read(): Observable<Fornecedor[]>  {
        return this.http.get<Fornecedor[]>(this.baseUrl)
    }

    readById(id: string): Observable<Fornecedor>    {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Fornecedor>(url)
    }

    update(fornecedor: Fornecedor): Observable<Fornecedor>  {
        const url = `${this.baseUrl}/${fornecedor.id}`
        return this.http.put<Fornecedor>(url, fornecedor)
    }

    delete(id: number): Observable<Fornecedor>  {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Fornecedor>(url)
    }


}