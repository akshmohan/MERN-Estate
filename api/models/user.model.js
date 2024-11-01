import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required: true
  },
  avatar: {
    type : String,
    default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAMFBMVEXk5ueutLfp6+y4vsCqsLTd4OHg4+S2u76nrrHAxcfFycva3d68wcSzuLvLz9HR1dZLOKU8AAAD4klEQVR4nO2cyXLDIAxAjVi8gOH//7bGSdM4cROQHMmZ4Z06Pb2RJcSarms0Go1Go9FoNBqNRqMhAgB01nufvMt/nhabJmUGkxkGM0/JSRvtAT4GZdSGQY3JniyyYMOsdjBqHk/lavWw53mNbDhLEoCbzP+ea2CjtOMK+Pm1aEafIQXie89MkvbsxjJRNQhnAIRC0SVbJ8kEcLrUM6uOgqblEV0TYJSKKpTm6C2qUUYVCqv+HpkRwFd7Loi0q5pq+sUE/u8P04tW/0I1sava+iRd6S2zKIw40aX+mU1R5XSBuahqh9K7oPJ2VYcWXVQ5TTGD/p8pZ6cCvOdC4BPtPCGkSs2eTRQmUkwNY/fHNNI7U76Jqu1JpmpmG1ITTVQNbKaUMWo1ZUvUNzsRb2EbUV2giSrFtqAiFtQy9eMy3d3Wq2HmMiWm6QJXnpJNuaZT32NK//psplRRtjz9otrvqZ+fazx1dVt8O7D1qK/p+12izqXYlifU+alhm59S5/yabxuFNu0zE5soRFpMGdemtM7PuTEJpETlPEIByjhl+LZQMpSY8u6f4xfSfEvoCxY7nzI9r2gH6N7Pf3iGFNXsosjyZy78C5hDiUHkkB9TVJwb539A/R76zH3A96taO6iKJOmFOlXuMR+vyn8MvVEtPjsXjWimeE0ll6NXii7LKaOFqn6j6t62ACN9Ae1Gerwi+0Av/uV/AYi9+Ve2F7oltQ+4qIcdVzOE5M4kumKfzn3NHE9QSDsAuDQF3a/oMC3RPF04b8Bia6331nUntszABmmbJxYlZ31KMX/6ZdJq1nFg1mGcYsrxPYXzIuFzcs5qfRqxLajLv/owRumUXSxj3vd526NyiKfUCd0+7WwKpuYW4jD00bPf6ru8MqlenSypwBzaRNrrizxdC3IvQl09/YvsEPznZSE9vS3CuCodP5sE4DVd8+o6f3KKZcPefAkv+6FpFtjxgO++ddWfWK5Sz0v+cR2PPpo6LkEfVY/eT/1IQK+u45F9i3yV6zVHZSv4oyvpkYMW2UA9eS7AHLGvij96qKKnt6yR1uOLmamvJ7GPNqoxNNWKB4UHQEkA/JsNFPiBlXYZvp4e2VpJR+NIVdz390xVfwfuhooj397DgJivMI34j9Q/SoDE/+0ziMeTIp6q/vGk0LfPVA5VhAeFVCofTzI3py01QaXfLidQczuVd2LyrFpRUzIj1M20uPw51iMvKb//Q36rQ6X09NKLdPx7Cgcq8Y+vVOkv/cj1pxtlplU/cvIZCq/RO2nP4le+AnP9J8ouKAvNTDeUPfY5QUEVNtTYa3EKL/7CCSgzbTTOxg9RuDPIovZyNwAAAABJRU5ErkJggg=="
  }
},
{timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;