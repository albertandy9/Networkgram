export const user = {
    _id: "64df3c064180b81adfe41d4b",
    firstName: "Albert",
    lastName: "Tandy",
    email: "tandyalbert09e@gmail.com",
    friends: [
      {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Nelson",
        lastName: "Tanago",
        email: "nelson@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
        views: [],
        verified: true,
        profession: "Business Owner",
        createdAt: "2025-05-27T09:33:32.519Z",
        updatedAt: "2025-05-27T09:49:19.475Z",
        __v: 2,
        profileUrl:
          "https://cdn.rri.co.id/berita/Cirebon/o/1736827839279-ChongqingCityPrivateNightTourdenganCruiseatauHotpot/fhci8bt6cdkaiaw.jpeg",
      },
      {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Dustin",
        lastName: "Tananda",
        email: "dustin@gmail.com",
        friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
        views: [
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
          "64df39704180b81adfe41d0b",
        ],
        verified: true,
        createdAt: "2025-05-19T09:27:12.064Z",
        updatedAt: "2025-05-19T06:46:26.798Z",
        __v: 8,
        location: "Cheng Kung, Taiwan",
        profession: "Full-Stack Developer",
      },
      {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Joe",
        lastName: "Cornelius",
        email: "user!@gmail.com",
        friends: ["64df3c064180b81adfe41d4b"],
        views: [],
        verified: true,
        createdAt: "2025-08-18T10:04:59.677Z",
        updatedAt: "2025-08-18T10:09:20.006Z",
        __v: 1,
      },
    ],
    views: [
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
      "64df39704180b81adfe41d0b",
    ],
    verified: true,
    createdAt: "2025-08-18T09:38:14.179Z",
    updatedAt: "2025-08-21T06:46:18.258Z",
    profileUrl:
      "https://images2.alphacoders.com/553/553057.jpg",
    token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
  };
  
  export const friends = [
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Aaron",
      lastName: "Fidelius",
      email: "aaron@gmail.com",
      profession: "Chef",
      profileUrl:
        "https://i.pinimg.com/originals/35/cc/bb/35ccbbb4bbea409ad962c80118c5a4d4.jpg",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Veron",
      lastName: "Efendi",
      email: "ver@gmail.com",
      location: "Jakarta, Indonesia",
      profession: "Accountant",
      profileUrl:
        "https://c4.wallpaperflare.com/wallpaper/670/961/282/dubai-skyline-starry-sky-at-night-ultra-hd-wallpapers-for-android-mobile-phones-tablet-and-laptop-1920×1080-wallpaper-preview.jpg",
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Jesslyn",
      lastName: "Linardi",
      email: "jesslyn!@gmail.com",
    },
  ];
  
  export const requests = [
    {
      _id: "64df3aec4180b81adfe41d32",
      requestFrom: friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      requestFrom: friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      requestFrom: friends[2],
    },
  ];
  
  export const suggest = [
    {
      _id: "64df3aec4180b81adfe41d32",
      ...friends[0],
    },
    {
      _id: "64df39704180b81adfe41d0b",
      ...friends[1],
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      ...friends[2],
    },
  ];
  export const posts = [
    {
      _id: "64e2fe620d7868ecff1a6a86",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Nixon",
        lastName: "Alexander",
        profileUrl:
          "https://images.unsplash.com/photo-1418985991508-e47386d96a71?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25vdyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
        location: "San Jose, USA",
      },
      description: "Hello everyone, I just graduated from Stanford University, check it out!",
      image:
        "https://assets.stanford.edu/i/2000x0/filters:quality(60)/f/103430/3654x2311/f8990da85d/new-sac-homepage-photo.jpg",
      likes: ["64df3c064180b81adfe41d4b"],
      comments: [],
      createdAt: "2025-08-21T06:04:18.297Z",
      updatedAt: "2025-08-21T06:04:18.297Z",
      __v: 0,
    },
    {
      _id: "64e1cdd64baffca670364c8c",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "Lawrence",
        lastName: "Suwandi",
        profileUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2E7G8l2eeYYwRCbMfKUsvjm9r0IG1Bg1Hw&s",
        location: "Surabaya, Indonesia",
      },
      description:
        "Indonesia saat ini berada dalam fase transisi menuju era digital yang semakin matang. Dengan pertumbuhan pengguna internet yang pesat dan penetrasi teknologi yang meluas hingga ke pelosok negeri, berbagai sektor mulai beradaptasi dengan perubahan digital ini. Mulai dari pendidikan, kesehatan, hingga layanan publik, teknologi memainkan peran yang semakin penting dalam kehidupan sehari-hari masyarakat. Salah satu perkembangan yang mencolok adalah meningkatnya penggunaan kecerdasan buatan (AI) dan otomatisasi dalam dunia bisnis. Banyak perusahaan rintisan (startup) lokal yang mulai memanfaatkan teknologi ini untuk meningkatkan efisiensi dan menghadirkan solusi yang relevan bagi masyarakat. Selain itu, konsep kota pintar (smart city) juga mulai diterapkan di beberapa wilayah untuk meningkatkan pelayanan publik dan pengelolaan kota secara berkelanjutan.",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2025-05-20T08:24:54.330Z",
      updatedAt: "2025-05-21T03:23:24.809Z",
      __v: 0,
    },
    {
      _id: "64df437e4a4c0d47b536a002",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Kevin",
        lastName: "Kurniawan",
      },
      description:
        "Pertemanan adalah salah satu aspek penting dalam kehidupan manusia. Dalam keseharian, kehadiran teman dapat menjadi sumber dukungan emosional, tempat berbagi cerita, serta pengingat bahwa kita tidak sendiri menghadapi dunia ini. Di era yang serba cepat dan digital seperti sekarang, pertemanan mengalami pergeseran bentuk dari tatap muka menjadi obrolan daring, dari pertemuan fisik menjadi video call.",
      likes: ["64df424b4a4c0d47b5369f65"],
      comments: ["64e2d1c977e497bd3a0bf67b"],
      createdAt: "2025-03-18T10:10:06.969Z",
      updatedAt: "2025-03-21T02:54:01.806Z",
      __v: 0,
      image:
        "https://storage.googleapis.com/wellnite-prod-image-bucket/webflowarticles/dea2a11294268a366fc7d0b98d3471ee.jpg",
    },
    {
      _id: "64df43714a4c0d47b5369fef",
      userId: {
        _id: "64df3c064180b81adfe41d4b",
        firstName: "Albert",
        lastName: "Tandy",
        profileUrl:
          "https://images2.alphacoders.com/553/553057.jpg",
      },
      description:
        "In the world of basketball, one question never gets old: whos the best player? The answer often depends on who you ask. Some will say Michael Jordan is the ultimate legend. Others believe LeBron James is more complete and physically dominant. And in today’s game, you can’t ignore stars like Stephen Curry, Giannis Antetokounmpo, or Luka Dončić. ",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2025-06-13T10:09:53.009Z",
      updatedAt: "2025-06-21T03:35:18.541Z",
      __v: 0,
    },
    {
      _id: "64df42dc4a4c0d47b5369f8a",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Takefuso",
        lastName: "Kubo",
      },
      description:
        " Japan will win the world cup!",
      likes: ["64df424b4a4c0d47b5369f65"],
      comments: [],
      createdAt: "2025-08-18T10:07:24.023Z",
      updatedAt: "2025-08-18T10:11:00.348Z",
      __v: 0,
      image:
        "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/VEXQZRBECVJK3CIVUSI7CMY5BA.jpg",
    },
    {
      _id: "64df42b04a4c0d47b5369f77",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "Justin",
        lastName: "Hubner",
      },
      description:
        "No, Indonesia will win the world cup!!!",
      likes: [],
      comments: [],
      createdAt: "2025-08-18T10:06:40.339Z",
      updatedAt: "2025-08-18T10:06:40.339Z",
      __v: 0,
    },
    {
      _id: "64df41114a4c0d47b5369f02",
      userId: {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Tony",
        lastName: "Stark",
        profileUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ttKWfOlUUovBgp8SezCQLX0rIVRNjT4Y4Q&s",
      },
      description:
        " What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      likes: ["64df39704180b81adfe41d0b"],
      comments: [],
      createdAt: "2023-08-18T09:59:45.876Z",
      updatedAt: "2023-08-18T10:01:35.333Z",
      __v: 0,
    },
    {
      _id: "64df3ef86c2bd953c7b43193",
      userId: {
        _id: "64df3c064180b81adfe41d4b",
        firstName: "Albert",
        lastName: "Tandy",
        profileUrl:
          "https://images2.alphacoders.com/553/553057.jpg",
      },
      description:
        "Stephen Curry will be the next NBA MVP",
      likes: [
        "64df3aec4180b81adfe41d32",
        "64df424b4a4c0d47b5369f65",
        "64df39704180b81adfe41d0b",
      ],
      comments: [
        "64df41304a4c0d47b5369f0d",
        "64df41b14a4c0d47b5369f4d",
        "64df43e04a4c0d47b536a02a",
      ],
      createdAt: "2025-08-18T09:50:48.398Z",
      updatedAt: "2025-08-21T03:36:36.745Z",
      __v: 0,
      image:
        "https://s.yimg.com/ny/api/res/1.2/mQjTKGUsw.PnBEjI986DvA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ1MQ--/https://s.yimg.com/os/creatr-uploaded-images/2025-03/d8c1f2c0-f994-11ef-bfef-fbad3e160d63",
    },
  ];
  
  export const postComments = [
    {
      _id: "64df43e04a4c0d47b536a02a",
      userId: {
        _id: "64df424b4a4c0d47b5369f65",
        firstName: "User",
        lastName: "One",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "hahahah",
      from: "User One",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [],
      createdAt: "2025-08-18T10:11:44.091Z",
      updatedAt: "2025-08-21T03:37:03.927Z",
      __v: 0,
    },
    {
      _id: "64df41b14a4c0d47b5369f4d",
      userId: {
        _id: "64df39704180b81adfe41d0b",
        firstName: "MTech",
        lastName: "Solutions",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
        location: "Mumbai, India",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "No way",
      from: "MTech Solutions",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [],
      createdAt: "2025-08-18T10:02:25.492Z",
      updatedAt: "2025-08-21T03:27:57.602Z",
      __v: 0,
    },
    {
      _id: "64df41304a4c0d47b5369f0d",
      userId: {
        _id: "64df3aec4180b81adfe41d32",
        firstName: "Akwasi",
        lastName: "Asante",
        profileUrl:
          "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
      },
      postId: "64df3ef86c2bd953c7b43193",
      comment: "Yesirrrrr",
      from: "Akwasi Asante",
      likes: ["64df39704180b81adfe41d0b"],
      replies: [
        {
          userId: {
            _id: "64df39704180b81adfe41d0b",
            firstName: "NBA",
            lastName: "Lovers",
            profileUrl:
              "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
            location: "Mumbai, India",
          },
          from: "MTech Solutions",
          replyAt: "Akwasi Asante",
          comment: "Not easy, hahahah",
          created_At: "2025-08-18T10:01:08.771Z",
          updated_At: "2025-08-18T09:56:38.344Z",
          likes: [],
          _id: "64df41644a4c0d47b5369f24",
        },
      ],
      createdAt: "2025-08-18T10:00:16.352Z",
      updatedAt: "2025-08-18T10:01:14.090Z",
      __v: 1,
    },
  ];