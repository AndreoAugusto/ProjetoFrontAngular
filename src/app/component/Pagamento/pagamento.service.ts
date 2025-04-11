import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Pagamento } from "./pagamento.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class PagamentoService {
  
    baseUrl = "http://localhost:8080/pagamentos"
  
    constructor(private snackbar: MatSnackBar, private http: HttpClient) {  }
  
      showMessage(msg: string): void {
        this.snackbar.open(msg, 'X',{
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top"
        })
      }
  
      create(pagamento: Pagamento): Observable<Pagamento> {
        return this.http.post<Pagamento>(this.baseUrl, pagamento)
      }
  
      read():Observable<Pagamento[]>  {
        return this.http.get<Pagamento[]>(this.baseUrl)
      }
  
      readById(id: string): Observable<Pagamento> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Pagamento>(url)
      }
  
      update(pagamento: Pagamento): Observable<Pagamento> {
        const url = `${this.baseUrl}/${pagamento.id}`
        return this.http.put<Pagamento>(url, pagamento)
      }
  
      delete(id: number): Observable<Pagamento> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Pagamento>(url)
        
      }
  }
  