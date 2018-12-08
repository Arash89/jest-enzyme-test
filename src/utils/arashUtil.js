export const areYouWell = (mode) => {
    return mode ? "Well" : "Not so well";
};

export const ArashGet = (pages, setRecords) => {
    let wholePages = [];
    let i = 0;
    pages.map((page, index, arr) => {
      i++;
      fetch(`https://reqres.in/api/users?page=${page}`)
        .then(response => response.json())
        .then(data => {
          wholePages = [...wholePages, ...data.data];
          
          if (i === arr.length) {
            setRecords(wholePages)
          };
          return wholePages;
        });
    });
  };

  export async function ArashGet2(page) {
    let wholePages = [];
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    let data = await response.json();
    return data;
  }


  export function ArashGet3 (pages, setRecords)  {
    let wholePages = [];
    let response = "";
    let data = "";
    let i = 0;

    pages.map(async (page, index, arr) => {
      i++;
      response = await fetch(`https://reqres.in/api/users?page=${page}`);
      data = await response.json();
        wholePages = [...wholePages, ...data.data];
        
        if (i === arr.length) {
          setRecords(wholePages)
        };
        return wholePages;
    });
}
