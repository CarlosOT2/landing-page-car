//# Libs //
import PerformFetch from "./PerformFetch"
//# Types //
import type { VehiclesJson } from "../types/vehiclesdata"

export async function GetAllVehicles() {
    try {
        const json = await PerformFetch<VehiclesJson>({
            url: "/data/featuredvehicles.json",
            method: "GET"
        })

        return json.vehicles
    } catch (err) {
        console.error("Error 'GetAllVehicles':", err)
    }
}

export async function GetVehicle(id: number) {
    try {
        const json = await PerformFetch<VehiclesJson>({
            url: "/data/featuredvehicles.json",
            method: "GET"
        })

        const vehicle = json.vehicles.find(vehicle => vehicle.id === id)

        if (!vehicle) {
            throw new Error("Invalid 'id', vehicle not found")
        }

        return vehicle
    } catch (err) {
        console.error("Error 'GetVehicle':", err)
    }
}