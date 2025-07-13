'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dcb3b88d6e59d70317ffccfac2ed06c6",
"version.json": "d9af103e104f366487753a8033faac5f",
"index.html": "21515433ce34dc71bb6df744ae71fbfa",
"/": "21515433ce34dc71bb6df744ae71fbfa",
"main.dart.js": "bb3c6dea153d0047fd9c7fb9cf565c61",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ed645a51fe21de79aedbedc652f11d81",
"assets/AssetManifest.json": "0d85e2b2fb7d478138c72412cf421d00",
"assets/NOTICES": "a3cfcc9d51c2156c2072b0be19cd79e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b386b6de36c25c6a4197d5f1e6d3ca59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/messages.json": "02d98a696b97093c4616394d58c044e6",
"assets/lib/assets/home_page.png": "ff7fefda6ac2c9f519cab9467adf0cfc",
"assets/AssetManifest.bin": "c9b7f990e467d38002aa42d23b9548ee",
"assets/fonts/MaterialIcons-Regular.otf": "958c9e468e8d0b66ac58b6d0f51d7c7b",
"assets/assets/audio/1.77.mp3": "49540df50fc29c40bbfae68a58559f96",
"assets/assets/audio/1.88.mp3": "3332b0b52a63880e2f8648fb2c63907b",
"assets/assets/audio/1.149.mp3": "d5927abd51b70249afdb854146ab3f6b",
"assets/assets/audio/1.161.mp3": "f33ad8aeaf016b2605a26df45ebbb4e7",
"assets/assets/audio/0.23.mp3": "a9f1f1922bad012ed154d253911e6889",
"assets/assets/audio/0.37.mp3": "6ce2be996b0c24c0cb3f4881b1c46cc6",
"assets/assets/audio/1.203.mp3": "e2eb7c4e2e9508dd37766b58fe78199f",
"assets/assets/audio/0.36.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.22.mp3": "bec4d1cc819187dd0d519f4eb653a47e",
"assets/assets/audio/1.148.mp3": "547b5e06497c42b109a301b45afa9605",
"assets/assets/audio/1.89.mp3": "9a8ac9591eab6c66a28294582b1c10be",
"assets/assets/audio/1.76.mp3": "9209fe51a861759489dedf57a5f2260a",
"assets/assets/audio/1.48.mp3": "fa8e67d2f5637061c6befc5da590d365",
"assets/assets/audio/1.189.mp3": "a42e4f0ccf506bb5fbb98ba6584a5d82",
"assets/assets/audio/1.74.mp3": "4a6545faab8664da89ae5e489f4427c3",
"assets/assets/audio/1.162.mp3": "0f3dbe34d179b4497a488c5f61af1329",
"assets/assets/audio/0.34.mp3": "03e6f211207626257eb85ccbfffeea6d",
"assets/assets/audio/1.214.mp3": "c1c098d1f2bfc8cdaff9ed393d39d604",
"assets/assets/audio/1.200.mp3": "7f1289c7033b1b1eea6dbf681b401fc7",
"assets/assets/audio/1.201.mp3": "1013474f9bf00eae9f2787c3a7233db2",
"assets/assets/audio/1.215.mp3": "dfa7870b5bc3546be6a4ad2b2ae6f83d",
"assets/assets/audio/1.229.mp3": "a681c0d446f5f3b7a3516a2050069ea1",
"assets/assets/audio/0.21.mp3": "8be8858fdfd0662908a3c563e0fb99d4",
"assets/assets/audio/0.35.mp3": "ea00987fac315cb3e21c5267de6c5e3e",
"assets/assets/audio/1.163.mp3": "12308ba0cc2ac0fcd5ddcdc6ec232aab",
"assets/assets/audio/1.75.mp3": "fb7545cccce5b383600e6e6bec9ed15f",
"assets/assets/audio/1.61.mp3": "719ac459779a3d68ed2858bdf0e69af2",
"assets/assets/audio/1.188.mp3": "a1ae42fa874159102384d81c27a63086",
"assets/assets/audio/1.49.mp3": "6c35efff7779cf2d3b81de94ea37ee2d",
"assets/assets/audio/1.198.mp3": "770f8cea39547a795b46a5a3ef104819",
"assets/assets/audio/1.59.mp3": "c6a6dbdae0175fa07e3fbab39933c8ff",
"assets/assets/audio/1.173.mp3": "a7259a5d6258c552eee1af4ee8a08fb7",
"assets/assets/audio/1.8.mp3": "70f69728cc348999cb83a867807b06aa",
"assets/assets/audio/0.19.mp3": "6bd4896f9c1a85f2ed54f5d57b548829",
"assets/assets/audio/0.31.mp3": "4dbc768caaad7039973c148bd6a15746",
"assets/assets/audio/0.25.mp3": "9a94e71ba6884e247dd60397c9a8569f",
"assets/assets/audio/1.211.mp3": "2ea45cdc7b9dd1702bd7c19ec49f3d7b",
"assets/assets/audio/1.205.mp3": "7b5083ff19ea9ccf5a2d8f226fe447f1",
"assets/assets/audio/1.239.mp3": "59faa083ca33600f98b0317a3461726f",
"assets/assets/audio/1.204.mp3": "a1de79abddfd9af2b5b1f4088d86d01b",
"assets/assets/audio/1.210.mp3": "9b127bc31ba4ddbc9feb145b9cfab02b",
"assets/assets/audio/0.18.mp3": "2b143d123e03eacbd4bf592b1756c325",
"assets/assets/audio/1.9.mp3": "25ce1dcb104ca8b06038747c14cc7fdc",
"assets/assets/audio/1.172.mp3": "fe67a7511a4eb2e0ce379135ff82d13f",
"assets/assets/audio/1.166.mp3": "8868f0f9efa82a1f4cb0c09c5d9771b8",
"assets/assets/audio/1.58.mp3": "e0f6076403033546e5210ed26e047a40",
"assets/assets/audio/1.199.mp3": "cb4a989a27b17ace145e3317adccc229",
"assets/assets/audio/1.70.mp3": "0265508f1cf5cbac2d6ce1f810266196",
"assets/assets/audio/1.72.mp3": "59f5973f116325b8e2bb75fac5b55d32",
"assets/assets/audio/1.66.mp3": "3266c5aa11e8a4c17f7c33d325a61f2b",
"assets/assets/audio/1.164.mp3": "092819ffb326e871169705a34a24580f",
"assets/assets/audio/1.158.mp3": "882ba886702debbe1ad65db0204e466b",
"assets/assets/audio/1.99.mp3": "a0575996d9042173e0f7f6ba7d5e1b4e",
"assets/assets/audio/0.26.mp3": "ce59e872d42946c94a8e6df66ed6f49a",
"assets/assets/audio/0.32.mp3": "091abfcd39f19e2e6f47890b548ac42e",
"assets/assets/audio/1.212.mp3": "8163ba8ff70601e988bf45e66a60b890",
"assets/assets/audio/1.213.mp3": "3a2d19868658347b1df94ecb6574159e",
"assets/assets/audio/1.207.mp3": "873d4c956252b2e7bc75fa9bd6935f69",
"assets/assets/audio/0.33.mp3": "6b5a0a3a0c6b4dda85858fc56003ac79",
"assets/assets/audio/0.27.mp3": "2a734559f7ec1059212712aa5f31f3a2",
"assets/assets/audio/1.98.mp3": "0b5fde9176d50a0c9a6f1b8cce34cb17",
"assets/assets/audio/1.159.mp3": "f34b5f3d5bcf2559320fb7c2f6fe5e1e",
"assets/assets/audio/1.165.mp3": "1a9d3ab752b1721fde9b9052a1734474",
"assets/assets/audio/1.73.mp3": "b495eff6402f7f0a4b6da964d242217f",
"assets/assets/audio/1.300.mp3": "53a8673ac7e53b2b42779c1cde148fa5",
"assets/assets/audio/1.28.mp3": "56fc08c5e38f2340d034b463304bd472",
"assets/assets/audio/1.116.mp3": "8e4db0d6cb60437ec3324b301b079ac8",
"assets/assets/audio/1.102.mp3": "4a1bfc2bf9e9a9b54a5c5fdd4d573cc6",
"assets/assets/audio/0.68.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.83.mp3": "fadf2753f1cdd10b9f35da514557129e",
"assets/assets/audio/0.97.mp3": "346e8fa26201be25ad5555d06e115db8",
"assets/assets/audio/1.248.mp3": "401012cb2009afb0de065672d64c72d1",
"assets/assets/audio/1.249.mp3": "cf6fd3cbdccbd7efc38204ce261fc153",
"assets/assets/audio/0.96.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.82.mp3": "d162ed977f817b4101cdbb89368caf81",
"assets/assets/audio/0.69.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.55.mp3": "0b4b0e5d6d8890440fe43a672aa7d1d2",
"assets/assets/audio/0.41.mp3": "8ff8acf3bd8e7f2faf86344e83e176b2",
"assets/assets/audio/1.117.mp3": "9d909ce482823e5d8574b80223bbb74b",
"assets/assets/audio/1.15.mp3": "aad6d84558cdd83a7804878774ebdfe8",
"assets/assets/audio/1.29.mp3": "b61d2650545a90a030002f84fdee1bad",
"assets/assets/audio/1.301.mp3": "fdba629d2bac8e4a00dad28f988b773f",
"assets/assets/audio/1.101.mp3": "72a5e214559237803ff8111a1173a250",
"assets/assets/audio/1.115.mp3": "9ff567af378678f5572369614e1ab02f",
"assets/assets/audio/0.57.mp3": "97b6d702fd0d006c507f0c9b14bf3aba",
"assets/assets/audio/0.43.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.80.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.81.mp3": "011a7b530ed609b7d1713c8df65e6d65",
"assets/assets/audio/0.95.mp3": "447b8a1e5bdf1690bf8d01631299bd94",
"assets/assets/audio/0.42.mp3": "01b872b5f1d00ccdfc5adce02a59a910",
"assets/assets/audio/0.56.mp3": "efb88c8b15deb69950d8cc6643e87a1b",
"assets/assets/audio/1.114.mp3": "134fff56c5f2b5831fd3609112d904d1",
"assets/assets/audio/1.100.mp3": "b78c63b755eeed3a8c294c7556dba3cb",
"assets/assets/audio/1.16.mp3": "c6249b9790ebcfa468dfe1016f3a7485",
"assets/assets/audio/1.12.mp3": "3cce0882693d6510377b95cf6305cf49",
"assets/assets/audio/1.104.mp3": "cf74e20e7baa6aa6c49ffd002a791d85",
"assets/assets/audio/1.110.mp3": "468d2f88841b4189b38a5c737e4ecf1f",
"assets/assets/audio/0.52.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.46.mp3": "3118a8803fbd0fc712b9d5dbee521b79",
"assets/assets/audio/0.85.mp3": "44eb24db35c7d8422fff12d1b291376f",
"assets/assets/audio/0.84.mp3": "fd905fa3f12761a40f54c1d5fc380b43",
"assets/assets/audio/0.90.mp3": "1acf84675f504a06aea2dccfdca77fbe",
"assets/assets/audio/0.47.mp3": "7931b390150cd11239a78a2f8b1603a3",
"assets/assets/audio/0.53.mp3": "3800de7cea27aabedd9f6ad806adc2d9",
"assets/assets/audio/1.111.mp3": "5cd27c7ff36fa1a1353f051588abb458",
"assets/assets/audio/1.105.mp3": "e5a334e205bb3139bf6e9ce839148353",
"assets/assets/audio/1.13.mp3": "06df35bae168474e7cf3ec9c7724c673",
"assets/assets/audio/0.4.2.mp3": "bc347512f2d8ebcb6d429ec01502755a",
"assets/assets/audio/1.11.mp3": "3df600bb341103ba5c2b2388e40e6a21",
"assets/assets/audio/1.39.mp3": "0d6b5cc3df97d440261f031f6342aeed",
"assets/assets/audio/1.113.mp3": "45a4e34b4113dd54e6b93d988c21398d",
"assets/assets/audio/1.107.mp3": "236e31580a5d937cb825d584cad944a0",
"assets/assets/audio/0.79.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.45.mp3": "34cd226af595362fac210bddf0fa3616",
"assets/assets/audio/0.51.mp3": "69dfb535932ff2ec1c4350dcae408d56",
"assets/assets/audio/0.86.mp3": "7fcaaf4f1fa502c5a65af3ac8ee35797",
"assets/assets/audio/0.92.mp3": "3bff3a20421859c533b6ad9c61a384b8",
"assets/assets/audio/0.93.mp3": "eea9d760317ef610b78150b50a4537f4",
"assets/assets/audio/0.87.mp3": "e3e518a3ff52a8e359357a9fe17efcfc",
"assets/assets/audio/0.50.mp3": "51943e42221c3aba99a64183914c028c",
"assets/assets/audio/0.44.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.78.mp3": "69dfb535932ff2ec1c4350dcae408d56",
"assets/assets/audio/1.106.mp3": "cdbb2972a28ad389b86844746b2ea424",
"assets/assets/audio/1.112.mp3": "672a9fcf746cb945486470715a673568",
"assets/assets/audio/0.9.mp3": "4378c6f3938fe4ed5210fe85120cecbb",
"assets/assets/audio/1.10.mp3": "008ad2b4204cdb377a4cf7b206bff56b",
"assets/assets/audio/0.4.1.mp3": "ab2bb9c329ce84f752549fea1a9d15ba",
"assets/assets/audio/1.35.mp3": "4480f58b41ec40b862638fcb91cbd2a6",
"assets/assets/audio/1.21.mp3": "1ff558483d0bc04d1cbc106d383bd44a",
"assets/assets/audio/1.137.mp3": "85671b485603e4b317ad73c6976d6d1f",
"assets/assets/audio/1.123.mp3": "3f90ab1ea1ca7cbbf2a25318bc61cb9d",
"assets/assets/audio/0.61.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.75.mp3": "c85335de3513c8d6c958e8663e9845af",
"assets/assets/audio/0.49.mp3": "a0f789384311dd20ef00663360be0600",
"assets/assets/audio/1.254.mp3": "3af9b5cb008d83da5e82d52ffbb19881",
"assets/assets/audio/1.240.mp3": "e0f18f1a254dfedc12b583226544d4b6",
"assets/assets/audio/0.60.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/1.20.mp3": "7d287d696147d74e2199d195d15b6715",
"assets/assets/audio/0.5.mp3": "0fbc4906095a2fd49913b5bf0ff0c640",
"assets/assets/audio/0.7.mp3": "917325d42f7069a6a57c45b44c62ed4e",
"assets/assets/audio/1.22.mp3": "faa8f07cb3dd5f370a7cf66a36b73252",
"assets/assets/audio/1.36.mp3": "8fb98622c19940253c4f8f1f3b7066fc",
"assets/assets/audio/1.108.mp3": "c55bb542b889597d435995e471b66b08",
"assets/assets/audio/1.120.mp3": "a9e24566b6f3bf53d9f0b8c6c51f3940",
"assets/assets/audio/1.134.mp3": "0fe35646a5a6f112b9c29d02c0c1845c",
"assets/assets/audio/0.76.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.62.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/1.242.mp3": "4cc244d9b057663711f9bdb4c958b933",
"assets/assets/audio/1.243.mp3": "3cca39f73974043a93b6165950146b3e",
"assets/assets/audio/0.88.mp3": "4707ac5938c869a3766fd5e843f961ab",
"assets/assets/audio/0.63.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.77.mp3": "89c911bd131fd6be8f327a6f20964941",
"assets/assets/audio/1.121.mp3": "75a1881049b1068bd74ed7a6fa08096f",
"assets/assets/audio/1.37.mp3": "8c2645860f1f002b483908fcfc57ca91",
"assets/assets/audio/1.23.mp3": "f171ec80a971c716b3ff0964940a5288",
"assets/assets/audio/0.6.mp3": "98034d974323ac603b9d1a38a2a48745",
"assets/assets/audio/1.33.mp3": "4f8f8c03f1139e89d67b87b644d2ea65",
"assets/assets/audio/0.2.mp3": "f76f56eabf3fe9933db915e7603cebc5",
"assets/assets/audio/1.125.mp3": "1386ac87dd0db2301ad0592d6a9d8672",
"assets/assets/audio/1.119.mp3": "27c140ec1ec9e34424f62ff6371a8fc0",
"assets/assets/audio/0.73.mp3": "cb35b8cb0c325ae1d68446da97217fdb",
"assets/assets/audio/0.67.mp3": "bce12e130ca42e8bab9659d44e22265d",
"assets/assets/audio/1.253.mp3": "8475f52617f6b9ea6d02e017f12870a8",
"assets/assets/audio/0.98.mp3": "070e03c3ebda8cb82c08ae5bec287f86",
"assets/assets/audio/1.247.mp3": "fa34546dbf34cddf4ebd9ec7eff6b6c0",
"assets/assets/audio/1.246.mp3": "d87410979fc4f5988a75eaec77484c2f",
"assets/assets/audio/0.99.mp3": "ba61917c413482467e0297c253341d59",
"assets/assets/audio/1.252.mp3": "3b77b110b9291f7f8643234f522f0e3d",
"assets/assets/audio/0.66.mp3": "e70b751966afae05712d9c2e101b43b0",
"assets/assets/audio/0.72.mp3": "5ff039bac355cd72cba7ab80a596ef57",
"assets/assets/audio/1.130.mp3": "acd9962f39aba2743b65fa90e6bd3905",
"assets/assets/audio/1.124.mp3": "6596dd1d7892e08e6169746920e17282",
"assets/assets/audio/0.3.mp3": "45123bc08e0c86c6e34fd5923c7fdfb6",
"assets/assets/audio/1.32.mp3": "2edcb9377e866b3a8a158a3d5d4b42db",
"assets/assets/audio/1.26.mp3": "16b613737490fdb815c96a58538d1fca",
"assets/assets/audio/1.24.mp3": "405481bf57968a8e3f7be40e483158ff",
"assets/assets/audio/0.1.mp3": "7a58d1fdd12921a6bb24341810a168a1",
"assets/assets/audio/1.18.mp3": "e706c808811a2d748f24ccfcec60308f",
"assets/assets/audio/1.126.mp3": "abc06c8afdb84cc9510221831fcf1142",
"assets/assets/audio/0.64.mp3": "1e08cb23d9f538e4b711b6eebc6a54d5",
"assets/assets/audio/0.70.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/1.244.mp3": "5f0925667497cb6399425b4fbcc3c144",
"assets/assets/audio/1.245.mp3": "f18feafd7ab9eed8d6c3f0195c583545",
"assets/assets/audio/0.71.mp3": "b50e1c6339c62d3c255e811ca3771227",
"assets/assets/audio/0.65.mp3": "faea298b2ba1072198ae927967a8900e",
"assets/assets/audio/0.59.mp3": "6ee30cd3da487f1aa69f6a3a15e60f47",
"assets/assets/audio/1.133.mp3": "4673083902eb22074d34b3a67ea28c57",
"assets/assets/audio/1.19.mp3": "a030ca4458d1b44d83ff4e3d0b5ed310",
"assets/assets/audio/1.25.mp3": "57112df89547009968ece9c1d78c6b13",
"assets/assets/audio/1.31.mp3": "e0467a1064f1428d835aaeaae623c0cc",
"assets/assets/audio/1.56.mp3": "70c58ab318c157ee0cb2165d27b1cbb7",
"assets/assets/audio/1.197.mp3": "4d634e00b1640e71329344477ec617c9",
"assets/assets/audio/1.183.mp3": "18b324a951dd7d925b10e74d43073109",
"assets/assets/audio/1.95.mp3": "ba88ae37b6e6c3e3542492bbecf4e64c",
"assets/assets/audio/1.154.mp3": "825e271a31fea551ced80c0206a642fc",
"assets/assets/audio/1.140.mp3": "b5741291753bfcbeec75a1f1e3eca9a5",
"assets/assets/audio/1.7.mp3": "dfd35aecb305eff4cd6ed493114e0ed3",
"assets/assets/audio/0.16.mp3": "59ff60689dcad263df95ff310c6b8a99",
"assets/assets/audio/1.236.mp3": "f378f4de054e08ceedd32646418987f7",
"assets/assets/audio/1.237.mp3": "3ee5fd6a734a5536378797b588e16681",
"assets/assets/audio/1.223.mp3": "1ebd3ed8ea47e09660dc9d4018c95b1e",
"assets/assets/audio/0.17.mp3": "12cf72e33fccbd6a0212a72ab2ac964e",
"assets/assets/audio/1.141.mp3": "61df1c776de8e5a03ae0fd27ed11b81f",
"assets/assets/audio/1.80.mp3": "dccbae7980281d611e6ee93d6a858f12",
"assets/assets/audio/1.155.mp3": "4e27b5666e6dbcb79a61ebb1130d278e",
"assets/assets/audio/1.169.mp3": "9b329937f15b14242b5f98c6faef216d",
"assets/assets/audio/1.182.mp3": "f8d3193f917bdad499a0e88ea135f393",
"assets/assets/audio/1.43.mp3": "c8987f48a01c90a3ac9be9e28d0192e0",
"assets/assets/audio/1.57.mp3": "fe5a6ff0a45bda47838f7d1ded781e70",
"assets/assets/audio/1.69.mp3": "9aee12ca1d49bf70064246a134eaacf4",
"assets/assets/audio/1.41.mp3": "c4334059d1708749e4266ed1da111f49",
"assets/assets/audio/1.180.mp3": "92b6a566e82ec635f9aa2d3a11f65081",
"assets/assets/audio/1.55.mp3": "e76a88458e3efd5b88b300e5844900e6",
"assets/assets/audio/1.194.mp3": "2b346293c6164ba67753a75c527b2f43",
"assets/assets/audio/1.82.mp3": "fff3591537a034e3d2b64e81d93167d9",
"assets/assets/audio/1.143.mp3": "b42edb6300a2d6cee900949365986344",
"assets/assets/audio/1.157.mp3": "470280e258bde3bb3dad3d91bc3d6cc3",
"assets/assets/audio/1.4.mp3": "f46bc25656e48e4bb6e89137d5779784",
"assets/assets/audio/0.15.mp3": "db8a957acb4d91fc06d011628bd39f8c",
"assets/assets/audio/0.29.mp3": "a8b65469f3d4f21a90e1b28c4edeb141",
"assets/assets/audio/1.209.mp3": "78f6e4ec30d9792ac712b95484808a01",
"assets/assets/audio/1.235.mp3": "44cadaf998aa7532a1ce49b387c808e2",
"assets/assets/audio/1.221.mp3": "e330bcc355f19fbce30926b2b4be0db3",
"assets/assets/audio/1.220.mp3": "4f1c2ab07c8ff1f3b5e58abb95f45e7d",
"assets/assets/audio/1.234.mp3": "a264030583aec95115dc2333879cf176",
"assets/assets/audio/1.208.mp3": "00ce342a626ec532f438e5275650567d",
"assets/assets/audio/0.28.mp3": "a79fd3c0b1734de01312997cbee6796f",
"assets/assets/audio/0.14.mp3": "44fa27114b2ad1675494ab96392677dd",
"assets/assets/audio/1.5.mp3": "ed80e1513eadc712f2fa236b891efe35",
"assets/assets/audio/1.156.mp3": "e94d0b343fb6f880ae360f4d85c9ba32",
"assets/assets/audio/1.97.mp3": "c3665771a1c54116e7f1f476defaa58e",
"assets/assets/audio/1.142.mp3": "736bf0ba81e3b24bde5851d7a60a4268",
"assets/assets/audio/1.83.mp3": "73f1fe1cfc3ed693abdcc07518dd28c2",
"assets/assets/audio/1.195.mp3": "2fc43cb5fcff76c55240518bc7d3f8a1",
"assets/assets/audio/1.54.mp3": "b9439344adac99bfff7fb98f9de21868",
"assets/assets/audio/1.185.mp3": "06be75d6f404a4ae0c36ca782392029a",
"assets/assets/audio/1.44.mp3": "914c8523208c6298ee4b2a80e7675f37",
"assets/assets/audio/1.191.mp3": "ae8abf4865283fbf057eeac6bb41d479",
"assets/assets/audio/1.78.mp3": "989514bc29af8687c9829899954ac399",
"assets/assets/audio/1.146.mp3": "c51ac8336eb4a8596a6195ed2766931c",
"assets/assets/audio/1.87.mp3": "a01ba1da9a805e811e36e35b553fb43f",
"assets/assets/audio/1.152.mp3": "30d0bebceda1ecdece79b4c2ed69c694",
"assets/assets/audio/1.1.mp3": "35fddc3ca228f0ceb7a9eb52cd0cbf89",
"assets/assets/audio/0.38.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.10.mp3": "5c90368dd8225535f51fa4a296dd6ff8",
"assets/assets/audio/1.224.mp3": "1115430c0c035f869f733f28a2308654",
"assets/assets/audio/1.218.mp3": "fe7c6276cc114c8c4a9e471272bb2050",
"assets/assets/audio/1.225.mp3": "0670c12da5dea4bab90b7067108be4b6",
"assets/assets/audio/1.231.mp3": "34f9769c411ba9e453adf26a3ba48ccf",
"assets/assets/audio/0.11.mp3": "4b0c94b27bd0a94e927a03117609d91a",
"assets/assets/audio/0.39.mp3": "8258d950db2d71d5b545270ebb63f5fb",
"assets/assets/audio/1.0.mp3": "5015bf8a4e9a63997a03369e1e5c5135",
"assets/assets/audio/1.92.mp3": "0a348b7d4049d9370fdcac40277be927",
"assets/assets/audio/1.153.mp3": "c0baf029e1f3c398ae95d1077bf2d851",
"assets/assets/audio/1.86.mp3": "8aacf2f358cef28909b6d0c4de9b03f5",
"assets/assets/audio/1.147.mp3": "5c1ffc479e33ecd38ac1b55e1532b190",
"assets/assets/audio/1.79.mp3": "29a80f4d70a5c39ff5222589351c82e0",
"assets/assets/audio/1.51.mp3": "b660a39f6ea71a61376c724a213d171e",
"assets/assets/audio/1.45.mp3": "de7fd217e4aaa7d2c34a5009792d5533",
"assets/assets/audio/1.184.mp3": "cb311240921ca073dcc3135323bba2e2",
"assets/assets/audio/1.192.mp3": "f7e9d302e8cbab99d48577640ce93b6b",
"assets/assets/audio/1.53.mp3": "0789374876e1addcb22c355c93ecf264",
"assets/assets/audio/1.47.mp3": "61b70dd7a991a832528b6162293c1b28",
"assets/assets/audio/1.151.mp3": "7ebace410556d2c526564d2aab769f8d",
"assets/assets/audio/1.90.mp3": "82fe89425daff8697cd96e47ee37d42f",
"assets/assets/audio/1.145.mp3": "461ba6291c7a8a9f0e11d1f1fcf7877f",
"assets/assets/audio/1.84.mp3": "2ebe0f88c9c1a74abca7b3b7c9fc6b5c",
"assets/assets/audio/1.179.mp3": "afb91ef1b541a78c4d95a4c2c3530592",
"assets/assets/audio/1.2.mp3": "6525b71aaca6366b86040764b2d4b4e2",
"assets/assets/audio/0.13.mp3": "3837356872c6f0d0aa88aa721eadfca3",
"assets/assets/audio/1.227.mp3": "af9241d744897f9f74a9b01ed65ccfb1",
"assets/assets/audio/1.233.mp3": "54e7d656243fcd7f5dcc5bebd37020c8",
"assets/assets/audio/1.226.mp3": "76b7c2661a10f1bae23706de49338613",
"assets/assets/audio/0.12.mp3": "1d2a64de3bf313c2fbe87191744415ba",
"assets/assets/audio/1.3.mp3": "6525b71aaca6366b86040764b2d4b4e2",
"assets/assets/audio/1.178.mp3": "de52b47bce55cf33ef2ebdf0af4f1f30",
"assets/assets/audio/1.144.mp3": "28989e714a59a1e8e9804085b8d67443",
"assets/assets/audio/1.91.mp3": "2a17c58b23d5482d68d756dea534fe29",
"assets/assets/audio/1.150.mp3": "f9ae8a4cdedcda7f25f4adf6467dda19",
"assets/assets/audio/1.46.mp3": "694917550ec9defd2cb07cad4604c7a0",
"assets/assets/audio/1.187.mp3": "989f50b18aa85a7cb15ef1917744e588",
"assets/assets/audio/1.52.mp3": "cbf0519aaac9ba26b65a9d3fc349db6b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
