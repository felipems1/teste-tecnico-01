/* eslint-disable camelcase */
import { create } from 'zustand'
import { api } from '../lib/axios'

interface Album {
  id: number
  name: string
  year: number
  tracks: Array<{
    id: number
    number: number
    title: string
    duration: number
  }>
}

interface AlbumState {
  albums: Album[] | null
  showModalNewAlbum: boolean
  showModalNewTrack: boolean
  albumId: number

  loadAlbums: () => Promise<void>
  searchAlbum: (search: string) => void

  addAlbum: (album: string, year: string) => Promise<void>
  deleteAlbum: (id: number) => Promise<void>

  addTrack: (
    album_id: number,
    number: number,
    title: string,
    duration: number,
  ) => Promise<void>
  deleteTrack: (id: number) => Promise<void>

  setModalFormNewAlbum: (newValue: boolean) => void
  setModalFormNewTrack: (newValue: boolean, trackId: number) => void
}

export const useStore = create<AlbumState>((set) => {
  return {
    albums: null,
    showModalNewAlbum: false,
    showModalNewTrack: false,
    albumId: 0,

    loadAlbums: async () => {
      await api
        .get('/album', {
          headers: {
            'Content-type': 'application/json',
            Authorization: import.meta.env.VITE_TOKEN,
          },
        })
        .then((response) => {
          set({
            albums: response.data.data,
          })
        })
        .catch((error) => {
          console.error('Ocorreu um erro:', error.message)
        })
    },

    searchAlbum: (search) => {
      if (search) {
        set((state) => ({
          albums: state.albums?.filter((album) =>
            album.name.toLowerCase().includes(search.toLowerCase()),
          ),
        }))
      } else {
        set({
          albums: null,
        })
      }
    },

    addAlbum: async (album, year) => {
      await api
        .post(
          '/album',
          {
            name: album,
            year,
          },
          {
            headers: {
              'Content-type': 'application/json',
              Authorization: import.meta.env.VITE_TOKEN,
            },
          },
        )
        .then(() => {
          console.log('Álbum adicionado.')
        })
        .catch((error) => {
          console.error('Ocorreu um erro:', error.message)
        })
    },

    deleteAlbum: async (id) => {
      await api
        .delete(`/album/${id}`, {
          headers: {
            'Content-type': 'application/json',
            Authorization: import.meta.env.VITE_TOKEN,
          },
        })
        .then(() => {
          console.log('Album excluído.')
        })
        .catch((error) => {
          console.error('Ocorreu um erro:', error.message)
        })
    },

    addTrack: async (album_id, number, title, duration) => {
      await api
        .post(
          '/track',
          {
            album_id,
            number,
            title,
            duration,
          },
          {
            headers: {
              'Content-type': 'application/json',
              Authorization: import.meta.env.VITE_TOKEN,
            },
          },
        )
        .then(() => {
          console.log('Track adicionado.')
        })
        .catch((error) => {
          console.error('Ocorreu um erro:', error.message)
        })
    },

    deleteTrack: async (id) => {
      await api
        .delete(`/track/${id}`, {
          headers: {
            'Content-type': 'application/json',
            Authorization: import.meta.env.VITE_TOKEN,
          },
        })
        .then(() => {
          console.log('Faixa excluída.')
        })
        .catch((error) => {
          console.error('Ocorreu um erro:', error.message)
        })
    },

    setModalFormNewAlbum: (newValue) => {
      set({
        showModalNewAlbum: newValue,
      })
    },

    setModalFormNewTrack: (newValue, albumId) => {
      set({
        showModalNewTrack: newValue,
        albumId,
      })
    },
  }
})
