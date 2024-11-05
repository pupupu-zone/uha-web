use image::ImageFormat;
use mime::Mime;
use std::io::Cursor;

pub async fn compress_image(image_data: &[u8], content_type: &Mime) -> Vec<u8> {
    let format = if *content_type == mime::IMAGE_JPEG {
        ImageFormat::Jpeg
    } else if *content_type == mime::IMAGE_PNG {
        ImageFormat::Png
    } else {
        panic!("Unsupported image format");
    };

    let img = image::load_from_memory_with_format(image_data, format).expect("Invalid image data");

    // Resize the image to a maximum dimension (e.g., 800x800 pixels)
    let resized_img = img.resize(320, 320, image::imageops::FilterType::Nearest);

    // Compress the image and store it in a buffer
    let mut buffer = Cursor::new(Vec::new());
    resized_img
        .write_to(&mut buffer, format)
        .expect("Failed to write image");

    buffer.into_inner()
}
