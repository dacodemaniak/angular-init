import { Observable } from "rxjs";
import { NoteRepository } from "./model/note-repository";

export interface NoteServiceInterface {
    getAll(): Observable<NoteRepository[]>

    findOne(id: number): NoteRepository | null

    add(note: NoteRepository): NoteRepository
}
