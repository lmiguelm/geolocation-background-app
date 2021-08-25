import ReactNativeForegroundService from '@supersami/rn-foreground-service';

export function addTaskForeground(taskId, callback, settings = {}) {
  const {delay = 10000, loop = true} = settings;

  ReactNativeForegroundService.add_task(() => callback(), {
    delay,
    onLoop: loop,
    taskId,
    onError: e => console.log(e),
  });
}

export function startForegroundService(id, title, message) {
  ReactNativeForegroundService.start({
    id,
    title: title ?? 'Controle de entrega',
    message: message ?? `Em rota de entrega da carga nº ${id}`,
  });
}

export function stopForeground() {
  ReactNativeForegroundService.stop();
}

export function closeTask() {
  ReactNativeForegroundService.stop();
  ReactNativeForegroundService.remove_all_tasks();
}
