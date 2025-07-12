<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "$lib/components/ui/card/index.js";
	import { ArrowLeft, Lock, Eye, EyeOff, AlertCircle } from '@lucide/svelte';
	import { supabase } from '$lib/supabase.js';
	import type { PageData } from './$types';
    import { Toaster, toast } from 'svelte-sonner'

	
	export let data: PageData;
	
	let password = '';
	let confirmPassword = '';
	let showPassword = false;
	let showConfirmPassword = false;
	let isLoading = false;
    let email = '';
	
	function sendNewResetLink() {
        isLoading = true;
		supabase.auth.resetPasswordForEmail(email, { redirectTo: `https://www.eko-app.com/auth/reset-password` })
			.then(() => {
                toast.success('Password reset link sent to your email');
                isLoading = false;
			})
			.catch((error) => {
				console.error('Error sending password reset link:', error);
				toast.error('Failed to send password reset link. Please try again.');
                isLoading = false;
			});
	}
	
	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}
	
	function toggleConfirmPasswordVisibility() {
		showConfirmPassword = !showConfirmPassword;
	}
	
	function handleSubmit(event: Event) {
		event.preventDefault();
		
		if (password !== confirmPassword) {
			toast.error('Passwords do not match');
			return;
		}
		
		if (password.length < 8) {
			toast.error('Password must be at least 8 characters long');
			return;
		}
		
		isLoading = true;
		
		// Update password using Supabase
		supabase.auth.updateUser({ password })
			.then(({ error }) => {
				isLoading = false;
				if (error) {
					console.error('Password update error:', error);
					toast.error('Failed to reset password. Please try again.');
				} else {
					toast.success('Password reset successfully!');
					// Redirect to login or home page
					window.location.href = '/';
				}
			})
			.catch((err) => {
				isLoading = false;
				console.error('Unexpected error:', err);
				toast.error('An unexpected error occurred. Please try again.');
			});
	}
</script>

<svelte:head>
	<title>Reset Password - Eko</title>
	<meta name="description" content="Create a new password for your Eko account" />
</svelte:head>

<Toaster richColors  />
<div class="min-h-screen bg-gradient-to-br from-background to-muted/50 flex items-center justify-center p-4 sm:p-4">
	<div class="w-full max-w-md">
		<Card class="sm:shadow-2xl sm:border-0 sm:bg-card/95 sm:backdrop-blur-sm border-0 shadow-none bg-transparent">
			{#if data.hasValidToken}
				<!-- Valid token - show password reset form -->
				<CardHeader class="text-center space-y-4 pb-8 px-0 sm:px-6">
					<div class="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
						<Lock class="w-6 h-6 text-primary" />
					</div>
					<div class="space-y-2">
						<CardTitle class="text-2xl font-bold">Reset Password</CardTitle>
						<CardDescription class="text-muted-foreground">
							Create a new secure password for your account
						</CardDescription>
					</div>
				</CardHeader>
				
				<CardContent class="space-y-6 px-0 sm:px-6">
					<form on:submit={handleSubmit} class="space-y-4">
						<div class="space-y-2">
							<Label for="password" class="text-sm font-medium">New Password</Label>
							<div class="relative">
								<Input
									id="password"
									type={showPassword ? "text" : "password"}
									bind:value={password}
									placeholder="Enter your new password"
									class="pr-10"
									required
									minlength={8}
								/>
								<button
									type="button"
									on:click={togglePasswordVisibility}
									class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
								>
									{#if showPassword}
										<EyeOff class="w-4 h-4" />
									{:else}
										<Eye class="w-4 h-4" />
									{/if}
								</button>
							</div>
						</div>
						
						<div class="space-y-2">
							<Label for="confirm-password" class="text-sm font-medium">Confirm Password</Label>
							<div class="relative">
								<Input
									id="confirm-password"
									type={showConfirmPassword ? "text" : "password"}
									bind:value={confirmPassword}
									placeholder="Confirm your new password"
									class="pr-10"
									required
									minlength={8}
								/>
								<button
									type="button"
									on:click={toggleConfirmPasswordVisibility}
									class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
								>
									{#if showConfirmPassword}
										<EyeOff class="w-4 h-4" />
									{:else}
										<Eye class="w-4 h-4" />
									{/if}
								</button>
							</div>
						</div>
						
						<div class="space-y-3 pt-2">
							<div class="text-xs text-muted-foreground space-y-1">
								<p>Password requirements:</p>
								<ul class="list-disc list-inside space-y-0.5 ml-2">
									<li class:text-green-600={password.length >= 8}>At least 8 characters</li>
									<li class:text-green-600={password !== confirmPassword ? false : password.length > 0}>Passwords match</li>
								</ul>
							</div>
							
							<Button 
								type="submit" 
								class="w-full" 
								disabled={isLoading || password !== confirmPassword || password.length < 8}
							>
								{#if isLoading}
									<div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
									Resetting Password...
								{:else}
									Reset Password
								{/if}
							</Button>
						</div>
					</form>
					
					<div class="text-center pt-4 border-t">
						<a 
							href="/auth" 
							class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline"
						>
							<ArrowLeft class="w-4 h-4" />
							Back to Login
						</a>
					</div>
				</CardContent>
			{:else}
				<!-- Invalid or missing token - show error screen -->
				<CardHeader class="text-center space-y-4 pb-8 px-0 sm:px-6">
					<div class="mx-auto w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
						<AlertCircle class="w-6 h-6 text-destructive" />
					</div>
					<div class="space-y-2">
						<CardTitle class="text-2xl font-bold text-destructive">Invalid Reset Link</CardTitle>
						<CardDescription class="text-muted-foreground">
							{data.error || 'The password reset link is invalid or has expired.'}
						</CardDescription>
					</div>
				</CardHeader>
				
				<CardContent class="space-y-6 px-0 sm:px-6">
					<div class="text-center space-y-4">
						<p class="text-sm text-muted-foreground">
							Please request a new password reset link to continue.
						</p>
						<!-- <Label for="email" class="text-sm font-medium">Email</Label> -->
						<Input
							id="email"
							type="email"
							bind:value={email}
							placeholder="Enter your email"
						/>  
						<div class="space-y-3">
							<Button 
								class="w-full"
								onclick={sendNewResetLink}
                                disabled={isLoading || !email}
							>
								Request New Reset Link
							</Button>
							
							<div class="text-center">
								<a 
									href="/" 
									class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover:underline"
								>
									<ArrowLeft class="w-4 h-4" />
									Cancel
								</a>
							</div>
						</div>
					</div>
				</CardContent>
			{/if}
		</Card>
	</div>
</div>
