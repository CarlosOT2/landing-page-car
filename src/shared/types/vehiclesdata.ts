export type Vehicle = {
    id: number
    src: string
    title: string
    desc: string
}

export type Vehicles = Vehicle[]

export type VehiclesJson = {
    vehicles: Vehicle[]
}
