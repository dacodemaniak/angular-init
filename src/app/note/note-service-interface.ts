import { Observable } from "rxjs";
import { NoteRepository } from "./model/note-repository";
import { HttpResponse } from "@angular/common/http";

export interface NoteServiceInterface {
    getAll(): Observable<NoteRepository[]>

    findOne(id: number): NoteRepository | null

    add(note: NoteRepository): Observable<HttpResponse<NoteRepository>>
}
