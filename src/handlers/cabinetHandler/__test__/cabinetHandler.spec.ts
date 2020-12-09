import { cabinetHandler } from '../cabinetHandler'
import { cabinetRepository } from '../../../repositories/cabinetRepository'
import { CabinetData } from '../../../entities/CabinetData'
import { mocked } from 'ts-jest/utils'
import { ICabinetAttribute } from '../../../db/models/cabinet'
import { Request, Response } from 'express'

jest.mock('../../../repositories/cabinetRepository', () => ({
    __esModule: true,
    cabinetRepository: {
        saveCabinetData: jest.fn()
    }
}))

describe('cabinetHandler', () => {
    it('should response 201 with location header when create cabinet', async () =>{
        const cabinetData = { name: 'some-cabinet', position: 'somewhere' } as CabinetData
        const savedCabinet = { id: 1, name: 'some-cabinet', position: 'somewhere' } as ICabinetAttribute
        const req = {
            body: {
                name: 'some-cabinet',
                position: 'somewhere'
            }
        } as unknown as Request
        const mockSendStatus = jest.fn();
        const res = {
            location: jest.fn().mockReturnValue({
                sendStatus: mockSendStatus
            })
        } as unknown as Response
        mocked(cabinetRepository.saveCabinetData).mockResolvedValue(savedCabinet)

        await cabinetHandler(req, res, null);

        expect(cabinetRepository.saveCabinetData).toHaveBeenCalledWith(cabinetData)
        expect(res.location).toHaveBeenCalledWith(`/cabinets/${savedCabinet.id}`)
        expect(mockSendStatus).toHaveBeenCalledWith(201)
    })
})
