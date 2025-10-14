import { ThemeType } from "./theme.type"

export class NoteRepository {
    private _id = 0
    private _date: Date = new Date()
    private _themes = new Map<number, string>()
    private _titre: string = ''
    private _content: string = ''

    /**
     * 
     */
    public get id(): number {
        return this._id
    }

    /**
     * 
     */
    public set id(value: number) {
        this._id = value
    }

    public get date(): Date {
        return this._date
    }

    public set date(date: Date) {
        this._date = date
    }
    
    public set titre(titre: string) {
        this._titre = titre
    }

    public get titre(): string {
        return this._titre
    }

    public set content(content: string) {
        this._content = content
    }

    public get content(): string {
        return this._content
    }
    
    /**
     * 
     * @param theme 
     */
    public addTheme(theme: string): void {

        const nextNumber: number = this._themes.size ? 
            [...this._themes.keys()]
                .sort()
                .reverse()
                [0] + 1 :
            1

        this._themes.set(nextNumber, theme)
    }

    public get themes() {
        return this._themes
    }

    public getThemesAsArray(): ThemeType[] {

        const themes: Array<ThemeType> = []
        this._themes.forEach((value: string, key: number) => {
            themes.push({
                id: key,
                value
            })
        })
        return themes

    }
}
