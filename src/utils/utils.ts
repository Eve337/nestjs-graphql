import { NewTrack } from './../track/models/track';
import { NewAlbum } from './../album/models/album';
import { NewBand } from './../band/models/band';
import { AxiosInstance } from 'axios';
import { NewGenre } from 'src/genre/models/genre';
import { NewArtist } from 'src/artist/models/artist';

export const getItem = async (id: string, axiosClient: AxiosInstance) => {
  try {
    const { data } = await axiosClient.get(id);

    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};

export const getItems = async (
  limit: number,
  offset: number,
  axiosClient: AxiosInstance,
) => {
  try {
    const { data } = await axiosClient.get(`?limit=${limit}&offset=${offset}`);

    data.items = data.items.map((item: { _id: string }) => {
      return { ...item, id: item._id };
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteItem = async (id: string, token: string, axiosClient) => {
  try {
    const { data } = await axiosClient.delete(`/${id}`, {
      headers: { Authorization: token },
    });

    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};

export const updateItem = async (
  id: string,
  token: string,
  axiosClient: AxiosInstance,
  item: any,
) => {
  try {
    const { data } = await axiosClient.put(id, item, {
      headers: { Authorization: token },
    });
    return data ? { ...data, id: data._id } : null;
  } catch (err) {
    console.error(err);
  }
};
export const createItem = async (
  item: NewGenre | NewBand | NewArtist | NewAlbum | NewTrack,
  token: string,
  axiosClient: AxiosInstance,
) => {
  try {
    const { data } = await axiosClient.post('', item, {
      headers: { Authorization: token },
    });

    return { ...data, id: data._id };
  } catch (err) {
    console.error(err);
  }
};
