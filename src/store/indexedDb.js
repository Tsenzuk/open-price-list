const DATABASE_NAME = 'OpenPriceList';
const DATABASE_VERSION = 1;
const PRODUCTS_COLLECTION_NAME = 'products';

export function getProductsDB() {
  return new Promise((resolve, reject) => {
    const dbReq = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    dbReq.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore(PRODUCTS_COLLECTION_NAME, { autoIncrement: true });

      resolve(db);
    };

    dbReq.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db);
    };

    dbReq.onerror = (event) => {
      reject(new Error(`error opening database ${event.target.errorCode}`));
    };
  });
}

export function getAllProducts() {
  return getProductsDB()
    .then((db) => new Promise((resolve, reject) => {
      const transaction = db.transaction([PRODUCTS_COLLECTION_NAME], 'readonly');

      const store = transaction.objectStore(PRODUCTS_COLLECTION_NAME);

      const req = store.openCursor();
      const allProducts = [];

      req.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor !== null) {
          allProducts.push(cursor.value);
          cursor.continue();
        } else {
          resolve(allProducts);
        }
      };

      req.onerror = (event) => {
        reject(new Error(`error getting note 1 ${event.target.errorCode}`));
      };
    }));
}

export function getSingleProduct(id) {
  return getProductsDB()
    .then((db) => new Promise((resolve, reject) => {
      const transaction = db.transaction([PRODUCTS_COLLECTION_NAME], 'readonly');
      const store = transaction.objectStore(PRODUCTS_COLLECTION_NAME);

      const req = store.get(id);
      req.onsuccess = (event) => {
        resolve(event.target.result);
      };

      req.onerror = (event) => {
        reject(new Error(`error getting note 1 ${event.target.errorCode}`));
      };
    }));
}

export function addSingleProduct(product) {
  return getProductsDB()
    .then((db) => new Promise((resolve, reject) => {
      const transaction = db.transaction([PRODUCTS_COLLECTION_NAME], 'readwrite');
      const store = transaction.objectStore(PRODUCTS_COLLECTION_NAME);

      store.add(product);

      transaction.oncomplete = () => {
        resolve(product);
      };

      transaction.onerror = (event) => {
        reject(new Error(`error storing note ${event.target.errorCode}`));
      };
    }));
}

export function delSingleProduct(id) {
  return getProductsDB()
    .then((db) => new Promise((resolve, reject) => {
      const transaction = db.transaction([PRODUCTS_COLLECTION_NAME], 'readwrite');
      const store = transaction.objectStore(PRODUCTS_COLLECTION_NAME);

      store.delete(id);

      transaction.oncomplete = () => {
        resolve();
      };

      transaction.onerror = (event) => {
        reject(new Error(`error in cursor request ${event.target.errorCode}`));
      };
    }));
}

export default getProductsDB;
