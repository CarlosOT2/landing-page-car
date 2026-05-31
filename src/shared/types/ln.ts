export type StructureLn = {
    header: {
        search: string
        accessories: string
        services: string
        aboutus: string
    }

    home: {
        hero: {
            discover: {
                title: string
                button: string
            }
        }

        findVehicles: {
            title: string

            cards: {
                newvehicles: {
                    title: string
                    button: string
                }

                preowned: {
                    title: string
                    button: string
                }

                visitus: {
                    title: string
                    button: string
                }
            }
        }

        vehicles: {
            cards: {
                button: string
            }
        }
    }

    footer: {
        banner: {
            companyname: string
        }

        nav: {
            cols: Record<string, { title: string, links: Record<string, string>}>
        }
    }
}