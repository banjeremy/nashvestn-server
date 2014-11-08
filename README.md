## NashVesTN
=====================
### Code Badges
- build status icon
- coverage status icon

### Screenshots
![Image1](https://raw.githubusercontent.com/banjeremy/nashvestn-server/master/docs/screenshots/one.jpg)
![Image2](https://raw.githubusercontent.com/banjeremy/nashvestn-server/master/docs/screenshots/two.jpg)

### Description
forthcoming

### Models
```
**User Model**
-
```

```
**Donee Model**
-
```

```
**Patron Model**
-
```

```
**Donation Model**
-
```

### Database
```
**User Collection**
- name
- email
- role
- patron

Auth
- hashedPassword
- provider
- salt
- facebook
- google
```

```
**Donee Collection**
- alias
- name
- email
- createdOn
- modifiedOn
- createdBy
- active
- photo
- story
- skills
- goal
- updates
- donations
```

```
**Patron Collection**
- name
- userId
- createdOn
- modifiedOn
- lastLogin
```

```
**Donation Collection**
- doneeId
- patronId
- programId
- amount
- date
```
### Features
- [x] MEAN Stack: MongoDB (with Mongoose), Express, Angular, & Node
- [x] Web Admin Dashboard (for administrators)
- [x] Mobile Companion App: Ionic & Cordova (for patrons)
- [x] QR code reader
- [x] Payment processing
- [x] Social login
- [ ] Report generation
- [ ] Feature 8
- [ ] Feature 9
- [ ] Feature 10

### Running Tests
```bash
$ npm install
$ npm test
```

### Contributors
- [Melanie L. Fryman](https://github.com/mlfryman)
- [Brian Hiatt](https://github.com/bchiatt)
- [Jeremy Jones](https://github.com/banjeremy)
- [Kayla Jones](https://github.com/kaylalynjones)
- [Sarah Pearson](https://github.com/SarahMPearson)
- [Joy Pratt](https://github.com/JoyP)
- [Jessica Raines](https://github.com/jessicafraines)
- [Gregg Reece](https://github.com/undeadfish)
- [Shruti Sharma](https://github.com/shrutijalewar)

### License
- [MIT](LICENSE)
