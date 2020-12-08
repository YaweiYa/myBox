import { Request, Response, RequestHandler } from 'express'
import { CabinetData } from '../../entities/CabinetData'
import { cabinetRepository } from '../../repositories/cabinetRepository'

export const cabinetHandler: RequestHandler = async (req: Request, res: Response) => {
    const body = req.body
    const cabinetData = {
        name: body.name,
        position: body.position
    } as CabinetData

    const savedCabinet = await cabinetRepository.saveCabinetData(cabinetData);

    res.location(`/cabinets/${savedCabinet.id}`).sendStatus(201);
}