import { CabinetData } from '../../entities/CabinetData';
import { Cabinet, ICabinetAttribute } from '../../db/models/cabinet';

interface CabinetRepository {
    saveCabinetData: (cabinet: CabinetData) => Promise<ICabinetAttribute>
}

const saveCabinetData = async (cabinet: CabinetData) => {
    const savedCabinet = await Cabinet.create(cabinet)
    return savedCabinet.toJSON() as ICabinetAttribute
}

export const cabinetRepository: CabinetRepository = { saveCabinetData }
