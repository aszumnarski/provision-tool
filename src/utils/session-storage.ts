const setSessionStorage = async (key: string, value: any) => {
  return new Promise<void>((resolve) => {
    sessionStorage.setItem(key, JSON.stringify(value));
    resolve();
  });
};

const getSessionStorage = async (key: string) => {
  return new Promise((resolve) => {
    const value = sessionStorage.getItem(key);
    resolve(value ? JSON.parse(value) : null);
  });
};

export const useFormValues = (values?: any) => {
  const key = "FORM_VALUES";

  if (values) {
    const old = sessionStorage.getItem(key);
    const parsed = old ? JSON.parse(old) : {};
    sessionStorage.setItem(key, JSON.stringify({ ...parsed, values }));
  }

  const updated = sessionStorage.getItem(key);
  return updated ? JSON.parse(updated) : null;
};

export const useAsyncFormValues = async (values?: any) => {
  const key = "FORM_VALUES";

  if (values) {
    const old = (await getSessionStorage(key)) || {};
    await setSessionStorage(key, { ...old, ...values });
  }

  const updated = await getSessionStorage(key);
  return updated;
};
