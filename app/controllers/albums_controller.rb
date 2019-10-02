class AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_params)

    if @album.save
      redirect_to @album
    else
      redirect_to root_path
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def edit
  end

  def index
  end

  def delete_image
    @album_image = ActiveStorage::Attachment.find(params[:id])
    @album_image.purge
    redirect_back(fallback_location: request.referer)
  end

  def album_params
    params.require(:album).permit(:title,images:[])
  end
end
