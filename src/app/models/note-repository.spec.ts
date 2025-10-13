import { NoteRepository } from './note-repository';

describe('NoteRepository', () => {
  it('should create an instance', () => {
    expect(new NoteRepository()).toBeTruthy();
  });

  it ('Should have an id equal to 0', () => {
    const noteRepo = new NoteRepository()

    expect(noteRepo.id).toEqual(0)
  })
});
