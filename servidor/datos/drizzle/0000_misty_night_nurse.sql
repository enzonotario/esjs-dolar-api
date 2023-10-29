CREATE TABLE `cotizaciones` (
	`id` integer PRIMARY KEY NOT NULL,
	`moneda` text,
	`compra` real,
	`venta` real,
	`fecha` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `dolares` (
	`id` integer PRIMARY KEY NOT NULL,
	`casa` text,
	`compra` real,
	`venta` real,
	`fecha` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE TABLE `extracciones` (
	`id` integer PRIMARY KEY NOT NULL,
	`moneda` text,
	`casa` text,
	`compra` real,
	`venta` real,
	`fecha` integer DEFAULT (strftime('%s', 'now'))
);
--> statement-breakpoint
CREATE INDEX `cotizaciones_fecha` ON `cotizaciones` (`fecha`);--> statement-breakpoint
CREATE INDEX `cotizaciones_moneda` ON `cotizaciones` (`moneda`);--> statement-breakpoint
CREATE INDEX `dolares_fecha` ON `dolares` (`fecha`);--> statement-breakpoint
CREATE INDEX `dolares_casa` ON `dolares` (`casa`);--> statement-breakpoint
CREATE INDEX `extracciones_fecha` ON `extracciones` (`fecha`);--> statement-breakpoint
CREATE INDEX `extracciones_moneda` ON `extracciones` (`moneda`);--> statement-breakpoint
CREATE INDEX `extracciones_casa` ON `extracciones` (`casa`);