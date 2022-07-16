import { NewBand } from './models/band';
import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from './../utils/utils';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class BandService {
  private readonly client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.BAND_API,
    });
  }

  public async getBand(id: string) {
    return await getItem(id, this.client);
  }

  public async getBands(limit: number, offset: number) {
    return await getItems(limit, offset, this.client);
  }

  public async createBand(newBand: NewBand, token: string) {
    return await createItem(newBand, token, this.client);
  }

  public async updateBand(id: string, updateBand: NewBand, token: string) {
    return await updateItem(id, token, this.client, updateBand);
  }

  public async deleteBand(id: string, token: string) {
    return await deleteItem(id, token, this.client);
  }
}
