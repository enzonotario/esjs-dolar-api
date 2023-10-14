CREATE TABLE `cotizaciones` (
	`id` integer PRIMARY KEY NOT NULL,
	`moneda` text,
	`casa` text,
	`compra` real,
	`venta` real,
	`fecha` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `indicadores` (
	`id` integer PRIMARY KEY NOT NULL,
	`tipo` text,
	`valor` text,
	`fecha` text
);
