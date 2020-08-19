const posts = [
  {
    "title": "Come and See",
    "author": "Andy Hunt",
    "date": "AUG 1, 2020",
    "type": "MOVIES",
    "genre": ["WAR", "HORROR"],
    "imageName": "comeAndSee.jpg",
    "description": "Come and See - A season in hell",
    "featureDescription": "Elem Klimov's unflinching portrayal of savagery on the Ostfront.",
    "id": "3",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`

  },
  {
    "title": "Schindler's List",
    "author": "Andy Hunt",
    "date": "JUL 31, 2020",
    "type": "MOVIES",
    "genre": ["WAR", "HORROR"],
    "imageName": "schindlersList.jpg",
    "description": "Schindler's List - bearing witness",
    "featureDescription": "A film about a hit gone wrong, Brendan Gleeson, Colin Farrel and Ralph Fiennces run amok in Bruges. And get to see some nice buildings.",
    "id": "4",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`
  },
  {
    "title": "In Bruges",
    "author": "Andy Hunt",
    "date": "AUG 4, 2020",
    "type": "BOOKS",
    "genre": ["COMEDY"],
    "imageName": "inBruges.jpg",
    "description": "In Bruges? If only...",
    "featureDescription": "A hit gone wrong. Brendan Gleeson, Colin Farrel and Ralph Fiennces running amok in Bruges. All the nice buildings and that. What's not to love?",
    "id": "5",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`
  },
  {
    "title": "Fargo",
    "author": "Andy Hunt",
    "date": "AUG 3, 2020",
    "type": "BOOKS",
    "genre": ["Thriller", "COMEDY"],
    "imageName": "fargo.jpg",
    "description": "Fargo - It's a beautiful day",
    "featureDescription": "If you want a job doing properly, do it yourself. Unless you're Jerry Lundegaard...",
    "id": "6",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`
  },
  {
    "title": "Trainspotting",
    "author": "Andy Hunt",
    "date": "AUG 2, 2020",
    "type": "BOOKS",
    "genre": ["COMEDY"],
    "imageName": "trainspotting.jpg",
    "description": "Trainspotting - In a word, pleasure",
    "featureDescription": "A film about a hit gone wrong, Brendan Gleeson, Colin Farrel and Ralph Fiennces run amok in Bruges. And get to see some nice buildings.",
    "id": "7",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`
  },
  {
    "title": "Come and See",
    "author": "Andy Hunt",
    "date": "AUG 1, 2020",
    "type": "BOOKS",
    "genre": ["WAR", "HORROR"],
    "imageName": "comeAndSee.jpg",
    "description": "Come and See - A season in hell",
    "featureDescription": "Elem Klimov's unflinching portrayal of savagery on the Ostfront.",
    "id": "8",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`
  },
  {
    "title": "Schindler's List",
    "author": "Andy Hunt",
    "date": "JUL 31, 2020",
    "type": "BOOKS",
    "genre": ["WAR", "HORROR"],
    "imageName": "schindlersList.jpg",
    "description": "Schindler's List - bearing witness",
    "featureDescription": "A film about a hit gone wrong, Brendan Gleeson, Colin Farrel and Ralph Fiennces run amok in Bruges. And get to see some nice buildings.",
    "id": "9",
    "meta": {
      "Director": "Martin McDonagh",
      "Year": "2008",
      "Run time": "107m",
      "Budget": "$15m",
      "imdbRating": "7.9",
      "Language": "English"
    },
    "body": `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in lectus ligula. Integer tempus arcu eget pretium convallis. Nunc tincidunt arcu vitae dapibus tincidunt. Donec vitae nulla eget massa condimentum consectetur. Ut neque velit, faucibus sit amet dignissim quis, laoreet eget felis. Vivamus ac tincidunt massa, at fermentum nulla. Etiam nec mi sagittis, ultrices lacus sit amet, ullamcorper sapien. Nunc finibus mi at orci facilisis sagittis. Nam egestas, est eu aliquam congue, leo neque molestie nisl, nec rutrum ex ex a justo.</p>
        <p>Praesent sem purus, ultrices ut dui sed, imperdiet ullamcorper purus. Aenean fringilla sodales orci, eu eleifend libero fringilla vitae. Vestibulum a diam mauris. Curabitur sed tellus in tellus pretium euismod. Sed et dapibus augue, eget lobortis est. Vestibulum eget magna placerat, fermentum metus efficitur, placerat sapien. Nam vitae orci nec dolor auctor gravida sollicitudin quis neque. Pellentesque rhoncus risus id arcu ultricies aliquam. Suspendisse consequat rhoncus nunc, quis ullamcorper felis cursus vitae.</p>
      <p>Cras sit amet elit eu lectus aliquet mollis molestie sit amet magna. Aenean congue tincidunt risus, sed porttitor arcu. Nam urna purus, feugiat ut laoreet id, euismod sed dui. Sed sodales feugiat porttitor. Aliquam nec leo eu nisi laoreet gravida. Sed non suscipit purus, nec semper ipsum. Ut porttitor ultricies nulla. Etiam tempor eros tellus, ac fringilla odio ultrices non. Vivamus mattis non enim et luctus. Ut odio libero, gravida nec turpis id, ullamcorper tincidunt risus. Etiam augue sapien, lobortis ut augue eu, porta sagittis est. Sed efficitur tellus ut molestie pharetra. Donec efficitur, augue tempor convallis maximus, sem magna efficitur risus, non venenatis metus eros quis lacus. Nulla orci mauris, euismod non lacus non, facilisis egestas lacus.</p>
      <p>Duis convallis aliquet arcu, id placerat leo suscipit a. Maecenas quam neque, pharetra in rhoncus vel, laoreet id nibh. Donec efficitur urna urna, eu pharetra neque accumsan eget. Ut non varius ipsum. Pellentesque pharetra ante eros, at imperdiet elit faucibus et. Mauris metus urna, porta consequat iaculis vel, auctor vitae augue. Nunc eget semper urna, a posuere diam. Donec sed magna et tortor ultricies ullamcorper non sed arcu. Nam tincidunt, massa vitae varius feugiat, purus eros consectetur erat, in semper lectus lorem sed urna. Etiam dignissim elit sit amet tempus varius. Etiam fringilla gravida dolor, sed pharetra eros lacinia sed. Nullam sagittis vehicula orci. Sed interdum orci ut augue bibendum, eget sagittis dolor varius. Quisque in ex diam.</p>
      <p>Morbi sed turpis non sapien aliquet iaculis. Nam erat risus, tempor a hendrerit nec, volutpat nec purus. Suspendisse sem turpis, pulvinar sed nunc et, efficitur lacinia metus. Nam ut mauris et velit luctus cursus. Suspendisse potenti. Etiam sollicitudin sapien congue ante fermentum, at feugiat est laoreet. Vivamus auctor felis et nisi feugiat vulputate. Duis sem purus, bibendum nec augue sed, suscipit accumsan tellus. Nunc iaculis purus in est tristique lobortis. Donec et fringilla lectus, id rutrum sem. Cras non ornare diam. Fusce ultrices eros at mollis eleifend. Integer vel congue metus.</p>`
  }
]

export { posts };