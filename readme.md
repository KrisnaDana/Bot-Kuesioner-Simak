# Bot Kuisioner Simak

Bot for Kuisioner Simak Universitas Udayana.

## Requirements

- IMISSU Account.
- Internet Connection.
- Browser.

## Run the bot

- Login to IMISSU website.
- Open questionnaire page.
- Select a type of questionnaire.
- Copy source code from file that name of the file suitable with type of questionnaire. Example: **Kuesioner Belajar Mengajar** using a copy of source code from **`Kuesioner-Belajar-Mengajar.js`** file.
- Change **`let input`** value on source code. It necessary for input choice on questionnaire, read **Usages** below for more information (optional).
- Open developer console with right click on the webpage and click **`Inspect`** or use this keyboard shortcut : **`Cmd + Option + J`** (on a Mac) or **`Ctrl + Shift + J`** (on Windows).
- Paste the source code on the console.
- Click **`Enter`** on the keyboard.

## Usages

Below is a list of values that can be used for **Kuesioner Belajar Mengajar** and **Kuesioner Layanan** :

- **`let input = 1;`** for "Sangat Buruk" choice.
- **`let input = 2;`** for "Buruk" choice.
- **`let input = 3;`** for "Cukup" choice.
- **`let input = 4;`** for "Baik" choice.
- **`let input = 5;`** for "Sangat Baik" choice.

Below is a list of values that can be used for **Kuesioner Visi Misi** and **Potret Visi Misi** :

- **`let input = 1;`** for "Iya" choice.
- **`let input = 2;`** for "Tidak" choice.
- **`let input = 3;`** for "Tidak Tahu" choice.

## Notes

- This bot only works on multiple choice question.
