const purgeIndexedDB = async (): Promise<void> => {
	const databases = await window.indexedDB.databases();

	for (const db of databases) {
		try {
			if (!db?.name) {
				continue;
			}

			await new Promise<void>((resolve, reject) => {
				const request = window.indexedDB.deleteDatabase(db.name!);

				request.onerror = () => {
					reject(new Error(`Failed to delete database ${db.name}`));
				};

				request.onsuccess = () => {
					resolve();
				};

				request.onblocked = () => {
					console.warn('Database deletion blocked:', db.name);
					// Resolve anyway since we can't do much about blocked databases
					resolve();
				};
			});
		} catch (err) {
			console.error('Error processing database:', db.name, err);
		}
	}
};

export default purgeIndexedDB;
