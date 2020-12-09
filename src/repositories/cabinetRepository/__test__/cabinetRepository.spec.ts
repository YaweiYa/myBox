import { cabinetRepository } from '../cabinetRepository'
import { Cabinet, ICabinetAttribute } from '../../../db/models/cabinet'
import { CabinetData } from '../../../entities/CabinetData'

describe('cabinetRepository', () => {
    describe('saveCabinetData', () => {
        it('should return cabinet when create successfully', async () => {
            const cabinetData = {
                name: 'some-cabinet',
                position: 'somewhere'
            } as CabinetData

            const mockedCabinet = {
                id: 1,
                name: 'some-cabinet',
                position: 'somewhere'
            } as ICabinetAttribute

            const mockedCabinetRecord = Cabinet.build(mockedCabinet)

            const mockCreate = jest.fn().mockResolvedValue(mockedCabinetRecord)
            Cabinet.create = mockCreate

            const savedCabinet = await cabinetRepository.saveCabinetData(cabinetData)

            expect(savedCabinet).toEqual(mockedCabinet)
        })
    })
})
