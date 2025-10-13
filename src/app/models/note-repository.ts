export class NoteRepository {
    private _id = 0
    private _themes = new Map<number, string>()

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

    public getThemesAsArray(): any[] {
        const values = [...this._themes.values()]
        const keys = [... this._themes.keys()]

        const themes = []

        for (let i=0; i < values.length; i++) {
            themes.push({
                id: keys[i],
                value: values[i]
            })
        }

        return themes

    }
}
