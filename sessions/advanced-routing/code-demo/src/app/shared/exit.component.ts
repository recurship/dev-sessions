
export interface ExitComponent {
    canDeactivate(): Promise<boolean>;
}
