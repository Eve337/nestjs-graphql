import {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from './../utils/utils';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { NewTrack } from './models/Track';

@Injectable()
export class TrackService {
  private readonly client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.TRACK_API,
    });
  }

  public async getTrack(id: string) {
    return await getItem(id, this.client);
  }

  public async getTracks(limit: number, offset: number) {
    return await getItems(limit, offset, this.client);
  }

  public async createTrack(newTrack: NewTrack, token: string) {
    return await createItem(newTrack, token, this.client);
  }

  public async updateTrack(id: string, updatedTrack: NewTrack, token: string) {
    return await updateItem(id, token, this.client, updatedTrack);
  }

  public async deleteTrack(id: string, token: string) {
    return await deleteItem(id, token, this.client);
  }
}
